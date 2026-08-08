import Navbar from "@/components/layout/Navbar";
import AccredianEdge from "@/components/sections/AccredianEdge";
import DomainExpertise from "@/components/sections/DomainExpertise";
import Hero from "@/components/sections/Hero";
import Partnerships from "@/components/sections/Partnerships";
import Stats from "@/components/sections/Stats";
import TailoredCourseSegmentation from "@/components/sections/TailoredCourseSegmentation";
import WhoShouldJoin from "@/components/sections/WhoShouldJoin";
import Cat from "@/components/sections/Cat";

const placeholderSections = [
  "clients",
  "accredian-edge",
  "cat",
  "how-it-works",
  "faqs",
  "testimonials",
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <br />
        <br />
        <Hero />
        <br />
        <br />
        <br />
        <Stats />
        <br />
        <Partnerships />
        <AccredianEdge />
        <DomainExpertise />
        <TailoredCourseSegmentation />
        <WhoShouldJoin />
        <Cat />

        {placeholderSections.map((id) => (
          <section
            key={id}
            id={id}
            className="scroll-mt-[120px]"
            style={{
              minHeight: "260px",
              background: "#fff",
              borderTop: "1px solid #eef2ff",
            }}
          />
        ))}

        <br />
      </main>
    </>
  );
}
