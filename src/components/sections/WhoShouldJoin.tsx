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
    <section id="who-should-join" className="w-full px-0 py-12 md:px-5 md:py-16 lg:px-10">
      <div className="mx-auto w-full max-w-[1250px] overflow-hidden rounded-none bg-[#2878E5] md:rounded-2xl lg:flex">

        {/* ================= LEFT SIDE - DESKTOP ================= */}
        <div className="relative hidden min-h-[500px] w-[48%] lg:block">
          <div className="absolute left-[55px] top-[55px]">
            <p className="text-[20px] font-medium text-white">
              Who Should Join?
            </p>

            <h2 className="mt-3 max-w-[600px] text-[38px] font-bold leading-[1.08] tracking-[-1px] text-white">
              Strategic Skill Enhancement
            </h2>
          </div>

          {/* PEOPLE IMAGE */}
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

        {/* ================= MOBILE + TABLET HEADER ================= */}
        <div className="px-5 pt-8 md:px-8 md:pt-10 lg:hidden">
          <p className="text-[18px] font-medium text-white md:text-[20px]">
            Who Should Join?
          </p>

          <h2 className="mt-2 text-[28px] font-bold leading-[1.12] tracking-[-0.5px] text-white md:text-[34px]">
            Strategic Skill Enhancement
          </h2>
        </div>

        {/* ================= AUDIENCE ================= */}
        <div className="w-full px-5 py-8 md:px-8 md:pb-10 md:pt-10 lg:w-[52%] lg:px-10 lg:py-12">
          <div className="grid w-full grid-cols-1 gap-y-9 md:grid-cols-2 md:gap-x-12 md:gap-y-12 lg:gap-x-12 lg:gap-y-12">
            {audience.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-5 md:block"
                >
                  {/* ICON */}
                  <Icon
                    size={46}
                    strokeWidth={2.5}
                    className="mt-1 shrink-0 text-white md:mt-0 md:h-[53px] md:w-[53px]"
                  />

                  {/* TEXT */}
                  <div>
                    <h3 className="text-[18px] font-bold leading-tight text-white md:mt-5 md:text-[23px] lg:text-[25px]">
                      {item.title}
                    </h3>

                    <p className="mt-1 max-w-[320px] text-[14px] font-medium leading-[1.45] text-white md:mt-2 md:text-[15px] lg:text-[16px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}