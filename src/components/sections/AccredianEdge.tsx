import Image from "next/image";

export default function AccredianEdge() {
  return (
    <section id="accredianEdge" className="w-full overflow-hidden">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[36px] font-bold leading-tight md:text-[32px] sm:text-[28px]">
          The <span className="text-[#2563EB]">Accredian Edge</span>
        </h2>

        <p className="mt-3 text-[16px] text-[#111827] md:text-[18px]">
          Key Aspects of{" "}
          <span className="text-[#2563EB]">Our Strategic Training</span>
        </p>
      </div>

      {/* TABLET + DESKTOP — EXISTING SVG */}
      <div className="mx-auto hidden w-full max-w-[1260px] md:block">
        <Image
          src="/images/accredian-edge-usp-v3.svg"
          alt="Accredian Edge - Key aspects of strategic training"
          width={1500}
          height={600}
          priority
          unoptimized
          className="h-auto w-full"
        />
      </div>

      {/* MOBILE — MOBILE VERSION */}
      <div className="mx-auto block w-full max-w-[500px] md:hidden">
        <Image
          src="/images/mobile_v.png"
          alt="Accredian Edge - Key aspects of strategic training"
          width={600}
          height={700}
          priority
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  );
}
