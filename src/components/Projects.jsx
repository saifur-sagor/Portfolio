import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Code } from 'lucide-react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'Foody Delivery System',
      description: 'A comprehensive food delivery platform with real-time tracking.',
      image: 'https://i.ibb.co.com/YrRzbvk/Screenshot-2026-01-22-164144.png',
      technologies: ['Next.js','React','JS(ES6+)','Tailwind',],
      liveUrl: 'https://foody-beige-zeta.vercel.app',
      sourceUrl: 'https://github.com/saifur-sagor/Next-Js-First-Project',
      sourceUrl1: 'https://github.com/saifur-sagor/Next-Js-First-Project'
    },
    {
      title: 'Book Courier Logistics',
      description: 'Full-scale logistics management system for local couriers.',
      image: 'https://i.ibb.co.com/C5xH2mSX/Screenshot-2026-01-22-165159.png',
      technologies: ['MERN Stack'],
      liveUrl: 'https://bookcouriersrs.netlify.app',
      sourceUrl: 'https://github.com/saifur-sagor/Assignment-11-Client-Side',
      sourceUrl1 :'https://github.com/saifur-sagor/Assignmrnt-11-Server-Side'
    },
    {
      title: 'E-learnin Portal',
      description: 'Modern multi-vendor shop with responsive dashboard.',
      image: 'https://i.ibb.co.com/zVGk9zm5/Screenshot-2026-01-22-175308.png',
      technologies: ['MERN Stack'],
      liveUrl: 'https://learnhub55.netlify.app',
      sourceUrl: 'https://github.com/saifur-sagor/Assignment-10-client-side',
      sourceUrl1: 'https://github.com/saifur-sagor/Assignment-10-server-side'
    }
  ]

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark" id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">Portfolio</h2>
          <h3 className="text-3xl lg:text-4xl font-bold">Featured Projects</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative bg-card-dark rounded-3xl overflow-hidden border border-border-purple/20 hover:border-primary/50 transition-all duration-300">
                <div 
                  className="aspect-video w-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <CardContent className="p-8">
                  <div className="flex gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-slate-400 uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                  <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex gap-4">
                    <Button variant="link" className=" text-primary font-bold p-0 hover:opacity-80" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2'>
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="link" className="text-slate-400 font-bold p-0 hover:text-white" asChild>
                      <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2'>
                        <Code className="w-4 h-4" />
                        Client Code
                      </a>
                    </Button>
                    <Button variant="link" className="text-slate-400 font-bold p-0 hover:text-white" asChild>
                      <a href={project.sourceUrl1} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2'>
                        <Code className="w-4 h-4" />
                        Server Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline" 
            className="px-8 py-3 rounded-xl border-border-purple text-primary hover:bg-primary/10"
          >
            View More Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects