import { getCard } from '@/lib/AllFunction';
import React from 'react';
import AllCourseCard from './AllCourseCard';

const PopularCourses = async ({ }) => {
    const courses = await getCard();
    // console.log(courses);
    // Step 1: Sorting
    const sortedByRating = courses.toSorted((a, b) => b.rating - a.rating);
    // Step 2: Grabbing the top 3 using slice
    const topRatedCourses = sortedByRating.slice(0, 3);
    return (
        <div className="container mx-auto py-10 mt-4">
            <h2 className='font-bold text-3xl mb-4 text-purple-900 text-center'>Popular Courses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {topRatedCourses.map(course => (
                    <AllCourseCard
                        key={course.id}
                        course={course}
                    ></AllCourseCard>
                ))}
            </div>
        </div>
    );
};

export default PopularCourses;