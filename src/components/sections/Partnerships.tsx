import Image from "next/image";

export default function Partnerships() {
  return (
    <section id="clients" className="mx-auto max-w-[1500px] px-6 py-20">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[36px] font-bold leading-tight">
          Our <span className="text-[#2563EB]">Proven Partnerships</span>
        </h2>

        <p className="mt-3 text-[18px] text-[#4B5563]">
          Successful Collaborations With the{" "}
          <span className="font-semibold text-[#2563EB]">Industry's Best</span>
        </p>
      </div>

      {/* Logos */}
      <div className="mx-auto mt-10 flex max-w-[1200px] items-center justify-between">
        {/* Reliance */}
        <div className="flex h-[120px] items-center justify-center">
          <Image
            src="/images/rel.png"
            alt="Reliance"
            width={90}
            height={70}
            className="object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* HCL */}
        <div className="flex h-[120px] items-center justify-center">
          <Image
            src="/images/hcl.png"
            alt="HCL"
            width={140}
            height={55}
            className="object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* IBM */}
        <div className="flex h-[120px] items-center justify-center">
          <Image
            src="/images/ibm.png"
            alt="IBM"
            width={90}
            height={70}
            className="object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* CRIF */}
        <div className="flex h-[120px] items-center justify-center">
          <Image
            src="/images/crif.png"
            alt="CRIF"
            width={90}
            height={70}
            className="object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* ADP */}
        <div className="flex h-[120px] items-center justify-center">
          <Image
            src="/images/adp.svg"
            alt="ADP"
            width={95}
            height={70}
            className="object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Bayer */}
        <div className="flex h-[120px] items-center justify-center">
          <Image
            src="/images/bayer.svg"
            alt="Bayer"
            width={90}
            height={100}
            className="object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
