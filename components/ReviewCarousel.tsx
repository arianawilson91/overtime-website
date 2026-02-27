'use client'
import { useState, useEffect } from 'react'

const reviews = [
  { name: 'Tammy M.', source: 'Yelp', text: 'Eagles and Flyers memorabilia all over in Cape Coral, what an amazing bar. Huge TVs everywhere. Pizza and Stromboli\'s were delicious.' },
  { name: 'Carrie S.', source: 'Yelp', text: 'We love Overtime Pizzeria and Sports Pub! Great atmosphere for catching a game or just having a great meal with friends.' },
  { name: 'Lori S.', source: 'Yelp', text: 'Overtime is a great local sports bar for folks in the southwest Florida area. I love walking there from my neighborhood.' },
  { name: 'Jasmin L.', source: 'Yelp', text: 'Can\'t beat the price! Drinks and food are fantastic. Totally underrated. 10/10 — try the garlic parm wings!' },
]

export default function ReviewCarousel() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % reviews.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/backgrounds/reviews-back.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-black/85" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="section-title mb-12">What People Are Saying</div>

        <div className="relative min-h-[200px] md:min-h-[180px]">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-[800ms] ease-in-out ${
                i === idx
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-6 scale-[0.97]'
              }`}
            >
              <div className="text-brand-red/60 text-6xl font-serif leading-none mb-4">&ldquo;</div>
              <p className="text-white/90 text-xl md:text-2xl italic leading-relaxed mb-6 px-4">
                {r.text}
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-px bg-brand-red/50" />
                <p className="text-brand-red font-display tracking-widest text-sm">
                  {r.name} <span className="text-white/40">via {r.source}</span>
                </p>
                <div className="w-8 h-px bg-brand-red/50" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`transition-all duration-500 rounded-full ${
                i === idx
                  ? 'bg-brand-red w-8 h-2.5'
                  : 'bg-white/30 hover:bg-white/50 w-2.5 h-2.5'
              }`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
