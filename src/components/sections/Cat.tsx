import Image from "next/image";

export default function Cat() {
  return (
    <section
      id="cat"
      className="scroll-mt-[90px]"
      style={{
        background:
          "linear-gradient(90deg, #ffffff 0%, #f4f8ff 12%, #eef5ff 25%, #eef5ff 75%, #f4f8ff 88%, #ffffff 100%)",
      }}
    >
      {/* HEADING */}

      <h2 className="text-center text-[36px] font-semibold leading-tight text-[#111827]">
        The <span className="text-[#2583D5]">CAT Framework</span>
      </h2>

      <div className="text-center">
        <p className="mt-3 text-[18px] text-[#1F2937] md:text-[18px]">
          Our Proven Approach to{" "}
          <span className="text-[#2563EB]">Learning Excellence</span>
          <br />
        </p>
      </div>

      {/* ORIGINAL CAT IMAGE */}
      <div className="mx-auto mt-10 w-full max-w-[960px]">
        <Image
          src="/images/cat.svg"
          alt="CAT Framework - Concept, Application and Tools"
          width={900}
          height={650}
          priority
          unoptimized
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
