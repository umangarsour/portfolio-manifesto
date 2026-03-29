'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ComicPanel } from '@/components/ComicPanel'
import { SpeechBubble } from '@/components/SpeechBubble'
import { CaptionBox } from '@/components/CaptionBox'
import { HalftoneOverlay } from '@/components/HalftoneOverlay'
import { ComicButton } from '@/components/ComicButton'

export default function Manifesto() {
  const manifestoPoints = [
    {
      title: 'CONTINUOUS LEARNING',
      description: 'Every challenge is an opportunity to grow. I commit to constant learning and self-improvement in technology and life.',
      color: 'blue',
    },
    {
      title: 'CREATE WITH PURPOSE',
      description: 'I build solutions that matter. Every project should solve real problems and create positive impact.',
      color: 'red',
    },
    {
      title: 'SHARE KNOWLEDGE',
      description: 'Growth multiplies when shared. I believe in lifting others through mentorship, speaking, and open collaboration.',
      color: 'yellow',
    },
    {
      title: 'EMBRACE CHALLENGES',
      description: 'Difficulty breeds strength. I welcome obstacles as opportunities to prove my capabilities and push boundaries.',
      color: 'blue',
    },
    {
      title: 'CODE WITH INTEGRITY',
      description: 'Quality and ethics are non-negotiable. I write clean code and maintain high standards in every project.',
      color: 'red',
    },
    {
      title: 'LEAD BY EXAMPLE',
      description: 'Actions speak louder than words. I lead through dedication, passion, and unwavering commitment to excellence.',
      color: 'yellow',
    },
  ]

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const handleDownloadManifesto = () => {
    // Create a link to download the PDF
    const link = document.createElement('a')
    link.href = '/manifesto.pdf' // Path to your PDF in the public folder
    link.download = 'Umang_Raj_Jaiswal_Manifesto.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <main className="min-h-screen bg-comic-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-comic-red text-black border-b-8 border-black">
        <HalftoneOverlay color="red" opacity={0.2} />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h1
            className="font-bangers text-6xl md:text-7xl text-comic-yellow mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            MY MANIFESTO
          </motion.h1>
          <motion.p
            className="font-comic text-xl max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My commitments, values, and vision for building an impact-driven future through code and leadership.
          </motion.p>
        </div>
      </section>

      {/* Opening Statement */}
      <section className="py-16 border-b-8 border-black">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SpeechBubble variant="speech" className="bg-comic-yellow border-4 border-black text-black p-8">
              <p className="font-comic text-lg leading-relaxed">
                I am a builder, a learner, and a believer in the power of technology to transform the world. 
                This manifesto represents my unwavering commitment to excellence, integrity, and making a 
                meaningful impact through every line of code and every conversation. These aren&apos;t just ideals—
                they are the foundation of how I live and work.
              </p>
            </SpeechBubble>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {manifestoPoints.map((point, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ComicPanel
                  variant={point.color as 'default' | 'blue' | 'red' | 'yellow'}
                  className={`h-full text-black`}
                >
                  <h3 className="font-bangers text-2xl mb-4 text-comic-yellow">
                    {point.title}
                  </h3>
                  <p className="font-comic text-sm leading-relaxed">
                    {point.description}
                  </p>
                </ComicPanel>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Code of Honor Section */}
      <section className="relative py-20 bg-comic-blue text-black border-y-8 border-black">
        <HalftoneOverlay color="blue" opacity={0.2} />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.h2
            className="font-bangers text-5xl text-comic-yellow text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            MY CODE OF HONOR
          </motion.h2>

          <div className="space-y-4">
            {[
              'Build solutions that solve real problems',
              'Write code with clarity and purpose',
              'Never compromise on quality or ethics',
              'Lift others through knowledge sharing',
              'Stay curious and embrace challenges',
              'Lead with integrity in all endeavors',
              'Commit fully to every project and person',
            ].map((code, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <CaptionBox number={i + 1} className="bg-comic-yellow text-black">
                  <strong>{code}</strong>
                </CaptionBox>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pledge Section */}
      <section className="relative py-20 bg-comic-yellow border-t-8 border-black">
        <HalftoneOverlay color="black" opacity={0.1} />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            className="font-bangers text-5xl text-comic-red mb-8"
            style={{ textShadow: '3px 3px 0 #0066FF' }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            MY PLEDGE
          </motion.h2>

          <motion.div
            className="bg-comic-red text-black p-8 border-4 border-black comic-shadow text-lg font-comic"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="mb-4">
              I pledge to live by these principles, to build with purpose, and to create lasting impact 
              in the world of technology and beyond.
            </p>
            <p className="font-bangers text-3xl mb-4">
              ★ FOR EXCELLENCE & IMPACT ★
            </p>
            <p className="mb-4">
              I will push boundaries, inspire others, and never stop learning. This is my commitment.
            </p>
            <p className="font-bold text-comic-yellow">
              THIS IS MY SOLEMN OATH
            </p>
          </motion.div>
        </div>
      </section>

      {/* Download Manifesto Section */}
      <section className="relative py-20 bg-comic-blue text-black border-t-8 border-black">
        <HalftoneOverlay color="blue" opacity={0.15} />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            className="font-bangers text-5xl text-comic-yellow mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            GET MY MANIFESTO
          </motion.h2>

          <motion.p
            className="font-comic text-lg max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Download the full manifesto as a PDF. Share it, read it, and let it inspire your own journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button
              onClick={handleDownloadManifesto}
              className="inline-block bg-comic-yellow text-black font-bangers text-xl px-8 py-4 border-4 border-white comic-shadow hover:scale-105 transition-transform"
            >
              📥 DOWNLOAD MANIFESTO PDF
            </button>
          </motion.div>

          <motion.p
            className="font-comic text-sm mt-6 text-comic-yellow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Or view the full text above. Save it, print it, live it.
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
