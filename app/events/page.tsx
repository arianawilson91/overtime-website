import Link from 'next/link'

const events = [
  {
    title: 'NFL Sunday Ticket',
    when: 'Every Sunday During Football Season',
    desc: 'Every game, every screen. Bucket specials, wing deals, and the best game day atmosphere in Cape Coral.',
  },
  {
    title: 'Live Music Fridays',
    when: 'Select Fridays · 7pm–10pm',
    desc: 'Local artists performing live on our patio. Check our Facebook for the latest lineup.',
  },
  {
    title: 'Trivia Night',
    when: 'Wednesdays · 7pm',
    desc: 'Test your knowledge and win prizes! Teams of up to 6. Free to play.',
  },
  {
    title: 'UFC Fight Nights',
    when: 'Select Saturdays',
    desc: 'All the big fights on our big screens. Drink specials during every main card.',
  },
  {
    title: 'March Madness',
    when: 'March · All Day',
    desc: 'Every tournament game on multiple screens. Bracket contests and beer specials all month.',
  },
  {
    title: 'Eagles Watch Parties',
    when: 'Every Eagles Game',
    desc: 'Cape Coral\'s #1 Philly sports bar. Eagles fans, this is your home away from home.',
  },
]

export default function EventsPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/backgrounds/events-back.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-black/80" />
        </div>
        <div className="relative z-10">
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-widest mb-4">Events</h1>
          <p className="text-white/60 max-w-xl mx-auto">From game day to live music — there&apos;s always something happening at Overtime.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-brand-light-gray">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map(event => (
              <div key={event.title} className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-display text-2xl tracking-widest text-brand-red mb-1">{event.title}</h3>
                <div className="font-display tracking-wider text-brand-black text-sm mb-3">{event.when}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere photo strip */}
      <section className="bg-brand-black py-0">
        <div className="grid grid-cols-3 gap-0">
          <div className="relative h-40 md:h-56 overflow-hidden">
            <img src="/images/backgrounds/hero-slide-1.jpg" alt="Sports bar atmosphere" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-brand-black/20" />
          </div>
          <div className="relative h-40 md:h-56 overflow-hidden">
            <img src="/images/backgrounds/hero-slide-2.jpg" alt="Game day" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-brand-black/20" />
          </div>
          <div className="relative h-40 md:h-56 overflow-hidden">
            <img src="/images/gallery/bartender.jpg" alt="Bar scene" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-brand-black/20" />
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/backgrounds/reviews-back.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-black/80" />
        </div>
        <div className="relative z-10">
          <div className="section-title mb-4">Stay in the Loop</div>
          <p className="text-white/60 mb-8">Follow us on Facebook and Instagram for event updates and announcements.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://www.facebook.com/238258166185929" target="_blank" rel="noopener noreferrer" className="btn-primary">Facebook</a>
            <a href="https://www.instagram.com/overtime_sportspub" target="_blank" rel="noopener noreferrer" className="btn-secondary">Instagram</a>
          </div>
        </div>
      </section>
    </div>
  )
}
