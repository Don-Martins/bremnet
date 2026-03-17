/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowRight, Code2, Globe, LayoutTemplate, Mail, MonitorSmartphone, Palette, Sparkles, Zap, Star, Quote, ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight, Layers } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.15 }
};

export default function App() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      quote: "Bremnet completely transformed our digital presence. Our conversion rate doubled within the first month of launching the new platform.",
      author: "Sarah Jenkins",
      role: "CMO, Aura Finance",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "The level of polish and technical expertise the team brought to our SaaS product was unmatched. They are true partners.",
      author: "David Chen",
      role: "Founder, Nexus AI",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "From brand identity to the final e-commerce build, Bremnet delivered excellence at every single touchpoint.",
      author: "Emma Roberts",
      role: "Director, Lumina Studio",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-400 flex items-center justify-center shadow-lg shadow-white/5">
              <div className="w-3 h-3 bg-zinc-950 rounded-sm transform rotate-45"></div>
            </div>
            <span className="font-display font-bold text-xl tracking-tight">Bremnet.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
          </div>
          <button className="px-5 py-2.5 text-sm font-medium bg-white text-zinc-950 rounded-full hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95">
            Start Project
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="initial"
            animate="whileInView"
          >
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.05] mb-8 text-balance">
              Digital experiences that <span className="text-gradient-accent">demand attention.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
              Bremnet crafts high-converting websites for ambitious brands. We merge strategic design with flawless engineering to accelerate your growth.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-950 rounded-full font-medium hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group">
                View Our Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 glass-card rounded-full font-medium hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
                Book a Discovery Call
              </button>
            </motion.div>
          </motion.div>

          {/* Hero UI Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ y, opacity }}
            className="relative mx-auto mt-24 max-w-5xl"
          >
            <div className="relative rounded-2xl bg-zinc-900/50 p-2 ring-1 ring-white/10 backdrop-blur-2xl shadow-2xl shadow-indigo-500/10">
              <div className="absolute -top-px left-1/2 -ml-[200px] h-px w-[400px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
              <div className="absolute -bottom-px left-1/2 -ml-[200px] h-px w-[400px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              
              <div className="rounded-xl overflow-hidden bg-zinc-950 relative aspect-[16/9] md:aspect-[21/9] border border-white/5">
                <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:32px_32px]" />
                
                {/* Mockup Header */}
                <div className="absolute top-0 left-0 right-0 h-12 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2 backdrop-blur-md z-10">
                  <div className="w-3 h-3 rounded-full bg-white/10"></div>
                  <div className="w-3 h-3 rounded-full bg-white/10"></div>
                  <div className="w-3 h-3 rounded-full bg-white/10"></div>
                  <div className="ml-4 h-6 w-48 bg-white/5 rounded-md"></div>
                </div>
                
                {/* Mockup Content */}
                <div className="absolute top-12 bottom-0 left-0 right-0 p-6 md:p-8 flex gap-6 md:gap-8">
                  {/* Sidebar */}
                  <div className="w-48 hidden md:flex flex-col gap-4">
                    <div className="h-8 w-full rounded-lg bg-white/5 mb-4"></div>
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-4 w-full rounded-md bg-white/5" style={{ opacity: 1 - i * 0.15 }}></div>
                    ))}
                  </div>
                  
                  {/* Main Content */}
                  <div className="flex-1 flex flex-col gap-6">
                    <div className="h-32 md:h-48 w-full rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]" />
                      <div className="absolute bottom-4 left-4 right-4 h-1/2 bg-gradient-to-t from-indigo-500/40 to-transparent rounded-lg blur-xl"></div>
                    </div>
                    <div className="flex-1 flex flex-col sm:flex-row gap-6">
                      <div className="flex-1 rounded-xl bg-white/5 border border-white/5 p-4 flex flex-col gap-3">
                        <div className="h-4 w-1/3 bg-white/10 rounded-md"></div>
                        <div className="h-8 w-1/2 bg-white/20 rounded-md"></div>
                        <div className="mt-auto h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full w-2/3 bg-indigo-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex-1 rounded-xl bg-white/5 border border-white/5 p-4 flex flex-col gap-3">
                        <div className="h-4 w-1/3 bg-white/10 rounded-md"></div>
                        <div className="h-8 w-1/2 bg-white/20 rounded-md"></div>
                        <div className="mt-auto h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full w-4/5 bg-purple-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/5 bg-white/[0.01] relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            {[
              { label: "Client Retention", value: "98%" },
              { label: "Projects Delivered", value: "150+" },
              { label: "Industry Awards", value: "24" },
              { label: "Team Experts", value: "12" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`text-center ${i !== 0 ? 'pl-8' : ''}`}
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Marquee */}
      <section className="py-12 overflow-hidden border-b border-white/5 bg-zinc-950">
        <p className="text-center text-sm font-medium text-zinc-500 mb-8 uppercase tracking-widest">Trusted by innovative teams worldwide</p>
        <div className="relative flex overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>
          
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 md:gap-24 px-8 md:px-12 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-2xl font-display font-bold">AURA</span>
                <span className="text-2xl font-display font-bold tracking-tighter">NEXUS</span>
                <span className="text-2xl font-display font-bold italic">Lumina</span>
                <span className="text-2xl font-display font-bold">OASIS</span>
                <span className="text-2xl font-display font-bold tracking-widest">VERTEX</span>
                <span className="text-2xl font-display font-bold">QUANTUM</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div {...fadeIn} className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 text-gradient">Expertise that drives measurable growth.</h2>
            <p className="text-zinc-400 text-lg">We don't just build websites; we build digital businesses. Our comprehensive suite of services covers every aspect of your online presence.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: LayoutTemplate, title: "UI/UX Design", desc: "Intuitive, user-centric interfaces designed to engage and convert visitors into loyal customers." },
              { icon: Code2, title: "Web Development", desc: "Robust, scalable, and lightning-fast web applications built with modern tech stacks." },
              { icon: MonitorSmartphone, title: "Responsive Design", desc: "Flawless experiences across all devices, ensuring your brand looks perfect everywhere." },
              { icon: Palette, title: "Brand Identity", desc: "Cohesive visual systems that communicate your unique value proposition clearly." },
              { icon: Zap, title: "Performance Optimization", desc: "Speed optimization and technical SEO to rank higher and retain impatient users." },
              { icon: Globe, title: "E-Commerce Solutions", desc: "High-converting online stores engineered to maximize your revenue and average order value." }
            ].map((service, i) => (
              <motion.div key={i} variants={fadeIn} className="glass-card p-8 rounded-2xl hover:bg-white/[0.04] transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-transparent to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-colors duration-500"></div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all duration-300 relative z-10">
                  <service.icon className="w-6 h-6 text-zinc-300 group-hover:text-indigo-300 transition-colors" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 relative z-10">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed relative z-10">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="py-24 md:py-32 bg-zinc-900/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4 text-gradient">Selected Work</h2>
              <p className="text-zinc-400 text-lg max-w-md">A showcase of our recent digital transformations for industry-leading brands.</p>
            </div>
            <button className="text-sm font-medium flex items-center gap-2 hover:text-white text-zinc-400 transition-colors group">
              View All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              { title: "Aura Finance", category: "Fintech Platform", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=900" },
              { title: "Lumina Studio", category: "E-Commerce", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200&h=900" },
              { title: "Nexus AI", category: "SaaS Landing Page", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=900" },
              { title: "Oasis Health", category: "Corporate Website", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200&h=900" }
            ].map((project, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`group cursor-pointer ${i % 2 !== 0 ? 'md:mt-24' : ''}`}
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-zinc-900 ring-1 ring-white/10">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    src={project.img} 
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="flex items-center justify-between px-2">
                  <div>
                    <h3 className="text-2xl font-display font-semibold mb-1 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                    <p className="text-zinc-400">{project.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 text-gradient">Client Success Stories</h2>
            <p className="text-zinc-400 text-lg">Don't just take our word for it. Hear from the visionary leaders we've partnered with.</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden relative rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-4">
                    <div className="glass-card p-8 md:p-12 rounded-2xl flex flex-col items-center text-center">
                      <div className="flex gap-1 mb-8">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-5 h-5 fill-indigo-500 text-indigo-500" />
                        ))}
                      </div>
                      <Quote className="w-10 h-10 text-white/10 mb-6" />
                      <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed mb-10 max-w-3xl">"{testimonial.quote}"</p>
                      <div className="flex flex-col items-center gap-4 mt-auto">
                        <img src={testimonial.image} alt={testimonial.author} className="w-16 h-16 rounded-full object-cover ring-2 ring-white/10" referrerPolicy="no-referrer" />
                        <div>
                          <div className="font-semibold text-white text-lg">{testimonial.author}</div>
                          <div className="text-sm text-zinc-400">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-md z-10">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-md z-10">
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === activeTestimonial ? 'bg-indigo-500' : 'bg-white/20 hover:bg-white/40'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 md:py-32 border-y border-white/5 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Sticky Left Column */}
            <div className="lg:col-span-5 relative">
              <div className="lg:sticky lg:top-32">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-6">
                    <Layers className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Our Process</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-gradient">
                    How we deliver excellence.
                  </h2>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    A streamlined, transparent process designed to turn your vision into a high-performing reality without the friction. We work closely with you at every step to ensure perfection.
                  </p>
                  <button className="hidden lg:inline-flex items-center gap-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors group">
                    Start your project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Scrolling Right Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {[
                { step: "01", title: "Discovery & Strategy", desc: "We dive deep into your brand, audience, and goals. We analyze your competitors and forge a strategic roadmap that sets the foundation for success.", icon: Globe },
                { step: "02", title: "UI/UX Design", desc: "Crafting wireframes and high-fidelity prototypes that perfectly align with your identity. We focus on user journeys that maximize conversions.", icon: Palette },
                { step: "03", title: "Development", desc: "Writing clean, scalable code to bring the designs to life. We ensure flawless performance, accessibility, and responsive behavior across all devices.", icon: Code2 },
                { step: "04", title: "Launch & Scale", desc: "Rigorous testing, optimization, and a seamless deployment to the world. Post-launch, we monitor performance and iterate for continuous growth.", icon: Zap }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden group hover:bg-white/[0.04] transition-colors"
                >
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-transparent to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-colors duration-500"></div>
                  
                  {/* Big Number Background */}
                  <div className="absolute -top-6 -right-6 text-8xl font-display font-bold text-white/[0.03] group-hover:text-white/[0.05] transition-colors duration-500 pointer-events-none select-none">
                    {item.step}
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-indigo-500/30 transition-all duration-500 shadow-lg">
                      <item.icon className="w-6 h-6 text-zinc-400 group-hover:text-indigo-400 transition-colors" />
                    </div>
                    <h3 className="text-2xl font-display font-semibold mb-4 text-white flex items-center gap-4">
                      <span className="text-sm font-mono text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-md">{item.step}</span>
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-lg">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-500/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8 text-balance">
              Ready to build something <span className="italic font-light text-gradient-accent">extraordinary?</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
              Let's collaborate to create a digital experience that elevates your brand and drives real business results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-white text-zinc-950 rounded-full font-medium text-lg hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 text-sm text-zinc-400 mt-4 sm:mt-0 sm:ml-4">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Available for new projects</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 pt-16 pb-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-zinc-100 to-zinc-400 flex items-center justify-center">
                  <div className="w-2 h-2 bg-zinc-950 rounded-sm transform rotate-45"></div>
                </div>
                <span className="font-display font-bold text-lg tracking-tight">Bremnet.</span>
              </div>
              <p className="text-zinc-400 max-w-sm mb-6">
                A premium web design and development agency crafting digital experiences for the modern web.
              </p>
              <div className="flex items-center gap-4 text-zinc-400">
                <a href="#" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#work" className="hover:text-white transition-colors">Our Work</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
            <p>&copy; {new Date().getFullYear()} Bremnet Agency. All rights reserved.</p>
            <p>Designed with precision.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
