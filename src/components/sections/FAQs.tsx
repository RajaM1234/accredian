"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import EnquiryModal from "./EnquiryModal";

const faqData = {
  "About the Course": [
    {
      question:
        "What types of corporate training programs does Accredian offer?",
      answer:
        "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
    },
    {
      question: "What domain specializations are available?",
      answer:
        "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.",
    },
  ],

  "About the Delivery": [
    {
      question:
        "Can the courses be customized for specific industries or teams?",
      answer:
        "Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization’s goals.",
    },
    {
      question: "Who are the instructors for these programs?",
      answer:
        "Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights.",
    },
    {
      question: "What formats are the programs delivered in?",
      answer:
        "Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team's preferences and requirements.",
    },
  ],

  Miscellaneous: [
    {
      question: "What is the ideal team size for corporate training?",
      answer:
        "Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts.",
    },
    {
      question: "How do we get started with Accredian?",
      answer:
        "Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process—from skill gap analysis to a custom program tailored to your needs.",
    },
  ],
};

export default function FAQs() {
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof faqData>("About the Course");

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const faqs = faqData[activeCategory];

  const handleCategoryChange = (category: keyof typeof faqData) => {
    setActiveCategory(category);
    setOpenIndex(null);
  };

  return (
    <>
      <section id="faqs" className="bg-white px-6 py-16 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1200px]">
          {/* HEADING */}
          <h2 className="text-[30px] font-semibold leading-tight text-[#111827] md:text-[36px]">
            Frequently Asked <span className="text-[#2583D5]">Questions</span>
          </h2>

          {/* FAQ CONTENT */}
          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[270px_1fr]">
            {/* LEFT CATEGORIES */}
            <div className="flex flex-col gap-7">
              {(Object.keys(faqData) as Array<keyof typeof faqData>).map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`h-[68px] w-full rounded-[6px] border-2 bg-white text-[18px] font-semibold transition-all duration-300 ${
                      activeCategory === category
                        ? "border-[#E5E7EB] text-[#2878E5] shadow-[0_12px_25px_rgba(0,0,0,0.10)]"
                        : "border-[#D1D5DB] text-[#6B7280] hover:border-[#2878E5] hover:text-[#2878E5]"
                    }`}
                  >
                    {category}
                  </button>
                ),
              )}
            </div>

            {/* RIGHT QUESTIONS */}
            <div className="min-w-0">
              <div className="flex flex-col">
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div key={faq.question} className="border-b-0">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="flex w-full items-center justify-between gap-6 py-3 text-left"
                      >
                        <span
                          className={`text-[17px] font-semibold leading-relaxed transition-colors ${
                            isOpen ? "text-[#2878E5]" : "text-[#111827]"
                          }`}
                        >
                          {faq.question}
                        </span>

                        <ChevronDown
                          size={22}
                          strokeWidth={1.8}
                          className={`shrink-0 text-gray-500 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="pb-6 pr-8">
                          <p className="text-[17px] leading-[1.55] text-[#111827]">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* ENQUIRE BUTTON */}
              <div className="mt-45 flex justify-center -translate-x-34">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="rounded-lg bg-[#2878E5] px-7 py-3.5 text-[17px] font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY MODAL */}
      <EnquiryModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
