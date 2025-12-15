"use client";

import Link from 'next/link';
import { siteData } from '@/content/siteData';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { MainLayout } from '@/components/layout/MainLayout';
import { ArrowRight, Shield, Server, Users, ArrowUpRight } from 'lucide-react';
import AuroraBackground from '@/components/ui/AuroraBackground';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';
import { useRef } from 'react';

// Animation Variants
const fadeInUp: import('framer-motion').Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: import('framer-motion').Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section ref={targetRef} className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
        <AuroraBackground />

        <Container className="relative z-10 pt-20">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-3">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-metallic-gold backdrop-blur-sm">
                ENTERPRISE INTELLIGENCE
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.1] mb-8">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">
                Total Office
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-200 to-white">
                Automation.
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
              {siteData.home.hero.subheadline} We architect the digital backbone of modern enterprises with military-grade security and next-gen infrastructure.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
              <Link href="/services">
                <MagneticButton>
                  <button className="group relative px-8 py-4 bg-white text-black rounded-full text-lg font-medium overflow-hidden transition-all hover:pr-12">
                    <span className="relative z-10">Our Services</span>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </button>
                </MagneticButton>
              </Link>
              <Link href="/about">
                <MagneticButton>
                  <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full text-lg font-medium hover:bg-white/5 transition-colors">
                    Explore ITSS
                  </button>
                </MagneticButton>
              </Link>
            </motion.div>
          </motion.div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
          <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
        </motion.div>
      </section>

      {/* Services Preview Section (Overlapping Card Style) */}
      <section className="relative z-20 -mt-20 pb-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { title: "Surveillance", icon: Shield, desc: "Military-grade CCTV systems" },
              { title: "Networking", icon: Server, desc: "High-speed enterprise fiber" },
              { title: "Consultancy", icon: Users, desc: "Strategic IT roadmaps" }
            ].map((item, i) => (
              <div key={i} className="group relative p-8 rounded-3xl bg-secondary-900/50 backdrop-blur-xl border border-white/5 hover:border-metallic-gold/30 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                <div className="relative z-10">
                  <item.icon className="w-10 h-10 text-metallic-gold mb-6" />
                  <h3 className="font-display text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-6">{item.desc}</p>
                  <div className="flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                    Learn More <ArrowUpRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-32 bg-obsidian-950 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-900/10 to-transparent pointer-events-none"></div>
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                We don't just sell technology.<br />
                <span className="text-gray-500">We build legacies.</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  ITSS was established in 2012 with a singular vision: to bring <strong className="text-white font-normal">total office automation</strong> to the Indian enterprise sector.
                </p>
                <p>
                  We believe that the sale is just the beginning of a partnership. Our commitment to post-implementation support and continuous optimization makes us the preferred partner for government bodies, universities, and Fortune 500 companies.
                </p>
              </div>
              <div className="mt-12">
                <Link href="/about">
                  <Button variant="outline" className="rounded-full px-8 py-6 text-base border-white/20 hover:bg-white text-white hover:text-obsidian-950 transition-all">
                    Read Our Story
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                {/* Placeholder for a high-end office shot */}
                <div className="w-full h-full bg-secondary-900 border border-white/10 flex items-center justify-center">
                  <span className="text-white/20 text-lg uppercase tracking-widest">Office Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
