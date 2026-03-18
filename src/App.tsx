import { Navbar, Footer, FloatingWhatsApp } from './components/Layout';
import { Hero, SocialProof, Services, Portfolio } from './components/HomeSections';
import { Process, Pricing, WhyChooseUs, FAQ, CTA } from './components/SecondarySections';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-indigo-500/30 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Portfolio />
        <Process />
        <Pricing />
        <WhyChooseUs />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
