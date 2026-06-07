import Image from "next/image";

const InstructorCard = ({instructor}) => {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center">

            <Image
                src={instructor.image}
                alt={instructor.name}
                width={120}
                height={120}
                className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-orange-100"
            />

            <h3 className="mt-4 text-xl font-bold">
                {instructor.name}
            </h3>

            <p className="text-orange-500 font-medium mt-1">
                {instructor.speciality}
            </p>

            <p className="text-gray-500 mt-3">
                {instructor.experience}
            </p>

            <p className="text-gray-600 text-sm">
                {instructor.students}
            </p>
        </div>
    );
};

export default InstructorCard;