'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ComicPanel } from '@/components/ComicPanel'
import { ComicButton } from '@/components/ComicButton'
import { HalftoneOverlay } from '@/components/HalftoneOverlay'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
            GET IN TOUCH
          </motion.h1>
          <motion.p
            className="font-comic text-xl text-comic-black max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Send us a message and we&apos;ll respond faster than a speeding bullet.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h2 className="font-bangers text-3xl text-comic-red mb-4">
                  CONTACT INFO
                </h2>
              </div>

              <ComicPanel variant="blue" className="text-black">
                <h3 className="font-bangers text-xl text-comic-yellow mb-2">
                  GOTHAM HQ
                </h3>
                <p className="font-comic text-sm mb-2">
                  Wayne Tower<br />
                  Gotham City<br />
                  555-0001
                </p>
                <p className="font-comic text-sm">
                  batman@heromail.com
                </p>
              </ComicPanel>

              <ComicPanel variant="red" className="text-black">
                <h3 className="font-bangers text-xl text-comic-yellow mb-2">
                  NEW YORK OFFICE
                </h3>
                <p className="font-comic text-sm mb-2">
                  Queens Hub<br />
                  New York City<br />
                  555-0002
                </p>
                <p className="font-comic text-sm">
                  spider@heromail.com
                </p>
              </ComicPanel>

              <ComicPanel variant="yellow" className="text-black">
                <h3 className="font-bangers text-xl text-comic-red mb-2">
                  EMERGENCY HOTLINE
                </h3>
                <p className="font-comic text-sm">
                  Available 24/7 for critical situations
                </p>
                <p className="font-bangers text-2xl text-comic-blue mt-3">
                  1-800-HEROES
                </p>
              </ComicPanel>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <ComicPanel variant="blue" className="text-black">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="font-comic font-bold block mb-2">
                      NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-4 border-black text-black font-comic"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="font-comic font-bold block mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-4 border-black text-black font-comic"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="font-comic font-bold block mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-4 border-black text-black font-comic h-32"
                      placeholder="Your message..."
                      required
                    />
                  </div>

                  <ComicButton variant="primary" className="w-full">
                    SEND MESSAGE
                  </ComicButton>
                </form>
              </ComicPanel>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="relative py-16 bg-comic-red text-white border-t-8 border-black">
        <HalftoneOverlay color="red" opacity={0.2} />
        
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            className="font-bangers text-4xl text-comic-yellow mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            RESPONSE TIME GUARANTEE
          </motion.h2>
          
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="font-comic">
              <div className="font-bangers text-2xl">⚡</div>
              <p className="text-sm font-bold mt-2">URGENT<br />&lt; 1 hour</p>
            </div>
            <div className="font-comic">
              <div className="font-bangers text-2xl">💨</div>
              <p className="text-sm font-bold mt-2">NORMAL<br />&lt; 24 hours</p>
            </div>
            <div className="font-comic">
              <div className="font-bangers text-2xl">📞</div>
              <p className="text-sm font-bold mt-2">SUPPORT<br />24/7</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
