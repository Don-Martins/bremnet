import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, PhoneCall, ShoppingCart, Layout, Globe, TrendingUp, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-zinc-950 to-zinc-950"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8 text-white"
          >
            Bremnet builds high-converting eCommerce websites that <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">increase your sales</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We help online businesses grow with fast, mobile-optimized, conversion-focused websites designed to turn visitors into loyal customers.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#pricing" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-colors">
              Get Your Store <ArrowRight className="w-4 h-4" />
            </a>
            <a href="https://wa.me/2349153888216" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-zinc-900 border border-white/10 text-white font-semibold hover:bg-zinc-800 transition-colors">
              <PhoneCall className="w-4 h-4" /> Book a Call
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    { 
      name: "Sarah Jenkins", 
      role: "Founder, Lumina Beauty", 
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      result: "Sales increased by 150% in 2 months", 
      text: "Bremnet completely transformed our online store. The new design is stunning, the checkout process is seamless, and we saw ROI within the first week of launch." 
    },
    { 
      name: "Michael Torres", 
      role: "CEO, Nexus Tech", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      result: "Conversion rate doubled", 
      text: "Working with Bremnet was the best decision for our brand. They understand eCommerce inside and out, delivering a site that looks premium and converts like crazy." 
    },
    { 
      name: "Elena Rodriguez", 
      role: "Marketing Director, Vertex", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      result: "Mobile traffic converts 3x better", 
      text: "Our old site was slow and clunky on mobile. Bremnet delivered a lightning-fast, mobile-first experience that our customers absolutely love." 
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 border-y border-white/5 bg-zinc-950 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <p className="text-center text-sm font-medium text-zinc-500 mb-10 uppercase tracking-widest">Trusted by growing eCommerce brands</p>
        <div className="relative flex overflow-hidden group">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>
          <motion.div 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }} 
            className="flex whitespace-nowrap gap-16 md:gap-24 items-center opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          >
            {['Lumina', 'Nexus', 'Aura', 'Vertex', 'Zephyr', 'Nova', 'Lumina', 'Nexus', 'Aura', 'Vertex', 'Zephyr', 'Nova'].map((brand, i) => (
              <div key={i} className="text-2xl md:text-3xl font-display font-bold text-white tracking-wider">{brand}</div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Avatars */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-12">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`relative rounded-full overflow-hidden transition-all duration-500 ${
                  i === currentIndex 
                    ? 'w-16 h-16 md:w-20 md:h-20 ring-2 ring-indigo-500 ring-offset-4 ring-offset-zinc-950 scale-110 shadow-[0_0_30px_rgba(99,102,241,0.3)]' 
                    : 'w-12 h-12 md:w-14 md:h-14 opacity-40 hover:opacity-100 grayscale hover:grayscale-0'
                }`}
              >
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Quote Area */}
          <div className="relative min-h-[300px] md:min-h-[250px] flex flex-col items-center justify-center w-full">
            <Quote className="absolute top-0 text-indigo-500/10 w-32 h-32 -translate-y-1/2 rotate-180 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center w-full"
              >
                <div className="flex items-center gap-1 text-indigo-400 mb-8">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-display font-medium text-white leading-tight md:leading-tight mb-10 max-w-4xl">
                  "{testimonials[currentIndex].text}"
                </h3>
                
                <div className="flex flex-col items-center gap-2">
                  <p className="text-white font-bold text-xl">{testimonials[currentIndex].name}</p>
                  <p className="text-zinc-400">{testimonials[currentIndex].role}</p>
                  <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">
                    <TrendingUp className="w-4 h-4" /> {testimonials[currentIndex].result}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

export function Services() {
  const services = [
    {
      title: "eCommerce Development",
      desc: "Custom-built online stores designed to sell.",
      icon: ShoppingCart,
      features: ["Shopify / WooCommerce / Custom", "Payment integration", "Mobile optimization"]
    },
    {
      title: "Landing Pages",
      desc: "High-converting pages for your campaigns.",
      icon: Layout,
      features: ["Conversion-focused design", "Fast loading", "Product-focused UI"]
    },
    {
      title: "Business Websites",
      desc: "Professional presence for your brand.",
      icon: Globe,
      features: ["SEO-ready", "Brand-focused", "Scalable architecture"]
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Services tailored for growth</h2>
          <p className="text-zinc-400 text-lg">We provide end-to-end web design and development solutions specifically crafted for eCommerce success.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-indigo-500/30 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                <service.icon className="w-7 h-7 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 mb-8">{service.desc}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-2 text-white font-medium hover:text-indigo-400 transition-colors">
                Get Started <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Portfolio() {
  const projects = [
    { name: "Aura Skincare", result: "+40% sales increase", image: "https://picsum.photos/seed/skincare/800/600" },
    { name: "Nexus Tech", result: "2x conversion rate", image: "https://picsum.photos/seed/techstore/800/600" },
    { name: "Lumina Fashion", result: "-50% bounce rate", image: "https://picsum.photos/seed/fashion/800/600" },
    { name: "Vertex Athletics", result: "+85% mobile sales", image: "https://picsum.photos/seed/athletics/800/600" },
    { name: "Zephyr Home", result: "3x faster load time", image: "https://picsum.photos/seed/furniture/800/600" },
    { name: "Nova Coffee", result: "+120% subscriptions", image: "https://picsum.photos/seed/coffee/800/600" }
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-zinc-900/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeIn} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Selected Work</h2>
            <p className="text-zinc-400 text-lg">See how we've helped other eCommerce brands elevate their online presence and skyrocket their sales.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="group relative rounded-3xl overflow-hidden bg-zinc-900">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-medium mb-3 backdrop-blur-md border border-indigo-500/20">
                  <TrendingUp className="w-3 h-3" /> {project.result}
                </div>
                <h3 className="text-2xl font-bold text-white">{project.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
