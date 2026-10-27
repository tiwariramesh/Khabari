import React from 'react';
import { useTimelineData } from '@/hooks/useTimelineData';
import { careerJourneyTimeline } from '@/data/mockData';
import { TimelineScale } from './career/TimelineScale';
import { TimelineItem } from './career/TimelineItem';
import SectionHeader from './SectionHeader';

const CareerJourney = ({ experiences = [] }) => {
    const { sortedExperiences, renderedSteps } = useTimelineData(experiences, careerJourneyTimeline);

    return (
        <section id="experience" className="section-shell overflow-hidden">
            <div className="container-shell">
                <SectionHeader
                    title="Career"
                    highlight="Journey."
                    subtitle="Progressive impact across global organisations and transformative initiatives."
                />

                <TimelineScale steps={renderedSteps} />

                <div className="relative">
                    <div className="grid md:grid-cols-2 gap-5">
                        {sortedExperiences.map((exp, index) => {
                            const descPoints = typeof exp.description === 'string'
                                ? exp.description.split('\n').map(s => s.replace(/^-\s*/, '').trim()).filter(s => s)
                                : (Array.isArray(exp.description) ? exp.description : []);

                            let displayDate = exp.dateRange;
                            if (exp.startDate) {
                                const start = new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
                                const end = exp.endDate ? new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present';
                                displayDate = `${start} - ${end}`;
                            }

                            let duration = exp.duration;
                            if ((!duration || duration === 'Current') && exp.startDate) {
                                const start = new Date(exp.startDate);
                                const end = exp.endDate ? new Date(exp.endDate) : new Date();
                                const diffMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
                                const years = Math.floor(diffMonths / 12);
                                const months = diffMonths % 12;
                                duration = years > 0 ? `${years} yr${years > 1 ? 's' : ''} ${months} mo${months > 1 ? 's' : ''}` : `${months} mo${months > 1 ? 's' : ''}`;
                            }

                            return (
                                <TimelineItem
                                    key={index}
                                    exp={exp}
                                    displayDate={displayDate}
                                    duration={duration}
                                    descPoints={descPoints}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerJourney;
