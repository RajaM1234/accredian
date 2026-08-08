"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-slide only on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % courses.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="cat" className="w-full px-5 py-16 md:px-8 lg:px-10">
      {/* HEADING */}
      <div className="text-center">
        <h2 className="text-[28px] font-bold leading-tight text-[#111827] md:text-[32px] lg:text-[36px]">
          Tailored <span className="text-[#2563EB]">Course Segmentation</span>
        </h2>

        <p className="mx-auto mt-3 max-w-[700px] text-[16px] leading-[1.45] text-[#111827] md:text-[18px]">
          Explore <span className="text-[#2563EB]">Custom-fit Courses</span>{" "}
          Designed to Address Every Professional Focus
        </p>
      </div>

      {/* ================= MOBILE CAROUSEL ================= */}
      <div className="mt-8 block md:hidden">
        {/* CARD */}
        <div className="mx-auto w-full max-w-[390px] overflow-hidden rounded-xl border border-[#DDE2E8] bg-white shadow-[0_7px_18px_rgba(0,0,0,0.10)]">
          {/* IMAGE */}
          <div className="relative h-[176px] w-full">
            <Image
              src={courses[activeSlide].image}
              alt={courses[activeSlide].title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* TITLE */}
          <div className="flex h-[88px] items-center justify-center px-4 text-center">
            <h3 className="text-[27px] font-semibold leading-tight text-[#2563EB]">
              {courses[activeSlide].title}
            </h3>
          </div>
        </div>

        {/* DOTS */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {courses.map((course, index) => (
            <button
              key={course.title}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Show ${course.title}`}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? "scale-110 bg-[#2563EB]"
                  : "bg-[#D1D5DB]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= TABLET + DESKTOP ================= */}
      <div className="mx-auto mt-10 hidden max-w-[1150px] grid-cols-2 gap-6 md:grid lg:grid-cols-4">
        {courses.map((course) => (
          <div
            key={course.title}
            className="overflow-hidden rounded-xl border border-[#DDE2E8] bg-white shadow-[0_7px_18px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(0,0,0,0.14)]"
          >
            {/* IMAGE */}
            <div className="relative h-[176px] w-full">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
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
