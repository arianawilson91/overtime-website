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
    const t = setInterval(() => setIdx(i => (i + 1) % reviews.length), 5000)
    return () => clearInterval(t)
  }, [])

  const r = reviews[idx]

  return (
    <section className="bg-brand-black py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="section-title mb-10">What People Are Saying</div>
        <div className="relative min-h-[120px]">
          <p className="text-white/90 text-xl md:text-2xl italic leading-relaxed mb-6">&ldquo;{r.text}&rdquo;</p>
          <p className="text-brand-red font-display tracking-widest text-sm">{r.name} <span className="text-white/40">via {r.source}</span></p>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === idx ? 'bg-brand-red' : 'bg-white/30'}`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
