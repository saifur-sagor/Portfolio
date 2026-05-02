import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

const Education = () => {
  const educationData = [
    {
      period: '2025 – Ongoing',
      degree: 'BSc in Computer Science & Engineering',
      institution: 'Uttara University',
      side: 'right'
    },
    {
      period: 'Completed 2024',
      degree: 'Diploma in Computer Science & Engineering',
      institution: 'Bhola Polytechnic Institute',
      side: 'left'
    },
    {
      period: 'Passed 2020',
      degree: 'Secondary School Certificate (Science)',
      institution: 'Padum Shahar High School',
      side: 'right'
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-background-light dark:bg-background-dark" id="education">
      <title>Education Section</title>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">My Journey</h2>
          <h3 className="text-3xl lg:text-4xl font-bold">Academic Background</h3>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  item.side === 'right' ? 'md:justify-end pr-0 md:pr-12 md:text-right' : 'md:justify-start pl-0 md:pl-12 text-left'
                } group`}
                initial={{ opacity: 0, x: item.side === 'right' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-8px] md:left-1/2 top-0 size-4 bg-primary rounded-full shadow-[0_0_15px_rgba(244,37,244,1)] md:-translate-x-1/2 z-10"></div>
                
                <div className="w-full md:w-1/2 pl-10 md:pl-0">
                  <Card className="p-8 bg-slate-100 dark:bg-card-dark border-white/5 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(244,37,244,0.15)] transition-all duration-300">
                    <CardContent className="p-0">
                      <span className="text-primary font-bold text-sm">{item.period}</span>
                      <h4 className="text-xl font-bold mt-2">{item.degree}</h4>
                      <p className="text-slate-500 font-medium">{item.institution}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education