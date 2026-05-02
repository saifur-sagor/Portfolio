import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Database, Settings } from 'lucide-react'
import { motion } from 'framer-motion'

// Icons for skills
import { FaCode, FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa6";
import { SiNextdotjs, SiTailwindcss, SiRedux, SiFramer, SiMongodb, SiPostman, SiFirebase, SiVercel, SiJsonwebtokens } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const Skills = () => {
  const skillCategories = [
    {
      icon: FaCode,
      title: 'Frontend Development',
      skills: [
        { name: 'React & Next.js', icon: <FaReact className="text-[#61DAFB]" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: 'Redux Toolkit', icon: <SiRedux className="text-[#764ABC]" /> },
        { name: 'Framer Motion', icon: <SiFramer className="text-white" /> }
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js & Express', icon: <FaNodeJs className="text-[#339933]" /> },
        { name: 'MongoDB & Mongoose', icon: <SiMongodb className="text-[#47A248]" /> },
        { name: 'RESTful API Design', icon: <TbApi className="text-primary" /> },
        { name: 'JWT Authentication', icon: <SiJsonwebtokens className="text-white" /> }
      ]
    },
    {
      icon: Settings,
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git & GitHub', icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: 'Docker & CI/CD', icon: <FaDocker className="text-[#2496ED]" /> },
        { name: 'Firebase & Vercel', icon: <SiFirebase className="text-[#FFCA28]" /> },
        { name: 'Postman API Testing', icon: <SiPostman className="text-[#FF6C37]" /> }
      ]
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-background-dark" id="skills">
      <title>Skills Section</title>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">My Arsenal</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-white">Skills & Technologies</h3>
          </motion.div>
          <div className="hidden md:block h-[1px] flex-1 bg-border-purple/30 mx-10 mb-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="skill-card p-8 bg-card-dark border-border-purple/30 transition-all duration-300 group hover:bg-card-dark/80 hover:border-primary/50 transform hover:-translate-y-2">
                <CardHeader className="p-0 mb-6">
                  <div className="skill-icon size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(244,37,244,0.8)]">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="skill-title text-xl font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center gap-3 text-slate-400 group/item hover:text-white transition-colors">
                        <span className="text-xl transition-transform group-hover/item:scale-125">
                          {skill.icon}
                        </span>
                        <span className="text-sm font-medium">{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills