import React from 'react';
import SectionHeader from './SectionHeader';

const Competencies = ({ skills = [] }) => {
    const sortedSkills = [...skills].sort((a, b) => (a.order || 0) - (b.order || 0));

    return (
        <section id="skills" className="section-shell">
            <div className="container-shell">
                <SectionHeader
                    title="Core"
                    highlight="Competencies."
                    subtitle="A blend of strategic leadership, technical acumen, and proven methodologies to drive enterprise transformation."
                />

                {sortedSkills.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {sortedSkills.map((column, index) => (
                            <div key={index} className="surface-card interactive rounded-2xl p-6 hover:-translate-y-0.5">
                                <div className="flex items-center gap-4 mb-5 relative">
                                    <div className={`w-1.5 h-10 rounded-full ${column.barColor}`} />
                                    <h3 className="text-xl font-bold text-foreground leading-tight">{column.title}</h3>
                                    {column.badge && (
                                        <span className="absolute right-0 top-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                                            {column.badge}
                                        </span>
                                    )}
                                </div>

                                <ul className="space-y-4">
                                    {Array.isArray(column.skills) && column.skills.map((skill, sIdx) => (
                                        <li key={sIdx} className="flex gap-4 group">
                                            <div className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${skill.color}`} />
                                            <div>
                                                <h4 className="mb-1 text-base font-semibold text-foreground group-hover:text-brand">
                                                    {skill.name}
                                                </h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {skill.desc}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-muted-foreground">Loading competencies...</p>
                )}
            </div>
        </section>
    );
};

export default Competencies;
