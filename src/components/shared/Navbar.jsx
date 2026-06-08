"use client";

import React, { useEffect, useState } from "react";
import { IoSchoolOutline, IoMenuOutline } from "react-icons/io5";
import NavLink from "./NavLink";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { CiSearch, CiUser } from "react-icons/ci";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;
  const image = user?.image;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.reload();
  };

   if (!mounted) {
    return (
      <div className="navbar sticky top-0 z-50 bg-linear-to-r from-purple-200 to-pink-200 shadow-sm px-4 lg:px-8 py-3 min-h-[68px] mx-auto">
        <div className="navbar-start">
          <div className="text-xl text-purple-900 font-bold flex items-center gap-2 opacity-50">
            <IoSchoolOutline size={26} /> SkillSphere
          </div>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end">
          <span className="loading loading-spinner loading-sm text-purple-900"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="navbar sticky top-0 z-50 bg-linear-to-r from-purple-200 to-pink-200 shadow-sm px-4 lg:px-8 py-3 mx-auto transition-all duration-300">
      
      {/* LEFT SECTION: */}
      <div className="navbar-start">
        {/* drop down menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-purple-900 p-2 mr-1">
            <IoMenuOutline size={26} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-xl z-[60] mt-3 w-52 p-3 shadow-xl text-purple-900 gap-2 border border-purple-50"
          >
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/allCourses">Courses</NavLink></li>
            <li><NavLink href="/my-profile">My Profile</NavLink></li>
            <li><NavLink href="/register">Register</NavLink></li>
          
            {user && (
              <li className="border-t border-purple-50 ">
                <button 
                  onClick={handleLogout} 
                  className="text-red-600 hover:text-red-800 font-medium"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="btn btn-ghost text-xl lg:text-2xl font-bold text-purple-900 flex items-center gap-2 hover:bg-purple-100/50 rounded-xl transition-colors">
          <IoSchoolOutline size={26} />
          <span className="tracking-wide">SkillSphere</span>
        </Link>
      </div>

      {/* CENTER SECTION:  */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 text-purple-900 font-semibold px-1 items-center">
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/allCourses">Courses</NavLink></li>
          <li><NavLink href="/my-profile">My Profile</NavLink></li>
          {user && <li><NavLink href="/register">Register</NavLink></li>}
        </ul>
      </div>

      {/* RIGHT SECTION: */}
      <div className="navbar-end gap-3">

        {pathname === "/allCourses" && (
          <button
            onClick={() => document.getElementById("search-input-field")?.focus()}
            className="btn btn-ghost btn-circle text-purple-900 hover:bg-purple-100/60 transition-colors"
            title="Search courses"
          >
            <CiSearch size={24} className="stroke-[0.5]" />
          </button>
        )}

        {/* Auth Condition */}
        {isPending ? (
          <span className="loading loading-spinner loading-sm text-purple-900"></span>
        ) : user ? (
          <div className="flex items-center gap-3">
            <Link href="/my-profile" className="avatar hover:opacity-80 transition-opacity">
              {image ? (
                <div className="w-10 h-10 rounded-full border-2 border-purple-900 ring ring-white overflow-hidden">
                  <Image
                    src={image}
                    width={40}
                    height={40}
                    alt="user profile picture"
                    className="object-cover aspect-square"
                  />
                </div>
              ) : (
                <div className="w-10 h-10 text-purple-900 border-2 border-purple-900 rounded-full flex items-center justify-center bg-purple-50">
                  <CiUser size={24} />
                </div>
              )}
            </Link>

           <button
              onClick={handleLogout}
              className="hidden lg:flex btn btn-outline border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white rounded-xl transition-all font-medium normal-case px-4 btn-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            <Link 
              href="/login" 
              className="btn btn-sm md:btn-md bg-purple-900 text-white rounded-xl hover:bg-purple-800 border-none transition-all font-medium normal-case px-5 shadow-sm"
            >
              Login
            </Link>

            <Link 
              href="/register" 
              className="btn btn-sm md:btn-md bg-transparent text-purple-900 border-2 border-purple-900 rounded-xl hover:bg-purple-900 hover:text-white transition-all font-medium normal-case px-5 hidden sm:flex"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;