"use client"
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"; 

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isShowPassword, setShowPassword] = useState(false);

    const handleLoginFunc = async(data) => {
        console.log(data);
        const { email, password } = data;
        const { data: res, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: "/",
        });
        console.log(res, error);
    };

    // Design layout handler for Google social auth interaction
    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: 'google',
            callbackURL: '/'
        });
    };

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
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </fieldset>

                    {/* Password */}
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend text-base font-semibold">
                            Password
                        </legend>
                        <div className="relative w-full">
                            <input
                                type={isShowPassword ? "text" : "password"}
                                {...register("password", { required: "Password Field is required" })}
                                className="input input-bordered w-full pr-10"
                                placeholder="Enter your password"
                            />
                            <span 
                                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-purple-900 z-10" 
                                onClick={() => setShowPassword(!isShowPassword)}
                            >
                                {isShowPassword ? <FaEye size={16} /> : <FaEyeSlash size={16} />}
                            </span>
                        </div>
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </fieldset>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="btn w-full bg-purple-900 hover:bg-purple-800 text-white border-none mt-2"
                    >
                        Login
                    </button>
                </form>

                {/* --- GOOGLE INTERACTION DIVIDER SECTION --- */}
                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink mx-4 text-gray-400 text-sm font-medium">or continue with</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                </div>

                {/* Social Login Button */}
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="btn w-full btn-outline border-gray-300 hover:bg-gray-50 text-gray-700 normal-case flex items-center justify-center gap-3 rounded-lg font-medium transition-colors"
                >
                    <FcGoogle size={22} />
                    <span>Sign in with Google</span>
                </button>

                {/* Registration */}
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