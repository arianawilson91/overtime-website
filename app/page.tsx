import Link from 'next/link'
import ReviewCarousel from '@/components/ReviewCarousel'

const highlights = [
  { icon: '🏆', label: 'Best Sports Bar', sub: 'Cape Coral, Voted by Locals' },
  { icon: '🍕', label: 'Best Cheesesteaks', sub: 'Award-Winning Recipe' },
  { icon: '🥗', label: 'Best Salads', sub: 'Fresh, Made to Order' },
]

const menuPreviews = [
  { title: 'Appetizers', desc: 'Wings, Nachos, Mozzarella Sticks, Calamari & more', href: '/menu#appetizers', img: '/images/gallery/wings.jpg' },
  { title: 'Pizza', desc: 'Handmade dough, specialty pies, build your own 10" or 14"', href: '/menu#pizza', img: '/images/food/meat-lovers-pizza.jpg' },
  { title: 'Sandwiches & Burgers', desc: 'Philly Cheesesteak, 8oz burgers, clubs & more', href: '/menu#sandwiches', img: '/images/food/philly.jpg' },
  { title: 'Entrees', desc: 'NY Strip, Ribs, Chicken Marsala, Pasta dishes', href: '/menu#entrees', img: '/images/food/chicken-marsala.jpg' },
]

const weeklySpecials = [
  { day: 'Monday', deal: 'Margarita Monday + Prime Rib Dinner after 4pm' },
  { day: 'Tuesday', deal: 'Bottomless Boneless Wings + $6 Martinis' },
  { day: 'Wednesday', deal: 'Large 1-Topping Pizza for $13.95' },
  { day: 'Thursday', deal: '10 Wings + Fries for $11.95' },
  { day: 'Friday', deal: 'Fish & Chips Special' },
  { day: 'Saturday', deal: 'Date Night for Two: $50 — apps, 2 entrees, 2 drinks' },
]

const galleryImages = [
  { src: '/images/gallery/flambe.jpg', alt: 'Flambé cooking' },
  { src: '/images/gallery/wings.jpg', alt: 'Chicken wings' },
  { src: '/images/gallery/bartender.jpg', alt: 'Bartender crafting cocktails' },
  { src: '/images/gallery/steak-salad.jpg', alt: 'House steak salad' },
  { src: '/images/gallery/bourbon-ale.jpg', alt: 'Kentucky Bourbon Ale' },
  { src: '/images/gallery/calamari.jpg', alt: 'Buffalo calamari' },
  { src: '/images/gallery/brownie-sundae.jpg', alt: 'Fudge brownie sundae' },
  { src: '/images/gallery/touchdown-cocktail.jpg', alt: 'Touchdown cocktail' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center bg-brand-black overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/backgrounds/video-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay — light at top for nav, heavier at bottom for CTAs */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/20 via-transparent via-60% to-brand-black" />

        {/* CTAs pinned to lower third */}
        <div className="absolute bottom-20 left-0 right-0 z-10 text-center px-4">
          <div className="flex flex-wrap gap-4 justify-center mb-5">
            <Link href="/menu" className="bg-brand-red text-white font-display tracking-[0.2em] uppercase px-10 py-4 text-base hover:bg-brand-red-dark transition-colors duration-200 shadow-lg shadow-brand-red/20">View Our Menu</Link>
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

      {/* MENU PREVIEW — with food photos */}
      <section className="py-20 px-4 bg-brand-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-title mb-3">From Our Kitchen</div>
            <p className="text-gray-600 max-w-xl mx-auto">Handmade, made-to-order, and worth every bite. From our signature wings to hand-cut NY Strip.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {menuPreviews.map(item => (
              <Link key={item.title} href={item.href} className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl tracking-wider text-brand-black group-hover:text-brand-red transition-colors mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  <div className="mt-4 text-brand-red text-xs font-display tracking-widest group-hover:underline">Explore &rarr;</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/menu" className="btn-primary">Full Menu</Link>
            <Link href="/drinks" className="btn-secondary ml-4">Drink Menu</Link>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="relative py-20 px-4 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/backgrounds/gallery-back.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-title mb-3">The Overtime Experience</div>
            <p className="text-white/60 max-w-lg mx-auto">Great food, cold drinks, and the best game day atmosphere in Cape Coral.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <div key={img.src} className={`relative overflow-hidden rounded-sm group ${i === 0 || i === 5 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEEKLY SPECIALS */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/backgrounds/specials-back.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-black/85" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-title mb-3">Weekly Specials</div>
            <p className="text-white/60 max-w-lg mx-auto">Happy Hour Mon–Fri 11am–5pm: Wells &amp; Wines $5, Domestic Drafts $4. Plus daily deals all week long.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {weeklySpecials.map(s => (
              <div key={s.day} className="border border-white/10 p-5 hover:border-brand-red transition-colors group bg-brand-black/40 backdrop-blur-sm">
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

      {/* ORDER CTA — with background image */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/backgrounds/order-back.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-black/70" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="section-title mb-4">Order Online</div>
          <p className="text-white/80 mb-8 text-lg">Don&apos;t feel like cooking? We&apos;ve got you covered. Order your favorites for pickup.</p>
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

      {/* CATERING / PARTIES — with photos */}
      <section className="py-0 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Catering */}
          <div className="relative">
            <img src="/images/backgrounds/catering-left.jpg" alt="Catering spread" className="w-full h-72 md:h-full object-cover" />
            <div className="absolute inset-0 bg-brand-black/60 flex items-center justify-center">
              <div className="text-center px-8 max-w-md">
                <div className="text-brand-red font-display tracking-widest text-sm mb-2 uppercase">Catering</div>
                <h2 className="font-display text-3xl md:text-4xl tracking-widest text-white mb-4">Let Us Cater Your Next Event</h2>
                <p className="text-white/70 text-sm leading-relaxed mb-6">Each event is bespoke to your tastes and needs, so your guests get the best experience possible.</p>
                <Link href="/parties" className="btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
          {/* Private Parties */}
          <div className="relative">
            <img src="/images/backgrounds/parties-right.jpg" alt="Private party setup" className="w-full h-72 md:h-full object-cover" />
            <div className="absolute inset-0 bg-brand-black/60 flex items-center justify-center">
              <div className="text-center px-8 max-w-md">
                <div className="text-brand-red font-display tracking-widest text-sm mb-2 uppercase">Private Parties</div>
                <h2 className="font-display text-3xl md:text-4xl tracking-widest text-white mb-4">We Host. You Party.</h2>
                <p className="text-white/70 text-sm leading-relaxed mb-6">Whether it&apos;s a birthday, baby shower, or watch party — we handle everything.</p>
                <Link href="/parties" className="btn-secondary">Book Your Party</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
