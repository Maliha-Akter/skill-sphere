import { getCard } from '@/lib/AllFunction';
import Image from 'next/image';
import React from 'react';
import { GoChecklist } from 'react-icons/go';
import { ImPointRight } from 'react-icons/im';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';

const CourseDetailsPage = async ({ params }) => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        return (
            <div className="text-center py-36">
                <h2 className="text-2xl font-bold text-red-500">
                    Access Denied
                </h2>
                <p className="text-gray-600 mt-2">
                    Please log in to view course details.
                </p>
            </div>
        );
    }

    const { id } = await params;

    const courses = await getCard();
    const course = courses.find(
        (expected) => expected.id === parseInt(id)
    );

    if (!course) {
        return (
            <div className="text-center py-36">
                <h2 className="text-2xl font-bold text-red-500">
                    Course Not Found
                </h2>
            </div>
        );
    }

    const {
        title,
        instructor,
        duration,
        rating,
        level,
        price,
        description,
        courseContent,
        lastUpdatedDate,
        requirements,
        image,
    } = course;

    return (
        <div className="container mx-auto py-10 px-4 md:px-10 lg:px-20">

            <div className="bg-transparent rounded-2xl shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 lg:gap-8 gap-3 p-8 max-w-md mx-auto lg:max-w-none">

                    <Image
                        src={image}
                        alt={title}
                        width={600}
                        height={600}
                        className="w-full rounded-2xl object-cover"
                    />

                    <div className="lg:text-left text-center">
                        <h1 className="text-2xl font-bold text-purple-900">
                            {title}
                        </h1>

                        <p className="mt-4 text-gray-600">
                            {description}
                        </p>

                        <div className="mt-6 space-y-2">
                            <p><strong>Instructor:</strong> {instructor}</p>
                            <p><strong>Duration:</strong> {duration}</p>
                            <p><strong>Level:</strong> {level}</p>
                            <p><strong>Rating:</strong> ⭐ {rating}</p>
                            <p><strong>Last Updated:</strong> {lastUpdatedDate}</p>
                        </div>

                        <h2 className="text-4xl font-bold text-purple-900 mt-8">
                            {price}
                        </h2>

                        <button className="btn bg-purple-900 text-white mt-4">
                            Enroll Now
                        </button>
                    </div>

                </div>
            </div>

            {/* Course Content */}
            <div className="bg-transparent rounded-2xl shadow-lg p-8 mt-8">
                <h2 className="text-3xl font-bold mb-6">
                    Course Content
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                    {courseContent?.map((item, index) => (
                        <div
                            key={index}
                            className="p-4 bg-purple-50 rounded-xl flex items-center gap-3"
                        >
                            <ImPointRight className="text-orange-500" />
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* Requirements */}
            <div className="bg-transparent rounded-2xl shadow-lg p-8 mt-8">
                <h2 className="text-3xl font-bold mb-6">
                    Requirements
                </h2>

                <div className="space-y-3">
                    {requirements?.map((item, index) => (
                        <div
                            key={index}
                            className="p-4 bg-purple-50 rounded-xl flex items-center gap-3"
                        >
                            <GoChecklist className="text-orange-500" />
                            {item}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default CourseDetailsPage;