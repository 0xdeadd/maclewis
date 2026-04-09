"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#service-area", label: "Service Area" },
  { href: "#contact", label: "Contact" },
];

// TODO: Replace with real phone number
const PHONE = "770-555-0100";
const PHONE_HREF = `tel:+1${PHONE.replace(/-/g, "")}`;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-mac-dark/95 backdrop-blur-sm shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div
            className={`font-heading font-bold tracking-tight text-white transition-all duration-300 ${
              scrolled ? "text-xl" : "text-2xl"
            }`}
          >
            <span className="text-mac-red">MAC LEWIS</span>
            <span className="block text-xs tracking-[0.2em] font-sans font-normal text-white/80">
              CLEARING & GRADING
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href={PHONE_HREF} className="flex items-center gap-2 text-white">
            <Phone className="w-4 h-4 text-mac-yellow" />
            <span className="text-sm font-semibold">{PHONE}</span>
          </a>
          <a
            href="#contact"
            className={cn(
              buttonVariants(),
              "bg-mac-red hover:bg-mac-red/90 text-white font-semibold"
            )}
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile: phone + menu */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-mac-red text-white"
            aria-label="Call us"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-mac-dark/98 backdrop-blur-sm border-t border-white/10">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/80 hover:text-white py-2 text-lg font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className={cn(
                buttonVariants(),
                "bg-mac-red hover:bg-mac-red/90 text-white font-semibold mt-2 w-full"
              )}
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
