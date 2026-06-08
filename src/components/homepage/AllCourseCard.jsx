"use client";

import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

const AllCourseCard = ({ course }) => {
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
    const { id, image, title, instructor, rating, price } = course;

    // 5
    const enrollHref = session 
        ? `/courseDetails/${id}` 
        : `/login?callbackUrl=${encodeURIComponent(`/courseDetails/${id}`)}`;
        
    const detailsHref = session 
        ? `/courseDetails/${id}` 
        : `/login?callbackUrl=${encodeURIComponent(currentFullPath)}`;

    return (
        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl h-full flex flex-col m-6">

            <figure className="rounded-2xl overflow-hidden border-t-purple-900 border-t-8">
                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={300}
                    className="w-full h-46 object-cover p-6 rounded-[40px]"
                />
            </figure>

            <div className="p-4 flex flex-col flex-1">

                <h2 className="text-[18px] font-bold text-purple-900">{title}</h2>
                <p className="text-gray-500 mt-2 text-xs">{instructor}</p>

                <div className='flex justify-between items-center'>
                    <div className="flex items-center gap-2 mt-3">
                        <div>
                            <span className="font-bold text-amber-600">{rating}</span>
                            <div className="flex text-amber-400">
                                <FaStar size={14} /><FaStar size={14} /><FaStar size={14} /><FaStar size={14} /><FaStar size={14} />
                            </div>
                        </div>
                    </div>
                    <div className="mt-auto flex items-center gap-3">
                        <span className="text-3xl font-bold text-slate-900">{price}</span>
                    </div>
                </div>

                <div className="flex gap-3 mt-auto">
                    <span className="badge badge-primary badge-lg">Premium</span>
                    <span className="badge bg-green-300 badge-lg">Bestseller</span>
                </div>

                <div className="mt-auto flex gap-3 flex-col pt-4">
                    
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

export default AllCourseCard;