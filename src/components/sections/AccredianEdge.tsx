import Image from "next/image";

export default function AccredianEdge() {
  return (
    <section
      id="accredianEdge"
      className="w-full scroll-mt-[90px] bg-white px-6 py-12 md:px-10 lg:px-16"
    >
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-[40px] font-bold leading-tight text-[#111827] md:text-[36px]">
          The <span className="text-[#2563EB]">Accredian Edge</span>
        </h2>

        <p className="mt-3 text-[16px] text-[#111827] md:text-[18px]">
          Key Aspects of{" "}
          <span className="text-[#2563EB]">Our Strategic Training</span>
        </p>
      </div>

      {/* Original Accredian Edge SVG */}
      <div className="mx-auto w-full max-w-[1260px]">
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
    </section>
  );
}
