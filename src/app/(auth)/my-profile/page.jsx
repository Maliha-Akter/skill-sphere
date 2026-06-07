"use client"; 
import React from 'react';
import { authClient } from "@/lib/auth-client";
import Link from 'next/link'; // Added Link for routing

const MyProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();

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
                <h2 className="text-2xl font-bold text-red-500">Access Denied</h2>
                <p className="text-gray-600 mt-2">Please log in to view your profile.</p>
            </div>
        );
    }

    const { name, email, image } = session?.user;

    return (
        <div className="container mx-auto max-w-lg px-4 py-12">
            <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 flex flex-col items-center text-center">

                <div className="avatar mb-4">
                    <div className="w-24 h-24 rounded-full ring ring-purple-900 overflow-hidden bg-purple-100 flex items-center justify-center">
                        {image ? (
                            <img src={image} alt={name} />
                        ) : (
                            <span className="text-3xl font-bold text-purple-900">
                                {name?.charAt(0).toUpperCase()}
                            </span>
                        )}
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-purple-900">{name}</h1>
                <p className="text-gray-500 mt-1 font-medium">{email}</p>

                {/* --- UPDATE INFORMATION --- */}
                <Link 
                    href="/my-profile/update" 
                    className="btn bg-purple-900 hover:bg-purple-800 text-white rounded-lg px-6 mt-4 normal-case transition-colors"
                >
                    Update Information
                </Link>

                <div className="divider my-6 w-full"></div>

                <div className="w-full text-left space-y-3 bg-gray-50 p-4 rounded-xl">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500 font-medium">Account Status</span>
                        <span className="badge badge-success text-white">Active</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500 font-medium">Session Verified</span>
                        <span className="text-gray-700 font-semibold">True</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyProfilePage;