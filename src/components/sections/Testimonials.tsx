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
  const [mobileSlide, setMobileSlide] = useState(0);
  const [desktopSlide, setDesktopSlide] = useState(0);

  const desktopSlides = [
    [testimonials[0], testimonials[1]],
    [testimonials[1], testimonials[2]],
  ];

  return (
    <section
      id="testimonials"
      className="scroll-mt-[90px] px-5 py-12 md:px-8 md:py-16 lg:px-10"
    >
      {/* HEADING */}
      <div className="text-center">
        <h2 className="text-[28px] font-semibold leading-tight text-[#111827] md:text-[34px] lg:text-[38px]">
          Testimonials from <span className="text-[#2878E5]">Our Partners</span>
        </h2>

        <p className="mt-3 text-[14px] text-[#1F2937] md:text-[16px]">
          What <span className="text-[#2878E5]">Our Clients</span> Are Saying
        </p>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="mt-10 md:hidden">
        <div className="mx-auto w-full max-w-[405px]">
          <div className="min-h-[300px] rounded-[14px] border border-[#D1D5DB] bg-white px-7 py-8 shadow-sm">
            {/* LOGO */}
            <div className="mb-8 flex h-[45px] items-center">
              <Image
                src={testimonials[mobileSlide].logo}
                alt={testimonials[mobileSlide].alt}
                width={testimonials[mobileSlide].logoWidth}
                height={testimonials[mobileSlide].logoHeight}
                style={{
                  width: `${testimonials[mobileSlide].logoWidth}px`,
                  height: `${testimonials[mobileSlide].logoHeight}px`,
                }}
                className="object-contain"
              />
            </div>

            {/* TESTIMONIAL */}
            <p className="text-[17px] leading-[1.55] text-[#1F2937]">
              {testimonials[mobileSlide].text}
            </p>
          </div>
        </div>

        {/* MOBILE DOTS */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setMobileSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                mobileSlide === index ? "bg-[#2878E5]" : "bg-[#D1D5DB]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= TABLET + DESKTOP ================= */}
      <div className="mt-10 hidden md:block">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-2 gap-5">
          {desktopSlides[desktopSlide].map((testimonial, index) => (
            <div
              key={`${desktopSlide}-${index}`}
              className="min-h-[275px] rounded-[14px] border border-[#D1D5DB] bg-white p-8 shadow-sm"
            >
              {/* LOGO */}
              <div className="mb-8 flex h-[45px] items-center">
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
              <p className="max-w-[620px] text-[17px] leading-[1.55] text-[#1F2937] lg:text-[18px]">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        {/* TABLET/DESKTOP DOTS */}
        <div className="mt-6 flex justify-center gap-2">
          {desktopSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setDesktopSlide(index)}
              aria-label={`Go to testimonial slide ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                desktopSlide === index ? "bg-[#2878E5]" : "bg-[#D1D5DB]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
