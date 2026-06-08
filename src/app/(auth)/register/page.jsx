import RegisterForm from "@/components/homepage/RegistrationForm";
import React, { Suspense } from "react";

const RegisterPage = () => {
    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center px-4 py-8">
            <Suspense fallback={
                <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center justify-center min-h-[450px]">
                    <span className="loading loading-spinner loading-lg text-purple-900"></span>
                    <p className="text-purple-900 mt-4 font-medium">Loading form layout...</p>
                </div>
            }>
                <RegisterForm/>
            </Suspense>
        </div>
    );
};

export default RegisterPage;