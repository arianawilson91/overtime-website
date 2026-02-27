export default function PartiesPage() {
  return (
    <div className="pt-20">
      <section className="bg-brand-black py-16 px-4 text-center">
        <h1 className="font-display text-5xl md:text-7xl text-white tracking-widest mb-4">Parties &amp; Catering</h1>
        <p className="text-white/60 max-w-xl mx-auto">Let Overtime handle the food and fun. We host private parties and cater events of all sizes.</p>
      </section>

      {/* Private Parties */}
      <section className="py-20 px-4 bg-brand-light-gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title mb-6">Private Parties</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Whether it&apos;s a birthday, baby shower, office event, retirement party, or watch party — our team handles everything so you can enjoy the moment. We offer flexible packages for groups of all sizes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="font-display text-xl tracking-widest text-brand-red mb-3">What We Offer</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>&#9679; Dedicated party area</li>
                <li>&#9679; Custom food & drink menus</li>
                <li>&#9679; Big screens for presentations or games</li>
                <li>&#9679; Flexible seating arrangements</li>
                <li>&#9679; Personalized service</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="font-display text-xl tracking-widest text-brand-red mb-3">Perfect For</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>&#9679; Birthday parties</li>
                <li>&#9679; Baby & bridal showers</li>
                <li>&#9679; Corporate events</li>
                <li>&#9679; Watch parties</li>
                <li>&#9679; Retirement celebrations</li>
                <li>&#9679; Holiday parties</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Catering */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title mb-6">Catering</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Overtime would be honored to provide our services for your next event. Each event is bespoke to your tastes and needs, so your guests get the best experience possible. From trays of our famous wings to full Italian spreads — we&apos;ve got you covered.
          </p>
          <div className="bg-brand-light-gray border border-gray-200 p-8">
            <h3 className="font-display text-xl tracking-widest text-brand-red mb-4">Catering Menu Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600 text-sm">
              <div>&#9679; Wing platters (all sauces available)</div>
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
      </section>

      {/* Contact CTA */}
      <section className="bg-brand-black py-16 px-4 text-center">
        <div className="section-title mb-4">Let&apos;s Plan Your Event</div>
        <p className="text-white/60 mb-8 max-w-lg mx-auto">
          Call us or stop by to discuss your event. We&apos;ll work with you to create the perfect experience.
        </p>
        <a href="tel:+12395413367" className="btn-primary text-base px-12 py-4">
          Call (239) 541-3367
        </a>
        <p className="text-white/40 text-sm mt-6">1708 Cape Coral Pkwy W &middot; Cape Coral, FL 33914</p>
      </section>
    </div>
  )
}
