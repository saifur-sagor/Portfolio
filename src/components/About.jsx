import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { History, CheckCircle, Monitor,ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const About = () => {
  const stats = [
    { icon: History, value: '6+ Months', label: 'Experience' },
    { icon: CheckCircle, value: '10+ Projects', label: 'Completed' },
    { icon: Monitor, value: '15+ Techs', label: 'Mastered' },
  ]

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">About Me</h2>
          <h3 className="text-3xl lg:text-4xl font-bold">Crafting Digital Excellence</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-slate-100 dark:bg-card-dark border-white/5 hover:border-primary/50 transition-all group transform hover:-translate-y-2">
                <CardContent className="flex items-center gap-6 p-0">
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div 
            className="lg:col-span-5 rounded-3xl overflow-hidden border border-border-purple/30 aspect-square lg:aspect-auto lg:h-[400px] bg-center bg-cover"
            style={{
              backgroundImage: `url('/public/About.png')`
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          <motion.div 
            className="lg:col-span-7 flex flex-col gap-6 p-8 lg:p-12 rounded-3xl bg-slate-100 dark:bg-card-dark border border-white/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <p className="text-lg font-bold text-primary">Passionate MERN Developer</p>
            </div>

            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              I specialize in building full-stack applications using React, Node.js, and MongoDB with a focus on clean code and user-centric design. My journey started with a curiosity for how things work on the internet, which evolved into a professional career building high-impact web solutions.
            </p>

            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              When I'm not coding, you'll find me exploring new UI trends or contributing to open-source projects. I believe in the power of technology to solve real-world problems.
            </p>

            <div className="mt-4 p-5 rounded-2xl border border-primary/20 bg-primary/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-slate-900 dark:text-white font-bold">Available for Freelance Work</span>
                <span className="text-slate-500 dark:text-slate-400 text-sm">Currently open to new opportunities and collaborations.</span>
              </div>
              <Button variant="link" className=" text-primary font-bold p-0" asChild>
                <a className='flex items-center gap-2' href="#contact">
                  Contact Info
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About