'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import education from '@/assets/edu.png';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/lib/auth-client';

const banners = [
    {
        id: 1,
        title: "Upgrade Your Skills Today",
        description:
            "Build valuable skills with expert-led courses and take the next step toward your goals."
    },
    {
        id: 2,
        title: "Learn from Industry Experts",
        description:
            "Gain practical knowledge and real-world insights from experienced professionals."
    },
    {
        id: 3,
        title: "Master In-Demand Skills",
        description:
            "Explore Web Development, Design, Marketing, Data Science, and more."
    },
    {
        id: 4,
        title: "Learn Anytime, Anywhere",
        description:
            "Access your courses on any device and learn at your own pace."
    },
    {
        id: 5,
        title: "Invest in Your Future",
        description:
            "Develop new skills, boost your confidence, and unlock career opportunities."
    },
    {
        id: 6,
        title: "Your Learning Journey Starts Here",
        description:
            "Join a growing community of learners and start achieving your ambitions today."
    }
];

const Banner = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % banners.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: 'google',
            callbackURL: '/'
        });
    };

    return (
        <div className="hero container mx-auto mt-16">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">
                <Image
                    src={education}
                    height={400}
                    width={400}
                    alt="education"
                    className="max-w-sm"
                />

                <div>
                    <h1 className="text-3xl font-bold">
                        {banners[current].title}
                    </h1>

                    <p className="py-6 text-gray-600 max-w-xl">
                        {banners[current].description}
                    </p>

                    <div className='flex gap-4'>
                        <button className="btn bg-purple-900 text-white rounded-lg">
                            <Link href={"/allCourses"}>Start Learning</Link>
                        </button>
                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className="btn btn-outline border-purple-900 hover:bg-purple-900 hover:text-white text-gray-700 normal-case flex items-center justify-center gap-3 rounded-lg font-medium transition-colors"
                        >
                            <FcGoogle size={22} />
                            <span>Sign in with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;