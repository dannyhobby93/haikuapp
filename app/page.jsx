import RegisterForm from "../components/RegisterForm";
import { getUserFromCookie } from "../lib/getUser";

export default async function Page() {
    const user = await getUserFromCookie();

    return (
        <>
            {(!user && (
                <div>
                    <p className="text-center text-2xl text-gray-600 mb-6">
                        Don't have an account? <strong>Create one</strong>
                    </p>
                    <RegisterForm />
                </div>
            )) || (
                <div>
                    <p>You are logged in as {user.username}</p>
                </div>
            )}
        </>
    );
}
