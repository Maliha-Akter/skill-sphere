import { getCard } from '@/lib/AllFunction';
import React from 'react';
import ReleaseCard from './Release';

const NewReleases = async () => {
    const courses = await getCard();
    
    const sortedByDate = courses.toSorted((a, b) => {
        return new Date(b.lastUpdatedDate).getTime() - new Date(a.lastUpdatedDate).getTime();
    });
    
    const topThreeNewest = sortedByDate.slice(0, 3);

    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-8">
                <h2 className='font-bold text-3xl text-purple-900 mb-2'>New Releases</h2>
                <p className="text-gray-500 text-sm">Freshly uploaded courses to upgrade your skillset</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-18 auto-rows-fr max-w-md mx-auto md:max-w-none">
                {topThreeNewest.map(course => (
                    <ReleaseCard
                        key={course.id}
                        course={course}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewReleases;