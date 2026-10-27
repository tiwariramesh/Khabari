import React from 'react';

export const TimelineItem = ({
    exp,
    displayDate,
    duration,
    descPoints
}) => {
    return (
        <div className="interactive flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm group hover:-translate-y-1">
            <div className="relative mb-4">
                <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-white shadow-sm">
                        {exp.logo ? (
                            <img src={exp.logo} alt={exp.company} loading="lazy" width="96" height="96" className="w-full h-full object-cover" />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center bg-foreground text-background">
                                <span className="text-[8px] font-bold">{exp.company?.substring(0, 2).toUpperCase()}</span>
                            </div>
                        )}
                    </div>

                    <div className="flex-1 min-w-0">
                        <h3 className="mb-2 break-words font-display text-xl font-bold leading-tight text-foreground">
                            {exp.role}
                        </h3>

                        <h5 className="mb-2 text-sm font-semibold text-muted-foreground">
                            {exp.company}
                        </h5>

                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span className="rounded-md bg-brand/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-brand dark:text-blue-400">
                                {displayDate}
                            </span>
                            {duration && (
                                <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                    {duration}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <ul className="space-y-2 relative z-10 flex-grow">
                {descPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" />
                        <span className="text-sm">{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
