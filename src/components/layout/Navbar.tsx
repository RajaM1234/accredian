"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Stats", id: "stats" },
  { label: "Clients", id: "clients" },
  { label: "Accredian Edge", id: "accredianEdge" },
  { label: "CAT", id: "cat" },
  { label: "How It Works", id: "how-it-works" },
  { label: "FAQs", id: "faqs" },
  { label: "Testimonials", id: "testimonials" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const header = document.querySelector("header");
      const headerHeight = header?.getBoundingClientRect().height || 80;

      const scrollPosition = window.scrollY + headerHeight + 30;

      let currentId = "home";

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);

        if (!section) continue;

        if (scrollPosition >= section.offsetTop) {
          currentId = navItems[i].id;
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

    if (!section) {
      console.warn(`Section with id "${id}" not found.`);
      return;
    }

    const header = document.querySelector("header");
    const headerHeight = header?.getBoundingClientRect().height || 80;

    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    const targetPosition = sectionTop - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    setActive(id);
  };

  return (
    <header
      className="sticky top-0 z-50 bg-white"
      style={{
        boxShadow: "0 3px 12px rgba(0,0,0,.08)",
      }}
    >
      <div className="mx-auto flex h-[88px] items-center justify-between px-8 lg:px-12">
        {/* Logo */}

        <a
          href="#home"
          onClick={(event) => handleNavClick(event, "home")}
          className="shrink-0"
        >
          <Image
            src="/images/logo.png"
            alt="Accredian"
            width={135}
            height={45}
            priority
            className="h-auto w-[135px]"
          />
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => handleNavClick(event, item.id)}
              className={`relative pb-2 text-[16px] transition-all duration-300 ${
                active === item.id
                  ? "font-bold text-[#2563EB]"
                  : "font-medium text-black hover:text-[#2563EB]"
              }`}
            >
              {item.label}

              {active === item.id && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#2563EB]" />
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
