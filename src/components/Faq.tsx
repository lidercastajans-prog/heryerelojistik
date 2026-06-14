"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Faq as FaqType } from "@/lib/faqs";

export default function Faq({ faqs, className = "" }: { faqs: FaqType[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={`mx-auto max-w-3xl divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white ${className}`}>
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-brand-50/50"
              >
                <span className="font-heading text-base font-bold text-ink">{f.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-brand-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{f.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
