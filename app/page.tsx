'use client';

import Chat from '@/components/Chat';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-[#0f0c2c] text-white">
      <div className="pointer-events-none absolute -top-40 -left-40 h-[680px] w-[680px] rounded-[30%] bg-[#A855F7] opacity-40 blur-[100px]"></div>
      <div className="pointer-events-none absolute -bottom-48 right-12 h-[600px] w-[600px] rounded-[30%] bg-[#10B981] opacity-40 blur-[100px]"></div>

      <header className="container mx-auto px-6 md:px-10 lg:px-20 py-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          The easiest way to sell <br />
          your software licenses.
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-[#94a1b2]">
          Get instant quotes, sell with ease, and turn your unused software licenses into cash.
        </p>
        <motion.button
          className="mt-10 rounded-full bg-[#a855f7] px-10 py-4 font-semibold text-white shadow-lg transition hover:bg-[#9333ea]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sell My Licenses
        </motion.button>
        <Chat></Chat>
      </header>

      <section className="container mx-auto px-6 md:px-10 lg:px-20 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              title: 'Fast Quotes',
              description:
                'Get an instant price quote for your unused licenses without hassle.',
            },
            {
              title: 'Secure Transactions',
              description:
                'We ensure safe and encrypted payments directly to your account.',
            },
            {
              title: 'Hassle-Free',
              description:
                'No complicated paperwork or long wait times. Just sell and earn.',
            },
          ].map(({ title, description }) => (
            <motion.div
              key={title}
              className="rounded-2xl border border-[#292450] bg-[#1a133b] p-8 text-center shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="mb-4 text-2xl font-bold">{title}</h3>
              <p className="text-[#94a1b2]">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-10 lg:px-20 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">What our users say</h2>
        <div className="grid gap-12 md:grid-cols-2">
          {[
            {
              name: 'Alice Johnson',
              quote:
                'This platform made selling my unused licenses effortless and profitable!',
            },
            {
              name: 'Michael Smith',
              quote:
                'The UI is beautiful and the process is fast. Highly recommend!',
            },
          ].map(({ name, quote }) => (
            <motion.blockquote
              key={name}
              className="rounded-xl bg-[#2b2350] p-8 text-lg italic shadow-md"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              “{quote}”
              <footer className="mt-4 text-right font-semibold">— {name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      <footer className="container mx-auto px-6 md:px-10 lg:px-20 py-10 text-center text-[#94a1b2]">
        © 2025 SoftwareResale Inc. All rights reserved.
      </footer>
    </div>
  );
}
