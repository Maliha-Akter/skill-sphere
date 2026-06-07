import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import LearningTipCard from './LearningTipCard';
import { getStudy } from '@/lib/AllFunction';

const LearningTips = async({}) => {
    const tips = await getStudy();
    return (
        
        <div className="container mx-auto py-16 ">
                    <h2 className="text-4xl font-bold text-center mb-10 text-orange-400">
                        Learning Tips
                    </h2>
        
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-2 px-10">
                        {tips.map((tip) => (
                            <LearningTipCard
                                key={tip.id}
                                tip={tip}
                            />
                        ))}
                    </div>
                </div>
    );
};

export default LearningTips;