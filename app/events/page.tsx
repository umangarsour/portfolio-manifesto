'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ComicPanel } from '@/components/ComicPanel'
import { ComicButton } from '@/components/ComicButton'
import { HalftoneOverlay } from '@/components/HalftoneOverlay'

const events = [
  {
    month: 'JAN',
    date: '15',
    year: '2024',
    title: 'TechTalk: Web Development Trends',
    location: 'BIT Mesra',
    description: 'Shared insights on latest web development frameworks and best practices with 200+ students.',
    category: 'Speaking',
  },
  {
    month: 'FEB',
    date: '20',
    year: '2024',
    title: 'Competitive Programming Workshop',
    location: 'Online',
    description: 'Conducted a workshop on algorithmic problem-solving and competitive programming techniques.',
    category: 'Workshop',
  },
  {
    month: 'MAR',
    date: '10',
    year: '2024',
    title: 'Hackathon 2024 - Judge & Mentor',
    location: 'BIT Mesra',
    description: 'Judged and mentored 50+ teams in a 24-hour hackathon event focused on innovation.',
    category: 'Hackathon',
  },
  {
    month: 'APR',
    date: '25',
    year: '2024',
    title: 'Full-Stack Development Bootcamp',
    location: 'Online',
    description: 'Led a comprehensive bootcamp covering React, Node.js, and database design for 150+ participants.',
    category: 'Training',
  },
  {
    month: 'MAY',
    date: '12',
    year: '2024',
    title: 'Tech Community Meetup',
    location: 'Ranchi',
    description: 'Presented on career growth in tech and building products that matter to 300+ attendees.',
    category: 'Meetup',
  },
  {
    month: 'JUN',
    date: '30',
    year: '2024',
    title: 'Open Source Contribution Session',
    location: 'Virtual',
    description: 'Guided students through contributing to open-source projects with real-world impact.',
    category: 'Workshop',
  },
]

export default function Events() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Speaking':
        return 'blue'
      case 'Hackathon':
        return 'red'
      case 'Workshop':
        return 'yellow'
      case 'Training':
        return 'blue'
      case 'Meetup':
        return 'red'
      default:
        return 'yellow'
    }
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
            EVENTS & TALKS
          </motion.h1>
          <motion.p
            className="font-comic text-xl max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Events I&apos;ve participated in, organized, and spoken at. Building community through knowledge sharing.
          </motion.p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {events.map((event, index) => {
              const colorVariant = getCategoryColor(event.category)
              const isYellow = colorVariant === 'yellow'
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <ComicPanel
                    variant={colorVariant as 'default' | 'blue' | 'red' | 'yellow'}
                    className={`h-full flex flex-col text-black`}
                  >
                    {/* Date & Category Badge */}
                    <div className="flex gap-4 items-start mb-4">
                      <div className={`text-center px-3 py-2 border-2 border-current ${
                        isYellow ? 'bg-comic-red text-white' : 'bg-comic-yellow text-black'
                      }`}>
                        <div className="font-bangers text-sm font-bold">{event.month}</div>
                        <div className="font-bangers text-2xl font-bold">{event.date}</div>
                        <div className="font-comic text-xs">{event.year}</div>
                      </div>
                      <div className={`text-sm font-comic font-bold px-2 py-1 border-2 border-current ${
                        isYellow ? 'bg-comic-blue text-white' : 'bg-comic-black text-yellow-300'
                      }`}>
                        {event.category}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-bangers text-2xl mb-2 text-comic-yellow">
                      {event.title}
                    </h3>
                    
                    <p className="font-comic text-sm mb-4 flex-grow">
                      {event.description}
                    </p>
                    
                    <div className="bg-black bg-opacity-20 px-3 py-2 rounded mb-4 font-comic text-sm font-bold">
                      📍 {event.location}
                    </div>
                    
                    <ComicButton
                      variant={isYellow ? 'outline' : 'primary'}
                      className="w-full text-sm"
                    >
                      {event.location === 'Online' ? 'VIEW EVENT' : 'LEARN MORE'}
                    </ComicButton>
                  </ComicPanel>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20 bg-comic-blue text-black border-t-8 border-black">
        <HalftoneOverlay color="blue" opacity={0.2} />
        
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            className="font-bangers text-4xl text-comic-yellow mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            GET NOTIFIED
          </motion.h2>
          
          <motion.p
            className="font-comic text-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Want to know when I&apos;m speaking or organizing the next event? Subscribe to stay updated!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 font-comic text-black border-4 border-black comic-shadow"
            />
            <ComicButton variant="secondary">
              SUBSCRIBE
            </ComicButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
