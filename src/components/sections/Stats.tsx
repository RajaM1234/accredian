import Image from "next/image";

export default function Stats() {
  const stats = [
    {
      number: "10K+",
      text: "Professionals Trained For Exceptional Career Success",
    },
    {
      number: "200+",
      text: "Sessions Delivered With Unmatched Learning Excellence",
    },
    {
      number: "5K+",
      text: "Active Learners Engaged In Dynamic Courses",
    },
  ];

  return (
    <section id="stats" className="scroll-mt-[90px]">
      <div className="hidden md:block">
        <div className="mx-auto max-w-[1080px] px-6">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-[36px] font-bold">
              Our <span className="text-[#2563EB]">Track Record</span>
            </h2>

            <p className="mt-3 text-[18px] text-gray-700">
              The Numbers Behind{" "}
              <span className="font-semibold text-[#2563EB]">Our Success</span>
            </p>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center px-12 text-center ${
                  index !== stats.length - 1 ? "border-r border-blue-200" : ""
                }`}
              >
                {/* Badge */}
                <div className="rounded-full bg-[#DCEAFF] px-7 py-2">
                  <span className="text-[24px] font-bold text-[#2563EB]">
                    {item.number}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-8 max-w-[270px] text-[16px] font-semi-bold leading-8 text-black">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* MOBILE VERSION */}
      <div className="block px-8 pb-8 pt-12 md:hidden">
        {/* HEADING */}
        <div className="text-center">
          <h2 className="text-[28px] font-bold text-[#111827]">
            Our <span className="text-[#2878E5]">Track Record</span>
          </h2>

          <p className="mt-3 text-[16px] text-[#111827]">
            The Numbers Behind{" "}
            <span className="font-semibold text-[#2878E5]">Our Success</span>
          </p>
        </div>

        {/* STATS */}
        <div className="mt-12">
          {/* 10K+ */}
          <div className="flex items-center gap-5 border-b border-[#D9DDE5] pb-5">
            <div className="flex h-[46px] min-w-[78px] shrink-0 items-center justify-center rounded-full bg-[#DCEAFF]">
              <span className="text-[16px] font-semibold text-[#2878E5]">
                10K+
              </span>
            </div>

            <p className="text-[16px] font-medium leading-[1.4] text-[#111827]">
              Professionals Trained For
              <br />
              Exceptional Career Success
            </p>
          </div>

          {/* 200+ */}
          <div className="flex items-center gap-5 border-b border-[#D9DDE5] py-12">
            <div className="flex h-[46px] min-w-[78px] shrink-0 items-center justify-center rounded-full bg-[#DCEAFF]">
              <span className="text-[16px] font-semibold text-[#2878E5]">
                200+
              </span>
            </div>

            <p className="text-[16px] font-medium leading-[1.4] text-[#111827]">
              Sessions Delivered With
              <br />
              Unmatched Learning
              <br />
              Excellence
            </p>
          </div>

          {/* 5K+ */}
          <div className="flex items-center gap-5 pt-12">
            <div className="flex h-[46px] min-w-[78px] shrink-0 items-center justify-center rounded-full bg-[#DCEAFF]">
              <span className="text-[16px] font-semibold text-[#2878E5]">
                5K+
              </span>
            </div>

            <p className="text-[16px] font-medium leading-[1.4] text-[#111827]">
              Active Learners Engaged In
              <br />
              Dynamic Courses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
