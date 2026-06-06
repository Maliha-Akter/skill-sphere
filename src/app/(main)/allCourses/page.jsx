import AllCourseCard from '@/components/homepage/AllCourseCard';
import { getCard } from '@/lib/AllFunction';


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const AllCourses = async ({ }) => {
    await delay(3000); 

    const courses = await getCard();
    console.log(courses);

    return (
        <div className="container mx-auto py-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map(course => (
                    <AllCourseCard
                        key={course.id}
                        course={course}
                    ></AllCourseCard>
                ))}
            </div>
            {/* hello */}
        </div>
    );
};

export default AllCourses;