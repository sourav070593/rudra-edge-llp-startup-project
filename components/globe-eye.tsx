"use client"

import * as React from "react"

export function GlobeEyeMark() {
  return (
    <div
      aria-hidden="true"
      className="w-11 h-11 rounded-2xl border border-border/40 bg-card/20 backdrop-blur-sm overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.10)]"
    >
      {/* Globe layer */}
      <div className="absolute inset-0 grid place-items-center rudra-globe-eye-globe">
        <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gStroke" x1="8" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#93c5fd" />
              <stop offset="1" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          <circle cx="20" cy="20" r="14" stroke="url(#gStroke)" strokeWidth="2.6" opacity="0.95" />
          <path d="M6 20h28" stroke="#60a5fa" strokeWidth="2" opacity="0.55" strokeLinecap="round" />
          <path d="M20 6c4 4.7 6 9.2 6 14s-2 9.3-6 14" stroke="#60a5fa" strokeWidth="2" opacity="0.55" strokeLinecap="round" />
          <path d="M20 6c-4 4.7-6 9.2-6 14s2 9.3 6 14" stroke="#60a5fa" strokeWidth="2" opacity="0.35" strokeLinecap="round" />
          <path d="M10 12c3.8 2.4 12.2 2.4 20 0" stroke="#93c5fd" strokeWidth="1.6" opacity="0.35" strokeLinecap="round" />
          <path d="M10 28c3.8-2.4 12.2-2.4 20 0" stroke="#93c5fd" strokeWidth="1.6" opacity="0.35" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}

