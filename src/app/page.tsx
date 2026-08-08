"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import AccredianEdge from "@/components/sections/AccredianEdge";
import DomainExpertise from "@/components/sections/DomainExpertise";
import Hero from "@/components/sections/Hero";
import Partnerships from "@/components/sections/Partnerships";
import Stats from "@/components/sections/Stats";
import TailoredCourseSegmentation from "@/components/sections/TailoredCourseSegmentation";
import WhoShouldJoin from "@/components/sections/WhoShouldJoin";
import Cat from "@/components/sections/Cat";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQs from "@/components/sections/FAQs";
import Testimonials from "@/components/sections/Testimonials";
import ContactUs from "@/components/sections/ContactUs";
import EnquiryModal from "@/components/sections/EnquiryModal";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openEnquiry = () => {
    setIsModalOpen(true);
  };

  const closeEnquiry = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />

      <main>
        <br />
        <br />
        <section id="home" className="scroll-mt-[120px]">
          <Hero />
        </section>
        <br />
        <br />
        <section id="stats" className="scroll-mt-[120px]">
          <Stats />
        </section>

        <section id="clients" className="scroll-mt-[120px]">
          <Partnerships />
        </section>

        <section className="scroll-mt-[120px]">
          <DomainExpertise />
        </section>

        <section>
          <TailoredCourseSegmentation />
        </section>

        <section>
          <WhoShouldJoin />
        </section>

        <section id="accredian-edge" className="scroll-mt-[120px]">
          <AccredianEdge />
        </section>

        <section id="cat" className="scroll-mt-[120px]">
          <Cat />
        </section>

        <section id="how-it-works" className="scroll-mt-[120px]">
          <HowItWorks />
        </section>

        <section id="faqs" className="scroll-mt-[120px]">
          <FAQs />
        </section>

        <section id="testimonials" className="scroll-mt-[120px]">
          <Testimonials />
        </section>

        <ContactUs onEnquire={openEnquiry} />
        <br />
        <Footer onEnquire={() => setIsModalOpen(true)} />
      </main>

      <EnquiryModal open={isModalOpen} onClose={closeEnquiry} />
    </>
  );
}
