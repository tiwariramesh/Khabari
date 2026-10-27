import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = ({ profile }) => {
    if (!profile) return null;

    const { title, subtitle, bio, profilePhoto } = profile;
    const imageUrl = typeof profilePhoto === 'string' ? profilePhoto : profilePhoto?.url;

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="overflow-hidden pb-10 pt-28 md:pb-14 md:pt-32 lg:pt-36">
            <div className="container-shell grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
                <div className="flex flex-col text-center md:text-left lg:col-span-7">
                    <p className="mx-auto mb-4 inline-flex w-fit items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand md:mx-0">
                        Available for collaboration
                    </p>

                    <h1 className="section-heading">
                        <span className="hero-title-gradient">{title || 'Project Leadership with Purpose'}</span>
                    </h1>

                    <p className="mx-auto mt-3 max-w-xl text-base font-semibold text-foreground/80 md:mx-0 md:text-lg">
                        {subtitle}
                    </p>

                    <div
                        className="section-subheading mx-auto mt-4 max-w-2xl text-base md:mx-0"
                        dangerouslySetInnerHTML={{ __html: bio }}
                    />

                    <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
                        <Button size="lg" className="rounded-xl px-6" onClick={() => scrollToSection('experience')}>
                            View journey
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="rounded-xl px-6 hover:border-accent hover:bg-accent hover:text-white"
                            onClick={() => scrollToSection('contact')}
                        >
                            Contact me
                        </Button>
                    </div>
                </div>

                <div className="lg:col-span-5">
                    <div className="relative mx-auto h-[240px] w-[240px] md:h-[300px] md:w-[300px]">
                        <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-brand/20 via-brand/5 to-accent/20 opacity-50 blur-3xl" />

                        {/* Stacked cards behind the photo */}
                        <div className="absolute inset-0 origin-bottom-right rotate-[9deg] rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f52ba] to-[#0a3a8a] opacity-90 shadow-lg" />
                        <div className="absolute inset-0 origin-bottom-right rotate-[6deg] rounded-3xl border border-white/10 bg-gradient-to-br from-[#003366] to-[#00264d] opacity-85 shadow-lg" />
                        <div className="absolute inset-0 origin-bottom-right rotate-[3deg] rounded-3xl border border-white/10 bg-gradient-to-br from-[#002347] to-[#001730] shadow-lg" />

                        <div className="surface-card absolute inset-0 z-10 rounded-3xl p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                            <img
                                src={imageUrl}
                                alt="Ramesh Tiwari"
                                width="640"
                                height="640"
                                fetchPriority="high"
                                className="h-full w-full rounded-[1.25rem] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
