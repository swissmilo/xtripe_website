import Navbar from '@/components/Navbar';
import About from '@/components/sections/About';
import Portfolio from '@/components/sections/Portfolio';
import Team from '@/components/sections/Team';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4">
        <section id="about" className="py-20">
          <About />
        </section>

        <section id="portfolio" className="py-20">
          <Portfolio />
        </section>

        <section id="team" className="py-20">
          <Team />
        </section>

        <section id="faq" className="py-20">
          <FAQ />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>
      </div>
    </main>
  );
} 