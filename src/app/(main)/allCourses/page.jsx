import AllCourseCard from '@/components/homepage/AllCourseCard';
import { getCard } from '@/lib/AllFunction';


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const AllCourses = async ({ }) => {
    await delay(1000); 
    const courses = await getCard();

    return (
        <div className="container mx-auto py-10 px-4"> {/* Added px-4 so cards don't touch mobile screen edges */}
            {/* 
               1. Removed the broken 'w-[300px] md: lg:'
               2. Added 'auto-rows-fr' to make all items in a row exactly the same height 
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr max-w-md mx-auto md:max-w-none">
                {courses.map(course => (
                    <AllCourseCard
                        key={course.id}
                        course={course}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllCourses;