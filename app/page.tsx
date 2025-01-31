import Navbar from '@/components/Navbar';
import About from '@/components/sections/About';
import Portfolio from '@/components/sections/Portfolio';
import Team from '@/components/sections/Team';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Gradient Blobs */}
      <div className="gradient-blob gradient-blob-1" />
      <div className="gradient-blob gradient-blob-2" />
      <div className="gradient-blob gradient-blob-3" />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 sm:pt-60 pb-20 px-6 sm:px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-8 sm:mb-6 text-[--stripe-dark] leading-tight">
            Investing in the next generation of Stripe alumni
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            An angel syndicate composed of former Stripe employees helping early-stage founders build exceptional companies.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="px-6 py-3 bg-[--stripe-purple] text-white rounded-full font-medium hover:opacity-90 transition-opacity">
              Get in touch
            </a>
            <a href="#portfolio" className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">
              View portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Content sections with gradient background */}
      <div className="gradient-bg relative">
        <section id="about" className="py-24 px-6 sm:px-4">
          <About />
        </section>

        <section id="portfolio" className="py-24 px-6 sm:px-4 bg-white">
          <Portfolio />
        </section>

        <section id="team" className="py-24 px-6 sm:px-4">
          <Team />
        </section>

        <section id="faq" className="py-24 px-6 sm:px-4 bg-white">
          <FAQ />
        </section>

        <section id="contact" className="py-24 px-6 sm:px-4">
          <Contact />
        </section>
      </div>
    </main>
  );
} 