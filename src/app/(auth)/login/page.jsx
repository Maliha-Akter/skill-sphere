"use client"
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
    const { register, handleSubmit ,formState:{errors}} = useForm();
    const handleLoginFunc = (data) => {
        // e.preventDefault();
        console.log(data);
        
    }
    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center px-4 py-8">

            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 md:p-10">

                <h1 className="text-3xl font-bold text-center text-purple-900">
                    Login your account
                </h1>

                <div className="divider my-5"></div>

                <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>

                    {/* Email */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-base font-semibold">
                            Email Address
                        </legend>

                        <input
                            type="email"
                            {...register("email", { required: "Email Field is required" })}
                            className="input input-bordered w-full"
                            placeholder="Enter your email address"
                        />
                        {
                            errors.email && <p className="text-red-500">{errors.email.message}</p>
                        }
                    </fieldset>

                    {/* Password */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-base font-semibold">
                            Password
                        </legend>

                        <input
                            type="password"
                            {...register("password", { required: "Password Field is required" })}
                            className="input input-bordered w-full"
                            placeholder="Enter your password"
                        />
                        {
                            errors.password && <p className="text-red-500">{errors.password.message}</p>
                        }
                    </fieldset>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="btn w-full bg-purple-900 hover:bg-purple-800 text-white border-none"
                    >
                        Login
                    </button>

                </form>

                {/* Registration  */}
                <p className="text-center mt-8 text-gray-600">
                    Don't Have An Account?{" "}
                    <Link
                        href={"/register"}
                        className="text-purple-700 font-semibold hover:underline"
                    >
                        Register
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default LoginPage;