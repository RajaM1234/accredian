"use client";

import { ArrowRight, Headphones } from "lucide-react";

interface ContactUsProps {
  onEnquire: () => void;
}

export default function ContactUs({ onEnquire }: ContactUsProps) {
  return (
    <section className="px-5 py-10 md:px-8 md:py-14 lg:px-10">
      <div className="relative mx-auto h-[350px] w-full max-w-[1400px] overflow-hidden rounded-[14px] bg-[#2878E5] md:h-[360px] lg:h-[360px]">
        {/* SEMICIRCULAR BACKGROUND */}
        <div className="pointer-events-none absolute -bottom-[405px] right-[135px] hidden h-[560px] w-[560px] rounded-full border-[55px] border-white/10 md:block" />

        <div className="pointer-events-none absolute -bottom-[310px] right-[230px] hidden h-[370px] w-[370px] rounded-full border-[45px] border-white/10 md:block" />

        {/* MOBILE SEMICIRCLES */}
        <div className="pointer-events-none absolute -bottom-[250px] -right-[180px] h-[420px] w-[420px] rounded-full border-[40px] border-white/10 md:hidden" />

        <div className="pointer-events-none absolute -bottom-[190px] -right-[120px] h-[300px] w-[300px] rounded-full border-[32px] border-white/10 md:hidden" />

        {/* CONTENT */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center md:flex-row md:justify-between md:px-10 lg:px-14 md:text-left">
          {/* LEFT SIDE */}
          <div className="flex flex-col items-center md:flex-row md:items-center md:gap-8">
            {/* ICON */}
            <div className="flex h-[86px] w-[86px] shrink-0 items-center justify-center rounded-[14px] bg-white md:h-[86px] md:w-[86px]">
              <Headphones
                size={52}
                strokeWidth={2}
                className="text-[#2878E5]"
              />
            </div>

            {/* TEXT */}
            <div className="mt-6 md:mt-0">
              <h2 className="max-w-[700px] text-[23px] font-bold leading-[1.2] text-white md:text-[28px] lg:text-[32px]">
                Want to Learn More About Our Training Solutions?
              </h2>

              <p className="mt-3 text-[16px] text-white md:text-[18px] lg:text-[20px]">
                Get Expert Guidance for Your Team’s Success!
              </p>
            </div>
          </div>

          {/* CONTACT BUTTON */}
          <button
            type="button"
            onClick={onEnquire}
            className="relative z-20 mt-7 flex shrink-0 items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-[17px] font-semibold text-[#2878E5] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:mt-0 md:px-10 md:py-4 md:text-[18px]"
          >
            Contact Us
            <ArrowRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
