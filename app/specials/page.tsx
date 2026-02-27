import Link from 'next/link'

const dailySpecials = [
  {
    day: 'Monday',
    title: 'Margarita Monday',
    deals: ['$6 Margaritas All Day', 'Prime Rib Dinner after 4pm'],
  },
  {
    day: 'Tuesday',
    title: 'Wing It Tuesday',
    deals: ['Bottomless Boneless Wings $16.95', '$6 Martinis All Day'],
  },
  {
    day: 'Wednesday',
    title: 'Pizza Wednesday',
    deals: ['Large 1-Topping Pizza $13.95', '$5 House Wines'],
  },
  {
    day: 'Thursday',
    title: 'Wing Thursday',
    deals: ['10 Wings + Fries $11.95', '$5 Domestic Drafts'],
  },
  {
    day: 'Friday',
    title: 'Fish Friday',
    deals: ['Fish & Chips Special', 'Happy Hour 11am–5pm'],
  },
  {
    day: 'Saturday',
    title: 'Date Night Saturday',
    deals: ['Date Night for Two: $50', '2 Apps, 2 Entrees, 2 Drinks'],
  },
  {
    day: 'Sunday',
    title: 'Game Day Sunday',
    deals: ['NFL Sunday Ticket on Every Screen', 'Bucket Specials & Wing Deals'],
  },
]

export default function SpecialsPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/backgrounds/specials-back.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-black/80" />
        </div>
        <div className="relative z-10">
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-widest mb-4">Specials</h1>
          <p className="text-white/60 max-w-xl mx-auto">Something great every day of the week. Plus Happy Hour Monday–Friday, 11am–5pm.</p>
        </div>
      </section>

      {/* Happy Hour Banner */}
      <section className="bg-brand-red py-8 px-4 text-center">
        <h2 className="font-display text-3xl text-white tracking-widest mb-2">Happy Hour</h2>
        <p className="text-white/90 text-lg">Monday – Friday &middot; 11am – 5pm</p>
        <p className="text-white/70 mt-2">Wells &amp; Wines $5 &middot; Domestic Drafts $4</p>
      </section>

      {/* Daily Specials */}
      <section className="py-20 px-4 bg-brand-light-gray">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-title">Daily Deals</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dailySpecials.map(s => (
              <div key={s.day} className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="font-display text-brand-red tracking-widest text-2xl mb-1">{s.day}</div>
                <div className="font-display tracking-wider text-brand-black text-lg mb-3">{s.title}</div>
                <ul className="space-y-2">
                  {s.deals.map(deal => (
                    <li key={deal} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-brand-red mt-0.5">&#9679;</span>
                      {deal}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured food photos */}
      <section className="bg-brand-black py-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          <div className="relative h-40 md:h-56 overflow-hidden">
            <img src="/images/gallery/wings.jpg" alt="Wings" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="relative h-40 md:h-56 overflow-hidden">
            <img src="/images/food/meat-lovers-pizza.jpg" alt="Pizza" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="relative h-40 md:h-56 overflow-hidden">
            <img src="/images/gallery/bartender.jpg" alt="Bartender" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="relative h-40 md:h-56 overflow-hidden">
            <img src="/images/food/bbq-ribs.jpg" alt="Ribs" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/backgrounds/order-back.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-black/75" />
        </div>
        <div className="relative z-10">
          <div className="section-title mb-4">Don&apos;t Miss Out</div>
          <p className="text-white/60 mb-8">Follow us on social media for flash deals and event announcements.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/events" className="btn-primary">Upcoming Events</Link>
            <Link href="/menu" className="btn-secondary">Full Menu</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
