"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { X, ChevronDown, Search } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  domain: string;
  candidates: string;
  mode: string;
  location: string;
};

type Country = {
  name: string;
  code: string;
  dialCode: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  domain: "",
  candidates: "",
  mode: "",
  location: "",
};

const domainOptions = [
  "Product Management",
  "CFO",
  "Data Science",
  "Artificial Intelligence",
  "Human Resource",
  "Strategy & Leadership",
  "General Management",
  "Digital Transformation",
  "Business Management",
  "Finance",
  "Project Management",
  "Senior Management",
];

const deliveryModeOptions = ["Online", "Offline"];

const countries: Country[] = [
  { name: "India", code: "IN", dialCode: "+91" },
  { name: "United States", code: "US", dialCode: "+1" },
  { name: "United Kingdom", code: "GB", dialCode: "+44" },
  { name: "United Arab Emirates", code: "AE", dialCode: "+971" },
  { name: "Australia", code: "AU", dialCode: "+61" },
  { name: "Canada", code: "CA", dialCode: "+1" },
  { name: "Germany", code: "DE", dialCode: "+49" },
  { name: "France", code: "FR", dialCode: "+33" },
  { name: "Japan", code: "JP", dialCode: "+81" },
  { name: "China", code: "CN", dialCode: "+86" },
  { name: "Singapore", code: "SG", dialCode: "+65" },
  { name: "Malaysia", code: "MY", dialCode: "+60" },
  { name: "Saudi Arabia", code: "SA", dialCode: "+966" },
  { name: "Qatar", code: "QA", dialCode: "+974" },
  { name: "Kuwait", code: "KW", dialCode: "+965" },
  { name: "Oman", code: "OM", dialCode: "+968" },
  { name: "Bahrain", code: "BH", dialCode: "+973" },
  { name: "South Africa", code: "ZA", dialCode: "+27" },
  { name: "New Zealand", code: "NZ", dialCode: "+64" },
  { name: "Ireland", code: "IE", dialCode: "+353" },
  { name: "Italy", code: "IT", dialCode: "+39" },
  { name: "Spain", code: "ES", dialCode: "+34" },
  { name: "Netherlands", code: "NL", dialCode: "+31" },
  { name: "Switzerland", code: "CH", dialCode: "+41" },
  { name: "Sweden", code: "SE", dialCode: "+46" },
  { name: "Norway", code: "NO", dialCode: "+47" },
  { name: "Denmark", code: "DK", dialCode: "+45" },
  { name: "Finland", code: "FI", dialCode: "+358" },
  { name: "Belgium", code: "BE", dialCode: "+32" },
  { name: "Austria", code: "AT", dialCode: "+43" },
  { name: "Portugal", code: "PT", dialCode: "+351" },
  { name: "Greece", code: "GR", dialCode: "+30" },
  { name: "Poland", code: "PL", dialCode: "+48" },
  { name: "Czech Republic", code: "CZ", dialCode: "+420" },
  { name: "Hungary", code: "HU", dialCode: "+36" },
  { name: "Romania", code: "RO", dialCode: "+40" },
  { name: "Turkey", code: "TR", dialCode: "+90" },
  { name: "Israel", code: "IL", dialCode: "+972" },
  { name: "Egypt", code: "EG", dialCode: "+20" },
  { name: "Nigeria", code: "NG", dialCode: "+234" },
  { name: "Kenya", code: "KE", dialCode: "+254" },
  { name: "Brazil", code: "BR", dialCode: "+55" },
  { name: "Mexico", code: "MX", dialCode: "+52" },
  { name: "Argentina", code: "AR", dialCode: "+54" },
  { name: "Chile", code: "CL", dialCode: "+56" },
  { name: "Colombia", code: "CO", dialCode: "+57" },
  { name: "Pakistan", code: "PK", dialCode: "+92" },
  { name: "Bangladesh", code: "BD", dialCode: "+880" },
  { name: "Sri Lanka", code: "LK", dialCode: "+94" },
  { name: "Nepal", code: "NP", dialCode: "+977" },
  { name: "Bhutan", code: "BT", dialCode: "+975" },
  { name: "Indonesia", code: "ID", dialCode: "+62" },
  { name: "Thailand", code: "TH", dialCode: "+66" },
  { name: "Vietnam", code: "VN", dialCode: "+84" },
  { name: "Philippines", code: "PH", dialCode: "+63" },
  { name: "South Korea", code: "KR", dialCode: "+82" },
  { name: "Hong Kong", code: "HK", dialCode: "+852" },
  { name: "Russia", code: "RU", dialCode: "+7" },
  { name: "Ukraine", code: "UA", dialCode: "+380" },
];

function getFlag(code: string) {
  return code
    .toUpperCase()
    .split("")
    .map(
      (char) =>
        String.fromCodePoint(
          127397 + char.charCodeAt(0)
        )
    )
    .join("");
}

export default function EnquiryModal({
  open,
  onClose,
}: Props) {
  const [form, setForm] =
    useState<FormState>(initialForm);

  const [isClosing, setIsClosing] =
    useState(false);

  const [domainOpen, setDomainOpen] =
    useState(false);

  const [modeOpen, setModeOpen] =
    useState(false);

  const [countryOpen, setCountryOpen] =
    useState(false);

  const [countrySearch, setCountrySearch] =
    useState("");

  const [selectedCountry, setSelectedCountry] =
    useState<Country>(countries[0]);

  const dropdownRef =
    useRef<HTMLDivElement>(null);

  const closeModal = useCallback(() => {
    setIsClosing(true);

    setTimeout(() => {
      onClose();
      setIsClosing(false);
      setDomainOpen(false);
      setModeOpen(false);
      setCountryOpen(false);
    }, 180);
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    const handleClickOutside = (
      event: MouseEvent
    ) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node
        )
      ) {
        setDomainOpen(false);
        setModeOpen(false);
        setCountryOpen(false);
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [open, closeModal]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredCountries =
    countries.filter((country) => {
      const search =
        countrySearch.toLowerCase();

      return (
        country.name
          .toLowerCase()
          .includes(search) ||
        country.dialCode.includes(search) ||
        country.code
          .toLowerCase()
          .includes(search)
      );
    });

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.company.trim()
    ) {
      toast.error(
        "Please fill in the required fields."
      );
      return;
    }

    const fullPhone =
      `${selectedCountry.dialCode}${form.phone.replace(
        /^0+/,
        ""
      )}`;

    const payload = {
      ...form,
      phone: fullPhone,
      country: selectedCountry.name,
      countryCode: selectedCountry.code,
    };

    try {
      const response = await fetch(
        "/api/enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Request failed"
        );
      }

      toast.success(
        "We've received your enquiry. Our team will contact you shortly."
      );

      setForm(initialForm);

      setSelectedCountry(countries[0]);

      setCountrySearch("");

      closeModal();
    } catch (error) {
      console.error(
        "Enquiry submission error:",
        error
      );

      toast.error(
        "Something went wrong. Please try again."
      );
    }
  };

  if (!open) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[100]
        flex items-center justify-center
        bg-black/45 px-4
        backdrop-blur-sm
        transition-opacity duration-200
        ${
          isClosing
            ? "opacity-0"
            : "opacity-100"
        }
      `}
      onClick={closeModal}
    >
      <div
        className={`
          relative flex w-full max-w-[845px]
          overflow-visible rounded-2xl bg-white
          shadow-2xl
          transition-all duration-200
          ${
            isClosing
              ? "scale-95 opacity-0"
              : "scale-100 opacity-100"
          }
          max-md:max-h-[90vh]
          max-md:overflow-y-auto
          max-md:flex-col
        `}
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        {/* LEFT IMAGE */}

        <div
          className="
            w-1/2 overflow-hidden
            rounded-l-2xl
            max-md:h-[250px]
            max-md:w-full
            max-md:rounded-l-none
            max-md:rounded-t-2xl
          "
        >
          <Image
            src="/images/enquiry.webp"
            alt="Enquiry"
            width={500}
            height={700}
            priority
            className="
              h-[708px] w-full object-cover
              max-md:h-[250px]
            "
          />
        </div>

        {/* RIGHT FORM */}

        <div
          className="
            w-1/2 px-7 py-7
            max-md:w-full
          "
        >
          <div className="mb-8 flex items-center justify-between">
            <h2
              className="
                text-[27px] font-bold
                tracking-tight text-[#111827]
              "
            >
              Enquire Now
            </h2>

            <button
              type="button"
              onClick={closeModal}
              aria-label="Close enquiry form"
              className="
                rounded-full p-1
                text-[#6b7280]
                transition
                hover:bg-gray-100
                hover:text-black
              "
            >
              <X
                size={27}
                strokeWidth={1.8}
              />
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* NAME */}

            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="
                w-full border-0 border-b
                border-gray-300
                bg-transparent px-2 pb-3
                text-[15px] outline-none
                placeholder:text-[#9ca3af]
                focus:border-blue-500
              "
            />

            {/* EMAIL */}

            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="
                w-full border-0 border-b
                border-gray-300
                bg-transparent px-2 pb-3
                text-[15px] outline-none
                placeholder:text-[#9ca3af]
                focus:border-blue-500
              "
            />

            {/* PHONE */}

            <div
              ref={dropdownRef}
              className="relative"
            >
              <div
                className="
                  flex w-full items-center
                  border-b border-gray-300
                  pb-3
                "
              >
                <button
                  type="button"
                  onClick={() => {
                    setCountryOpen(
                      (prev) => !prev
                    );

                    setDomainOpen(false);
                    setModeOpen(false);
                  }}
                  className="
                    flex items-center gap-1
                    px-2 text-[15px]
                    text-gray-800
                  "
                >
                  <span className="text-[20px]">
                    {getFlag(
                      selectedCountry.code
                    )}
                  </span>

                  <ChevronDown
                    size={13}
                    className={`
                      text-gray-500
                      transition-transform
                      ${
                        countryOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />

                  <span>
                    {selectedCountry.dialCode}
                  </span>
                </button>

                <input
                  required
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={(event) => {
                    const value =
                      event.target.value.replace(
                        /[^0-9]/g,
                        ""
                      );

                    setForm((prev) => ({
                      ...prev,
                      phone: value,
                    }));
                  }}
                  placeholder="Phone Number"
                  className="
                    ml-2 flex-1 border-0
                    bg-transparent
                    text-[15px]
                    outline-none
                  "
                />
              </div>

              {/* COUNTRY DROPDOWN */}

              {countryOpen && (
                <div
                  className="
                    absolute left-0 top-[46px]
                    z-[300] w-full
                    overflow-hidden
                    rounded-md border
                    border-gray-200
                    bg-white shadow-xl
                  "
                >
                  {/* SEARCH */}

                  <div
                    className="
                      sticky top-0
                      border-b border-gray-200
                      bg-white p-2
                    "
                  >
                    <div
                      className="
                        flex items-center
                        rounded-md border
                        border-gray-300
                        px-2
                      "
                    >
                      <Search
                        size={16}
                        className="text-gray-400"
                      />

                      <input
                        type="text"
                        value={countrySearch}
                        onChange={(event) =>
                          setCountrySearch(
                            event.target.value
                          )
                        }
                        placeholder="Search country..."
                        className="
                          w-full border-0
                          px-2 py-2
                          text-sm
                          outline-none
                        "
                        autoFocus
                      />
                    </div>
                  </div>

                  {/* COUNTRY LIST */}

                  <div
                    className="
                      max-h-[250px]
                      overflow-y-auto
                    "
                  >
                    {filteredCountries.length >
                    0 ? (
                      filteredCountries.map(
                        (country) => (
                          <button
                            key={`${country.code}-${country.dialCode}`}
                            type="button"
                            onClick={() => {
                              setSelectedCountry(
                                country
                              );

                              setCountryOpen(
                                false
                              );

                              setCountrySearch(
                                ""
                              );
                            }}
                            className={`
                              flex w-full
                              items-center
                              justify-between
                              px-3 py-2.5
                              text-left
                              text-sm
                              hover:bg-gray-100
                              ${
                                selectedCountry.code ===
                                country.code
                                  ? "bg-blue-50"
                                  : ""
                              }
                            `}
                          >
                            <span className="flex items-center gap-3">
                              <span className="text-lg">
                                {getFlag(
                                  country.code
                                )}
                              </span>

                              <span>
                                {country.name}
                              </span>
                            </span>

                            <span className="text-gray-500">
                              {country.dialCode}
                            </span>
                          </button>
                        )
                      )
                    ) : (
                      <div className="px-3 py-4 text-center text-sm text-gray-500">
                        No country found
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* COMPANY */}

            <input
              required
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Enter company name"
              className="
                w-full border-0 border-b
                border-gray-300
                bg-transparent px-2 pb-3
                text-[15px] outline-none
                placeholder:text-[#9ca3af]
                focus:border-blue-500
              "
            />

            {/* DOMAIN */}

            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setDomainOpen(
                    (prev) => !prev
                  );
                  setModeOpen(false);
                  setCountryOpen(false);
                }}
                className={`
                  flex w-full
                  items-center
                  justify-between
                  border-b px-2 pb-3
                  text-left text-[15px]
                  ${
                    domainOpen
                      ? "border-blue-500"
                      : "border-gray-300"
                  }
                `}
              >
                <span
                  className={
                    form.domain
                      ? "text-gray-800"
                      : "text-[#9ca3af]"
                  }
                >
                  {form.domain ||
                    "Select Domain"}
                </span>

                <ChevronDown
                  size={19}
                  className={`
                    text-gray-500
                    transition-transform
                    ${
                      domainOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>

              {domainOpen && (
                <div
                  className="
                    absolute left-0 right-0
                    top-[43px] z-[200]
                    overflow-hidden
                    rounded-md border
                    border-gray-200
                    bg-white shadow-lg
                  "
                >
                  <div
                    className="
                      max-h-[285px]
                      overflow-y-auto py-1
                    "
                  >
                    {domainOptions.map(
                      (option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setForm(
                              (prev) => ({
                                ...prev,
                                domain:
                                  option,
                              })
                            );

                            setDomainOpen(
                              false
                            );
                          }}
                          className={`
                            block w-full
                            px-3 py-3
                            text-left text-[16px]
                            hover:bg-gray-100
                            ${
                              form.domain ===
                              option
                                ? "bg-[#dbeafe]"
                                : ""
                            }
                          `}
                        >
                          {option}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* CANDIDATES */}

            <input
              type="number"
              min="1"
              name="candidates"
              value={form.candidates}
              onChange={handleChange}
              placeholder="Enter No. of candidates"
              className="
                w-full border-0 border-b
                border-gray-300
                bg-transparent px-2 pb-3
                text-[15px] outline-none
                placeholder:text-[#9ca3af]
                focus:border-blue-500
              "
            />

            {/* MODE */}

            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setModeOpen(
                    (prev) => !prev
                  );
                  setDomainOpen(false);
                  setCountryOpen(false);
                }}
                className={`
                  flex w-full
                  items-center
                  justify-between
                  border-b px-2 pb-3
                  text-left text-[15px]
                  ${
                    modeOpen
                      ? "border-blue-500"
                      : "border-gray-300"
                  }
                `}
              >
                <span
                  className={
                    form.mode
                      ? "text-gray-800"
                      : "text-[#9ca3af]"
                  }
                >
                  {form.mode ||
                    "Select Mode of Delivery *"}
                </span>

                <ChevronDown
                  size={19}
                  className={`
                    text-gray-500
                    transition-transform
                    ${
                      modeOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>

              {modeOpen && (
                <div
                  className="
                    absolute left-0 right-0
                    top-[43px] z-[200]
                    overflow-hidden
                    rounded-md border
                    border-gray-200
                    bg-white shadow-lg
                  "
                >
                  {deliveryModeOptions.map(
                    (option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setForm(
                            (prev) => ({
                              ...prev,
                              mode: option,
                            })
                          );

                          setModeOpen(false);
                        }}
                        className="
                          block w-full
                          px-3 py-3
                          text-left text-[16px]
                          hover:bg-gray-100
                        "
                      >
                        {option}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>

            {/* LOCATION */}

            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Eg: Gurgaon, Delhi, India"
              className="
                w-full border-0 border-b
                border-gray-300
                bg-transparent px-2 pb-3
                text-[15px] outline-none
                placeholder:text-[#9ca3af]
                focus:border-blue-500
              "
            />

            {/* SUBMIT */}

            <button
              type="submit"
              className="
                mt-3 w-full
                rounded-lg
                bg-[#2563EB]
                py-3
                text-[17px]
                font-semibold
                text-white
                transition
                hover:bg-blue-700
                active:scale-[0.99]
              "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}