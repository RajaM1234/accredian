"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Stats", id: "stats" },
  { label: "Clients", id: "clients" },
  { label: "Accredian Edge", id: "accredian-edge" },
  { label: "CAT", id: "cat" },
  { label: "How It Works", id: "how-it-works" },
  { label: "FAQs", id: "faqs" },
  { label: "Testimonials", id: "testimonials" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleNavClick = (event: React.MouseEvent, id: string) => {
    event.preventDefault();

    const section = document.getElementById(id);

    if (!section) {
      console.warn(`Section with id "${id}" not found.`);
      setMenuOpen(false);
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
    setMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 bg-white"
      style={{
        boxShadow: "0 3px 12px rgba(0,0,0,.08)",
      }}
    >
      {/* MAIN NAVBAR */}
      <div className="flex h-[80px] items-center justify-between px-5 sm:px-7 lg:px-10">
        {/* LOGO */}
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

        {/* DESKTOP NAVIGATION */}
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

        {/* TABLET + MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#111827] transition-colors hover:bg-[#EEF5FF] lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X size={28} strokeWidth={2} />
          ) : (
            <Menu size={28} strokeWidth={2} />
          )}
        </button>
      </div>

      {/* TABLET + MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="absolute right-5 top-[70px] z-50 w-[220px] rounded-[12px] bg-white p-4 shadow-xl lg:hidden">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => handleNavClick(event, item.id)}
                className={`rounded-md px-3 py-3 text-[16px] transition-colors ${
                  active === item.id
                    ? "font-bold text-[#2563EB]"
                    : "font-medium text-[#111827] hover:text-[#2563EB]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
