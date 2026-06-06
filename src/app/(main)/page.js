import Banner from "@/components/homepage/Banner";
import PopularCourses from "@/components/homepage/PopularCourses";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
      <Banner></Banner>
      <PopularCourses></PopularCourses>
    </div>
  );
}
