import Image from "next/image";

export default function Partnerships() {
  return (
    <section id="clients" className="mx-auto max-w-[1500px] px-6 py-20">
      {/* Heading */}
      <div className="hidden lg:block">
        <div className="text-center">
          <h2 className="text-[36px] font-bold leading-tight">
            Our <span className="text-[#2563EB]">Proven Partnerships</span>
          </h2>

          <p className="mt-3 text-[18px] text-[#4B5563]">
            Successful Collaborations With the{" "}
            <span className="font-semibold text-[#2563EB]">
              Industry's Best
            </span>
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
      </div>
      {/* MOBILE VERSION */}
      <div className="mt-10 block md:hidden overflow-hidden">
        {/* MOBILE HEADING */}
        <div className="text-center">
          <h2 className="text-[28px] font-bold leading-[1.2] text-[#111827]">
            Our Proven <span className="text-[#2563EB]">Partnerships</span>
          </h2>

          <p className="mt-3 px-4 text-[15px] leading-[1.4] text-[#4B5563]">
            Successful Collaborations With the{" "}
            <span className="font-semibold text-[#2563EB]">
              Industry's Best
            </span>
          </p>
        </div>

        {/* MOBILE MOVING LOGOS */}
        <div className="mt-6 w-full overflow-hidden">
          <div className="relative h-[100px] w-full overflow-hidden">
            <div className="absolute left-0 top-0 flex h-[100px] w-max items-center gap-10 animate-partnership-scroll">
              {/* SET 1 */}

              <div className="flex h-[90px] w-[80px] shrink-0 items-center justify-center">
                <Image
                  src="/images/rel.png"
                  alt="Reliance"
                  width={80}
                  height={60}
                  className="h-[60px] w-[80px] object-contain"
                />
              </div>

              <div className="flex h-[90px] w-[100px] shrink-0 items-center justify-center">
                <Image
                  src="/images/hcl.png"
                  alt="HCL"
                  width={100}
                  height={50}
                  className="h-[50px] w-[100px] object-contain"
                />
              </div>

              <div className="flex h-[90px] w-[80px] shrink-0 items-center justify-center">
                <Image
                  src="/images/ibm.png"
                  alt="IBM"
                  width={80}
                  height={60}
                  className="h-[60px] w-[80px] object-contain"
                />
              </div>

              <div className="flex h-[90px] w-[80px] shrink-0 items-center justify-center">
                <Image
                  src="/images/crif.png"
                  alt="CRIF"
                  width={80}
                  height={60}
                  className="h-[60px] w-[80px] object-contain"
                />
              </div>

              <div className="flex h-[90px] w-[85px] shrink-0 items-center justify-center">
                <Image
                  src="/images/adp.svg"
                  alt="ADP"
                  width={85}
                  height={60}
                  className="h-[60px] w-[85px] object-contain"
                />
              </div>

              <div className="flex h-[90px] w-[80px] shrink-0 items-center justify-center">
                <Image
                  src="/images/bayer.svg"
                  alt="Bayer"
                  width={80}
                  height={70}
                  className="h-[70px] w-[80px] object-contain"
                />
              </div>

              {/* SET 2 — DUPLICATE FOR CONTINUOUS LOOP */}

              <div className="flex h-[90px] w-[80px] shrink-0 items-center justify-center">
                <Image
                  src="/images/rel.png"
                  alt="Reliance"
                  width={80}
                  height={60}
                  className="h-[60px] w-[80px] object-contain"
                />
              </div>

              <div className="flex h-[90px] w-[100px] shrink-0 items-center justify-center">
                <Image
                  src="/images/hcl.png"
                  alt="HCL"
                  width={100}
                  height={50}
                  className="h-[50px] w-[100px] object-contain"
                />
              </div>

              <div className="flex h-[90px] w-[80px] shrink-0 items-center justify-center">
                <Image
                  src="/images/ibm.png"
                  alt="IBM"
                  width={80}
                  height={60}
                  className="h-[60px] w-[80px] object-contain"
                />
              </div>

              <div className="flex h-[90px] w-[80px] shrink-0 items-center justify-center">
                <Image
                  src="/images/crif.png"
                  alt="CRIF"
                  width={80}
                  height={60}
                  className="h-[60px] w-[80px] object-contain"
                />
              </div>

              <div className="flex h-[90px] w-[85px] shrink-0 items-center justify-center">
                <Image
                  src="/images/adp.svg"
                  alt="ADP"
                  width={85}
                  height={60}
                  className="h-[60px] w-[85px] object-contain"
                />
              </div>

              <div className="flex h-[90px] w-[80px] shrink-0 items-center justify-center">
                <Image
                  src="/images/bayer.svg"
                  alt="Bayer"
                  width={80}
                  height={70}
                  className="h-[70px] w-[80px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes partnership-scroll {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          .animate-partnership-scroll {
            animation: partnership-scroll 18s linear infinite;
          }
        `}</style>
      </div>
      {/* TABLET PARTNERSHIP VERSION */}
      <div className="hidden md:block lg:hidden">
        {/* HEADING */}
        <div className="text-center">
          <h2 className="text-[32px] font-bold leading-[1.2] text-[#111827]">
            Our Proven <span className="text-[#2563EB]">Partnerships</span>
          </h2>

          <p className="mt-3 text-[17px] text-[#4B5563]">
            Successful Collaborations With the{" "}
            <span className="font-semibold text-[#2563EB]">
              Industry's Best
            </span>
          </p>
        </div>

        {/* TABLET LOGOS */}
        <div className="mx-auto mt-8 grid max-w-[600px] grid-cols-3 items-center justify-items-center gap-x-12 gap-y-10">
          {/* Reliance */}
          <div className="flex h-[90px] items-center justify-center">
            <Image
              src="/images/rel.png"
              alt="Reliance"
              width={100}
              height={70}
              className="h-auto w-[100px] object-contain"
            />
          </div>

          {/* HCL */}
          <div className="flex h-[90px] items-center justify-center">
            <Image
              src="/images/hcl.png"
              alt="HCL"
              width={120}
              height={55}
              className="h-auto w-[120px] object-contain"
            />
          </div>

          {/* IBM */}
          <div className="flex h-[90px] items-center justify-center">
            <Image
              src="/images/ibm.png"
              alt="IBM"
              width={100}
              height={70}
              className="h-auto w-[100px] object-contain"
            />
          </div>

          {/* CRIF */}
          <div className="flex h-[90px] items-center justify-center">
            <Image
              src="/images/crif.png"
              alt="CRIF"
              width={105}
              height={70}
              className="h-auto w-[105px] object-contain"
            />
          </div>

          {/* ADP */}
          <div className="flex h-[90px] items-center justify-center">
            <Image
              src="/images/adp.svg"
              alt="ADP"
              width={105}
              height={70}
              className="h-auto w-[105px] object-contain"
            />
          </div>

          {/* Bayer */}
          <div className="flex h-[90px] items-center justify-center">
            <Image
              src="/images/bayer.svg"
              alt="Bayer"
              width={90}
              height={90}
              className="h-auto w-[90px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
