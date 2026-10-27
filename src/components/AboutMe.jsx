import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { aboutStages } from '@/data/mockData';
import SectionHeader from './SectionHeader';

// About Me as a short journey: three stages side by side, each with a photo, joined by arrows.
const AboutMe = () => (
    <section id="about" className="section-shell overflow-hidden">
        <div className="container-shell">
            <SectionHeader
                title="About"
                highlight="Me."
                align="center"
                subtitle="An IT project manager and trainer who believes the best educators have mastered the craft in the field. From writing code to leading teams to teaching the next generation of project leaders."
            />

            <ol className="grid gap-4 md:grid-cols-3 md:gap-10">
                {aboutStages.map((stage, i) => (
                    <li key={stage.id} className="relative">
                        <article className="surface-card interactive flex h-full flex-col overflow-hidden rounded-2xl hover:-translate-y-1">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src={stage.image}
                                    alt=""
                                    loading="lazy"
                                    width="720"
                                    height="450"
                                    className="h-full w-full object-cover"
                                />
                                <span className="absolute left-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/95 text-sm font-bold text-brand shadow-sm dark:bg-slate-900/90 dark:text-blue-400">
                                    {i + 1}
                                </span>
                            </div>
                            <div className="flex flex-1 flex-col p-5">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-xs font-bold uppercase tracking-wider text-brand dark:text-blue-400">{stage.stage}</span>
                                    <span className="text-xs font-semibold text-muted-foreground">{stage.years}</span>
                                </div>
                                <h3 className="mt-2 text-lg font-bold leading-tight text-foreground">{stage.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.text}</p>
                            </div>
                        </article>

                        {i < aboutStages.length - 1 && (
                            <>
                                {/* Sideways arrow in the gap between columns (desktop), downward arrow between cards (mobile) */}
                                <span aria-hidden="true" className="absolute -right-[1.85rem] top-[calc(50%-1rem)] z-10 hidden h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-brand shadow-sm md:flex dark:text-blue-400">
                                    <ArrowRight className="h-4 w-4" />
                                </span>
                                <span aria-hidden="true" className="mx-auto -mb-1 mt-3 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-brand shadow-sm md:hidden dark:text-blue-400">
                                    <ArrowDown className="h-4 w-4" />
                                </span>
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    </section>
);

export default AboutMe;
