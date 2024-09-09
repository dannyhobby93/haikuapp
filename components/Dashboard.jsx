import Link from "next/link";
import { ObjectId } from "mongodb";
import { deleteHaiku } from "../actions/haikuController";
import { getCollection } from "../lib/db";

async function getHaikus(id) {
    const collection = await getCollection("haikus");
    const results = await collection
        .find({ author: ObjectId.createFromHexString(id) })
        .sort({ _id: -1 })
        .toArray();

    return results;
}

export default async function Dashboard(props) {
    const haikus = await getHaikus(props.user._id);

    return (
        <div>
            <h2 className="text-center text-2xl text-gray-600 mb-5">
                Your Haikus
            </h2>

            {haikus.map((haiku, index) => (
                <div className="card bg-base-100 shadow-xl mb-5" key={index}>
                    <div className="card-body">
                        <h2 className="card-title">
                            {haiku.line1} {haiku.line2} {haiku.line3}
                        </h2>
                        <Link href={`/edit-haiku/${haiku._id.toString()}`}>
                            Edit
                        </Link>
                        <form action={deleteHaiku}>
                            <input
                                type="hidden"
                                name="_id"
                                defaultValue={haiku._id.toString()}
                            />
                            <button type="submit">Delete</button>
                        </form>
                    </div>
                </div>
            ))}
        </div>
    );
}
