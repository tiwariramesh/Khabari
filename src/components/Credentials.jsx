import React from 'react';
import { MapPin, CalendarDays } from 'lucide-react';
import SectionHeader from './SectionHeader';

const imageUrl = (media) => (typeof media === 'string' ? media : media?.url);

// A certificate without a badge image gets a monogram tile in its brand colour.
const CertLogo = ({ cert }) => {
    const src = imageUrl(cert.logo);
    if (src) {
        return <img src={src} alt="" loading="lazy" width="160" height="160" className="h-full w-full object-contain" />;
    }
    return (
        <span
            className="flex h-full w-full items-center justify-center rounded-lg text-lg font-black text-white"
            style={{ backgroundColor: cert.monogram?.color || 'var(--colour-brand)' }}
        >
            {cert.monogram?.text || cert.name?.slice(0, 2)}
        </span>
    );
};

const Credentials = ({ educations = [], certifications = [] }) => {
    const degrees = [...educations].sort((a, b) => (a.order || 0) - (b.order || 0));
    const certs = [...certifications].sort((a, b) => (a.order || 0) - (b.order || 0));

    return (
        <section id="credentials" className="section-shell">
            <div className="container-shell">
                <SectionHeader title="Learning &" highlight="Credentials." subtitle="Academic foundations and industry certifications." />

                <div className="mb-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {degrees.map((degree) => (
                        <div key={degree.id} className="surface-card interactive flex h-full flex-col gap-4 rounded-2xl p-6 hover:-translate-y-1">
                            <div className="flex items-center gap-4">
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-white p-1.5">
                                    <img src={imageUrl(degree.image)} alt={degree.institution} loading="lazy" width="128" height="128" className="h-full w-full object-contain" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="text-lg font-bold leading-tight text-foreground">{degree.title}</h3>
                                    <p className="mt-1 text-sm font-medium leading-snug text-muted-foreground">{degree.institution}</p>
                                </div>
                            </div>
                            <div className="mt-auto flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand/10 px-2.5 py-1 text-xs font-semibold text-brand dark:text-blue-400">
                                    <MapPin className="h-3.5 w-3.5" />{degree.location}
                                </span>
                                <span className="inline-flex items-center gap-1.5 rounded-lg bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                                    <CalendarDays className="h-3.5 w-3.5" />Class of {degree.year}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Industry certifications</h3>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {certs.map((cert) => (
                        <div key={cert.id} className="surface-card interactive flex items-center gap-4 rounded-2xl p-5 hover:-translate-y-0.5">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-white p-1">
                                <CertLogo cert={cert} />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h4 className="text-base font-bold leading-tight text-foreground">{cert.name}</h4>
                                <p className="mt-0.5 text-sm leading-snug text-muted-foreground">{cert.description}</p>
                                <p className="mt-2 text-xs font-semibold text-muted-foreground">
                                    <span className="text-sky-700 dark:text-sky-400">{cert.issuer}</span> · {cert.year}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Credentials;
