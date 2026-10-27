import React from 'react';
import { Zap, Briefcase, Users, ArrowRight } from 'lucide-react';

// Named imports only: `import * as Icons` pulls every Lucide icon into the bundle.
// Add an icon here when a service in mockData.js uses a new one.
const Icons = { Zap, Briefcase, Users, ArrowRight };
import SectionHeader from './SectionHeader';

// Helper for icons
const Icon = ({ name, size = 24, className }) => {
    const LucideIcon = Icons[name];
    return LucideIcon ? <LucideIcon size={size} className={className} /> : null;
};

const Services = ({ services = [] }) => {

    const sortedServices = [...services].sort((a, b) => (a.order || 0) - (b.order || 0));

    return (
        <section id="services" className="section-shell">
            <div className="container-shell">
                <SectionHeader
                    title="Professional"
                    highlight="Services."
                    subtitle="Empowering organisations through strategic Agile implementation and leadership development."
                />

                {sortedServices.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {sortedServices.map((service, index) => (
                            <div
                                key={index}
                                className="surface-card interactive group flex h-full cursor-default flex-col rounded-2xl p-5"
                            >
                                <div className="mb-3 flex items-center gap-3">
                                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${service.bg} ${service.color}`}>
                                        <Icon name={service.icon} size={20} />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-lg font-bold leading-tight tracking-tight text-foreground">{service.title}</h3>
                                    </div>
                                </div>

                                <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
                                    {service.description}
                                </p>

                                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                                    <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-brand dark:text-blue-400">
                                        {service.category || 'Service'}
                                    </span>
                                    <Icon name="ArrowRight" size={16} className="text-muted-foreground" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-muted-foreground">Loading services...</p>
                )}
            </div>
        </section>
    );
};

export default Services;
