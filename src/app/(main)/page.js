import Banner from "@/components/homepage/Banner";
import LearningTips from "@/components/homepage/LearningTips";
import NewReleases from "@/components/homepage/NewReleases";
import PopularCourses from "@/components/homepage/PopularCourses";
import Time from "@/components/homepage/Time";
import TopInstructor from "@/components/homepage/TopInstructor";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
      <Banner></Banner>
      <PopularCourses></PopularCourses>
      <NewReleases></NewReleases>
      <LearningTips></LearningTips>
      <Time></Time>
      <TopInstructor></TopInstructor>
    </div>
  );
}
