"use client";

import Image from "next/image";

interface FooterProps {
  onEnquire: () => void;
}

export default function Footer({ onEnquire }: FooterProps) {
  return (
    <footer className="mt-20 px-6">
      <div className="mx-auto max-w-[1400px]">

        {/* TOP FOOTER */}
        <div className="flex items-start justify-between pb-10">

          {/* LEFT */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Accredian"
              width={160}
              height={60}
              className="h-auto w-[160px] object-contain"
            />

            {/* SOCIAL LINKS */}
            <div className="mt-8 flex items-center gap-6 text-[#374151]">

              {/* FACEBOOK */}
              <a
                href="https://facebook.com/accredianlearn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-colors hover:text-[#2878E5]"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.66.34-1 1-1z" />
                </svg>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/school/accredianedu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-[#2878E5]"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.5 8A2.5 2.5 0 1 0 6.5 3a2.5 2.5 0 0 0 0 5zM4 10h5v11H4V10zm8 0h4.8v1.5h.07c.67-1.15 2.3-2.36 4.73-2.36 5.06 0 5.4 3.33 5.4 7.67V21h-5v-3.73c0-.89-.02-2.04-1.24-2.04-1.24 0-1.43.97-1.43 1.97V21h-5V10z" />
                </svg>
              </a>

              {/* TWITTER / X */}
              <a
                href="https://twitter.com/accredianedu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="transition-colors hover:text-[#2878E5]"
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2zm-1.1 17.9h1.73L8.27 3.98H6.41L17.8 19.9z" />
                </svg>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/accredian_edu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:text-[#2878E5]"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* YOUTUBE */}
              <a
                href="https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="transition-colors hover:text-[#2878E5]"
              >
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.9V8.1l6.4 3.9-6.4 3.9z" />
                </svg>
              </a>

            </div>
          </div>

          {/* ENQUIRE NOW */}
          <div className="flex flex-col items-end">
            <button
              type="button"
              onClick={onEnquire}
              className="rounded-lg bg-[#2878E5] px-8 py-3.5 text-[17px] font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
            >
              Enquire Now
            </button>

            <p className="mt-3 text-[15px] text-[#111827]">
              Speak with our Advisor
            </p>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-[#6B7280]" />

        {/* INFORMATION */}
        <div className="grid grid-cols-1 gap-10 py-8 md:grid-cols-2">

          {/* ACCREDIAN */}
          <div>
            <h3 className="text-[20px] font-bold text-[#111827]">
              Accredian
            </h3>

            <div className="mt-4 space-y-3 text-[17px] text-[#1F2937]">
              <p>About</p>
              <p>Blog</p>
              <p>Why Accredian</p>
            </div>
          </div>

          {/* CONTACT US */}
          <div>
            <h3 className="text-[20px] font-bold text-[#111827]">
              Contact Us
            </h3>

            <div className="mt-4 space-y-3 text-[17px] text-[#1F2937]">
              <p>
                Email us:{" "}
                <span className="text-[#2878E5]">
                  enterprise@accredian.com
                </span>
              </p>

              <p className="max-w-[600px] leading-[1.5]">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector
                18, Gurugram, Haryana
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM DIVIDER */}
        <div className="border-t border-[#6B7280]" />

        {/* COPYRIGHT */}
        <div className="flex justify-center py-5 text-center text-[16px] text-[#111827]">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>

      </div>
    </footer>
  );
}