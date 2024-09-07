import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function getUserFromCookie() {
    const cookieStore = cookies().get("haikuapp")?.value;

    if (cookieStore) {
        try {
            const decoded = jwt.verify(cookieStore, process.env.JWT_SECRET);
            return decoded;
        } catch (e) {
            return null;
        }
    } else {
        return null;
    }
}
