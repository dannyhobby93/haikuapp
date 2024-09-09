"use server";

import cloudinary from "cloudinary";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";
import { getCollection } from "../lib/db";
import { getUserFromCookie } from "../lib/getUser";

const cloudinaryConfig = cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

function isAlphaNumericWithBasic(s) {
    const regex = /^[a-zA-Z0-9 .,-]*$/;
    return regex.test(s);
}

async function haikuValidation(data, user) {
    const errors = {};

    const haiku = {
        line1: data.get("line1"),
        line2: data.get("line2"),
        line3: data.get("line3"),
        author: ObjectId.createFromHexString(user._id),
    };

    // For MongoDB
    if (typeof haiku.line1 != "string") haiku.line1 = "";
    if (typeof haiku.line2 != "string") haiku.line2 = "";
    if (typeof haiku.line3 != "string") haiku.line3 = "";

    haiku.line1 = haiku.line1.replace(/(\r\n|\n|\r)/g, " ");
    haiku.line2 = haiku.line2.replace(/(\r\n|\n|\r)/g, " ");
    haiku.line3 = haiku.line3.replace(/(\r\n|\n|\r)/g, " ");

    haiku.line1 = haiku.line1.trim();
    haiku.line2 = haiku.line2.trim();
    haiku.line3 = haiku.line3.trim();

    if (haiku.line1.length < 5 || haiku.line1.length > 25)
        errors.line1 = "Too few syllables; must be 5";

    if (haiku.line2.length < 7 || haiku.line2.length > 35)
        errors.line2 = "Too few syllables; must be 7";

    if (haiku.line3.length < 5 || haiku.line3.length > 25)
        errors.line3 = "Too few syllables; must be 5";

    if (!isAlphaNumericWithBasic(haiku.line1))
        errors.line1 = "Line 1 must be alphanumeric";

    if (!isAlphaNumericWithBasic(haiku.line2))
        errors.line2 = "Line 2 must be alphanumeric";

    if (!isAlphaNumericWithBasic(haiku.line3))
        errors.line3 = "Line 3 must be alphanumeric";

    if (!haiku.line1) errors.line1 = "Line 1 is required";
    if (!haiku.line2) errors.line2 = "Line 2 is required";
    if (!haiku.line3) errors.line3 = "Line 3 is required";

    // verify signature
    const expectedSignature = cloudinary.utils.api_sign_request(
        {
            public_id: data.get("public_id"),
            version: data.get("version"),
        },
        cloudinaryConfig.api_secret
    );
    if (expectedSignature === data.get("signature")) {
        haiku.photo = data.get("public_id");
    }

    return {
        errors,
        haiku,
    };
}

export const deleteHaiku = async function (formData) {
    const user = await getUserFromCookie();

    if (!user) {
        return redirect("/login");
    }

    const collection = await getCollection("haikus");
    const haikuId = formData.get("_id");
    const haiku = await collection.findOne({
        _id: ObjectId.createFromHexString(haikuId),
    });

    if (haiku.author.toString() !== user._id) {
        return redirect("/");
    }

    await collection.findOneAndDelete({
        _id: ObjectId.createFromHexString(haikuId),
    });

    return redirect("/");
};

export const updateHaiku = async function (prevState, formData) {
    let user = await getUserFromCookie();

    if (!user) {
        return redirect("/login");
    }

    const results = await haikuValidation(formData, user);

    if (Object.keys(results.errors).length > 0) {
        return {
            ...prevState,
            ...results,
        };
    }

    const collection = await getCollection("haikus");
    let haikuId = formData.get("haiku_id");

    if (typeof haikuId !== "string") haikuId = "";

    const haiku = await collection.findOne({
        _id: ObjectId.createFromHexString(haikuId),
    });

    if (haiku.author.toString() !== user._id) {
        return redirect("/");
    }

    await collection.findOneAndUpdate(
        { _id: ObjectId.createFromHexString(haikuId) },
        { $set: results.haiku }
    );

    return redirect("/");
};

export const createHaiku = async function (prevState, formData) {
    const user = await getUserFromCookie();

    if (!user) {
        return redirect("/login");
    }

    const results = await haikuValidation(formData, user);

    if (Object.keys(results.errors).length > 0) {
        return {
            ...prevState,
            ...results,
        };
    }

    const collection = await getCollection("haikus");
    const newHaiku = await collection.insertOne(results.haiku);

    return redirect("/");
};
