"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Briefcase, MapPin, Clock } from 'lucide-react';

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
        async function fetchJobs() {
            // Allow manual fetching from specific table if needed
            // For now, using mock data as no careers data in schema yet
            setJobs([
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
            ]);
            setLoading(false);
        }

        fetchJobs();
    }, []);

    const handleApply = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Application logic to be implemented with Resume Upload.");
    };

    return (
        <MainLayout>
            <section className="bg-secondary-50 py-16 text-obsidian-950">
                <Container>
                    <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl mb-6">
                        Careers at ITSS
                    </h1>
                    <p className="text-xl text-secondary-600 max-w-2xl">
                        Join our team of professionals and help us deliver world-class IT solutions.
                    </p>
                </Container>
            </section>

            <section className="py-24 bg-white text-obsidian-950">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-3">
                        {/* Job List */}
                        <div className="lg:col-span-2 space-y-6">
                            <h2 className="text-2xl font-bold text-primary-900 mb-6">Open Positions</h2>
                            {loading ? (
                                <div className="h-40 bg-secondary-100 rounded-xl animate-pulse"></div>
                            ) : (
                                jobs.map((job) => (
                                    <Card key={job.id} className="hover:border-primary-300 transition-colors cursor-pointer bg-white border-secondary-200" onClick={() => setSelectedJob(job.id)}>
                                        <CardContent className="pt-6">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <CardTitle className="mb-2 text-xl text-primary-900">{job.title}</CardTitle>
                                                    <div className="flex gap-4 text-sm text-secondary-500">
                                                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                                                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                                                    </div>
                                                </div>
                                                <Button size="sm" variant={selectedJob === job.id ? 'primary' : 'outline'}>
                                                    {selectedJob === job.id ? 'Selected' : 'Apply Now'}
                                                </Button>
                                            </div>
                                            <p className="text-secondary-600">
                                                {job.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                ))
                            )}
                        </div>

                        {/* Application Form (Sticky) */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <Card className="bg-primary-50 border-primary-100">
                                    <CardContent className="pt-6">
                                        <h3 className="text-xl font-bold text-primary-900 mb-4">
                                            {selectedJob ? 'Apply Strategy' : 'Select a Job to Apply'}
                                        </h3>
                                        {selectedJob ? (
                                            <form onSubmit={handleApply} className="space-y-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-secondary-700 mb-1">Full Name</label>
                                                    <Input required placeholder="John Doe" className="text-black border-gray-300" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-secondary-700 mb-1">Email</label>
                                                    <Input type="email" required placeholder="john@example.com" className="text-black border-gray-300" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-secondary-700 mb-1">Resume (PDF)</label>
                                                    <Input type="file" accept=".pdf,.doc,.docx" required className="py-2 text-black border-gray-300" />
                                                </div>
                                                <Button type="submit" className="w-full bg-primary-600 text-white hover:bg-primary-700">Submit Application</Button>
                                            </form>
                                        ) : (
                                            <p className="text-secondary-600 text-sm">
                                                Please select a job position from the list to see the application form.
                                            </p>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </MainLayout>
    );
}
