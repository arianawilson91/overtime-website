import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Overtime Pizzeria & Sports Pub | Cape Coral, FL',
  description: "Cape Coral's favorite sports bar & pizzeria. Award-winning food, cold drinks, big screens, and great vibes at 1708 Cape Coral Pkwy W.",
  keywords: 'sports bar Cape Coral, pizza Cape Coral, Overtime Pizzeria, sports pub FL',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
