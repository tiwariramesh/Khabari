import { useState } from 'react';

const photographs = [
    { src: '/images/photography-01.jpg', alt: 'Mountain coast beneath a moody sky' },
    { src: '/images/photography-02.jpg', alt: 'Wildflower field overlooking the sea' },
    { src: '/images/photography-03.jpg', alt: 'Sunset over coastal hills' },
    { src: '/images/photography-04.jpg', alt: 'Grassland leading toward a secluded beach' },
];

const Photography = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const showPrevious = () => setActiveIndex((current) => (current - 1 + photographs.length) % photographs.length);
    const showNext = () => setActiveIndex((current) => (current + 1) % photographs.length);

    return (
        <section id="photography" className="photography-section section-shell">
            <div className="container-shell">
                <div className="photography-intro">
                    <div>
                        <p className="eyebrow">Beyond project work</p>
                        <h2 className="section-heading">Photography keeps me observant.</h2>
                    </div>
                    <div className="photography-copy">
                        <p className="body-3">I photograph ordinary moments, changing light, and the quiet details that are easy to miss. It is a personal practice in patience, composition, and paying closer attention.</p>
                        <a className="photography-link" href="https://www.instagram.com/framebygrain_/" target="_blank" rel="noopener noreferrer">
                            View Frame by Grain <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </div>

                <div className="photography-carousel" aria-roledescription="carousel" aria-label="Photography preview">
                    <div className="photography-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }} aria-live="polite">
                        {photographs.map((photograph, index) => (
                            <figure className="photography-slide" key={photograph.src} aria-hidden={index !== activeIndex}>
                                <img src={photograph.src} alt={index === activeIndex ? photograph.alt : ''} loading="lazy" width="1600" height="1000" />
                            </figure>
                        ))}
                    </div>
                    <div className="carousel-controls">
                        <p className="caption-4">Temporary landscape study · {String(activeIndex + 1).padStart(2, '0')} / {String(photographs.length).padStart(2, '0')}</p>
                        <div className="carousel-buttons">
                            <button type="button" onClick={showPrevious} aria-label="Previous photograph">←</button>
                            <button type="button" onClick={showNext} aria-label="Next photograph">→</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Photography;
