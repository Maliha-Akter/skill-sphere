import React from 'react';
import { FaStar } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

const ReleaseCard = ({ course }) => {
    const {
        id,
        image,
        title,
        instructor,
        rating,
        price,
        lastUpdatedDate,
    } = course;

    return (
        <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col bg-white border border-gray-100 relative">
            
            <div className="absolute top-4 left-4 z-10 bg-purple-900 text-white font-bold text-xs px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                <HiSparkles className="text-amber-400" />
                NEW
            </div>

            <figure className="overflow-hidden border-t-purple-900 border-t-8 bg-gray-50">
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover p-4 rounded-[32px]"
                    priority={true}
                />
            </figure>

            {/* Main Content Body */}
            <div className="p-5 flex flex-col flex-grow">
                
                {/* Header Information */}
                <div className="mb-3">
                    <h2 className="text-lg font-bold text-purple-900 line-clamp-2 min-h-[56px] leading-snug">
                        {title}
                    </h2>
                    <p className="text-gray-500 text-xs mt-1">
                        By <span className="font-medium text-gray-700">{instructor}</span>
                    </p>
                </div>

                {/* Ratings & Financial Metrics Section */}
                <div className='flex justify-between items-center mb-4 bg-gray-50 p-2.5 rounded-xl border border-gray-100'>
                    <div className="flex flex-col">
                        <span className="font-bold text-amber-600 text-xs">
                            Rating: {rating}
                        </span>
                        <div className="flex text-amber-400 mt-0.5">
                            <FaStar size={12} />
                            <FaStar size={12} />
                            <FaStar size={12} />
                            <FaStar size={12} />
                            <FaStar size={12} />
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-2xl font-extrabold text-slate-900">
                            {typeof price === 'number' ? `$${price}` : price}
                        </span>
                    </div>
                </div>

                {/* Informational Badges with Clean Inline Date Processing */}
                <div className="flex gap-2 mb-4 mt-auto">
                    <span className="badge bg-purple-50 text-purple-900 border-purple-200 text-xs py-2 font-medium">
                        Premium
                    </span>
                    <span className="badge bg-amber-50 text-amber-900 border-amber-200 text-xs py-2 font-medium">
                        Updated: {lastUpdatedDate ? format(new Date(lastUpdatedDate), "EEE, MMM dd, yyyy") : "Recently"}
                    </span>
                </div>

                {/* Action CTA Buttons */}
                <div className="flex gap-2 flex-col">
                    <Link href={`/courseDetails/${id}`} className="w-full">
                        <button className="btn bg-purple-900 hover:bg-purple-800 border-none w-full text-white rounded-xl min-h-10 h-10 text-sm font-medium normal-case">
                            Enroll Now
                        </button>
                    </Link>
                    <Link href={"/login"} className="w-full">
                        <button className="btn bg-transparent hover:bg-purple-50 border-2 border-purple-900 text-purple-900 w-full rounded-xl min-h-10 h-10 text-sm font-medium normal-case">
                            View Details
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ReleaseCard;