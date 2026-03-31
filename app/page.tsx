'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ComicPanel } from '@/components/ComicPanel'
import { ComicButton } from '../components/ComicButton'
import { SoundBurst } from '@/components/SoundBurst'
import { CaptionBox } from '@/components/CaptionBox'
import { HalftoneOverlay } from '@/components/HalftoneOverlay'
import Link from 'next/link'
import Image from 'next/image'

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
        <div className="absolute z-30 
  w-[180px] h-[180px] top-40 left-25
  sm:w-[120px] sm:h-[120px] sm:top-20 sm:left-6
  lg:w-[280px] lg:h-[280px] lg:top-20 lg:left-30
  ">
  <Image
    src="/profile.jpeg"
    alt="profile"
    fill
    className="object-cover rounded-full border-4 border-black"
  />
</div>
        <HalftoneOverlay color="red" opacity={0.2} />
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
            className="font-bangers text-6xl md:text-8xl mt-4 font-bold text-comic-red mb-6"
            style={{
              textShadow: '3px 3px 0 #0066FF, 6px 6px 0 #1a1a1a',
            }}
          >
            UMANG RAJ JAISWAL
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <p className="mt-60 lg:mt-0 font-fira text-2xl md:text-3xl text-comic-black mb-4 font-black tracking-tight">
              NOT YOUR TYPICAL MANIFESTO
            </p>
            <p className="font-comic text-lg text-comic-black mb-6">
              One unforgettable manifesto experience
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-4 justify-center mb-12"
          >
            <div className='text-xl lg:text-2xl font-medium font-fira tracking-tight'>

            Hi, I’m Umang Raj Jaiswal,
a Computer Science sophomore, a quizzer-debater by instinct, and someone who genuinely enjoys creating things that people remember.

I’ve been into quizzing and debating since school,
not just participating, but winning, learning, and occasionally arguing like it’s a sport (because, well… it kind of is).

<div className='text-2xl font-medium mt-16 tracking-tight'>
And I firmly believe:
<br />
<div className='font-bangers font-light tracking-wide mt-2'>

"If you’re doing something or competing for something and you’re not passionate about winning, you’re doing it wrong."
</div>
</div>
            </div>
          </motion.div>

          
        </motion.div>

        {/* Animated sound bursts */}
        <motion.div
          className="hidden lg:block absolute bottom-20 left-10 z-30"
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <SoundBurst text="POW!" />
        </motion.div>

        <motion.div
          className="hidden lg:block absolute top-32 right-10 z-30"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <SoundBurst text="BOOM!" />
        </motion.div>
      </section>

      {/* Features Section */}
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
            A LITTLE ABOUT ME
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'CREATER HUH?', desc: `I’m not exactly gifted with a sketchbook,
but give me a laptop and I’ll build you something sleek, aesthetic, and functional.

I love crafting digital experiences—
websites that don’t just work, but feel good to use.
It’s where my two worlds meet:
logic (coding) + creativity (design).` },
              { title: 'SPORTS - HOBBY OR PASSION', desc: `I live for the rush of sports—
the unpredictability, the passion, the heartbreak, the comeback.

I actively follow:

Cricket
Formula 1
Football (sometimes)
Tennis (a little bit… but we’re getting there)

And yes, I play too:

Cricket
Table Tennis
Snooker
Football

Because watching isn’t enough—you’ve got to feel the game.` },
              { title: 'SERIAL CINEPHILE', desc: `I’ve watched content across languages, genres, and moods—
from comfort sitcoms to intense thrillers.

Do I qualify as a cinephile?
I’d say… let’s debate that.` },
              { title: 'GAMER ENOUGH', desc: `I’ve also spent a fair share of time gaming—growing up through different eras of games, from early classics to modern titles.

From Road Rash, NFS, IGI, Assasin's Creed and GTA: Vice City/San Andreas,
to competitive and story-driven titles like Counter-Strike, Call of Duty, and FIFA,
and more recent games like Valorant, GTA V, God of War, RDR, Resident Evil, and Forza Horizon—

I’ve explored a mix of fast-paced, strategic, and open-world experiences, along with a few niche gems along the way.

Gaming, for me, has always been more than just time-pass—
it’s about competition, strategy, and immersion.` },
              { title: 'SPOTIFY WRAPPED', desc: `My music taste?
All over the place, in the best way possible.
From Lata Mangeshkar and Kishore Kumar, to Arijit Singh and Atif Aslam,
from One Direction (yes, a proud Directioner) to Ed Sheeran,
from Pink Floyd and The 1975 to Tame Impala and Beatles, everything you gonna mention I would've heard.
Big fan of White Girl music btw!!
if it sounds good, I’m listening.
Not to brag, but my Spotify stats are a little unhinged—
clocking in at around 1000% more listening time than the average in India.
At this point, it’s less of an app and more of a personality trait.
Music, for me, isn’t just background noise,
it’s memory, mood, and motivation all in one.`},
              {
  title: 'DANCING QUEEN',
  desc: (
    <>
      From freestyle to salsa, waltz to Bollywood,
      I’ve explored different styles—
      not perfectly, but enthusiastically.
      <br /><br />
      Also, fun fact:
      I once played Mowgli in The Jungle Book 🐒
      so yes, there was a brief acting era too.
      <br /><br />
      Watch a glimpse here (1:24):{" "}
      <a
        href="https://www.youtube.com/watch?v=pki8clH8YHM&t=81s"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click to watch
      </a>
    </>
  )
},
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
            <h2 className="font-bangers text-4xl text-black mb-6">
              THREE THINGS WE LIVE FOR - 
              FUN, FUN AND MORE FUN
            </h2>
            <p className="font-comic text-black mb-8 text-lg">
              Dive into this chaotic yet mesmerizing journey with me and trust me you won't regret it.
            </p>
            <Link href={"/manifesto"}>
            <ComicButton variant="outline">
              LET'S BEGIN THEN!!
            </ComicButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
