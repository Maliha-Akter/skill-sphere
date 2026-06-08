"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const UpdateProfilePage = () => {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleUpdateFunc = async (data) => {
        const result = await authClient.updateUser({
            name: data.displayName,
            image: data.photoUrl,
        });

        if (result.error) {
            toast.error(result.error.message);
            return;
        }

        toast.success("Profile updated successfully!");
        router.push("/my-profile");
        router.refresh();
    };

    if (isPending) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <span className="loading loading-spinner loading-lg text-purple-900"></span>
            </div>
        );
    }

    if (!session) {
        return (
            <div className="text-center py-36">
                <h2 className="text-2xl font-bold text-red-500">
                    Access Denied
                </h2>
                <p className="text-gray-600 mt-2">
                    Log back in to modify this profile.
                </p>
            </div>
        );
    }

    return (
        <div className="container mx-auto min-h-[70vh] flex justify-center items-center px-4 py-8">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

                <h1 className="text-3xl font-bold text-center text-purple-900">
                    Update Profile
                </h1>

                <div className="divider my-5"></div>

                <form
                    className="space-y-4"
                    onSubmit={handleSubmit((handleUpdateFunc))}
                >
                    {/* Name */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">
                            Full Name
                        </legend>

                        <input
                            type="text"
                            defaultValue={session?.user?.name}
                            {...register("displayName", {
                                required: "Name Field is required",
                            })}
                            className="input input-bordered w-full"
                            placeholder="Enter your name"
                        />

                        {errors.displayName && (
                            <p className="text-red-500">
                                {errors.displayName.message}
                            </p>
                        )}
                    </fieldset>

                    {/* Photo update */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">
                            Photo URL
                        </legend>

                        <input
                            type="text"
                            defaultValue={session?.user?.image || ""}
                            {...register("photoUrl", {
                                required: "Photo URL is required",
                            })}
                            className="input input-bordered w-full"
                            placeholder="Enter photo URL"
                        />

                        {errors.photoUrl && (
                            <p className="text-red-500">
                                {errors.photoUrl.message}
                            </p>
                        )}
                    </fieldset>

                    <div className="flex gap-3 pt-2">
                        <button
                            type="button"
                            onClick={() => router.push("/my-profile")}
                            className="btn btn-outline w-1/2"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="btn bg-purple-900 hover:bg-purple-800 text-white border-none w-1/2"
                        >
                            Update
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default UpdateProfilePage;