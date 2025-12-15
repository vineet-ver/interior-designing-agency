import { siteData } from '@/content/siteData';
import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Target, Lightbulb, Trophy } from 'lucide-react';

export default function AboutPage() {
    return (
        <MainLayout>
            {/* Header */}
            <section className="bg-secondary-50 py-16 md:py-24 text-obsidian-950">
                <Container>
                    <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl mb-6">
                        About Us
                    </h1>
                    <p className="text-xl text-secondary-600 max-w-3xl leading-relaxed">
                        {siteData.about.overview}
                    </p>
                </Container>
            </section>

            {/* Mission & Vision */}
            <section className="py-24">
                <Container>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="bg-primary-50 border-primary-100">
                            <CardContent className="pt-8">
                                <Target className="w-12 h-12 text-primary-600 mb-6" />
                                <h2 className="text-2xl font-bold text-primary-900 mb-4">Our Mission</h2>
                                <p className="text-secondary-700 leading-relaxed">
                                    {siteData.about.mission}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-secondary-50 border-secondary-200">
                            <CardContent className="pt-8">
                                <Lightbulb className="w-12 h-12 text-secondary-600 mb-6" />
                                <h2 className="text-2xl font-bold text-primary-900 mb-4">Our Vision</h2>
                                <p className="text-secondary-700 leading-relaxed">
                                    {siteData.about.vision}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white border-secondary-200">
                            <CardContent className="pt-8">
                                <Trophy className="w-12 h-12 text-yellow-500 mb-6" />
                                <h2 className="text-2xl font-bold text-primary-900 mb-4">Our Values</h2>
                                <p className="text-secondary-700 leading-relaxed">
                                    Commitment to quality, customer satisfaction, and continuous innovation in IT solutions.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </section>

            {/* Company History / Context (Placeholder) */}
            <section className="py-24 border-t border-secondary-100 bg-white text-obsidian-950">
                <Container>
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold text-primary-900 mb-6">Our Journey</h2>
                        <div className="prose prose-lg text-secondary-600">
                            <p>
                                Established in 2012, ITSS has grown from a small automation provider to a full-scale IT solutions company. We have served clients across Corporate, Retail, Education, and Government sectors, building a reputation for reliability and technical expertise.
                            </p>
                            <p className="mt-4">
                                We specialize in tailoring solutions that fit the unique needs of our clients, ensuring that technology serves as an enabler for their business goals.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </MainLayout>
    );
}
