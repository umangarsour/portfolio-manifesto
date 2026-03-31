'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ComicPanel } from '@/components/ComicPanel'
import { HalftoneOverlay } from '@/components/HalftoneOverlay'

const events = [
  {
    title: 'QUIZZES',
    description: `SAHODAYA QUIZ’22 WINNER
SAHODAYA QUIZ’23 WINNER
AHS INDEPENDANCE DAY QUIZ’22 WINNER
AHS INDEPENDANCE DAY QUIZ’23 WINNER
MELA QUIZ’24 RUNNER UP
PANTHEON QUIZ’24 RUNNER UP
BITOTSAV QUIZ’25 RUNNER UP
ROBOTS IN DISGUISE RUNNER UP
BLURRED OUT’25 WINNER
LOST IN TRANSLATION’25 WINNER
THE CHILLED QUIZ FINALIST
MONTY QUIZ 5.0 SEMI-FINALIST
HINDU QUIZ
NEP QUIZ’26
WORLD MUSIC DAY QUIZ FINALIST
LEGENDS QUIZ’24 RUNNER UP
FOOD AND BEVERAGES QUIZ FINALIST`,
    category: 'Quiz',
  },
  {
    title: 'PD',
    description: `GENESIS BPD
DTU PD, FINALIST
UHURU PD`,
    category: 'PD',
  },
  {
    title: 'DEBATES',
    description: `MOODI TURNCOAT DEBATE’24 FINALIST
SAHODAYA’23 DEBATE WINNER
AHS REPUBLIC DAY DEBATE’23 WINNER
NEP DEBATE’25 WINNER`,
    category: 'Debate',
  },
  {
    title: 'QUIZMASTER',
    description: `WRAPPED QUIZ’25
BITOTSAV QUIZ’26`,
    category: 'Quizmaster',
  },
  {
    title: 'MUN',
    description: `DPS MUN’21, SPECIAL MENTION
DPS MUN’22, VERBAL MENTION
BITMUN’25, GUEST DELEGATE
IITKGP GMUN’26
BITMUN’26, SPECIAL MENTION`,
    category: 'MUN',
  },
  {
    title: 'MISCELLANEOUS',
    description: `MOODI’24 ENGLISH SLAM POETRY
MOODI’24 HINDI SLAM POETRY FINALIST`,
    category: 'Misc',
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
      case 'Quiz':
        return 'yellow'
      case 'PD':
        return 'blue'
      case 'Debate':
        return 'red'
      case 'Quizmaster':
        return 'yellow'
      case 'MUN':
        return 'blue'
      case 'Misc':
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
            EVENTS & ACHIEVEMENTS
          </motion.h1>
          <motion.p
            className="font-fira font-semibold text-xl max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A snapshot of my journey across quizzes, debates, MUNs, and beyond.
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
                    className={`h-full ${
                      isYellow ? 'text-black' : 'text-white'
                    }`}
                  >
                    <h3 className="font-bangers text-2xl mb-4 text-comic-yellow">
                      {event.title}
                    </h3>
                    
                    <p className="font-fira text-sm whitespace-pre-line leading-relaxed">
                      {event.description}
                    </p>
                  </ComicPanel>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
