"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  "Home",
  "Stats",
  "Clients",
  "Accredian Edge",
  "CAT",
  "How It Works",
  "FAQs",
  "Testimonials",
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const topOffset = 140;
      const scrollY = window.scrollY + topOffset;
      let currentId = "home";

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const id = item.toLowerCase().replace(/\s+/g, "-");
        const section = document.getElementById(id);

        if (section && scrollY >= section.offsetTop) {
          currentId = id;
          break;
        }
      }

      setActive(currentId);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setActive(id);
  };

  return (
    <header
      className="sticky top-0 z-50 bg-white"
      style={{
        boxShadow: "0 3px 12px rgba(0,0,0,.08)",
      }}
    >
      <div className="mx-auto flex h-[84px] max-w-[1380px] items-center justify-between px-8">
        {/* Logo */}
        <a href="#home" onClick={(event) => handleNavClick(event, "home")}>
          <Image
            src="/images/logo.png"
            alt="Accredian"
            width={120}
            height={48}
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-9">
          {navItems.map((item) => {
            const id = item.toLowerCase().replace(/\s+/g, "-");

            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={(event) => handleNavClick(event, id)}
                className={`relative pb-2 text-[16px] transition-all duration-300 ${
                  active === id
                    ? "font-bold text-[#2563EB]"
                    : "font-medium text-black hover:text-[#2563EB]"
                }`}
              >
                {item}

                {active === id && (
                  <span className="absolute left-0 bottom-0 h-[2px] w-full rounded-full bg-[#2563EB]" />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
