'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import education from '@/assets/edu.png';

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
                    <h1 className="text-5xl font-bold">
                        {banners[current].title}
                    </h1>

                    <p className="py-6 text-gray-600 max-w-xl">
                        {banners[current].description}
                    </p>

                    <button className="btn bg-purple-900 text-white rounded-lg">
                        Start Learning
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;