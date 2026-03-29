'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Me', href: '/about' },
    { label: 'Events', href: '/events' },
    { label: 'Contact', href: '/contact' },
    { label: 'Manifesto', href: '/manifesto' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-comic-yellow border-b-4 border-black comic-shadow">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo - Bat symbol */}
        <Link href="/" className="font-bangers text-2xl font-bold text-comic-red">
          ★ BAT ★
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-comic font-bold px-4 py-2 border-2 border-black text-black hover:bg-black hover:text-comic-yellow transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden font-bangers text-2xl text-black"
        >
          ☆
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-0 right-0 bg-comic-blue border-b-4 border-black comic-shadow"
            >
              <div className="flex flex-col gap-0">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-comic font-bold px-4 py-3 text-black border-b-2 border-black hover:bg-comic-red hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
