"use client";

import {
  Lightbulb,
  Brain,
  UsersRound,
  BarChart3,
  Settings,
  Globe2,
  Banknote,
} from "lucide-react";

const domains = [
  {
    title: "Product & Innovation Hub",
    icon: Lightbulb,
  },
  {
    title: "Gen-AI Mastery",
    icon: Brain,
  },
  {
    title: "Leadership Elevation",
    icon: UsersRound,
  },
  {
    title: "Tech & Data Insights",
    icon: BarChart3,
  },
  {
    title: "Operations Excellence",
    icon: Settings,
  },
  {
    title: "Digital Enterprise",
    icon: Globe2,
  },
  {
    title: "Fintech Innovation Lab",
    icon: Banknote,
  },
];

export default function DomainExpertise() {
  return (
    <section
      id="clients"
      className="w-full px-5 py-16 md:px-8 lg:px-10"
    >
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[28px] font-bold leading-tight text-[#111827] md:text-[32px] lg:text-[36px]">
          Our <span className="text-[#2563EB]">Domain Expertise</span>
        </h2>

        <p className="mt-3 text-[15px] text-[#111827] md:text-[18px]">
          <span className="text-[#2563EB]">Specialized Programs</span>{" "}
          Designed to Fuel Innovation
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-10 grid max-w-[1000px] grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
        {domains.map((domain, index) => {
          const Icon = domain.icon;

          return (
            <div
              key={domain.title}
              className={`flex h-[52px] items-center justify-center rounded-xl border border-[#E2E5EA] bg-white px-3 text-center shadow-[0_8px_18px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.14)] md:h-[122px] md:px-6 ${
                index === domains.length - 1
                  ? "col-span-2 w-[180px] justify-self-center md:col-span-1 md:col-start-2 md:w-full"
                  : ""
              }`}
            >
              <div className="flex flex-row items-center justify-center gap-3 md:flex-col md:gap-0">
                <Icon
                  size={28}
                  strokeWidth={2}
                  className="shrink-0 text-[#2563EB] md:mb-3 md:size-[52px]"
                />

                <h3 className="text-[12px] font-semibold leading-tight text-[#111827] md:text-[19px]">
                  {domain.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}