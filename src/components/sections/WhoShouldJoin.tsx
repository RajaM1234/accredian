"use client";

import Image from "next/image";
import {
  MonitorCheck,
  MonitorX,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";

const audience = [
  {
    title: "Tech Professionals",
    description: "Enhance expertise, embrace tech, drive innovation.",
    icon: MonitorCheck,
  },
  {
    title: "Non-Tech Professionals",
    description: "Adapt digitally, collaborate in tech environments.",
    icon: MonitorX,
  },
  {
    title: "Emerging Professionals",
    description: "Develop powerful skills for rapid career growth.",
    icon: GraduationCap,
  },
  {
    title: "Senior Professionals",
    description: "Strengthen leadership, enhance strategic decisions.",
    icon: BriefcaseBusiness,
  },
];

export default function WhoShouldJoin() {
  return (
    <section
      id="who-should-join"
      className="w-full bg-white px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto flex min-h-[240px] max-w-[1300px] overflow-hidden rounded-[9px] bg-[#256FE5]">
        {/* LEFT SIDE */}
        <div className="relative w-[48%] px-10 pt-12 md:px-12 lg:px-[48px]">
          <p className="text-[22px] font-semibold leading-tight text-white">
            Who Should Join?
          </p>

          <h2 className="mt-2 max-w-[760px] text-[32px] font-bold leading-[1.08] tracking-[-1px] text-white md:text-[38px]">
            Strategic Skill Enhancement
          </h2>

          {/* People Image */}
          <div className="absolute bottom-0 left-[35px] h-[275px] w-[430px]">
            <Image
              src="/images/image.png"
              alt="Professionals"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex w-[52%] items-center px-8 py-10 md:px-10 lg:px-12">
          <div className="grid w-full grid-cols-2 gap-x-12 gap-y-12">
            {audience.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title}>
                  {/* Icon */}
                  <Icon size={53} strokeWidth={2.5} className="text-white" />

                  {/* Title */}
                  <h3 className="mt-5 text-[25px] font-bold leading-tight text-white">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 max-w-[270px] text-[16px] font-medium leading-[1.45] text-white">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
