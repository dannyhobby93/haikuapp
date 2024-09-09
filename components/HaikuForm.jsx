"use client";

import { createHaiku, updateHaiku } from "../actions/haikuController";
import { useFormState, useFormStatus } from "react-dom";

export default function HaikuForm(props) {
    let action = props.action === "create" ? createHaiku : updateHaiku;

    const [formState, formAction] = useFormState(action, {});

    return (
        <form action={formAction} className="max-w-xs mx-auto">
            <div className="mb-3">
                <input
                    autoComplete="off"
                    type="text"
                    name="line1"
                    defaultValue={props.haiku?.line1}
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
                    defaultValue={props.haiku?.line2}
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
                    defaultValue={props.haiku?.line3}
                    placeholder="Third Line"
                    className="input input-bordered w-full max-w-xs"
                />
                {formState.errors?.line3 && (
                    <p className="text-red-500 text-sm mt-1">
                        <span>{formState.errors.line3}</span>
                    </p>
                )}
            </div>
            <input
                type="hidden"
                name="_id"
                defaultValue={props.haiku?._id.toString()}
            />
            {(props.action === "update" && (
                <button className="btn btn-primary w-full">Update</button>
            )) || <button className="btn btn-primary w-full">Create</button>}
        </form>
    );
}
