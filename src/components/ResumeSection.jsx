import React from 'react';
import { FileText, Download, FileType } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from './SectionHeader';

// Both files live in public/resume, so they are served from this site.
const PDF = '/resume/Ramesh_Tiwari_Resume.pdf';
const TXT = '/resume/Ramesh_Tiwari_Resume.txt';

const ResumeSection = () => (
    <section id="resume" className="section-shell">
        <div className="container-shell max-w-4xl">
            <SectionHeader title="Professional" highlight="Resume." align="center" subtitle="Download my latest resume in your preferred format." />

            <div className="grid gap-4 sm:grid-cols-2 md:gap-5">
                <div className="surface-card flex items-center justify-between gap-3 rounded-2xl p-4 md:p-5">
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand md:h-12 md:w-12">
                            <FileText className="h-5 w-5 md:h-6 md:w-6" />
                        </div>
                        <div>
                            <h3 className="text-base font-bold leading-tight text-foreground md:text-lg">Visual PDF</h3>
                            <p className="text-xs uppercase tracking-wider text-muted-foreground">Human-focused</p>
                        </div>
                    </div>
                    <Button asChild className="h-10 rounded-xl px-4 text-sm font-semibold">
                        <a href={PDF} download="Ramesh_Tiwari_Resume.pdf" aria-label="Download the PDF resume">
                            <Download className="h-4 w-4" /> <span className="hidden md:inline">Download</span>
                        </a>
                    </Button>
                </div>

                <div className="surface-card flex items-center justify-between gap-3 rounded-2xl p-4 md:p-5">
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 md:h-12 md:w-12 dark:text-emerald-400">
                            <FileType className="h-5 w-5 md:h-6 md:w-6" />
                        </div>
                        <div>
                            <h3 className="text-base font-bold leading-tight text-foreground md:text-lg">Plain text</h3>
                            <p className="text-xs uppercase tracking-wider text-muted-foreground">ATS-friendly</p>
                        </div>
                    </div>
                    <Button asChild variant="outline" className="h-10 rounded-xl px-4 text-sm font-semibold hover:border-accent hover:bg-accent hover:text-white">
                        <a href={TXT} download="Ramesh_Tiwari_Resume.txt" aria-label="Download the plain-text resume">
                            <Download className="h-4 w-4" /> <span className="hidden md:inline">Download</span>
                        </a>
                    </Button>
                </div>
            </div>

            <p className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Updated October 2026</p>
        </div>
    </section>
);

export default ResumeSection;
