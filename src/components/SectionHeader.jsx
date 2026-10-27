import React from 'react';

// The title block every section shares: "About Me." with the last word in brand blue, and an optional line below.
const SectionHeader = ({ title, highlight, subtitle, align = 'left' }) => (
    <div className={`mb-8 md:mb-10 ${align === 'center' ? 'text-center' : 'text-center md:text-left'}`}>
        <h2 className="section-title">
            {title} <span className="text-brand dark:text-blue-400">{highlight}</span>
        </h2>
        {subtitle && (
            <p className={`section-subheading mt-2 max-w-2xl ${align === 'center' ? 'mx-auto' : 'mx-auto md:mx-0'}`}>
                {subtitle}
            </p>
        )}
    </div>
);

export default SectionHeader;
