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
    </section>
  );
}
