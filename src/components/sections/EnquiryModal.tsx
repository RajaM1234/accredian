"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { X } from "lucide-react";

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

export default function EnquiryModal({ open, onClose }: Props) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!open) {
      setIsClosing(false);
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 180);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = { ...form };

    if (!payload.name || !payload.email || !payload.phone || !payload.company) {
      toast.error("Please fill in the required fields.");
      return;
    }

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      toast.success(
        "We've received your enquiry. Our team will contact you shortly.",
      );
      setForm(initialForm);
      closeModal();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/45 backdrop-blur-sm transition-opacity duration-200 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      onClick={closeModal}
    >
      <div
        className={`relative flex w-[850px] overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-200 ${
          isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="w-[48%]">
          <Image
            src="/images/enquiry.webp"
            alt="Enquiry"
            width={500}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="w-[52%] p-7">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Enquire Now</h2>
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close enquiry form"
              className="rounded-full p-1 text-gray-500 transition hover:bg-gray-100 hover:text-black"
            >
              <X size={28} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="w-full border-b border-gray-300 pb-2 text-sm outline-none placeholder:text-gray-400"
            />

            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full border-b border-gray-300 pb-2 text-sm outline-none placeholder:text-gray-400"
            />

            <input
              required
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border-b border-gray-300 pb-2 text-sm outline-none placeholder:text-gray-400"
            />

            <input
              required
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Enter company name"
              className="w-full border-b border-gray-300 pb-2 text-sm outline-none placeholder:text-gray-400"
            />

            <input
              type="text"
              name="domain"
              value={form.domain}
              onChange={handleChange}
              placeholder="Select Domain"
              className="w-full border-b border-gray-300 pb-2 text-sm outline-none placeholder:text-gray-400"
            />

            <input
              type="text"
              name="candidates"
              value={form.candidates}
              onChange={handleChange}
              placeholder="Enter No. of candidates"
              className="w-full border-b border-gray-300 pb-2 text-sm outline-none placeholder:text-gray-400"
            />

            <input
              type="text"
              name="mode"
              value={form.mode}
              onChange={handleChange}
              placeholder="Select Mode of Delivery"
              className="w-full border-b border-gray-300 pb-2 text-sm outline-none placeholder:text-gray-400"
            />

            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Eg: Gurgaon, Delhi, India"
              className="w-full border-b border-gray-300 pb-2 text-sm outline-none placeholder:text-gray-400"
            />

            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-[#2563EB] py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
