'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const primaryNav = [
  { label: 'Menu', href: '/menu' },
  { label: 'Drinks', href: '/drinks' },
  { label: 'Specials', href: '/specials' },
  { label: 'Events', href: '/events' },
  { label: 'Order Online', href: 'https://www.toasttab.com/local/order/overtime-pizzeria-and-sports-pub-1708-cape-coral-pkwy-w/r-049b8940-1fee-4a50-83ef-0a41c9145e41', external: true },
  { label: 'Parties', href: '/parties' },
]

const secondaryNav = [
  { label: 'Jobs', href: 'https://tmt.spotapps.co/job-listings?spot_id=106941', external: true },
  { label: 'MVP Program', href: 'https://jointhevip.me/Zxtj', external: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black shadow-lg' : 'bg-brand-black/80 backdrop-blur-sm'}`}>
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img src="/images/brand/logo.png" alt="Overtime Pizzeria & Sports Pub" className="h-12 md:h-14 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {primaryNav.map(link => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={`font-display tracking-widest text-sm uppercase transition-colors duration-150 ${link.label === 'Order Online' ? 'bg-brand-red text-white px-4 py-2 hover:bg-brand-red-dark' : 'text-white hover:text-brand-red'}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="h-5 w-px bg-white/30" />
          {secondaryNav.map(link => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white font-sans text-xs uppercase tracking-widest transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-brand-black border-t border-white/10 px-4 pb-6">
          {[...primaryNav, ...secondaryNav].map(link => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              className="block py-3 text-white font-display tracking-widest text-sm uppercase border-b border-white/10 hover:text-brand-red"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
