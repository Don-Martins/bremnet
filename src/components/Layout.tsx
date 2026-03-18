import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-white/10 py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-display font-bold text-white tracking-tight">Bremnet<span className="text-indigo-500">.</span></a>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">{link.name}</a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors">
            Get Started
          </a>
        </div>

        <button className="md:hidden text-zinc-300 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-300 hover:text-white transition-colors">{link.name}</a>
              ))}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-indigo-600 text-white font-medium mt-4 hover:bg-indigo-700 transition-colors">
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#home" className="text-2xl font-display font-bold text-white tracking-tight mb-4 block">Bremnet<span className="text-indigo-500">.</span></a>
            <p className="text-zinc-400 max-w-sm mb-6 leading-relaxed">
              We build high-converting eCommerce websites that increase your sales and grow your online business.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#services" className="text-zinc-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-zinc-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#contact" className="text-zinc-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-zinc-400 hover:text-white transition-colors cursor-pointer">hello@bremnet.com</li>
              <li className="text-zinc-400 hover:text-white transition-colors cursor-pointer">+234 915 388 8216</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Bremnet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/2349153888216" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-[#25D366]/30 hover:shadow-2xl"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
