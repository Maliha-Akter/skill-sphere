"use client"
import React, { useState } from 'react';
import { IoSchoolOutline } from 'react-icons/io5';
import NavLink from './NavLink';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="navbar shadow-sm container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-purple-900">
                        <li><NavLink href={"/"}>Home</NavLink></li>
                        <li><NavLink href={"/courses"}>Courses</NavLink></li>
                        <li><NavLink href={"/my-profile"}>My Profile</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl text-purple-900"> <IoSchoolOutline />SkillSphere</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-purple-900 font-semibold">
                    <li><NavLink href={"/"}>Home</NavLink></li>
                        <li><NavLink href={"/courses"}>Courses</NavLink></li>
                        <li><NavLink href={"/my-profile"}>My Profile</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end gap-2 ">
                <a className="btn bg-purple-900 text-white rounded-lg">Login</a>
                <a className="btn bg-purple-900 text-white rounded-lg">Register</a>
            </div>
        </div>
    );
};

export default Navbar;