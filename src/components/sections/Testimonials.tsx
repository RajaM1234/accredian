"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    logo: "/images/adp.svg",
    alt: "ADP",
    logoWidth: 60,
    logoHeight: 40,
    text: `"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."`,
  },
  {
    logo: "/images/bayer.svg",
    alt: "Bayer",
    logoWidth: 100,
    logoHeight: 50,
    text: `"Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."`,
  },
  {
    logo: "/images/rel.png",
    alt: "Reliance Industries",
    logoWidth: 70,
    logoHeight: 70,
    text: `"Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees."`,
  },
];

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    [testimonials[0], testimonials[1]],
    [testimonials[1], testimonials[2]],
  ];

  return (
    <section className="w-full bg-white px-6 py-16">
      {/* HEADING */}
      <div className="text-center">
        <h2 className="text-[36px] font-semibold leading-tight text-[#111827]">
          Testimonials from <span className="text-[#2878E5]">Our Partners</span>
        </h2>

        <p className="mt-3 text-[14px] text-[#1F2937]">
          What <span className="text-[#2878E5]">Our Clients</span> Are Saying
        </p>
      </div>

      {/* TESTIMONIAL CARDS */}
      <div className="mx-auto mt-10 grid max-w-[1400px] grid-cols-1 gap-3 lg:grid-cols-2">
        {slides[activeSlide].map((testimonial, index) => (
          <div
            key={`${activeSlide}-${index}`}
            className="min-h-[245px] rounded-[14px] border border-[#D1D5DB] bg-white p-7"
          >
            {/* LOGO */}
            <div className="mb-7 flex h-[45px] items-center">
              <Image
                src={testimonial.logo}
                alt={testimonial.alt}
                width={testimonial.logoWidth}
                height={testimonial.logoHeight}
                style={{
                  width: `${testimonial.logoWidth}px`,
                  height: `${testimonial.logoHeight}px`,
                }}
                className="object-contain"
              />
            </div>

            {/* TESTIMONIAL */}
            <p className="max-w-[620px] text-[18px] leading-[1.55] text-[#1F2937]">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>

      {/* PAGINATION DOTS */}
      <div className="mt-5 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to testimonial slide ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              activeSlide === index ? "bg-[#2878E5]" : "bg-[#D1D5DB]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
