"use client";

import { useEffect, useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Briefcase, MapPin, Clock, ArrowRight, Upload } from 'lucide-react';
import { motion } from 'framer-motion';

type Job = {
    id: string;
    title: string;
    location: string;
    type: string;
    description: string;
};

export default function CareersPage() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedJob, setSelectedJob] = useState<string | null>(null);

    useEffect(() => {
        // Mock Data
        const mockJobs = [
            {
                id: '1',
                title: 'Senior Network Engineer',
                location: 'Bhubaneswar, Odisha',
                type: 'Full-time',
                description: 'We are looking for an experienced Network Engineer to manage our client infrastructures.',
            },
            {
                id: '2',
                title: 'Business Development Executive',
                location: 'New Delhi',
                type: 'Full-time',
                description: 'Join our sales team to drive growth in the Enterprise sector.',
            },
        ];

        // Simulate loading for effect
        setTimeout(() => {
            setJobs(mockJobs);
            setLoading(false);
        }, 800);
    }, []);

    const handleApply = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Application Submitted (Mock)");
    };

    return (
        <MainLayout>
            <div className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-obsidian-950">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-metallic-gold/5 rounded-full blur-[80px] pointer-events-none"></div>

                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-metallic-gold backdrop-blur-sm mb-4 inline-block">
                            JOIN THE ELITE
                        </span>
                        <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
                            Shape the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Future.</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Join a team of visionaries dedicated to redefining enterprise automation.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Job List */}
                        <div className="lg:col-span-2 space-y-6">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-2xl font-display font-bold text-white mb-6"
                            >
                                Open Positions
                            </motion.h2>

                            {loading ? (
                                <div className="h-40 bg-white/5 rounded-3xl animate-pulse"></div>
                            ) : (
                                jobs.map((job, index) => (
                                    <motion.div
                                        key={job.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => setSelectedJob(job.id)}
                                        className={`
                                            group relative p-8 rounded-3xl border cursor-pointer transition-all duration-300
                                            ${selectedJob === job.id
                                                ? 'bg-white/10 border-metallic-gold/50 shadow-[0_0_30px_-5px_rgba(212,175,55,0.15)]'
                                                : 'bg-white/5 border-white/5 hover:border-metallic-gold/30 hover:bg-white/10'
                                            }
                                        `}
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-metallic-gold transition-colors">{job.title}</h3>
                                                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                                    <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-full"><MapPin className="w-4 h-4 text-metallic-gold" /> {job.location}</span>
                                                    <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-full"><Clock className="w-4 h-4 text-metallic-gold" /> {job.type}</span>
                                                </div>
                                            </div>
                                            <div className={`
                                                w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300
                                                ${selectedJob === job.id ? 'bg-metallic-gold border-metallic-gold text-obsidian-950' : 'border-white/20 text-white group-hover:border-metallic-gold group-hover:text-metallic-gold'}
                                            `}>
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed max-w-2xl">
                                            {job.description}
                                        </p>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Application Form (Sticky) */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="sticky top-28"
                            >
                                <div className="p-8 rounded-[32px] bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-2xl">
                                    <h3 className="text-xl font-display font-bold text-white mb-6">
                                        {selectedJob ? 'Submit Application' : 'Select a Role'}
                                    </h3>

                                    {selectedJob ? (
                                        <form onSubmit={handleApply} className="space-y-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                                                <input
                                                    required
                                                    placeholder="John Doe"
                                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-metallic-gold/50 focus:ring-1 focus:ring-metallic-gold/50 transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                                <input
                                                    type="email" required
                                                    placeholder="john@example.com"
                                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-metallic-gold/50 focus:ring-1 focus:ring-metallic-gold/50 transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-2">Resume</label>
                                                <div className="relative">
                                                    <input
                                                        type="file" accept=".pdf,.doc,.docx" required
                                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-gray-400 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-metallic-gold file:text-obsidian-950 hover:file:bg-white transition-all cursor-pointer"
                                                    />
                                                </div>
                                            </div>

                                            <Button type="submit" className="w-full h-12 bg-white text-black font-bold text-base rounded-xl hover:bg-metallic-gold hover:text-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-4">
                                                Apply Now
                                            </Button>
                                        </form>
                                    ) : (
                                        <div className="text-center py-10 px-4 border border-dashed border-white/10 rounded-2xl">
                                            <Briefcase className="w-10 h-10 text-gray-600 mx-auto mb-3" />
                                            <p className="text-gray-500 text-sm">
                                                Select a position from the left to verify details and apply.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </div>
        </MainLayout>
    );
}
