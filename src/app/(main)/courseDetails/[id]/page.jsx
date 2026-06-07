import { getCard } from '@/lib/AllFunction';
import Image from 'next/image';
import React from 'react';
import { GoChecklist } from 'react-icons/go';
import { ImPointRight } from 'react-icons/im';

const CourseDetailsPage = async({params}) => {
    const {id} = await params;
    console.log(id);

    const courses = await getCard();
    const course = courses.find((expected) => expected.id === parseInt(id));
    console.log(course);

    const {title,instructor,duration,rating,level,price,description,longDescription,courseContent,lastUpdatedDate,requirements,image,category}= course;

    return (
    <div className="container mx-auto py-10 px-4">

      <div className="bg-transparent rounded-2xl shadow-lg overflow-hidden ">
        <div className="grid lg:grid-cols-2 lg:gap-8 gap-3 p-8 auto-rows-fr max-w-md mx-auto lg:max-w-none">

          <Image
            src={image}
            alt={course.title}
            width={600}
            height={600}
            className="w-full rounded-2xl object-cover"
          />

          <div className='lg:text-left text-center'>
            <h1 className="text-2xl font-bold text-purple-900">
              {title}
            </h1>

            <p className="mt-4 text-gray-600">
              {description}
            </p>

            <div className="mt-6 space-y-2">
              <p><strong>Instructor:</strong> {instructor}</p>
              <p><strong>Duration:</strong> {duration}</p>
              <p><strong>Level:</strong> {level}</p>
              <p><strong>Rating:</strong> ⭐ {rating}</p>
              <p><strong>Last Updated:</strong> {lastUpdatedDate}</p>
            </div>

            <h2 className="text-4xl font-bold text-purple-900 mt-8">
              {price}
            </h2>

            <button className="btn bg-purple-900 text-white mt-4">
              Enroll Now
            </button>
          </div>

        </div>
      </div>

      {/* Course Content */}
      <div className="bg-transparent rounded-2xl shadow-lg p-8 mt-8">
        <h2 className="text-3xl font-bold mb-6">
          Course Content
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {courseContent?.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-purple-50 rounded-xl flex items-center gap-3"
            >
              <ImPointRight className='text-orange-500' /> {item}
            </div>
          ))}
        </div>
      </div>

      {/* Requirements */}
      <div className="bg-transparent rounded-2xl shadow-lg p-8 mt-8">
        <h2 className="text-3xl font-bold mb-6">
          Requirements
        </h2>

        <div className="space-y-3">
          {course.requirements?.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-purple-50 rounded-xl flex items-center gap-3"
            >
              <GoChecklist className='text-orange-500'/> {item}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CourseDetailsPage;