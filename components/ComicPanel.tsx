import React from 'react'

interface ComicPanelProps {
  children: React.ReactNode
  variant?: 'default' | 'blue' | 'red' | 'yellow'
  className?: string
}

export function ComicPanel({ children, variant = 'default', className = '' }: ComicPanelProps) {
  const bgColors = {
    default: 'bg-white',
    blue: 'bg-comic-blue',
    red: 'bg-comic-red',
    yellow: 'bg-comic-yellow',
  }
  
  const textColors = {
    default: 'text-black',
    blue: 'text-black',
    red: 'text-black',
    yellow: 'text-black',
  }

  return (
    <div className={`comic-panel ${bgColors[variant]} ${textColors[variant]} p-6 ${className}`}>
      {children}
    </div>
  )
}
