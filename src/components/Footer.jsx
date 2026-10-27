import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Named imports only: `import * as Icons` pulls every Lucide icon into the bundle.
const Icons = { Mail, Linkedin };

const renderIcon = (name, size = 20, className) => {
    const LucideIcon = Icons[name];
    return LucideIcon ? <LucideIcon size={size} className={className} /> : null;
};

const Footer = ({ firstName, lastName, socialLinks = [] }) => {
    const emailLink = socialLinks.find(l => l.platform === 'Email');
    const linkedInLink = socialLinks.find(l => l.platform === 'LinkedIn');

    return (
        <footer id="contact" className="border-t border-border pb-8 pt-12 md:pt-14">
            <div className="container-shell">
                <div className="mb-10 grid gap-10 lg:grid-cols-3">
                    <div className="space-y-5 lg:col-span-2">
                        <h2 className="section-title">
                            Ready to <span className="text-brand dark:text-blue-400">scale together</span>?
                        </h2>
                        <p className="section-subheading max-w-md">Let’s discuss how we can drive project success and team growth through practical, proven delivery approaches.</p>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            {emailLink && (
                                <a href={emailLink.url} className="interactive flex items-center justify-center gap-2.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
                                    {renderIcon(emailLink.icon || "Mail", 18)}
                                    <span>{emailLink.url.replace('mailto:', '')}</span>
                                </a>
                            )}
                            {linkedInLink && (
                                <a href={linkedInLink.url} target="_blank" rel="noopener noreferrer" className="interactive flex items-center justify-center gap-2.5 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:border-brand hover:text-brand">
                                    {renderIcon(linkedInLink.icon || "Linkedin", 18)}
                                    <span>{linkedInLink.label || "LinkedIn Profile"}</span>
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">Contact</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            {socialLinks.filter(l => l.showInContact).map((link) => (
                                <p key={link.id} className="flex items-center gap-2">
                                    <span className="font-semibold">{link.platform}</span> / <a href={link.url} className="interactive inline-block max-w-[220px] truncate align-bottom hover:text-brand">{link.url.replace('https://', '').replace('mailto:', '')}</a>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
                    <p className="text-sm font-semibold tracking-tight text-muted-foreground">
                        © {new Date().getFullYear()} {firstName} {lastName}
                    </p>
                    <Link to="/privacy-policy" className="interactive text-xs font-semibold text-muted-foreground hover:text-brand">Privacy policy</Link>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
