import AllCourseCard from '@/components/homepage/AllCourseCard';
import { getCard } from '@/lib/AllFunction';
import Form from 'next/form'; // Safe Next.js fast form utility

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const AllCourses = async ({ searchParams }) => {
    await delay(1000); 
    const courses = await getCard();

    // 1. we will unpack what the user typed into the search bar
    const resolvedParams = await searchParams;
    const searchQuery = resolvedParams?.search || "";

    // 2. Filtering 
    const filteredCourses = courses.filter((course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto py-10 px-4">
            
            {/* 3. SEARCH BAR SECTION */}
            <div className="max-w-md mx-auto mb-10">
                <Form action="/allCourses" className="relative flex items-center">
                    <input
                        id="search-input-field"
                        type="text"
                        name="search"
                        defaultValue={searchQuery}
                        placeholder="Search your Liking course..."
                        className="input input-bordered w-full pr-12 rounded-xl focus:border-purple-900"
                    />
                    <button 
                        type="submit" 
                        className="absolute right-2 btn btn-sm bg-purple-900 hover:bg-purple-800 text-white border-none rounded-lg"
                    >
                        Search
                    </button>
                </Form>
                {searchQuery && (
                    <p className="text-sm text-gray-500 mt-2 pl-1">
                        Showing results for: <span className="font-semibold text-purple-900">"{searchQuery}"</span>
                    </p>
                )}
            </div>

            {/* 4. COURSES DISPLAY */}
            {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr max-w-md mx-auto md:max-w-none  ">
                    {filteredCourses.map(course => (
                        <AllCourseCard
                            key={course.id}
                            course={course}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <h3 className="text-xl font-bold text-gray-600">No courses found!</h3>
                    <p className="text-gray-400 mt-1">Try searching for something else.</p>
                </div>
            )}
        </div>
    );
};

export default AllCourses;