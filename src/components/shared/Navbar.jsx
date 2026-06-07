"use client"
import React, { useState } from 'react';
import { IoSchoolOutline } from 'react-icons/io5';
import NavLink from './NavLink';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import logo from '@/assets/user.png'
import { CiSearch, CiUser } from 'react-icons/ci';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    const { data: session, isPending } = authClient.useSession();

    // FIX: Use optional chaining here instead of destructuring to prevent crashes
    const user = session?.user;
    const image = user?.image;

    console.log(user);

    return (
        <div className="navbar shadow-sm container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-purple-900 gap-3">
                        <li><NavLink href={"/"}>Home</NavLink></li>
                        <li><NavLink href={"/allCourses"}>Courses</NavLink></li>
                        <li><NavLink href={"/my-profile"}>My Profile</NavLink></li>
                        {
                            user && <li><NavLink href={"/register"}>Register</NavLink></li>
                        }
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-xl md:text-2xl text-purple-900 flex items-center gap-1">
                    <IoSchoolOutline />SkillSphere
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-purple-900 font-semibold gap-3">
                    <li><NavLink href={"/"}>Home</NavLink></li>
                    <li><NavLink href={"/allCourses"}>Courses</NavLink></li>
                    <li><NavLink href={"/my-profile"}>My Profile</NavLink></li>
                    {
                        user && <li><NavLink href={"/register"}>Register</NavLink></li>
                    }
                </ul>
            </div>

            <div className="navbar-end gap-2">
                {pathname === "/allCourses" && (
                    <button
                        onClick={() => document.getElementById('search-input-field')?.focus()}
                        className="btn btn-ghost btn-circle text-purple-900"
                    >
                        <CiSearch size={24} className="font-bold" />
                    </button>
                )}
                {isPending ?
                    (<span className="loading loading-spinner loading-sm"></span>)
                    : user ? (
                        <div className='flex items-center gap-3'>
                            {image ? (
                                <div>
                                    {/* <h2>{user.name}</h2> */}
                                    <Image
                                        src={image}
                                        width={45}
                                        height={45}
                                        alt={user.name || "User profile"}
                                        className='rounded-full border-2 border-purple-900 p-0.5 object-cover aspect-square'
                                    />
                                </div>
                            ) : (
                                <CiUser className='text-purple-900 rounded-full border-2 border-purple-900 p-1' size={40} />
                            )}
                            <button
                                onClick={async () => await authClient.signOut()}
                                className='btn btn-outline border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white rounded-lg md:text-base text-xs'
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <button className='btn bg-purple-900 text-white rounded-lg md:text-base text-xs hover:bg-purple-800'>
                                <Link href={'/login'}>Login</Link>
                            </button>
                            <button className="btn bg-purple-900 text-white rounded-lg md:text-base text-xs hover:bg-purple-800">
                                <Link href={'/register'}>Register</Link>
                            </button>
                        </>
                    )}
            </div>
        </div>
    );
};

export default Navbar;