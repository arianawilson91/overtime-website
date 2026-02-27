import Link from 'next/link'
import ReviewCarousel from '@/components/ReviewCarousel'

const highlights = [
  { icon: '🏆', label: 'Best Sports Bar', sub: 'Cape Coral, Voted by Locals' },
  { icon: '🍕', label: 'Best Cheesesteaks', sub: 'Award-Winning Recipe' },
  { icon: '🥗', label: 'Best Salads', sub: 'Fresh, Made to Order' },
]

const menuPreviews = [
  { title: 'Appetizers', desc: 'Wings, Nachos, Mozzarella Sticks, Calamari & more', href: '/menu#appetizers' },
  { title: 'Pizza', desc: 'Handmade dough, specialty pies, build your own 10" or 14"', href: '/menu#pizza' },
  { title: 'Sandwiches & Burgers', desc: 'Philly Cheesesteak, 8oz burgers, clubs & more', href: '/menu#sandwiches' },
  { title: 'Entrees', desc: 'NY Strip, Ribs, Chicken Marsala, Pasta dishes', href: '/menu#entrees' },
]

const weeklySpecials = [
  { day: 'Monday', deal: 'Margarita Monday + Prime Rib Dinner after 4pm' },
  { day: 'Tuesday', deal: 'Bottomless Boneless Wings + $6 Martinis' },
  { day: 'Wednesday', deal: 'Large 1-Topping Pizza for $13.95' },
  { day: 'Thursday', deal: '10 Wings + Fries for $11.95' },
  { day: 'Friday', deal: 'Fish & Chips Special' },
  { day: 'Saturday', deal: 'Date Night for Two: $50 — apps, 2 entrees, 2 drinks' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center bg-brand-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-red/20 via-brand-black to-brand-black" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="text-brand-red font-display tracking-[0.3em] text-sm mb-4 uppercase">Cape Coral, FL</div>
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-widest mb-4 leading-none">
            Where Every<br />
            <span className="text-brand-red">Game Night</span><br />
            Is Legendary
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-xl mx-auto font-sans font-normal">
            Award-winning food, ice-cold drinks, and every game on our massive screens. Cape Coral&apos;s favorite sports pub.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/menu" className="btn-primary text-base px-10 py-4">View Our Menu</Link>
            <a
              href="https://www.toasttab.com/local/order/overtime-pizzeria-and-sports-pub-1708-cape-coral-pkwy-w/r-049b8940-1fee-4a50-83ef-0a41c9145e41"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-10 py-4"
            >
              Order Online
            </a>
          </div>
          <p className="mt-8 text-white/40 text-sm font-sans">
            1708 Cape Coral Pkwy W &middot; (239) 541-3367 &middot; Open Daily 11am
          </p>
        </div>
        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* AWARDS STRIP */}
      <section className="bg-brand-red py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8">
          {highlights.map(h => (
            <div key={h.label} className="text-center text-white">
              <div className="text-2xl mb-1">{h.icon}</div>
              <div className="font-display tracking-widest text-sm">{h.label}</div>
              <div className="text-white/70 text-xs font-sans">{h.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section className="py-20 px-4 bg-brand-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-title mb-3">From Our Kitchen</div>
            <p className="text-gray-600 max-w-xl mx-auto">Handmade, made-to-order, and worth every bite. From our signature wings to hand-cut NY Strip.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {menuPreviews.map(item => (
              <Link key={item.title} href={item.href} className="menu-card group">
                <h3 className="font-display text-xl tracking-wider text-brand-black group-hover:text-brand-red transition-colors mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-4 text-brand-red text-xs font-display tracking-widest group-hover:underline">Explore &rarr;</div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/menu" className="btn-primary">Full Menu</Link>
            <Link href="/drinks" className="btn-secondary ml-4">Drink Menu</Link>
          </div>
        </div>
      </section>

      {/* WEEKLY SPECIALS */}
      <section className="py-20 px-4 bg-brand-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-title mb-3">Weekly Specials</div>
            <p className="text-white/60 max-w-lg mx-auto">Happy Hour Mon–Fri 11am–5pm: Wells &amp; Wines $5, Domestic Drafts $4. Plus daily deals all week long.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {weeklySpecials.map(s => (
              <div key={s.day} className="border border-white/10 p-5 hover:border-brand-red transition-colors group">
                <div className="font-display text-brand-red tracking-widest text-lg mb-2 group-hover:text-white transition-colors">{s.day}</div>
                <p className="text-white/70 text-sm leading-relaxed">{s.deal}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/specials" className="btn-primary">View All Specials</Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <ReviewCarousel />

      {/* ORDER CTA */}
      <section className="py-20 px-4 bg-brand-light-gray">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-title mb-4">Order Online</div>
          <p className="text-gray-600 mb-8 text-lg">Don&apos;t feel like cooking? We&apos;ve got you covered. Order your favorites for pickup.</p>
          <a
            href="https://www.toasttab.com/local/order/overtime-pizzeria-and-sports-pub-1708-cape-coral-pkwy-w/r-049b8940-1fee-4a50-83ef-0a41c9145e41"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-12 py-4"
          >
            Order Now
          </a>
        </div>
      </section>

      {/* CATERING / PARTIES */}
      <section className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-brand-red font-display tracking-widest text-sm mb-2 uppercase">Catering</div>
            <h2 className="font-display text-4xl md:text-5xl tracking-widest text-brand-black mb-4">Let Us Cater Your Next Event</h2>
            <p className="text-gray-600 leading-relaxed mb-6">Overtime would be honored to provide our services for your next event. Each event is bespoke to your tastes and needs, so your guests get the best experience possible.</p>
            <Link href="/parties" className="btn-primary">Learn More</Link>
          </div>
          <div>
            <div className="text-brand-red font-display tracking-widest text-sm mb-2 uppercase">Private Parties</div>
            <h2 className="font-display text-4xl md:text-5xl tracking-widest text-brand-black mb-4">We Host. You Party.</h2>
            <p className="text-gray-600 leading-relaxed mb-6">Whether it&apos;s a birthday, baby shower, office event, or watch party — our team handles everything so you can enjoy the moment.</p>
            <Link href="/parties" className="btn-secondary">Book Your Party</Link>
          </div>
        </div>
      </section>
    </>
  )
}
