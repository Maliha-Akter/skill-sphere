import React from 'react';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const AllCourseCard = ({ course }) => {
    const {
        image,
        title,
        instructor,
        rating,
        price,
    } = course;

    return (
        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl  h-full flex flex-col m-6">

            <figure className="rounded-2xl overflow-hidden border-t-purple-900 border-t-8">
                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={300}
                    className="w-full h-46 object-cover p-6 rounded-[40px] "
                />
            </figure>

            {/* Card Body : Main Part */}
            <div className="p-4 flex flex-col flex-1">

                <h2 className="text-[18px] font-bold text-purple-900 ">
                    {title}
                </h2>
                <p className="text-gray-500 mt-2 text-xs">
                    {instructor}
                </p>
                <div className='flex justify-between items-center'>
                    <div className="flex items-center gap-2 mt-3">
                        <div>
                            <span className="font-bold text-amber-600">
                                {rating}
                            </span>

                            <div className="flex text-amber-400">
                                <FaStar size={14} />
                                <FaStar size={14} />
                                <FaStar size={14} />
                                <FaStar size={14} />
                                <FaStar size={14} />
                            </div>
                        </div>
                    </div>
                    <div className="mt-auto flex items-center gap-3">
                        <span className="text-3xl font-bold text-slate-900">
                            {price}
                        </span>
                    </div>
                </div>



                <div className="flex gap-3 mt-auto">
                    <span className="badge badge-primary badge-lg">
                        Premium
                    </span>

                    <span className="badge bg-green-300 badge-lg">
                        Bestseller
                    </span>
                </div>

                <div className="mt-auto flex gap-3 flex-col">
                    <button className="btn bg-purple-900 w-full text-white rounded-lg">
                        Enroll Now
                    </button>
                    <button className="btn bg-transparent w-full border-2 border-purple-900 rounded-lg">
                        View Details
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AllCourseCard;