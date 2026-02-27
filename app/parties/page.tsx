export default function PartiesPage() {
  return (
    <div className="pt-20">
      {/* Hero with party interior photo */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/backgrounds/party-interior.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-black/75" />
        </div>
        <div className="relative z-10">
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-widest mb-4">Parties &amp; Catering</h1>
          <p className="text-white/60 max-w-xl mx-auto">Let Overtime handle the food and fun. We host private parties and cater events of all sizes.</p>
        </div>
      </section>

      {/* Private Parties — with image */}
      <section className="py-0 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-72 md:h-auto">
            <img src="/images/backgrounds/parties-right.jpg" alt="Private party" className="w-full h-full object-cover" />
          </div>
          <div className="p-8 md:p-12 lg:p-16 flex items-center">
            <div>
              <h2 className="section-title mb-6">Private Parties</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether it&apos;s a birthday, baby shower, office event, retirement party, or watch party — our team handles everything so you can enjoy the moment. We offer flexible packages for groups of all sizes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-display text-lg tracking-widest text-brand-red mb-3">What We Offer</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>&#9679; Dedicated party area</li>
                    <li>&#9679; Custom food &amp; drink menus</li>
                    <li>&#9679; Big screens for presentations or games</li>
                    <li>&#9679; Flexible seating arrangements</li>
                    <li>&#9679; Personalized service</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-lg tracking-widest text-brand-red mb-3">Perfect For</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>&#9679; Birthday parties</li>
                    <li>&#9679; Baby &amp; bridal showers</li>
                    <li>&#9679; Corporate events</li>
                    <li>&#9679; Watch parties</li>
                    <li>&#9679; Retirement celebrations</li>
                    <li>&#9679; Holiday parties</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catering — with image */}
      <section className="py-0 bg-brand-light-gray">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-12 lg:p-16 flex items-center order-2 md:order-1">
            <div>
              <h2 className="section-title mb-6">Catering</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Overtime would be honored to provide our services for your next event. Each event is bespoke to your tastes and needs, so your guests get the best experience possible. From trays of our famous wings to full Italian spreads — we&apos;ve got you covered.
              </p>
              <div className="bg-white border border-gray-200 p-6 rounded-sm">
                <h3 className="font-display text-lg tracking-widest text-brand-red mb-4">Catering Menu Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600 text-sm">
                  <div>&#9679; Wing platters (all sauces)</div>
                  <div>&#9679; Pizza by the pie</div>
                  <div>&#9679; Sandwich platters</div>
                  <div>&#9679; Salad trays</div>
                  <div>&#9679; Pasta dishes (family style)</div>
                  <div>&#9679; Appetizer sampler trays</div>
                  <div>&#9679; Custom packages available</div>
                  <div>&#9679; Drink packages available</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-72 md:h-auto order-1 md:order-2">
            <img src="/images/backgrounds/catering-left.jpg" alt="Catering spread" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Food preview strip */}
      <section className="bg-brand-black py-0">
        <div className="grid grid-cols-4 gap-0">
          <div className="relative h-28 md:h-40 overflow-hidden">
            <img src="/images/gallery/wings.jpg" alt="Wings" className="w-full h-full object-cover" />
          </div>
          <div className="relative h-28 md:h-40 overflow-hidden">
            <img src="/images/food/meat-lovers-pizza.jpg" alt="Pizza" className="w-full h-full object-cover" />
          </div>
          <div className="relative h-28 md:h-40 overflow-hidden">
            <img src="/images/gallery/steak-salad.jpg" alt="Salad" className="w-full h-full object-cover" />
          </div>
          <div className="relative h-28 md:h-40 overflow-hidden">
            <img src="/images/gallery/brownie-sundae.jpg" alt="Dessert" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/backgrounds/gallery-back.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-black/80" />
        </div>
        <div className="relative z-10">
          <div className="section-title mb-4">Let&apos;s Plan Your Event</div>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Call us or stop by to discuss your event. We&apos;ll work with you to create the perfect experience.
          </p>
          <a href="tel:+12395413367" className="btn-primary text-base px-12 py-4">
            Call (239) 541-3367
          </a>
          <p className="text-white/40 text-sm mt-6">1708 Cape Coral Pkwy W &middot; Cape Coral, FL 33914</p>
        </div>
      </section>
    </div>
  )
}
