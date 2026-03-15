"use client";

import { motion } from "framer-motion";

export default function Overlay() {
  return (
    <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10 flex flex-col justify-between">
      {/* 0% scroll */}
      <div className="h-screen flex flex-col items-center justify-center p-8 text-center sticky top-0" style={{ position: 'static' }}>
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          Chirag Singh
        </motion.h1>
        <motion.p
          className="mt-6 text-2xl md:text-4xl text-neutral-300 max-w-3xl font-light tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
        >
          AI & Data Science Developer.
        </motion.p>
      </div>

      {/* spacer */}
      <div className="h-[100vh]" />

      {/* 30% scroll */}
      <div className="h-screen flex flex-col items-start justify-center p-12 md:p-32 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5, once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-black/30 p-8 md:p-12 rounded-3xl backdrop-blur-md border border-white/5"
        >
          <h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-tight max-w-3xl">
            I build intelligent <br /> data-driven solutions.
          </h2>
        </motion.div>
      </div>

      {/* 60% scroll */}
      <div className="h-screen flex flex-col items-end justify-center p-12 md:p-32 w-full max-w-7xl mx-auto text-right">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5, once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-black/30 p-8 md:p-12 rounded-3xl backdrop-blur-md border border-white/5"
        >
          <h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-tight max-w-3xl">
            Bridging AI, Analytics <br /> & Engineering.
          </h2>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="h-screen flex flex-col items-center justify-end pb-48">
        <motion.h2
          className="text-xl md:text-3xl font-light tracking-widest uppercase text-neutral-400 drop-shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.8, once: false }}
        >
          Scroll to explore works
        </motion.h2>
        <motion.div
          className="w-[1px] h-32 bg-gradient-to-b from-neutral-400 to-transparent mt-8"
          initial={{ height: 0 }}
          whileInView={{ height: 128 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: false }}
        />
      </div>
    </div>
  );
}
