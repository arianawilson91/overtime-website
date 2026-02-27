import Link from 'next/link'

type MenuItem = { name: string; price: string; desc: string; img?: string }
type MenuSection = { id: string; title: string; note: string; heroImg?: string; items: MenuItem[] }

const menuSections: MenuSection[] = [
  {
    id: 'appetizers',
    title: 'Appetizers',
    note: 'Wing Sauces: Garlic Parm, Teriyaki, Mild, BBQ, Overtime Sauce, Medium, Honey Sriracha, Thai Chili, Hot',
    heroImg: '/images/food/wings.jpg',
    items: [
      { name: 'Wings', price: '$14.95', desc: 'Tossed in your choice of sauce. Side of Bleu Cheese or Ranch, Celery. 10 count.', img: '/images/food/wings.jpg' },
      { name: 'Boneless Wings', price: '$13.95', desc: 'Your choice of one sauce.' },
      { name: 'Chicken Tender Basket', price: '$13.95', desc: 'Your choice of one sauce.' },
      { name: 'Tacos', price: '$14.95+', desc: 'Three tacos, Pico de Gallo, Cheese, Sour Cream. Chicken $14.95 / Shrimp $15.95 / Mahi $16.95.', img: '/images/food/tacos.jpg' },
      { name: 'Honey Sriracha Spare Ribs', price: '$13.95', desc: 'Topped with Sesame Seeds & Chives.' },
      { name: 'Mozzarella Sticks', price: '$9.95', desc: 'Fra Diablo Sauce.' },
      { name: 'Nachos', price: '$13.95', desc: 'Queso, Chili, Pico de Gallo, Green Onions, Sour Cream. Add Chicken +$4.', img: '/images/food/nachos.jpg' },
      { name: 'Potato Skins', price: '$12.95', desc: 'Crispy Potato Skins, Cheddar, Bacon, Green Onions, Sour Cream.' },
      { name: 'Fried Pickle Chips', price: '$9.95', desc: 'Served with Ranch.' },
      { name: 'Sampler Platter', price: '$16.95', desc: 'Mozzarella Sticks, Chicken Tenders, Pepperoni Pinwheels, Seasoned Fries, Onion Rings.', img: '/images/food/sampler-platter.jpg' },
      { name: 'Bacon Cheese Fries', price: '$12.95', desc: 'Queso, Fresh Bacon, Ranch.' },
      { name: 'Garlic Knots', price: '$8.95', desc: 'Marinara Sauce.' },
      { name: 'Pepperoni Pinwheels', price: '$11.95', desc: 'Pepperoni, Mozzarella, Deep Fried Pizza Dough, Fra Diablo Sauce.' },
      { name: 'Calamari', price: '$14.95', desc: 'Breaded and Fried, Fra Diablo Sauce. Buffalo style +$1.' },
      { name: 'Pretzel Bites', price: '$9.95', desc: 'Cheese Whiz.' },
      { name: 'Touchdown Tuna', price: '$15.95', desc: 'Rare Blackened Ahi Tuna, Seaweed Salad, Wasabi, Ponzu, Pickled Ginger.' },
      { name: 'Chicken Quesadilla', price: '$14.95', desc: 'Blackened Chicken, Onions, Peppers, Cheddar Jack, Flour Tortilla, Pico, Sour Cream.', img: '/images/food/chicken-quesadilla.jpg' },
      { name: 'Buffalo Chicken Dip', price: '$12.95', desc: 'Served with tortilla chips.' },
      { name: 'Meatball Trio', price: '$8.95', desc: '3 meatballs, Fra Diablo Sauce, Parmesan. Served with a roll.' },
    ],
  },
  {
    id: 'salads',
    title: 'Salads',
    note: 'Served with a roll. Additions: Chicken +$5 / Shrimp +$7.50 / Mahi +$8.50 / Steak +$9.50',
    heroImg: '/images/food/caesar-salad.jpg',
    items: [
      { name: 'Classic Caesar', price: '$10.95', desc: 'Romaine, Parmesan, Croutons, Caesar Dressing.', img: '/images/food/caesar-salad.jpg' },
      { name: 'House Salad', price: '$9.95', desc: 'Romaine & Spring Mix, Tomatoes, Cucumbers, Onions, Cheddar-Jack, Carrots.' },
      { name: 'Wedge Salad', price: '$10.95', desc: 'Iceberg Wedge, Bacon Bits, Bleu Cheese Crumbles, Tomatoes, Onions.' },
      { name: 'Classic Cobb', price: '$13.95', desc: 'Romaine & Spring Mix, Avocado, Bleu Cheese, Tomatoes, Bacon, Hard-Boiled Eggs, Chicken.' },
      { name: 'Avocado Caprese', price: '$13.95', desc: 'Avocado, Tomatoes, Fresh Mozzarella, Balsamic Glaze, Mixed Greens.' },
    ],
  },
  {
    id: 'pizza',
    title: 'Pizza',
    note: 'Handmade dough, house-made sauce. 10" or 14" available. Build your own or choose a specialty pie.',
    heroImg: '/images/food/meat-lovers-pizza.jpg',
    items: [
      { name: 'Build Your Own', price: '10" $11.95 / 14" $15.95', desc: 'Choose your toppings. Additional toppings: 10" +$1.50 / 14" +$2.50.' },
      { name: 'Overtime Special', price: '10" $16.95 / 14" $22.95', desc: 'Pepperoni, Sausage, Mushrooms, Onions, Green Peppers.' },
      { name: 'Meat Lovers', price: '10" $16.95 / 14" $22.95', desc: 'Pepperoni, Sausage, Ham, Bacon, Meatball.', img: '/images/food/meat-lovers-pizza.jpg' },
      { name: 'Margherita', price: '10" $14.95 / 14" $19.95', desc: 'Fresh Mozzarella, Tomatoes, Basil, Garlic, Olive Oil.', img: '/images/food/margherita-pizza.jpg' },
      { name: 'BBQ Chicken', price: '10" $15.95 / 14" $21.95', desc: 'BBQ Sauce, Grilled Chicken, Red Onion, Cilantro, Cheddar-Jack.' },
      { name: 'Buffalo Chicken', price: '10" $15.95 / 14" $21.95', desc: 'Buffalo Sauce, Chicken, Bleu Cheese Crumbles, Ranch Drizzle.' },
      { name: 'White Pizza', price: '10" $14.95 / 14" $19.95', desc: 'Ricotta, Mozzarella, Garlic, Olive Oil. No red sauce.' },
      { name: 'Hawaiian', price: '10" $14.95 / 14" $19.95', desc: 'Ham, Pineapple, Mozzarella.' },
    ],
  },
  {
    id: 'sandwiches',
    title: 'Sandwiches & Burgers',
    note: 'Served with seasoned fries. Substitute onion rings, sweet potato fries, or side salad +$2.',
    heroImg: '/images/food/philly.jpg',
    items: [
      { name: 'Philly Cheesesteak', price: '$15.95', desc: 'Shaved Ribeye, Onions, Peppers, Provolone on a hoagie roll.', img: '/images/food/philly.jpg' },
      { name: 'Chicken Philly', price: '$15.95', desc: 'Grilled Chicken, Onions, Peppers, Provolone on a hoagie roll.' },
      { name: 'Classic Burger', price: '$14.95', desc: '8oz patty, Lettuce, Tomato, Onion, Pickle. Add cheese +$1.', img: '/images/food/burger.jpg' },
      { name: 'Overtime Burger', price: '$16.95', desc: '8oz patty, Bacon, Cheddar, Onion Rings, BBQ Sauce.' },
      { name: 'Black & Bleu Burger', price: '$16.95', desc: '8oz Blackened patty, Bleu Cheese Crumbles, Bacon, Onion Straws.' },
      { name: 'Bourbon BBQ Burger', price: '$16.95', desc: 'Bourbon BBQ glaze, Bacon, Cheddar, Crispy Onions.', img: '/images/food/bourbon-burger.jpg' },
      { name: 'Turkey Club', price: '$14.95', desc: 'Turkey, Bacon, Lettuce, Tomato, Mayo on toasted bread.' },
      { name: 'Chicken Sandwich', price: '$14.95', desc: 'Grilled or Fried chicken breast, Lettuce, Tomato, Pickle.' },
      { name: 'Meatball Sub', price: '$13.95', desc: 'House Meatballs, Marinara, Melted Mozzarella on a hoagie roll.' },
      { name: 'Fish Sandwich', price: '$15.95', desc: 'Beer-Battered Cod, Lettuce, Tomato, Tartar Sauce.' },
    ],
  },
  {
    id: 'entrees',
    title: 'Entrees',
    note: 'Served with two sides. Sides: Fries, Mashed Potatoes, Rice, Steamed Broccoli, Side Salad, Coleslaw.',
    heroImg: '/images/food/bbq-ribs.jpg',
    items: [
      { name: 'NY Strip 12oz', price: '$28.95', desc: 'Hand-cut 12oz NY Strip, cooked to order.' },
      { name: 'Baby Back Ribs', price: 'Half $18.95 / Full $26.95', desc: 'Slow-cooked, BBQ glazed.', img: '/images/food/bbq-ribs.jpg' },
      { name: 'Chicken Marsala', price: '$18.95', desc: 'Sauteed Chicken, Mushrooms, Marsala Wine Sauce.', img: '/images/food/chicken-marsala.jpg' },
      { name: 'Chicken Parmesan', price: '$18.95', desc: 'Breaded Chicken, Marinara, Melted Mozzarella over Penne.' },
      { name: 'Fish & Chips', price: '$16.95', desc: 'Beer-Battered Cod, Seasoned Fries, Coleslaw, Tartar Sauce.' },
      { name: 'Penne Vodka', price: '$15.95', desc: 'Penne Pasta, Creamy Vodka Sauce. Add Chicken +$5 / Shrimp +$7.50.', img: '/images/food/penne-vodka.jpg' },
      { name: 'Baked Ziti', price: '$15.95', desc: 'Ziti, Ricotta, Mozzarella, Marinara. Add Meatballs +$4.' },
    ],
  },
  {
    id: 'kids',
    title: 'Kids Menu',
    note: 'For kids 12 and under. Served with fries.',
    items: [
      { name: 'Chicken Tenders', price: '$8.95', desc: '' },
      { name: 'Mac & Cheese', price: '$7.95', desc: '' },
      { name: 'Grilled Cheese', price: '$7.95', desc: '' },
      { name: 'Kids Pizza', price: '$8.95', desc: 'Cheese or pepperoni.' },
      { name: 'Kids Burger', price: '$8.95', desc: 'With American cheese.' },
    ],
  },
]

export default function MenuPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/backgrounds/food-menu-back.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-black/80" />
        </div>
        <div className="relative z-10">
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-widest mb-4">Our Menu</h1>
          <p className="text-white/60 max-w-xl mx-auto">Handmade, made-to-order, and worth every bite. From our signature wings to hand-cut NY Strip.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {menuSections.map(s => (
              <a key={s.id} href={`#${s.id}`} className="text-white/60 hover:text-brand-red font-display tracking-widest text-xs uppercase border border-white/20 px-4 py-2 hover:border-brand-red transition-colors">
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Menu sections */}
      {menuSections.map((section, sIdx) => (
        <section key={section.id} id={section.id} className={`py-16 px-4 ${sIdx % 2 === 0 ? 'bg-white' : 'bg-brand-light-gray'}`}>
          <div className="max-w-6xl mx-auto">
            {/* Section header with hero image */}
            {section.heroImg && (
              <div className="relative h-48 md:h-64 rounded-sm overflow-hidden mb-8">
                <img src={section.heroImg} alt={section.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-black/70 to-brand-black/30 flex items-center">
                  <div className="px-8">
                    <h2 className="font-display text-4xl md:text-5xl tracking-widest text-white">{section.title}</h2>
                    {section.note && <p className="text-white/60 text-sm mt-2 max-w-lg">{section.note}</p>}
                  </div>
                </div>
              </div>
            )}
            {!section.heroImg && (
              <>
                <h2 className="section-title mb-2">{section.title}</h2>
                {section.note && <p className="text-gray-500 text-sm mb-8 max-w-2xl">{section.note}</p>}
              </>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.items.map(item => (
                <div key={item.name} className={`flex gap-4 border-b border-gray-200 pb-4 ${item.img ? 'items-start' : ''}`}>
                  {item.img && (
                    <img src={item.img} alt={item.name} className="w-20 h-20 rounded-sm object-cover flex-shrink-0" />
                  )}
                  <div className="flex-1 flex justify-between gap-3">
                    <div>
                      <h3 className="font-display tracking-wider text-lg text-brand-black">{item.name}</h3>
                      {item.desc && <p className="text-gray-500 text-sm mt-1">{item.desc}</p>}
                    </div>
                    <div className="font-display text-brand-red tracking-wider whitespace-nowrap text-right">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/backgrounds/order-back.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-black/75" />
        </div>
        <div className="relative z-10">
          <div className="section-title mb-4">Ready to Order?</div>
          <p className="text-white/60 mb-8">Order online for pickup or call us at (239) 541-3367.</p>
          <a
            href="https://www.toasttab.com/local/order/overtime-pizzeria-and-sports-pub-1708-cape-coral-pkwy-w/r-049b8940-1fee-4a50-83ef-0a41c9145e41"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-12 py-4"
          >
            Order Online
          </a>
        </div>
      </section>
    </div>
  )
}
