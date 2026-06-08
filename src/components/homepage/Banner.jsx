'use client';

import React from 'react';
import Image from 'next/image';
import education from '@/assets/edu.png';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/lib/auth-client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

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
    const { data: session } = authClient.useSession();

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: 'google',
            callbackURL: '/'
        });
    };

    return (
        <div className="hero container mx-auto mt-16">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-12 w-full">

                <Image
                    src={education}
                    height={400}
                    width={400}
                    alt="education"
                    className="max-w-sm mx-auto md:mx-0"
                />

                <div className="max-w-xl">

                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        speed={800}
                    >
                        {banners.map((banner) => (
                            <SwiperSlide key={banner.id}>
                                <div className="w-full">
                                    <h1 className="text-3xl font-bold">
                                        {banner.title}
                                    </h1>

                                    <p className="py-6 text-gray-600 whitespace-normal">
                                        {banner.description}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="flex gap-4 mt-4">
                        <Link
                            href={session ? "/allCourses" : "/login"}
                            className="btn bg-purple-900 text-white rounded-lg hover:bg-transparent hover:border-purple-900 hover:text-purple-900"
                        >
                            Start Learning
                        </Link>

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