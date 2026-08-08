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
    <section className="w-full bg-white px-6 py-20 md:px-10 lg:px-16">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-[40px] font-semibold leading-tight text-[#111827] md:text-[36px]">
          Our <span className="text-[#2563EB]">Domain Expertise</span>
        </h2>

        <p className="mt-3 text-[18px] text-[#111827] md:text-[18px]">
          <span className="text-[#2563EB]">Specialized Programs</span> Designed
          to Fuel Innovation
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {domains.map((domain, index) => {
          const Icon = domain.icon;

          return (
            <div
              key={domain.title}
              className={`flex h-[122px] items-center justify-center rounded-xl border border-[#E2E5EA] bg-white px-6 text-center shadow-[0_8px_18px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.14)] ${
                index === domains.length - 1 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="flex flex-col items-center justify-center">
                <Icon
                  size={52}
                  strokeWidth={2}
                  className="mb-3 text-[#2563EB]"
                />

                <h3 className="text-[19px] font-semibold leading-tight text-[#111827]">
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
