'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ComicPanel } from '@/components/ComicPanel'
import { CaptionBox } from '@/components/CaptionBox'
import { HalftoneOverlay } from '@/components/HalftoneOverlay'
import { SpeechBubble } from '@/components/SpeechBubble'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <main className="min-h-screen bg-comic-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-comic-yellow border-b-8 border-black">
        <HalftoneOverlay color="black" opacity={0.15} />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h1
            className="font-bangers text-6xl md:text-7xl text-comic-red mb-6"
            style={{ textShadow: '3px 3px 0 #0066FF' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ABOUT ME
          </motion.h1>
          <motion.p
            className="font-comic text-xl text-comic-black max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Everything you need to know about UMANG RAJ JAISWAL.
          </motion.p>
        </div>
      </section>

      {/* Main Bio Section */}
      <section className="py-20 border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Profile */}
            <motion.div variants={itemVariants}>
              <ComicPanel variant="blue" className="text-black p-8">
                <h2 className="font-bangers text-4xl mb-4 text-comic-yellow">
                  UMANG RAJ JAISWAL
                </h2>
                <p className="font-comic text-sm mb-6">
                  I&apos;m a Computer Science student at BIT Mesra with a passion for building digital experiences and solving complex problems. My journey spans competitive programming, public speaking, and turning ideas into reality through code.
                </p>
                <p className="font-comic text-sm mb-6">
                  With a curious mind and driven spirit, I believe in pushing boundaries and creating meaningful impact through technology and innovation.
                </p>
                <div className="space-y-3 mt-6">
                  <div className="font-comic text-sm"><strong>📍 Location:</strong> BIT Mesra, India</div>
                  <div className="font-comic text-sm"><strong>🎓 Education:</strong> Computer Science</div>
                  <div className="font-comic text-sm"><strong>💻 Focus:</strong> Full-stack Development & Problem Solving</div>
                </div>
              </ComicPanel>
            </motion.div>

            {/* Skills & Achievements */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <ComicPanel variant="red" className="text-black p-6">
                  <h3 className="font-bangers text-2xl mb-4 text-comic-yellow">
                    SKILLS
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="font-comic text-sm bg-black bg-opacity-30 p-3 border-2 border-white">
                      <strong>Programming</strong>
                      <p className="text-xs mt-1">JavaScript, Python, C++</p>
                    </div>
                    <div className="font-comic text-sm bg-black bg-opacity-30 p-3 border-2 border-white">
                      <strong>Frontend</strong>
                      <p className="text-xs mt-1">React, Next.js, Tailwind</p>
                    </div>
                    <div className="font-comic text-sm bg-black bg-opacity-30 p-3 border-2 border-white">
                      <strong>Backend</strong>
                      <p className="text-xs mt-1">Node.js, Databases</p>
                    </div>
                    <div className="font-comic text-sm bg-black bg-opacity-30 p-3 border-2 border-white">
                      <strong>Other</strong>
                      <p className="text-xs mt-1">Leadership, Speaking</p>
                    </div>
                  </div>
                </ComicPanel>

                <div className="space-y-3">
                  <CaptionBox number={1}>
                    <strong>Competitive Programmer</strong> - Passionate about solving algorithmic challenges
                  </CaptionBox>
                  <CaptionBox number={2}>
                    <strong>Public Speaker</strong> - Sharing knowledge and inspiring others
                  </CaptionBox>
                  <CaptionBox number={3}>
                    <strong>Builder</strong> - Turning concepts into functional applications
                  </CaptionBox>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative py-20 bg-comic-red text-black border-b-8 border-black">
        <HalftoneOverlay color="red" opacity={0.2} />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.h2
            className="font-bangers text-5xl text-comic-yellow text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            MY CORE VALUES
          </motion.h2>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SpeechBubble variant="shout" className="bg-comic-yellow text-black">
              <strong className="text-lg">GROWTH</strong>
              <p className="font-comic text-sm mt-2">
                Constantly learning and improving myself every day.
              </p>
            </SpeechBubble>
            
            <SpeechBubble variant="shout" className="bg-comic-yellow text-black">
              <strong className="text-lg">INTEGRITY</strong>
              <p className="font-comic text-sm mt-2">
                Being honest and transparent in all my work.
              </p>
            </SpeechBubble>
            
            <SpeechBubble variant="shout" className="bg-comic-yellow text-black">
              <strong className="text-lg">IMPACT</strong>
              <p className="font-comic text-sm mt-2">
                Creating meaningful value through technology.
              </p>
            </SpeechBubble>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
