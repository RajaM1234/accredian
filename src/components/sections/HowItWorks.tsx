"use client";

import { ChartNoAxesCombined, Presentation, MonitorPlay } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: ChartNoAxesCombined,
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and developmental needs.",
  },
  {
    number: "2",
    icon: Presentation,
    title: "Customized Training Plan",
    description: "Create a tailored roadmap addressing organizational goals.",
  },
  {
    number: "3",
    icon: MonitorPlay,
    title: "Flexible Program Delivery",
    description:
      "Deliver adaptable programs aligned with industry and organizational needs.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-[90px] px-5 py-12 md:px-8 md:py-16 lg:px-10"
    >
      {/* HEADING */}
      <div className="text-center">
        <h2 className="mx-auto max-w-[650px] text-[27px] font-semibold leading-[1.15] text-[#111827] md:text-[32px] lg:text-[36px]">
          How We <span className="text-[#2563EB]">Deliver Results</span> That
          Matter?
        </h2>

        <p className="mt-3 text-[15px] text-[#1F2937] md:text-[17px] lg:text-[18px]">
          A Structured Three-Step Approach to{" "}
          <span className="text-[#2563EB]">Skill Development</span>
        </p>
      </div>

      {/* THREE STEPS */}
      <div className="mx-auto mt-9 grid w-full max-w-[1020px] grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3 lg:gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              className={`relative h-[135px] rounded-[12px] border border-[#93C5FD] bg-[#EFF6FF] px-5 py-5 text-center shadow-[0_8px_18px_rgba(0,0,0,0.12)] md:h-[225px] md:px-7 md:py-6 lg:h-[247px] lg:px-8 lg:py-7 ${
                index === 2
                  ? "md:col-span-2 md:mx-auto md:w-[48%] lg:col-span-1 lg:w-full"
                  : ""
              }`}
            >
              {/* LEFT BLUE BAR */}
              <span className="absolute left-[-5px] top-1/2 h-[54px] w-[5px] -translate-y-1/2 rounded-full bg-[#2563EB] md:left-[-7px] md:h-[130px] md:w-[7px] lg:left-[-8px] lg:h-[158px] lg:w-[8px]" />

              {/* RIGHT BLUE BAR */}
              <span className="absolute right-[-5px] top-1/2 h-[54px] w-[5px] -translate-y-1/2 rounded-full bg-[#2563EB] md:right-[-7px] md:h-[130px] md:w-[7px] lg:right-[-8px] lg:h-[158px] lg:w-[8px]" />

              {/* NUMBER */}
              <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#60A5FA] bg-white text-[15px] font-medium text-[#2563EB]">
                {step.number}
              </div>

              {/* ICON */}
              <div className="mx-auto mb-4 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#287BE5] text-white shadow-md md:mb-4 md:h-[68px] md:w-[68px]">
                <Icon
                  size={29}
                  strokeWidth={2}
                  className="md:h-[34px] md:w-[34px]"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-[16px] font-semibold leading-tight text-[#111827] md:text-[20px] lg:text-[20px]">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mx-auto mt-3 hidden max-w-[260px] text-[15px] leading-[1.45] text-[#1F2937] md:block lg:text-[16px]">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
