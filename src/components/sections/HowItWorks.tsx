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
      className="w-full bg-white px-6 py-16 md:px-10 lg:px-16"
    >
      {/* HEADING */}
      <div className="mb-12 text-center">
        <h2 className="text-[35px] font-semibold leading-tight text-[#111827]">
          How We <span className="text-[#2563EB]">Deliver Results</span> That
          Matter?
        </h2>

        <p className="mt-3 text-[18px] text-[#1F2937]">
          A Structured Three-Step Approach to{" "}
          <span className="text-[#2563EB]">Skill Development</span>
        </p>
      </div>

      {/* THREE STEPS */}
      <div className="mx-auto grid w-full max-w-[1020px] grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              className="relative h-[247px] rounded-[12px] border border-[#93C5FD] bg-[#EFF6FF] px-8 py-7 text-center shadow-[0_8px_18px_rgba(0,0,0,0.12)]"
            >
              {/* LEFT BLUE BAR */}
              <span className="absolute left-[-8px] top-1/2 h-[158px] w-[8px] -translate-y-1/2 rounded-full bg-[#2563EB]" />

              {/* RIGHT BLUE BAR */}
              <span className="absolute right-[-8px] top-1/2 h-[158px] w-[8px] -translate-y-1/2 rounded-full bg-[#2563EB]" />

              {/* NUMBER */}
              <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#60A5FA] bg-white text-[16px] font-medium text-[#2563EB]">
                {step.number}
              </div>

              {/* ICON */}
              <div className="mx-auto mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#287BE5] text-white shadow-md">
                <Icon size={34} strokeWidth={2} />
              </div>

              {/* TITLE */}
              <h3 className="text-[20px] font-semibold text-[#111827]">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mx-auto mt-3 max-w-[260px] text-[16px] leading-[1.45] text-[#1F2937]">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
