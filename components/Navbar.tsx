"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-green-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative h-11 w-11">
            <img
              src="/images/logo/everest-logo.png"
              alt="Everest Loan"
              className="object-contain"
            />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-wide text-green-700">
              EVEREST
            </span>

            <span className="mt-1 text-[10px] font-semibold tracking-[0.35em] text-green-600">
              LOAN
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#advantages"
            className="text-sm font-medium text-green-700 transition hover:text-green-800"
          >
            Advantage
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-green-700 transition hover:text-green-800"
          >
            How It Works
          </a>

          <a
            href="#mission"
            className="text-sm font-medium text-green-700 transition hover:text-green-800"
          >
            Our Mission
          </a>

          <a
            href="#faq"
            className="text-sm font-medium text-green-700 transition hover:text-green-800"
          >
            FAQs
          </a>

          <a
            href="#apply"
            className="rounded-md bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-2xl text-green-700 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full border-t border-green-100 bg-white p-6 shadow-lg md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#advantages"
              onClick={() => setOpen(false)}
              className="font-medium text-green-700 transition hover:text-green-800"
            >
              Advantage
            </a>

            <a
              href="#how-it-works"
              onClick={() => setOpen(false)}
              className="font-medium text-green-700 transition hover:text-green-800"
            >
              How It Works
            </a>

            <a
              href="#mission"
              onClick={() => setOpen(false)}
              className="font-medium text-green-700 transition hover:text-green-800"
            >
              Our Mission
            </a>

            <a
              href="#faq"
              onClick={() => setOpen(false)}
              className="font-medium text-green-700 transition hover:text-green-800"
            >
              FAQs
            </a>

            <a
              href="#apply"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-green-700 p-3 text-center font-semibold text-white transition hover:bg-green-800"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}