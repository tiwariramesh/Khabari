import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = ({ profile }) => {
    if (!profile) return null;

    const { title, subtitle, bio, profilePhoto } = profile;
    const imageUrl = typeof profilePhoto === 'string' ? profilePhoto : profilePhoto?.url;
    const scrollToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section id="home" className="hero-section">
            <div className="container-shell hero-grid">
                <div className="hero-content">
                    <p className="eyebrow">Project leadership · Perth, Australia</p>
                    <h1 className="heading-1 hero-heading">
                        <span className="hero-title-gradient">Lead the work.<br />Build the people.</span>
                    </h1>
                    <p className="title-2 hero-subtitle">{title}. {subtitle}</p>
                    <p className="body-3 hero-bio">{bio}</p>
                    <div className="hero-actions">
                        <Button size="lg" className="primary-action" onClick={() => scrollToSection('experience')}>
                            Explore my work
                        </Button>
                        <button className="text-action" onClick={() => scrollToSection('contact')}>
                            Start a conversation <span aria-hidden="true">↗</span>
                        </button>
                    </div>
                </div>

                <div className="hero-portrait-wrap">
                    <div className="hero-portrait-disc" aria-hidden="true" />
                    <img className="hero-portrait-cutout" src={imageUrl} alt="Ramesh Tiwari, project manager and trainer" width="1024" height="1024" fetchPriority="high" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
