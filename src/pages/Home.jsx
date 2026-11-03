import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import ResumeSection from '../components/ResumeSection';
import Competencies from '../components/Competencies';
import CareerJourney from '../components/CareerJourney';
import Credentials from '../components/Credentials';
import Services from '../components/Services';
import { Footer } from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import TaglineReveal from '../components/TaglineReveal';
import Photography from '../components/Photography';

const Home = ({ profile, experiences, services, socialLinks, skills, educations, certifications }) => {
    return (
        <div className="relative min-h-screen font-sans text-foreground overflow-hidden">
            <a className="skip-link" href="#main-content">Skip to content</a>
            <Navbar
                firstName={profile?.firstName}
                lastName={profile?.lastName}
                socialLinks={socialLinks}
            />

            <main id="main-content" className="relative z-10">
                <Hero profile={profile} />
                <AboutMe />
                <TaglineReveal />
                <ResumeSection />
                <Competencies skills={skills} />
                <CareerJourney experiences={experiences} />
                <Credentials educations={educations} certifications={certifications} />
                <Services services={services} />
                <Photography />
            </main>

            <div className="relative z-10">
                <Footer
                    firstName={profile?.firstName}
                    lastName={profile?.lastName}
                    socialLinks={socialLinks}
                />
            </div>
            <ScrollToTop />
        </div>
    );
};

export default Home;
