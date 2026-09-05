'use client'

import Image from 'next/image'
import { Bell } from 'lucide-react'

export default function ComingSoon() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/pc background.png"
          alt="background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center">
          <Image
            src="/rangvelogo.png"
            alt="Rangve Logo"
            width={300}
            height={300}
            className="mb-6"
            priority
          />
        </div>

        {/* Website Label */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-8 bg-slate-400"></div>
          <span className="text-sm font-semibold tracking-widest text-slate-500">
            WEBSITE
          </span>
          <div className="h-px w-8 bg-slate-400"></div>
        </div>

        {/* Main Heading */}
        <h1 className="mb-8 text-center text-5xl md:text-6xl font-bold tracking-tight text-slate-700">
          COMING SOON
        </h1>

        {/* Divider Dot */}
        <div className="mb-6 h-1 w-1 rounded-full bg-slate-600"></div>

        {/* Subheading */}
        <p className="mb-10 text-center text-lg text-slate-600 max-w-md">
          Something beautiful is on the way.
        </p>

        {/* CTA Button */}
        <button className="mb-16 flex items-center gap-3 rounded-full border-2 border-slate-700 px-8 py-3 text-slate-700 font-semibold tracking-wider hover:bg-slate-700 hover:text-white transition-colors duration-300">
          <Bell size={20} />
          STAY UPDATED
        </button>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-600">
              <svg
                className="h-6 w-6 text-slate-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 1112 2.944a11.954 11.954 0 018.618 3.04M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <span className="text-xs md:text-sm font-semibold tracking-widest text-slate-700">
              CLEAN INGREDIENTS
            </span>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-600">
              <svg
                className="h-6 w-6 text-slate-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <span className="text-xs md:text-sm font-semibold tracking-widest text-slate-700">
              CLINICALLY INSPIRED
            </span>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-600">
              <svg
                className="h-6 w-6 text-slate-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="text-xs md:text-sm font-semibold tracking-widest text-slate-700">
              VISIBLE RESULTS
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
