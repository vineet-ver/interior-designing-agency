"use client";

import { siteData } from '@/content/siteData';
import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { Target, Lightbulb, Trophy, History, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function AboutPage() {
    return (
        <MainLayout>
            <div className="bg-obsidian-950 min-h-screen text-white pt-24">

                {/* Hero Section */}
                <section className="relative py-20 lg:py-32 overflow-hidden">
                    {/* Background Glows */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary-900/20 rounded-full blur-[120px] pointer-events-none" />

                    <Container>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-metallic-gold text-sm font-medium mb-6">
                                SINCE 2012
                            </span>
                            <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-tight">
                                Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Excellence</span> through Innovation.
                            </h1>
                            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                                {siteData.about.overview}
                            </p>
                        </motion.div>
                    </Container>
                </section>

                {/* Core Values / Mission Grid */}
                <section className="py-20 relative">
                    <Container>
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            animate="animate"
                            className="grid md:grid-cols-3 gap-8"
                        >
                            {/* Mission */}
                            <motion.div variants={fadeInUp} className="group p-8 rounded-[32px] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-metallic-gold/30 transition-all duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-900/50 to-primary-950/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Target className="w-7 h-7 text-primary-400" />
                                </div>
                                <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-metallic-gold transition-colors">Our Mission</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {siteData.about.mission}
                                </p>
                            </motion.div>

                            {/* Vision */}
                            <motion.div variants={fadeInUp} className="group p-8 rounded-[32px] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-metallic-gold/30 transition-all duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-metallic-gold/20 to-metallic-bronze/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Lightbulb className="w-7 h-7 text-metallic-gold" />
                                </div>
                                <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-metallic-gold transition-colors">Our Vision</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {siteData.about.vision}
                                </p>
                            </motion.div>

                            {/* Values */}
                            <motion.div variants={fadeInUp} className="group p-8 rounded-[32px] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-metallic-gold/30 transition-all duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Trophy className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-metallic-gold transition-colors">Our Values</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Commitment to unwavering quality, total customer satisfaction, and continuous technological innovation.
                                </p>
                            </motion.div>
                        </motion.div>
                    </Container>
                </section>

                {/* Legacy / Journey Section */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary-900/5 -skew-y-3 transform origin-top-left scale-110 pointer-events-none" />

                    <Container className="relative">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
                                    A Legacy of <br />
                                    <span className="text-metallic-gold">Transformation.</span>
                                </h2>
                                <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                                    <p>
                                        Established in 2012, ITSS began with a singular focus: to bridge the gap between complex technology and business efficiency. From a niche automation provider, we have evolved into a full-scale digital transformation partner.
                                    </p>
                                    <p>
                                        Today, we serve the elite across Corporate, Retail, Education, and Government sectors. Our reputation is built not just on code, but on the trust that we deliver systems that work flawlessly, every single time.
                                    </p>
                                </div>
                                <div className="mt-10">
                                    <button className="group flex items-center gap-2 text-white font-medium hover:text-metallic-gold transition-colors">
                                        View Our Portfolio <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="aspect-square rounded-[40px] border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-3xl overflow-hidden p-8 flex items-center justify-center relative group">
                                    <div className="absolute inset-0 bg-metallic-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    {/* Abstract Visual Representation of Growth */}
                                    <div className="grid grid-cols-2 gap-4 w-full h-full">
                                        <div className="bg-white/5 rounded-3xl w-full h-[80%] self-end"></div>
                                        <div className="bg-primary-500/20 rounded-3xl w-full h-full"></div>
                                        <div className="bg-metallic-gold/20 rounded-3xl w-full h-full"></div>
                                        <div className="bg-white/5 rounded-3xl w-full h-[60%]"></div>
                                    </div>

                                    <div className="absolute bottom-10 left-10 p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                                        <div className="flex items-center gap-3">
                                            <History className="w-6 h-6 text-metallic-gold" />
                                            <div>
                                                <div className="text-xs text-gray-400">ESTABLISHED</div>
                                                <div className="font-bold text-white">2012</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </Container>
                </section>

            </div>
        </MainLayout>
    );
}
