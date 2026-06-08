"use client";

import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { authClient } from '@/lib/auth-client';
import { usePathname, useSearchParams } from 'next/navigation';


const ReleaseCard = ({ course }) => {
    // 1
    const [mounted, setMounted] = useState(false);
    const { data: session } = authClient.useSession();

    // 2
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        setMounted(true);
    }, []);

    //3
    const queryString = searchParams.toString();
    const currentFullPath = queryString ? `${pathname}?${queryString}` : pathname;

    // 4. 
    const {
        id,
        image,
        title,
        instructor,
        rating,
        price,
        lastUpdatedDate,
    } = course;

    // 5
    const enrollHref = session
        ? `/courseDetails/${id}`
        : `/login?callbackUrl=${encodeURIComponent(`/courseDetails/${id}`)}`;

    const detailsHref = session
        ? `/courseDetails/${id}`
        : `/login?callbackUrl=${encodeURIComponent(currentFullPath)}`;



    return (
        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl h-full flex flex-col bg-transparent border border-gray-100 relative">

            <div className="absolute top-4 left-4 z-10 bg-purple-900 text-white font-bold text-xs px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                <HiSparkles className="text-amber-400" />
                NEW
            </div>

            <figure className="rounded-2xl overflow-hidden border-t-purple-900 border-t-8">
                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={300}
                    className="w-full h-46 object-cover p-6 rounded-[40px]"
                />
            </figure>

            <div className="p-4 flex flex-col grow">

                <div className="mb-3">
                    <h2 className="text-lg font-bold text-purple-900 line-clamp-2 min-h-14 leading-snug">
                        {title}
                    </h2>

                    <p className="text-gray-500 text-xs mt-1">
                        By <span className="font-medium text-gray-700">{instructor}</span>
                    </p>
                </div>

                <div className='flex justify-between items-center mb-4 bg-orange-100 p-2.5 rounded-xl border border-gray-100'>
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

                <div className="flex gap-2 mb-4 mt-auto">
                    <span className="badge bg-purple-100 text-purple-900 border-purple-200 text-xs py-2 font-medium">
                        Premium
                    </span>

                    <span className="badge bg-amber-50 text-amber-900 border-amber-200 text-xs py-4 font-semibold">
                        Updated: {lastUpdatedDate ? format(new Date(lastUpdatedDate), "EEE, MMM dd, yyyy") : "Recently"}
                    </span>
                </div>

                <div className="flex gap-2 flex-col">
                     <Link 
                        href={mounted ? enrollHref : "#"}
                        className="btn bg-purple-900 w-full text-white rounded-lg hover:bg-transparent hover:border-purple-900 hover:text-purple-900 flex items-center justify-center"
                    >
                        Enroll Now
                    </Link>

                    <Link 
                        href={mounted ? detailsHref : "#"}
                        className="btn bg-transparent w-full border-2 border-purple-900 rounded-lg btn-outline hover:bg-purple-900 hover:text-white hover:border-white flex items-center justify-center"
                    >
                        View Details
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ReleaseCard;