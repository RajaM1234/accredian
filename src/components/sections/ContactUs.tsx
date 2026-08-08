"use client";

import { ArrowRight, Headphones } from "lucide-react";

interface ContactUsProps {
  onEnquire: () => void;
}

export default function ContactUs({ onEnquire }: ContactUsProps) {
  return (
    <section className="mx-auto mt-20 max-w-[1380px] px-6">
      <div className="relative h-[245px] overflow-hidden rounded-[14px] bg-[#2878E5]">
        {/* SEMICIRCULAR BACKGROUND */}
        <div className="pointer-events-none absolute -bottom-[500px] right-[40px] h-[750px] w-[750px] rounded-full border-[65px] border-white/10" />

        <div className="pointer-events-none absolute -bottom-[405px] right-[135px] h-[560px] w-[560px] rounded-full border-[55px] border-white/10" />

        <div className="pointer-events-none absolute -bottom-[310px] right-[230px] h-[370px] w-[370px] rounded-full border-[45px] border-white/10" />

        {/* CONTENT */}
        <div className="relative z-10 flex h-full items-center justify-between px-14">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-8">
            {/* ICON */}
            <div className="flex h-[86px] w-[86px] shrink-0 items-center justify-center rounded-[14px] bg-white">
              <Headphones
                size={52}
                strokeWidth={2}
                className="text-[#2878E5]"
              />
            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-[32px] font-bold leading-tight text-white">
                Want to Learn More About Our Training Solutions?
              </h2>

              <p className="mt-3 text-[20px] text-white">
                Get Expert Guidance for Your Team’s Success!
              </p>
            </div>
          </div>

          {/* CONTACT BUTTON */}
          <button
            type="button"
            onClick={onEnquire}
            className="relative z-20 flex shrink-0 items-center gap-2 rounded-lg bg-white px-10 py-4 text-[18px] font-semibold text-[#2878E5] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Contact Us
            <ArrowRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
