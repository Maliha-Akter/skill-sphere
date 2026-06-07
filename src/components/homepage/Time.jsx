import { getTime } from '@/lib/AllFunction';
import React from 'react';
import TimeCard from './TimeCard';

const Time = async({}) => {
    const tips = await getTime();
    return (
        
        <div className="container mx-auto py-16">
                    <h2 className="text-4xl font-bold text-center mb-10 text-sky-600">
                        Time Management Tips
                    </h2>
        
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-2 px-10">
                        {tips.map((tip) => (
                            <TimeCard
                                key={tip.id}
                                tip={tip}
                            />
                        ))}
                    </div>
                </div>
    );
};

export default Time;