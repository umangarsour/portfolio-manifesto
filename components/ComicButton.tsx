'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ComicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
}

export function ComicButton({ children, variant = 'primary', ...props }: ComicButtonProps) {
  const baseClass = 'font-bangers text-lg font-bold px-6 py-3 uppercase tracking-wider transition-transform active:scale-95'
  
  const variantClasses = {
    primary: 'bg-comic-red text-black comic-shadow hover:translate-x-[2px] hover:translate-y-[2px]',
    secondary: 'bg-comic-blue text-black comic-shadow hover:translate-x-[2px] hover:translate-y-[2px]',
    outline: 'bg-white text-black border-4 border-black comic-shadow hover:translate-x-[2px] hover:translate-y-[2px]',
  }

  return (
    <motion.button
      className={`${baseClass} ${variantClasses[variant]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
