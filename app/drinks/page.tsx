const drinkSections = [
  {
    title: 'Draft Beer',
    items: [
      { name: 'Bud Light', price: '$5' },
      { name: 'Yuengling', price: '$5' },
      { name: 'Blue Moon', price: '$6' },
      { name: 'Sam Adams Seasonal', price: '$6' },
      { name: 'Stella Artois', price: '$7' },
      { name: 'Local IPA', price: '$7' },
    ],
  },
  {
    title: 'Bottles & Cans',
    items: [
      { name: 'Budweiser', price: '$4' },
      { name: 'Bud Light', price: '$4' },
      { name: 'Coors Light', price: '$4' },
      { name: 'Miller Lite', price: '$4' },
      { name: 'Michelob Ultra', price: '$5' },
      { name: 'Corona', price: '$6' },
      { name: 'Heineken', price: '$6' },
      { name: 'Modelo', price: '$6' },
      { name: 'White Claw', price: '$6' },
      { name: 'High Noon', price: '$6' },
    ],
  },
  {
    title: 'Cocktails',
    items: [
      { name: 'Overtime Margarita', price: '$10' },
      { name: 'Long Island Iced Tea', price: '$11' },
      { name: 'Moscow Mule', price: '$10' },
      { name: 'Mojito', price: '$10' },
      { name: 'Rum Runner', price: '$11' },
      { name: 'Mai Tai', price: '$10' },
      { name: 'Tequila Sunrise', price: '$9' },
      { name: 'Paloma', price: '$10' },
    ],
  },
  {
    title: 'Martinis',
    items: [
      { name: 'Espresso Martini', price: '$12' },
      { name: 'Lemon Drop', price: '$11' },
      { name: 'Cosmopolitan', price: '$11' },
      { name: 'Dirty Martini', price: '$11' },
      { name: 'Appletini', price: '$11' },
    ],
  },
  {
    title: 'Wine',
    items: [
      { name: 'House Cabernet', price: '$8' },
      { name: 'House Merlot', price: '$8' },
      { name: 'House Pinot Grigio', price: '$8' },
      { name: 'House Chardonnay', price: '$8' },
      { name: 'House Pinot Noir', price: '$8' },
      { name: 'Prosecco', price: '$9' },
    ],
  },
  {
    title: 'Non-Alcoholic',
    items: [
      { name: 'Pepsi / Diet Pepsi', price: '$3' },
      { name: 'Mountain Dew', price: '$3' },
      { name: 'Lemonade', price: '$3' },
      { name: 'Iced Tea', price: '$3' },
      { name: 'Coffee', price: '$3' },
      { name: 'Red Bull', price: '$5' },
    ],
  },
]

export default function DrinksPage() {
  return (
    <div className="pt-20">
      {/* Hero with background image */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/backgrounds/drinks-back.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-black/80" />
        </div>
        <div className="relative z-10">
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-widest mb-4">Drink Menu</h1>
          <p className="text-white/60 max-w-xl mx-auto">Ice-cold drafts, handcrafted cocktails, and everything in between. Happy Hour Mon–Fri 11am–5pm.</p>
        </div>
      </section>

      {/* Featured drink photos strip */}
      <section className="bg-brand-black py-0">
        <div className="grid grid-cols-3 gap-0">
          <div className="relative h-32 md:h-48 overflow-hidden">
            <img src="/images/gallery/bartender.jpg" alt="Bartender" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-brand-black/20" />
          </div>
          <div className="relative h-32 md:h-48 overflow-hidden">
            <img src="/images/gallery/bourbon-ale.jpg" alt="Bourbon ale" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-brand-black/20" />
          </div>
          <div className="relative h-32 md:h-48 overflow-hidden">
            <img src="/images/gallery/touchdown-cocktail.jpg" alt="Cocktail" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-brand-black/20" />
          </div>
        </div>
      </section>

      {drinkSections.map((section, i) => (
        <section key={section.title} className={`py-16 px-4 ${i % 2 === 0 ? 'bg-white' : 'bg-brand-light-gray'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-8">{section.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {section.items.map(item => (
                <div key={item.name} className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-display tracking-wider text-lg text-brand-black">{item.name}</span>
                  <span className="font-display text-brand-red tracking-wider">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Happy Hour CTA */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/backgrounds/reviews-back.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-black/80" />
        </div>
        <div className="relative z-10">
          <div className="section-title mb-4">Happy Hour</div>
          <p className="text-white/90 text-lg mb-2">Monday – Friday &middot; 11am – 5pm</p>
          <p className="text-white/60">Wells &amp; Wines $5 &middot; Domestic Drafts $4</p>
        </div>
      </section>
    </div>
  )
}
