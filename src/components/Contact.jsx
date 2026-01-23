import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, MessageCircle, Mail, Send, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    // EmailJs ID
    const serviceID = 'service_fsjqw8q';
    const templateID = 'template_efr8esp';
    const publicKey = 'rKUp3ItOjmHAGppHH';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        Swal.fire({
  title: "Successfully Sent Your Message!",
  icon: "success",
  draggable: true
});
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        Swal.fire({
        title: "Something went wrong! Please try again",
        icon: "error",
        draggable: true
});;
      });
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })}

  const contactMethods = [
    {
      icon: Phone,
      label: 'Call Me',
      value: '01705112955',
      href: 'tel:01705112955'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '01705112955',
      href: 'https://wa.me/8801705112955'
    },
    {
      icon: Mail,
      label: 'Email Me',
      value: 'mdsaifurrahmansagor606@gmail.com',
      href: 'mailto:mdsaifurrahmansagor606@gmail.com'
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-background-dark" id="contact">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
          
              <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Contact</h2>
              <div>

              <h3 className="text-5xl lg:text-6xl font-bold mb-6">
                Let's <span className="bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">Talk</span>
              </h3>
              <p className="text-lg text-slate-400 max-w-md leading-relaxed">
                Have a project in mind? Let's build something extraordinary together. I'm currently available for freelance work and full-time opportunities.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-6 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(244,37,244,0.3)] group-hover:shadow-[0_0_25px_rgba(244,37,244,0.5)] transition-all">
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{method.label}</p>
                    <p className="text-lg md:text-xl font-medium truncate">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
<div>
  <h3 className="text-5xl lg:text-6xl font-bold mb-6">
                Get In <span className="bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">Touch</span>
              </h3>
          <motion.div 
            className="bg-white/[0.03] backdrop-blur-md border border-primary/10 p-8 lg:p-10 rounded-3xl shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >        
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Name</label>
                  <Input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="bg-white/5 border-white/10 text-white focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Email</label>
                  <Input
                    name="email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-white/5 border-white/10 text-white focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Subject</label>
                <Input
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="bg-white/5 border-white/10 text-white focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Message</label>
                <Textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={4}
                  className="bg-white/5 border-white/10 text-white focus:border-primary"
                />
              </div>
              
              <Button 
                type="submit"
                variant="gradient" 
                className="w-full py-4 rounded-xl text-lg shadow-lg shadow-primary/20 hover:opacity-90 active:scale-95 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </Button>
            </form>

            <div className="mt-10 pt-10 border-t border-white/5 flex flex-col items-center gap-4">
              <p className="text-sm text-slate-500 font-medium">Follow me on social media</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/saifur-sagor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-12 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 border border-white/10 text-white hover:shadow-[0_0_15px_rgba(244,37,244,0.5)] hover:text-primary"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/md-saifur-rahman-sagor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-12 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 border border-white/10 text-white hover:shadow-[0_0_15px_rgba(244,37,244,0.5)] hover:text-primary"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
</div>
        </div>
      </div>
    </section>
  )
}

export default Contact