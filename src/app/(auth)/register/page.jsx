"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const handleRegisterFunc = (data) => {
        console.log(data);
    };

    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center px-4 py-8">

            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 md:p-10">

                <h1 className="text-3xl font-bold text-center text-purple-900">
                    Register your account
                </h1>

                <div className="divider my-5"></div>

                <form
                    className="space-y-4"
                    onSubmit={handleSubmit(handleRegisterFunc)}
                >

                    {/* Name */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-base font-semibold">
                            Your Name
                        </legend>

                        <input
                            type="text"
                            {...register("name", {
                                required: "Name Field is required"
                            })}
                            className="input input-bordered w-full"
                            placeholder="Enter your name"
                        />

                        {errors.name && (
                            <p className="text-red-500">
                                {errors.name.message}
                            </p>
                        )}
                    </fieldset>

                    {/* Photo URL */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-base font-semibold">
                            Photo URL
                        </legend>

                        <input
                            type="text"
                            {...register("photoURL", {
                                required: "Photo URL is required"
                            })}
                            className="input input-bordered w-full"
                            placeholder="Enter your photo URL"
                        />

                        {errors.photoURL && (
                            <p className="text-red-500">
                                {errors.photoURL.message}
                            </p>
                        )}
                    </fieldset>

                    {/* Email */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-base font-semibold">
                            Email Address
                        </legend>

                        <input
                            type="email"
                            {...register("email", {
                                required: "Email Field is required"
                            })}
                            className="input input-bordered w-full"
                            placeholder="Enter your email address"
                        />

                        {errors.email && (
                            <p className="text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </fieldset>

                    {/* Password */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-base font-semibold">
                            Password
                        </legend>

                        <input
                            type="password"
                            {...register("password", {
                                required: "Password Field is required",
                                minLength: {
                                    value: 6,
                                    message:
                                        "Password must be at least 6 characters"
                                }
                            })}
                            className="input input-bordered w-full"
                            placeholder="Enter your password"
                        />

                        {errors.password && (
                            <p className="text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </fieldset>

                    {/* Terms */}
                    <fieldset className="fieldset">
                        <label className="label cursor-pointer justify-start gap-3">
                            <input
                                type="checkbox"
                                {...register("terms", {
                                    required:
                                        "You must accept the Terms & Conditions"
                                })}
                                className="checkbox checkbox-sm"
                            />

                            <span className="label-text">
                                Accept Terms & Conditions
                            </span>
                        </label>

                        {errors.terms && (
                            <p className="text-red-500">
                                {errors.terms.message}
                            </p>
                        )}
                    </fieldset>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="btn w-full bg-purple-900 hover:bg-purple-800 text-white border-none"
                    >
                        Register
                    </button>

                </form>

                {/* Login */}
                <p className="text-center mt-8 text-gray-600">
                    Already Have An Account?{" "}
                    <Link
                        href="/login"
                        className="text-purple-700 font-semibold hover:underline"
                    >
                        Login
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default RegisterPage;