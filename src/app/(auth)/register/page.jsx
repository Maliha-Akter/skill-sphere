"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const handleRegisterFunc = async (data) => {
        // console.log(data);
        const { email, name, photoURL, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photoURL,
            callbackURL: "/",
        });
        console.log(res, error);

        if (error) {
            alert(error.message);
        }
        if (res) {
            alert("Sign up successful!");
            router.push("/"); // This triggers the redirect to home
        }
    };
    const [isShowPassword, setShowPassword] = useState(false);
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
                    Register your account
                </h1>

                <div className="divider my-5"></div>
                
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="btn w-full btn-outline border-gray-300 hover:bg-gray-50 text-gray-700 normal-case flex items-center justify-center gap-3 rounded-lg font-medium transition-colors"
                >
                    <FcGoogle size={22} />
                    <span>Sign in with Google</span>
                </button>
                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink mx-4 text-gray-400 text-sm font-medium">or continue with</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                </div>

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
                            type={isShowPassword ? "text" : "password"}
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

                        <span className="relative -top-7 left-80 cursor-pointer" onClick={() => setShowPassword(!isShowPassword)}>
                            {
                                isShowPassword ? <FaEye size={15} ></FaEye> : <FaEyeSlash size={15}></FaEyeSlash>
                            }
                        </span>
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