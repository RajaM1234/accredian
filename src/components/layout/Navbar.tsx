import Image from "next/image";

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
  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex h-[84px] max-w-[1440px] items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Accredian"
            width={120}
            height={40}
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-9">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className={`relative pb-2 text-[16px] transition-colors duration-300 ${
                index === 0
                  ? "font-bold text-[#2563EB]"
                  : "font text-black hover:text-[#2563EB]"
              }`}
            >
              {item}

              {index === 0 && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#2563EB]" />
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
