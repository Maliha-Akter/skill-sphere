import Banner from "@/components/homepage/Banner";
import LearningTips from "@/components/homepage/LearningTips";
import NewReleases from "@/components/homepage/NewReleases";
import PopularCourses from "@/components/homepage/PopularCourses";
import Time from "@/components/homepage/Time";
import TopInstructor from "@/components/homepage/TopInstructor";
import Image from "next/image";
import React, { Suspense } from "react"; 

// 1. Move all sections into a combined home content component
const HomeContent = () => {
  return (
    <>
      <Banner />
      <PopularCourses />
      <NewReleases />
      <LearningTips />
      <Time />
      <TopInstructor />
    </>
  );
};

// 2. Main export wraps EVERYTHING in Suspense to stop the Vercel build crash entirely
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black w-full">
      <Suspense fallback={
        <div className="w-full min-h-[80vh] flex flex-col items-center justify-center bg-white dark:bg-black">
          <span className="loading loading-spinner loading-lg text-purple-900"></span>
          <p className="text-purple-900 mt-4 font-medium animate-pulse">Loading SkillSphere...</p>
        </div>
      }>
        <HomeContent />
      </Suspense>
    </div>
  );
}