import HaikuForm from "../../../components/HaikuForm";
import { ObjectId } from "mongodb";
import { getCollection } from "../../../lib/db";
import { getUserFromCookie } from "../../../lib/getUser";
import { redirect } from "next/navigation";

async function getDoc(id) {
    const collection = await getCollection("haikus");
    const result = await collection.findOne({
        _id: ObjectId.createFromHexString(id),
    });

    return result;
}

export default async function EditHaiku(props) {
    const user = await getUserFromCookie();

    if (!user) {
        return redirect("/login");
    }

    const doc = await getDoc(props.params.id);

    if (doc.author.toString() !== user._id) {
        return redirect("/");
    }

    return (
        <>
            <h2 className="text-2xl text-center text-gray-600 mb-5">
                Edit your Haiku
            </h2>
            <HaikuForm action="update" haiku={doc} />
        </>
    );
}
