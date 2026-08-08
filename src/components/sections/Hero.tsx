"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import EnquiryModal from "./EnquiryModal";

const features = ["Tailored Solutions", "Industry Insights", "Expert Guidance"];

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="scroll-mt-[110px]">
      <div className="hidden lg:block">
        <div className="mx-auto max-w-[1200px]">
          <div
            className="rounded-[30px] bg-[#EEF5FF] lg:block"
            style={{
              boxShadow:
                "0 0 35px rgba(0,0,0,0.07), 0 18px 60px rgba(0,0,0,0.09), 0 8px 24px rgba(0,0,0,0.05)",
            }}
          >
            <div className="flex min-h-[540px] items-center justify-between overflow-hidden pl-16">
              {/* LEFT */}
              <div className="w-[52%]">
                <h1 className="text-[54px] font-bold leading-[1.05] tracking-tight text-black">
                  Next-Gen <span className="text-[#2563EB]">Expertise</span>
                  <br />
                  For Your <span className="text-[#2563EB]">Enterprise</span>
                </h1>

                <p className="mt-8 max-w-[500px] text-[24px] leading-[1.35] text-gray-800">
                  Cultivate high-performance teams through expert learning.
                </p>

                <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
                  {features.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 whitespace-nowrap text-[16px] font-medium"
                    >
                      <CheckCircle2 size={20} className="text-green-500" />
                      {item}
                    </div>
                  ))}
                </div>

                {/* UPDATED BUTTON */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="mt-10 rounded-lg border-2 bg-[#2563EB] px-9 py-3.5 text-[17px] font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl"
                >
                  Enquire Now
                </button>
              </div>

              {/* RIGHT */}
              <div className="w-[50%] items-end self-end">
                <Image
                  src="/images/hero.png"
                  alt="Enterprise Learning"
                  width={620}
                  height={620}
                  priority
                  className="h-full w-auto object-contain object-right -translate-x-[8px] drop-shadow-[0_22px_40px_rgba(0,0,0,0.18)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ENQUIRY MODAL */}
        <EnquiryModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
      {/* TABLET VERSION */}
<div className="hidden md:block lg:hidden">
  <div
    className="mx-4 flex min-h-[395px] overflow-hidden rounded-[24px] bg-[#EEF5FF]"
    style={{
      boxShadow:
        "0 0 35px rgba(0,0,0,0.07), 0 18px 60px rgba(0,0,0,0.09), 0 8px 24px rgba(0,0,0,0.05)",
    }}
  >
    {/* LEFT CONTENT */}
    <div className="flex w-[52%] flex-col justify-center px-8 py-8">
      <h1 className="text-[36px] font-bold leading-[1.15] text-[#111827]">
        Next-Gen <span className="text-[#2878E5]">Expertise</span>
        <br />
        For Your <span className="text-[#2878E5]">Enterprise</span>
      </h1>

      <p className="mt-6 max-w-[500px] text-[18px] leading-[1.45] text-gray-800">
        Cultivate high-performance teams through expert learning.
      </p>

      {/* FEATURES */}
      <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-4">
        <div className="flex items-center gap-2 text-[14px] font-medium">
          <CheckCircle2 size={20} className="shrink-0 text-green-500" />
          Tailored Solutions
        </div>

        <div className="flex items-center gap-2 text-[14px] font-medium">
          <CheckCircle2 size={20} className="shrink-0 text-green-500" />
          Industry Insights
        </div>

        <div className="flex items-center gap-2 text-[14px] font-medium">
          <CheckCircle2 size={20} className="shrink-0 text-green-500" />
          Expert Guidance
        </div>
      </div>

      {/* BUTTON */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-7 w-fit rounded-lg bg-[#2563EB] px-8 py-3 text-[16px] font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
      >
        Enquire Now
      </button>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex w-[48%] items-end justify-end overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Enterprise Learning"
        width={620}
        height={620}
        priority
        className="h-auto w-[115%] max-w-none translate-x-[25px] object-contain object-right"
      />
    </div>
  </div>
</div>
    
  
      {/* MOBILE VERSION */}
      <div className="-mt-[50px] block md:hidden">
        <div className="bg-[#EEF5FF]">
          {/* HERO IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/images/hero.png"
              alt="Enterprise Learning"
              width={620}
              height={620}
              priority
              className="h-auto w-full object-contain"
            />
          </div>

          {/* MOBILE CONTENT */}
          <div className="px-5 pb-5 pt-2 text-center">
            {/* HEADING */}
            <h1 className="text-[28px] font-bold leading-[1.2]">
              Next-Gen <span className="text-[#2878E5]">Expertise</span> For
              Your <span className="text-[#2878E5]">Enterprise</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 text-[16px] leading-[1.45] text-gray-800">
              Cultivate high-performance teams through expert learning.
            </p>

            {/* FEATURES */}
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 text-left">
              <div className="flex items-center gap-2 text-[14px] font-medium">
                <CheckCircle2 size={19} className="shrink-0 text-green-500" />
                Tailored Solutions
              </div>

              <div className="flex items-center gap-2 text-[14px] font-medium">
                <CheckCircle2 size={19} className="shrink-0 text-green-500" />
                Industry Insights
              </div>

              <div className="flex items-center gap-2 text-[14px] font-medium">
                <CheckCircle2 size={19} className="shrink-0 text-green-500" />
                Expert Guidance
              </div>

              <div className="flex items-center gap-2 text-[14px] font-medium">
                <CheckCircle2 size={19} className="shrink-0 text-green-500" />
                Measurable Impact
              </div>
            </div>

            {/* ENQUIRE BUTTON */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-6 w-full rounded-lg bg-[#2563EB] px-6 py-3 text-[16px] font-semibold text-white shadow-md"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
