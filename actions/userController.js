"use server";

import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { getCollection } from "../lib/db";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

function isAlphaNumeric(s) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(s);
}

export const logout = async function () {
    cookies().delete("haikuapp");
    redirect("/");
};

export const login = async function (prevState, formData) {
    const errors = {};
    const user = {
        username: formData.get("username"),
        password: formData.get("password"),
    };

    // For MongoDB
    if (typeof user.username != "string") user.username = "";
    if (typeof user.password != "string") user.password = "";

    user.username = user.username.trim();
    user.password = user.password.trim();

    // Username
    if (!user.username) errors.username = "Username is required";
    if (!user.password) errors.password = "Password is required";

    if (Object.keys(errors).length > 0) {
        return {
            ...prevState,
            errors,
        };
    }

    const collection = await getCollection("users");
    const foundUser = await collection.findOne({ username: user.username });

    if (!foundUser) {
        errors.username = "Invalid login credentials";
        return {
            ...prevState,
            errors,
        };
    }

    const match = await bcrypt.compare(user.password, foundUser.password);

    if (!match) {
        errors.password = "Invalid login credentials";
        return {
            ...prevState,
            errors,
        };
    }

    const token = jwt.sign(
        {
            username: foundUser.username,
        },
        process.env.JWT_SECRET
    );

    cookies().set("haikuapp", token);
    redirect("/");
};

export const register = async function (prevState, formData) {
    const errors = {};
    const user = {
        username: formData.get("username"),
        password: formData.get("password"),
    };

    // For MongoDB
    if (typeof user.username != "string") user.username = "";
    if (typeof user.password != "string") user.password = "";

    user.username = user.username.trim();
    user.password = user.password.trim();

    // Username
    if (user.username.length < 3)
        errors.username = "Username must be at least 3 characters";
    if (user.username.length > 30)
        errors.username = "Username must be less than 30 characters";
    if (!isAlphaNumeric(user.username))
        errors.username = "Username can only contain letters and numbers";
    if (!user.username) errors.username = "Username is required";

    // Password
    if (user.password.length < 8)
        errors.password = "Password must be at least 8 characters";
    if (user.password.length > 50)
        errors.password = "Password must be less than 50 characters";
    if (!user.password) errors.password = "Password is required";

    // Check for errors
    if (errors.username || errors.password) {
        return {
            errors: errors,
            success: false,
        };
    }

    // hash password
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);

    // store new user in db
    const usersCollection = await getCollection("users");
    const result = await usersCollection.insertOne(user);

    // log user in by cookies
    const token = jwt.sign(
        {
            _id: result.insertedId.toString(),
            username: user.username,
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
        },
        process.env.JWT_SECRET
    );

    cookies().set("haikuapp", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 24,
        secure: true,
    });

    return {
        success: true,
    };
};
