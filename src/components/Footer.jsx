import React from 'react'

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border-purple/20 bg-card-dark">
      <title>Footer</title>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="size-6 bg-primary rounded flex items-center justify-center text-white text-xs font-bold">
              S
            </div>
            <h2 className="text-lg font-bold">Saifur Rahman</h2>
          </div>
          <p className="text-slate-500 text-sm italic max-w-sm">
            Designed with a love for minimalism, dark UI, purple–pink gradients, and modern web aesthetics.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-slate-400 text-sm">© 2025 Md Saifur Rahman. All rights reserved.</p>
          <div className="flex gap-4">
            <button className="text-xs text-slate-600 hover:text-primary transition-colors">
              Privacy Policy
            </button>
            <button className="text-xs text-slate-600 hover:text-primary transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer