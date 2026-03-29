'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ComicPanel } from '@/components/ComicPanel'
import { ComicButton } from '@/components/ComicButton'
import { SoundBurst } from '@/components/SoundBurst'
import { CaptionBox } from '@/components/CaptionBox'
import { HalftoneOverlay } from '@/components/HalftoneOverlay'

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = 500

    // Animated comic card effect
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
    }> = []

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: ['#FFF000', '#0066FF', '#FF0000'][Math.floor(Math.random() * 3)],
      })
    }

    let animationId: number

    const animate = () => {
      // Clear with gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, '#FFF000')
      gradient.addColorStop(1, '#FFF8E7')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw halftone pattern
      ctx.fillStyle = 'rgba(26, 26, 26, 0.05)'
      for (let x = 0; x < canvas.width; x += 8) {
        for (let y = 0; y < canvas.height; y += 8) {
          ctx.beginPath()
          ctx.arc(x, y, 2, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <main className="min-h-screen bg-comic-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0"
        />
        <HalftoneOverlay color="black" opacity={0.15} className="z-10" />

        <motion.div
          className="relative z-20 text-center max-w-4xl mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="font-bangers text-6xl md:text-8xl font-bold text-comic-red mb-6"
            style={{
              textShadow: '3px 3px 0 #0066FF, 6px 6px 0 #1a1a1a',
            }}
          >
            BAT × SPIDER
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <p className="font-comic text-2xl md:text-3xl text-comic-black mb-4 font-bold">
              A LEGENDARY COLLABORATION
            </p>
            <p className="font-comic text-lg text-comic-black mb-6">
              Two iconic superheroes, one unforgettable portfolio experience
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-4 justify-center mb-12"
          >
            <ComicButton variant="primary">
              Explore Projects
            </ComicButton>
            <ComicButton variant="secondary">
              Learn About Us
            </ComicButton>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12"
          >
            <ComicPanel variant="blue" className="text-white">
              <div className="text-3xl font-bangers">99</div>
              <div className="font-comic text-sm">PROJECTS</div>
            </ComicPanel>
            <ComicPanel variant="red" className="text-white">
              <div className="text-3xl font-bangers">24/7</div>
              <div className="font-comic text-sm">HEROES</div>
            </ComicPanel>
            <ComicPanel variant="yellow" className="text-black">
              <div className="text-3xl font-bangers">∞</div>
              <div className="font-comic text-sm">POWER</div>
            </ComicPanel>
          </motion.div>
        </motion.div>

        {/* Animated sound bursts */}
        <motion.div
          className="absolute bottom-20 left-10 z-30"
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <SoundBurst text="POW!" />
        </motion.div>

        <motion.div
          className="absolute top-32 right-10 z-30"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <SoundBurst text="BOOM!" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-comic-blue text-white border-t-8 border-black">
        <HalftoneOverlay color="blue" opacity={0.2} />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h2
            className="font-bangers text-5xl text-comic-yellow text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            SUPER FEATURES
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'ICONIC DESIGN', desc: 'Vintage 1970s comic aesthetics' },
              { title: 'DYNAMIC ACTION', desc: 'Smooth animations throughout' },
              { title: 'EPIC CONTENT', desc: 'Rich stories and experiences' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <ComicPanel variant="yellow" className="text-black h-full">
                  <h3 className="font-bangers text-2xl mb-4 text-comic-red">
                    {feature.title}
                  </h3>
                  <p className="font-comic text-sm">
                    {feature.desc}
                  </p>
                </ComicPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-comic-red border-t-8 border-black">
        <HalftoneOverlay color="red" opacity={0.2} />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bangers text-4xl text-white mb-6">
              READY FOR ACTION?
            </h2>
            <p className="font-comic text-white mb-8 text-lg">
              Dive into our world and discover amazing projects, stories, and experiences.
            </p>
            <ComicButton variant="outline">
              START YOUR ADVENTURE
            </ComicButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
