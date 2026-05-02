import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'

// Nmae
const name = "Md Saifur Rahman"

// Container animation (stagger letters)
const container = {
  visible: {
    transition: {
      staggerChildren: 0.1, // letters come into one
    },
  },
}
const letter = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0, // বসে যাবে
    transition: { duration: 0.5 },
  },
  out: {
    opacity: 0,
    x: -60,
    transition: { duration: 0.4 },
  },
}

const Hero = () => {
  const controls = useAnimation()
  useEffect(() => {
    const runAnimation = async () => {
      while (true) {
        await controls.start("visible")
        await new Promise(r => setTimeout(r, 2000))
        await controls.start("out")
        await new Promise(r => setTimeout(r, 500))
        await controls.start("hidden")
      }
    }
    runAnimation()
  }, [controls])

  return (
    <section
      className="relative min-h-screen flex items-center pt-24 lg:pt-0 overflow-hidden bg-gradient-to-br from-background-dark via-background-dark to-primary/5"
      id="home"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          className="flex flex-col gap-6 z-10 text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold w-fit uppercase tracking-widest mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for New Projects
          </div>

          {/* NAME ANIMATION */}
          <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tighter">
            I'm{" "}
            <motion.span
              className="inline-flex bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent"
              variants={container}
              initial="hidden"
              animate={controls}
            >
              {name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letter}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          <h2 className="text-2xl lg:text-3xl font-medium text-slate-700 dark:text-slate-300 leading-snug">
            Building Modern Web Experiences with MERN Stack.
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed mx-auto lg:mx-0">
            Specialized in high-performance, scalable web applications with a focus on premium aesthetics and user-centric design.
          </p>

          <div className="flex flex-wrap gap-4 mt-4 justify-center lg:justify-start">
            <Button
              variant="gradient"
              size="lg"
              className="px-8 py-4 rounded-xl font-bold group shadow-xl shadow-primary/30"
              asChild
            >
              <a className="flex items-center gap-2" href="#projects">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                View Projects
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 hover:bg-gradient-to-r hover:from-primary hover:to-pink-400 hover:text-white rounded-xl border-border-purple hover:bg-white/5 gap-2"
              asChild
            >
              <a
                className="flex items-center gap-2"
                href="/public/Mern_Stack_Resume.pdf"
                target="_blank"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative lg:block flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-primary/30 blur-[120px] rounded-full scale-75 animate-pulse"></div>

          <div
            className="relative z-10 w-full max-w-[500px] aspect-square bg-center bg-no-repeat bg-contain animate-floating rounded-full"
            style={{
              backgroundImage:
                "url('/public/profile.png')",
            }}
          ></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-transparent opacity-50 blur-3xl pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
