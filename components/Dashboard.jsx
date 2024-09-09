import { ObjectId } from "mongodb";
import { getCollection } from "../lib/db";
import Haiku from "./Haiku";

async function getHaikus(id) {
    const collection = await getCollection("haikus");
    const results = await collection
        .find({ author: ObjectId.createFromHexString(id) })
        .sort({ _id: -1 })
        .toArray();

    const haikus = results.map((haiku) => {
        return {
            ...haiku,
            _id: haiku._id.toString(),
            author: haiku.author.toString(),
        };
    });

    return haikus;
}

export default async function Dashboard(props) {
    const haikus = await getHaikus(props.user._id);

    return (
        <div>
            <h2 className="text-center text-2xl text-gray-600 mb-5">
                Your Haikus
            </h2>

            {!haikus.length && (
                <p className="text-center italic text-gray-400">
                    No haikus to display.
                </p>
            )}

            {haikus.map((haiku, index) => (
                <Haiku key={index} haiku={haiku} />
            ))}
        </div>
    );
}
