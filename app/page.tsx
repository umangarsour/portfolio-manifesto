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
            className="font-bangers text-5xl md:text-7xl font-bold text-comic-red mb-6"
            style={{
              textShadow: '3px 3px 0 #0066FF, 6px 6px 0 #1a1a1a',
            }}
          >
            NOT YOUR USUAL MANIFESTO
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="font-bangers text-4xl md:text-5xl font-bold text-comic-blue mb-4"
          >
            THIS IS A STORY
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <p className="font-comic text-3xl md:text-4xl text-comic-black mb-4 font-bold">
              Hi, I&apos;m Umang Raj Jaiswal
            </p>
            <p className="font-bangers text-2xl text-comic-red mb-6">
              Creator. Competitor. Contributor.
            </p>
            <p className="font-comic text-lg text-comic-black mb-6 leading-relaxed">
              Building experiences. Winning arguments. Making things happen.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-4 justify-center mb-12"
          >
            <ComicButton variant="primary">
              Explore My Vision
            </ComicButton>
            <ComicButton variant="secondary">
              Why Me
            </ComicButton>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12"
          >
            <ComicPanel variant="blue" className="text-black">
              <div className="text-3xl font-bangers">2+</div>
              <div className="font-comic text-sm">YEARS ACTIVE</div>
            </ComicPanel>
            <ComicPanel variant="red" className="text-black">
              <div className="text-3xl font-bangers">100%</div>
              <div className="font-comic text-sm">COMMITMENT</div>
            </ComicPanel>
            <ComicPanel variant="yellow" className="text-black">
              <div className="text-3xl font-bangers">∞</div>
              <div className="font-comic text-sm">GROWTH</div>
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

      {/* About Me Section */}
      <section className="relative py-20 bg-comic-blue text-black border-t-8 border-black">
        <HalftoneOverlay color="blue" opacity={0.2} />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h2
            className="font-bangers text-5xl text-comic-yellow text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            ABOUT ME
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ComicPanel variant="yellow" className="text-black">
              <p className="font-comic text-base leading-relaxed mb-4">
                I&apos;m a Computer Science sophomore who&apos;s been into quizzing and debating since school—competing, winning, and enjoying the thrill of a good argument. I&apos;m passionate about creating, not on paper but digitally—building websites that combine logic and aesthetics into something people actually enjoy using.
              </p>
              <p className="font-comic text-base leading-relaxed mb-4">
                I&apos;m also a huge fan of movies and shows across languages (whether that makes me a cinephile is up for debate), and I love the adrenaline of sports—both watching and playing cricket, table tennis, snooker, and football. And yes, a bit unexpectedly, I dance too—exploring styles from freestyle to salsa to Bollywood—and even had a short acting stint as Mowgli in The Jungle Book.
              </p>
              <p className="font-comic text-base leading-relaxed font-bold">
                At my core, I&apos;m curious, creative, and competitive—and I strongly believe that if you&apos;re doing something or competing for something and you&apos;re not passionate about winning, you&apos;re doing it wrong.
              </p>
            </ComicPanel>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-16 bg-comic-red border-t-8 border-black">
        <HalftoneOverlay color="red" opacity={0.2} />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bangers text-5xl text-black mb-6">
              YOUR VOTE. YOUR STORY.
            </h2>
            <div className="font-bangers text-2xl text-black mb-8 leading-relaxed">
              <p className="mb-2">Vote for better.</p>
              <p className="mb-2">Vote for impact.</p>
              <p className="font-bold">Vote for Umang.</p>
            </div>
            <ComicButton variant="outline">
              READ THE FULL MANIFESTO
            </ComicButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
