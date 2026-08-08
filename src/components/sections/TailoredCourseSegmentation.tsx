"use client";

import Image from "next/image";

const courses = [
  {
    title: "Program Specific",
    description: "Certificate, Executive, Post Graduate Certificate",
    image: "/images/project-management-v2.webp",
  },
  {
    title: "Industry Specific",
    description: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    image: "/images/digital-transformation-v2.webp",
  },
  {
    title: "Topic Specific",
    description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    image: "/images/data-science-v2.webp",
  },
  {
    title: "Level Specific",
    description: "Senior Leadership, Mid-Career Professionals, Freshers",
    image: "/images/project-management-v2.webp",
  },
];

export default function CourseSegmentation() {
  return (
    <section className="w-full bg-white px-6 py-8 md:px-10 lg:px-16">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-[38px] font-semibold leading-tight text-[#111827] md:text-[36px]">
          Tailored <span className="text-[#2563EB]">Course Segmentation</span>
        </h2>

        <p className="mt-3 text-[17px] text-[#111827] md:text-[18px]">
          Explore <span className="text-[#2563EB]">Custom-fit Courses</span>{" "}
          Designed to Address Every Professional Focus
        </p>
      </div>

      {/* Course Cards */}
      <div className="mx-auto grid max-w-[1150px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <div
            key={course.title}
            className="overflow-hidden rounded-xl border border-[#DDE2E8] bg-white shadow-[0_7px_18px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(0,0,0,0.14)]"
          >
            {/* Image */}
            <div className="relative h-[176px] w-full">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex min-h-[130px] flex-col items-center justify-center px-4 py-5 text-center">
              <h3 className="text-[25px] font-semibold leading-tight text-[#2563EB]">
                {course.title}
              </h3>

              <p className="mt-3 text-[15px] leading-[1.45] text-[#374151]">
                {course.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
