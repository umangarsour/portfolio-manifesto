'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ComicPanel } from '@/components/ComicPanel'
import { SpeechBubble } from '@/components/SpeechBubble'
import { CaptionBox } from '@/components/CaptionBox'
import { HalftoneOverlay } from '@/components/HalftoneOverlay'
import { ComicButton } from '@/components/ComicButton'
import Image from 'next/image'

export default function Manifesto() {
  const manifestoPoints = [
    {
      title: 'OFFLINE EVENTS',
      description: `Through screening interviews and feedback from
juniors, peers, and seniors, it became clear that
there are several areas we can improve upon.
One key insight is the preference for offline
events, as they provide a more engaging and
interactive environment where people can
connect better with their peers and participate
more comfortably.`,
      color: 'blue',
    },
    {
      title: 'ROOMS',
      description: `Managing rooms and permissions is something we simply
cannot overlook, because without proper coordination,
events cannot happen.
Given how administrative processes work, this is never a
one person job and requires consistent communication and
cooperation within the team. Many delays or cancellations
happen due to small oversights like missed permissions,
which can be easily avoided with better coordination.
It is also important to involve junior batches in this process,
not by forcing them, but by keeping them engaged and
informed. When they understand how things work on the
ground, it not only helps in smoother execution now
but also ensures continuity and better preparedness
for the future.`,
      color: 'red',
    },
    {
      title: 'EVENTS CALENDAR',
      description: `To manage contingents more effectively, it is
important to align our planning with the academic
calendar along with major cultural, debating, and
quizzing events. From experience, exams are usually the
biggest constraint, so addressing this early can help
avoid last-minute conflicts. By mapping these timelines
in advance, we can set more realistic expectations,
especially for offline events, and make better use of
online opportunities when schedules are tight.`,
      color: 'yellow',
    },
    {
      title: 'REVIVAL OF PODCASTS',
      description: `The podcasts initiative, which was an active and
engaging part of UNESQUO last year, saw a decline
this year. We aim to revive this space and bring it
back with renewed consistency and creativity. We
encourage everyone to share their ideas and
suggestions for podcast themes or formats, if an
idea resonates and adds value for the community,
we would be more than happy to take it forward
and make it happen.`,
      color: 'blue',
    },
    {
      title: 'WORKSHOPS',
      description: `We aim to conduct more workshops across debating
formats, oration, MUNs, and quizzing to ensure that
members have consistent opportunities to learn and
improve. In addition, we will introduce more genrespecific quizzes and debates so that everyone can
participate in areas they are comfortable with. This
approach will help make the space more inclusive,
encouraging even those who are hesitant to step in and
give quizzing or debating a try through their own
strengths.`,
      color: 'red',
    },
    {
      title: 'MERCH',
      description: `I understand that many of you have been eagerly
waiting for the merch, and it’s fair to acknowledge that
we haven’t been able to deliver it as expected so far.
That said, the process is actively underway, and we’re
working to ensure that what we deliver is well thought
out, practical, and worth the wait. Our focus is not just
on speed, but on getting the details right, from design to
quality and affordability. We intend to roll it out as
soon as possible, and this time, with a more structured
and reliable approach to avoid further delays.`,
      color: 'yellow',
    },
    {
      title: 'SLIDE SHARE AND INSTAGRAM',
      description: `We used to regularly upload our quiz sets on SlideShare and
also run features like
“Question of the Week” on our
Instagram page. These initiatives were great for engagement
and continuous learning, but they seem to have been
discontinued over time. Reviving and maintaining them will
help keep the community active, improve visibility, and
provide consistent value to both members and followers.
Additionally, we will ensure that all our wins and
achievements are posted regularly on our social media
handles to strengthen the club’s presence and showcase its
legacy.`,
      color: 'yellow',
    },
    {
      title: 'WEBSITE',
       description: (
    <>
      It’s high time that our website undergoes a
      proper upgrade. It should serve as an active and
      regularly updated platform, featuring upcoming
      events, quiz sets, practice resources, and other
      relevant content. To achieve this, I have a
      proposed website in mind that can better meet these needs and enhance accessibility for all members.
      <br />
      The link to the new proposed website, which the current exe body has approved -
      <br />
       {''}
      <a
        href="https://v0-v0unesquo2025finalmain.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black font-bold underline"
      >https://v0-v0unesquo2025finalmain.vercel.app/</a>{''}
    </>
  ),
      color: 'red',
    },
    {
      title: 'REIMBURSEMENT',
      description: `This is not something I can promise outright, but it
is something I genuinely want to work towards.
For members actively participating in inter college
events, we will explore the possibility of partial
reimbursement of participation fees. The
feasibility and logistics of this will be discussed
with the incoming executive body, faculty,
administration and we will make sure it is
seriously considered.
The aim is simple: to ensure that those who
consistently contribute and represent UNESQUO
are recognised, appreciated, and rewarded.
At the same time, this can also support members
who genuinely want to participate in various
offline events but are unable to do so due to
financial constraints. Even small steps in this
direction can help make participation more
accessible and gradually address inactivity within
the club`,
      color: 'blue',
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
    link.href = '/The Manifesto.pdf' // Path to your PDF in the public folder
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
            className="font-fira font-semibold text-xl max-w-3xl"
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
              <h1 className='text-5xl font-medium text-center font-bangers'>WHY ME?</h1>
              <ul className="font-comic text-lg leading-relaxed mt-4 list-disc font-bold">
                <li>

                My contribution to this family has been among
the most consistent and active within my
batch. I’ve not only participated extensively but
also secured multiple wins across events,
staying deeply involved in everything we do.
                </li>
<li>

Over time, I’ve built a reputation for being
reliable. Whenever my seniors or the team
needed someone to step up, I made sure to
deliver. I am (/becoming) someone the team
could count on.
</li>
<li>
  Beyond participation, I’ve also taken the
initiative to organize and conduct multiple
events, contributing to both execution and
experience.
</li>
<li>

For me, it has never been just about showing up,
it has always been about adding value and
making things happen.
</li>
<li>

I believe, growth comes from honest feedback. I
welcome constructive criticism, and whenever I
make mistakes, I take responsibility and
actively work on improving myself.
</li>
<li>
  I have never been completely inactive over the
past two years, I’ve been consistently involved
in almost every club activity.
</li>
<li>

I have always been ready to help anyone who
reached out, be it a senior, junior, or
batchmate.
</li>
<li>
  
I have and will give my all to this family.
</li>
              </ul>
            </SpeechBubble>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
            <div className='mx-auto w-[95%] lg:w-4xl'>
         <SpeechBubble variant="speech" className="bg-comic-yellow border-4 border-black text-black p-8">
              <h1 className='text-5xl font-medium text-center font-bangers'>THE CLAUSES</h1>
              <p className='font-semibold mt-4 font-fira text-center lg:w-2xl mx-auto'>
                I refuse to sell you the illusion of instant
change. No manifesto or individual can
magically solve every problem overnight.
Leadership isn’t about fiction, it’s about
realistic, consistent action that drives
actual progress.
              </p>
            </SpeechBubble>
            </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {manifestoPoints.map((point, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ComicPanel
                  variant={point.color as 'default' | 'blue' | 'red' | 'yellow'}
                  className={`h-full ${
                    point.color === 'yellow' ? 'text-black' : 'text-white'
                  }`}
                >
                  <h3 className="font-bangers text-2xl mb-4 text-comic-yellow">
                    {point.title}
                  </h3>
                  <p className="font-fira font-normal text-sm leading-relaxed">
                    {point.description}
                  </p>
                </ComicPanel>
              </motion.div>
            ))}
          </motion.div>
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
              I pledge to live by these strong words by my idol MS Dhoni - 
              "I want people to remember me as a good person, not just a good cricketer."
            </p>
            <p className="font-bangers text-3xl mb-4">
              ★ FOR THE CLUB. FOR THE PEOPLE. FOR THE LEGACY ★
            </p>
            <p className="mb-4">
              I will strive to create opportunities, encourage participation, and ensure that every effort contributes to something meaningful.
              I along with my friends will push for better systems, stronger execution, and a culture where people don’t just join but truly belong and grow.
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
            Or view the full text above. Lets maintain the legacy of UNESQUO together.
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
