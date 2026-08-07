import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const features = ["Tailored Solutions", "Industry Insights", "Expert Guidance"];

export default function Hero() {
  return (
    <section className="mt-10">
      <div className="mx-auto max-w-[1260px] px-4">
        <div
          className="rounded-[30px] bg-[#EEF5FF]"
          style={{
            boxShadow:
              "0 0 35px rgba(0,0,0,0.05), 0 18px 60px rgba(0,0,0,0.09), 0 8px 24px rgba(0,0,0,0.05)",
          }}
        >
          <div className="flex items-end justify-between px-16 pt-14">
            {/* LEFT */}
            <div className="w-[52%] pb-14">
              <h1 className="text-[64px] font-bold leading-[1.05] tracking-tight text-black">
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

              <button
                className="
                  mt-10
                  rounded-lg
                  border-2
                  border-black
                  bg-[#2563EB]
                  px-9
                  py-3.5
                  text-[18px]
                  font-extrabold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-blue-700
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                Enquire Now
              </button>
            </div>

            {/* RIGHT */}
            <div className="w-[48%] items-end justify-end self-end ">
              <Image
                src="/images/hero.png"
                alt="Enterprise Learning"
                width={620}
                height={620}
                priority
                className="
                  h-full
                  w-auto
                  object-contain
                  object-right
                  translate-x-[40px]
                  drop-shadow-[0_22px_40px_rgba(0,0,0,0.18)]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
