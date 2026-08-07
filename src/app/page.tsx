import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Partnerships from "@/components/sections/Partnerships";
import Stats from "@/components/sections/Stats";

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
