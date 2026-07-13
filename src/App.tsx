import { motion } from 'framer-motion';
import { Mail, MoveRight } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionTitle } from './components/SectionTitle';
import { About } from './components/About';
import { Manifesto } from './components/Manifesto';
import { Card } from './components/Card';
import { Timeline } from './components/Timeline';
import { Gallery } from './components/Gallery';
import { CertificationCard } from './components/CertificationCard';
import { ContactForm } from './components/ContactForm';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { timelineData, certifications, galleryItems, strengths } from './data/content';

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <main>
        <Hero />

        <section id="about" className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <About />
          </div>
        </section>

        <section id="manifesto" className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Manifesto />
          </div>
        </section>

        <section id="what-i-bring" className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="What I Bring" title="Strengths that move work forward" />
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                >
                  <Card title={strength.title} description={strength.description} icon={strength.icon} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Journey" title="A path built through persistence" />
            <Timeline items={timelineData} />
          </div>
        </section>

        <section id="gallery" className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Gallery" title="Moments that reflect the work" />
            <Gallery items={galleryItems} />
          </div>
        </section>

        <section id="certifications" className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Certifications" title="Recognized, grounded, and credible" />
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {certifications.map((cert) => (
                <CertificationCard key={cert.title} {...cert} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-[32px] border border-slate-200 bg-slate-50/70 p-8 shadow-soft sm:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-accent">Contact</p>
                <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
                  Let's build something meaningful together
                </h2>
                <p className="mt-5 max-w-xl text-lg text-slate-600">
                  If you are looking for a grounded leader with resilience and follow-through, I would love to connect.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="mailto:hello@divacats.com" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white transition hover:bg-primary">
                    <Mail size={18} /> Contact Me Now
                  </a>
                  <a href="#top" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:border-accent hover:text-accent">
                    Back to Top <MoveRight size={18} />
                  </a>
                </div>
              </div>
              <div className="space-y-8">
                <ContactForm />
                <Newsletter />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
