import { useEffect, useRef } from 'react';

const words = 'I turn complex delivery into clear decisions, capable teams, and work people can trust.'.split(' ');

const TaglineReveal = () => {
    const rootRef = useRef(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
        const items = rootRef.current?.querySelectorAll('[data-word]') || [];
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -18% 0px', threshold: 0.6 });
        items.forEach((item) => observer.observe(item));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="tagline-section" aria-label="My approach">
            <div className="container-shell">
                <p ref={rootRef} className="tagline-copy">
                    {words.map((word, index) => (
                        <span key={`${word}-${index}`} data-word className="tagline-word" style={{ transitionDelay: `${Math.min(index * 45, 360)}ms` }}>
                            {word}{' '}
                        </span>
                    ))}
                </p>
            </div>
        </section>
    );
};

export default TaglineReveal;
