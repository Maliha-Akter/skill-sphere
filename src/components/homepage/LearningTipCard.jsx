import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

const LearningTipCard = ({tip}) => {
    return (
        <div className="bg-white/70 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 border border-orange-100">
            
            <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <FaLightbulb className="text-orange-500 text-2xl" />
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-3">
                {tip.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
                {tip.description}
            </p>

        </div>
    );
};

export default LearningTipCard;