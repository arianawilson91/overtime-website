'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const phrases = [
  { text: 'Overtime', sub: 'Pizzeria & Sports Pub' },
  { text: 'Award-Winning Food' },
  { text: 'Ice-Cold Drinks' },
  { text: 'Every Game. Every Screen.' },
]

export default function HeroText() {
  const [phase, setPhase] = useState(-1) // -1 = not started, 0-2 = phrases, 3 = CTAs

  useEffect(() => {
    // Small initial delay before first phrase
    const start = setTimeout(() => setPhase(0), 800)
    return () => clearTimeout(start)
  }, [])

  useEffect(() => {
    if (phase < 0) return
    if (phase < phrases.length) {
      // Show each phrase for 2s then move to next
      const t = setTimeout(() => setPhase(p => p + 1), 2200)
      return () => clearTimeout(t)
    }
  }, [phase])

  return (
    <div className="absolute bottom-20 left-0 right-0 z-10 text-center px-4">
      {/* Fading phrases */}
      <div className="relative h-24 md:h-32 flex items-center justify-center mb-6">
        {phrases.map((phrase, i) => (
          <div
            key={phrase.text}
            className={`absolute inset-x-0 transition-all duration-700 ${
              phase === i
                ? 'opacity-100 translate-y-0'
                : phase > i
                ? 'opacity-0 -translate-y-4'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <h2 className={`font-display tracking-widest text-white ${i === 0 ? 'text-5xl md:text-7xl' : 'text-4xl md:text-6xl'}`}>
              {i === 0 ? <span className="text-brand-red">{phrase.text}</span> : phrase.text}
            </h2>
            {phrase.sub && (
              <div className="font-display text-lg md:text-2xl text-white/70 tracking-[0.25em] uppercase mt-2">
                {phrase.sub}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTAs fade in after phrases finish */}
      <div
        className={`transition-all duration-1000 ${
          phase >= phrases.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="flex flex-wrap gap-4 justify-center mb-5">
          <Link
            href="/menu"
            className="bg-brand-red text-white font-display tracking-[0.2em] uppercase px-10 py-4 text-base hover:bg-brand-red-dark transition-colors duration-200 shadow-lg shadow-brand-red/20"
          >
            View Our Menu
          </Link>
          <a
            href="https://www.toasttab.com/local/order/overtime-pizzeria-and-sports-pub-1708-cape-coral-pkwy-w/r-049b8940-1fee-4a50-83ef-0a41c9145e41"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-display tracking-[0.2em] uppercase px-10 py-4 text-base hover:bg-white/20 transition-colors duration-200"
          >
            Order Online
          </a>
        </div>
        <p className="text-white/40 text-sm font-sans">
          1708 Cape Coral Pkwy W &middot; (239) 541-3367 &middot; Open Daily 11am
        </p>
      </div>
    </div>
  )
}
