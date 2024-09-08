"use client";

import { useFormState, useFormStatus } from "react-dom";

import { createHaiku } from "../actions/haikuController";

export default function HaikuForm() {
    const [formState, formAction] = useFormState(createHaiku, {});

    return (
        <form action={formAction} className="max-w-xs mx-auto">
            <div className="mb-3">
                <input
                    autoComplete="off"
                    type="text"
                    name="line1"
                    placeholder="First Line"
                    className="input input-bordered w-full max-w-xs"
                />
                {formState.errors?.line1 && (
                    <p className="text-red-500 text-sm mt-1">
                        <span>{formState.errors.line1}</span>
                    </p>
                )}
            </div>
            <div className="mb-3">
                <input
                    autoComplete="off"
                    type="text"
                    name="line2"
                    placeholder="Second Line"
                    className="input input-bordered w-full max-w-xs"
                />
                {formState.errors?.line2 && (
                    <p className="text-red-500 text-sm mt-1">
                        <span>{formState.errors.line2}</span>
                    </p>
                )}
            </div>
            <div className="mb-3">
                <input
                    autoComplete="off"
                    type="text"
                    name="line3"
                    placeholder="Third Line"
                    className="input input-bordered w-full max-w-xs"
                />
                {formState.errors?.line3 && (
                    <p className="text-red-500 text-sm mt-1">
                        <span>{formState.errors.line3}</span>
                    </p>
                )}
            </div>
            <button className="btn btn-primary w-full">Create</button>
        </form>
    );
}
