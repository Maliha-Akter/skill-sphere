import React from 'react';
import InstructorCard from './InstructorCard';
import { getTech } from '@/lib/AllFunction';

const TopInstructor = async({}) => {
    const instructors = await getTech();
    return (
        <div className="container mx-auto py-16">
            <h2 className="text-4xl font-bold text-center mb-3">
                Top Instructors
            </h2>

            <p className="text-center text-gray-500 mb-10">
                Learn from experienced professionals and industry experts.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-2 px-10">
                {instructors.map((instructor) => (
                    <InstructorCard
                        key={instructor.id}
                        instructor={instructor}
                    />
                ))}
            </div>
        </div>
    );
};

export default TopInstructor;