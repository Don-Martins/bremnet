import { motion } from 'motion/react';
import { Search, PenTool, Code, Rocket, CheckCircle2, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export function Process() {
  const steps = [
    { step: "01", title: "Discovery & Strategy", desc: "We dive deep into your brand, audience, and goals. We analyze your competitors and forge a strategic roadmap that sets the foundation for success.", icon: Search },
    { step: "02", title: "UI/UX Design", desc: "Crafting wireframes and high-fidelity prototypes that perfectly align with your identity. We focus on user journeys that maximize conversions.", icon: PenTool },
    { step: "03", title: "Development", desc: "Writing clean, scalable code to bring the designs to life. We ensure flawless performance, accessibility, and responsive behavior across all devices.", icon: Code },
    { step: "04", title: "Launch & Scale", desc: "Rigorous testing, optimization, and a seamless deployment to the world. Post-launch, we monitor performance and iterate for continuous growth.", icon: Rocket }
  ];

  return (
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
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-white">
                  How we deliver excellence.
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  A streamlined, transparent process designed to turn your vision into a high-performing reality without the friction. We work closely with you at every step to ensure perfection.
                </p>
                <a href="#contact" className="hidden lg:inline-flex items-center gap-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors group">
                  Start your project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {steps.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-8 md:p-10 rounded-3xl relative overflow-hidden group bg-zinc-900 border border-white/5 hover:border-indigo-500/30 transition-colors"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-transparent to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-colors duration-500"></div>
                
                {/* Big Number Background */}
                <div className="absolute -top-6 -right-6 text-8xl font-display font-bold text-white/[0.03] group-hover:text-white/[0.05] transition-colors duration-500 pointer-events-none select-none">
                  {item.step}
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-indigo-500/50 transition-all duration-500 shadow-lg">
                    <item.icon className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
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
  );
}

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      target: "Landing Page",
      price: "Custom",
      features: ["1 page layout", "Mobile responsive", "Basic SEO setup", "Lead capture form"],
      highlighted: false
    },
    {
      name: "Pro",
      target: "eCommerce Store",
      price: "Custom",
      features: ["Full eCommerce store", "Payment integration", "Product management", "Advanced SEO", "Speed optimization"],
      highlighted: true
    },
    {
      name: "Growth",
      target: "Business Website",
      price: "Custom",
      features: ["3–5 pages", "Speed optimization", "Contact system", "CMS integration"],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-zinc-900/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Simple, transparent pricing</h2>
          <p className="text-zinc-400 text-lg">Choose the perfect package to elevate your online presence and start converting visitors into customers.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan, i) => (
            <motion.div 
              key={i} 
              {...fadeIn} 
              transition={{ delay: i * 0.1 }} 
              className={`p-8 rounded-3xl relative ${plan.highlighted ? 'bg-indigo-600 border-indigo-500 shadow-2xl shadow-indigo-500/20 md:-translate-y-4' : 'bg-zinc-900 border border-white/10'}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-indigo-600 text-xs font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-white'}`}>{plan.name}</h3>
                <p className={`text-sm font-medium ${plan.highlighted ? 'text-indigo-200' : 'text-zinc-400'}`}>{plan.target}</p>
              </div>
              <div className="mb-8">
                <span className={`text-4xl font-display font-bold ${plan.highlighted ? 'text-white' : 'text-white'}`}>{plan.price}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <CheckCircle2 className={`w-5 h-5 ${plan.highlighted ? 'text-indigo-200' : 'text-indigo-500'}`} />
                    <span className={plan.highlighted ? 'text-white' : 'text-zinc-300'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className={`block w-full py-4 rounded-full text-center font-semibold transition-colors ${plan.highlighted ? 'bg-white text-indigo-600 hover:bg-zinc-100' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const reasons = [
    "eCommerce-focused strategy",
    "Conversion-driven design",
    "Fast delivery: 5-7 days for full sites, 2-3 days for landing pages",
    "Mobile-first approach",
    "Ongoing support & maintenance"
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Why choose Bremnet?</h2>
            <p className="text-zinc-400 text-lg mb-8">We don't just build websites; we build digital storefronts optimized for revenue. Our expertise in eCommerce ensures your business is set up for scalable growth.</p>
            <ul className="space-y-4">
              {reasons.map((reason, i) => (
                <li key={i} className="flex items-center gap-4 text-lg text-zinc-200 font-medium">
                  <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                  </div>
                  {reason}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fadeIn} className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img src="https://picsum.photos/seed/ecommerce/800/800" alt="eCommerce Design" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-8 -left-8 p-8 bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl max-w-xs hidden md:block">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-zinc-400">Focus on increasing your conversion rates and sales.</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    { q: "How long does it take?", a: "We move fast without compromising quality. We deliver a full eCommerce website in 5-7 days, and high-converting landing pages in just 2-3 days." },
    { q: "Do you provide hosting?", a: "Yes, we can set up and manage reliable, fast, and secure hosting for your store, or work with your existing provider." },
    { q: "Can I manage my store?", a: "Absolutely. We build on user-friendly platforms like Shopify and WooCommerce, and provide training so you can easily manage products and orders." },
    { q: "Do you support payments in my country?", a: "Yes, we integrate with global and local payment gateways (Stripe, PayPal, Paystack, Flutterwave, etc.) to ensure you can accept payments anywhere." },
    { q: "Do you offer maintenance?", a: "Yes, we offer ongoing support and maintenance packages to keep your store secure, updated, and running smoothly." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-zinc-900/30 border-y border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="border border-white/10 rounded-2xl bg-zinc-900 overflow-hidden">
              <button 
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-lg font-medium text-white">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-zinc-400">
                  {faq.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full max-w-3xl mx-auto"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div {...fadeIn}>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Ready to grow your eCommerce business with Bremnet?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/2349153888216" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors text-lg">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
