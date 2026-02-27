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
  const [phase, setPhase] = useState(-1)

  useEffect(() => {
    const start = setTimeout(() => setPhase(0), 800)
    return () => clearTimeout(start)
  }, [])

  useEffect(() => {
    if (phase < 0) return
    if (phase < phrases.length) {
      const t = setTimeout(() => setPhase(p => p + 1), 2200)
      return () => clearTimeout(t)
    }
  }, [phase])

  return (
    <>
      {/* Centered text area */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <div className="relative h-28 md:h-36 flex items-center justify-center w-full">
          {phrases.map((phrase, i) => (
            <div
              key={phrase.text}
              className={`absolute inset-x-0 text-center transition-all duration-700 ${
                phase === i
                  ? 'opacity-100 translate-y-0 scale-100'
                  : phase > i
                  ? 'opacity-0 -translate-y-6 scale-95'
                  : 'opacity-0 translate-y-6 scale-95'
              }`}
            >
              <h2
                className={`font-display tracking-widest drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] ${
                  i === 0
                    ? 'text-5xl md:text-8xl text-brand-red'
                    : 'text-3xl md:text-6xl text-white'
                }`}
                style={{ textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.5)' }}
              >
                {phrase.text}
              </h2>
              {phrase.sub && (
                <div
                  className="font-display text-base md:text-2xl text-white tracking-[0.3em] uppercase mt-2"
                  style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}
                >
                  {phrase.sub}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTAs at the bottom */}
      <div
        className={`absolute bottom-16 left-0 right-0 z-10 text-center px-4 transition-all duration-1000 ${
          phase >= phrases.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="flex flex-wrap gap-4 justify-center mb-4">
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
        <p className="text-white/50 text-sm font-sans" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}>
          1708 Cape Coral Pkwy W &middot; (239) 541-3367 &middot; Open Daily 11am
        </p>
      </div>
    </>
  )
}
