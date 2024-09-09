import HaikuForm from "@/components/HaikuForm";
import { getUserFromCookie } from "@/lib/getUser";
import { redirect } from "next/navigation";

export default async function CreateHaiku() {
    const user = await getUserFromCookie();

    if (!user) {
        return redirect("/login");
    }

    return (
        <>
            <h2 className="text-2xl text-center text-gray-600 mb-5">
                Create Haiku
            </h2>
            <HaikuForm action="create" />
        </>
    );
}
