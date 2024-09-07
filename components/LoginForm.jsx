"use client";

import { useFormState, useFormStatus } from "react-dom";

import { login } from "../actions/userController";

export default function LoginForm() {
    const [formState, formAction] = useFormState(login, {});

    return (
        <form action={formAction} className="max-w-xs mx-auto">
            <div className="mb-3">
                <input
                    autoComplete="off"
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="input input-bordered w-full max-w-xs"
                />
                {formState.errors?.username && (
                    <p className="text-red-500 text-sm mt-1">
                        <span>{formState.errors.username}</span>
                    </p>
                )}
            </div>
            <div className="mb-3">
                <input
                    autoComplete="off"
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs"
                />
                {formState.errors?.password && (
                    <p className="text-red-500 text-sm mt-1">
                        <span>{formState.errors.password}</span>
                    </p>
                )}
            </div>
            <button className="btn btn-primary w-full">Login</button>
        </form>
    );
}
