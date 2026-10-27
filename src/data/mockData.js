export const profile = {
    firstName: "Ramesh",
    lastName: "Tiwari.",
    title: "Agile Project Manager",
    subtitle: "Certified Project Management Professional (PMP®) & Project Management Trainer",
    bio: "Experienced <span class='text-pmi-blue dark:text-blue-400 font-bold'>Project Management professional</span> with a background in delivering high-impact VET training and leading cross-functional software teams. Specialising in <span class='text-pmi-blue dark:text-blue-400 font-bold'>business-driven Agile practices</span>, strategic project delivery, and outcomes-focused coaching.",
    profilePhoto: {
        url: "/images/profile.webp"
    }
};

export const careerJourneyTimeline = [
    { year: "2016", label: "Developer", order: 1 },
    { year: "2019", label: "Business Analyst", order: 2 },
    { year: "2020", label: "Project Manager", order: 3 },
    { year: "2024", label: "PM Consultant & Trainer", order: 4 }
];

// The About section: three stages of the journey, each with a photo (public/images).
export const aboutStages = [
    {
        id: "build",
        stage: "Build",
        years: "2016 – 2020",
        title: "Engineer to analyst",
        text: "Started as a computer engineer and front-end developer, then moved into business analysis at eSewa, turning business needs into digital payment products.",
        image: "/images/about-build.webp"
    },
    {
        id: "lead",
        stage: "Lead",
        years: "2020 – 2023",
        title: "Leading delivery",
        text: "Managed software delivery at Leapfrog for US biotech and healthcare clients, coaching cross-functional teams of up to 50 through full Agile cycles.",
        image: "/images/about-lead.webp"
    },
    {
        id: "teach",
        stage: "Teach & advise",
        years: "2024 – now",
        title: "Consultant and trainer",
        text: "Now in Perth, designing courses and training the next generation of project leaders at NIT, bringing real delivery experience into the classroom.",
        image: "/images/about-teach.webp"
    }
];

export const experiences = [
    {
        id: 1,
        company: "National Institute of Technology, Perth",
        role: "Project Management Consultant",
        startDate: "2024-04-01",
        endDate: null,
        description: [
            "Course developer and advisor across business and project management qualifications, including the Diploma of Project Management and Advanced Diploma of Program Management.",
            "Established the Advanced Diploma of Program Management (BSB60720) from inception, from course structure and units to content, and launched it successfully in 2025.",
            "Train and assess students across the full project and program management competency set, using Agile, the PMBOK Guide and tools such as MS Project, Jira and Miro."
        ],
        logo: "/images/logo-nit.webp",
        order: 1,
        color: "#a6ce39"
    },
    {
        id: 2,
        company: "Leapfrog Technology, Kathmandu / Seattle (remote)",
        role: "Associate Project Manager → Project Manager",
        startDate: "2020-07-01",
        endDate: "2023-07-31",
        description: [
            "Led medium-scale software projects end to end with Scrum, Kanban and Scrum of Scrums, coaching cross-functional teams of up to 50 across biotech and healthcare.",
            "Ran discovery and a 3-week inception with US drug-discovery and healthcare clients, turning specialised requirements into scoped, deliverable plans.",
            "Delivered the core MVP on schedule, directly supporting the client's go-to-market pitch to pharmaceutical partners."
        ],
        logo: "/images/logo-leapfrog.webp",
        order: 2,
        color: "#048e43"
    },
    {
        id: 3,
        company: "eSewa Fonepay, Kathmandu, Nepal",
        role: "Business Analyst",
        startDate: "2019-04-01",
        endDate: "2020-07-01",
        description: [
            "Managed project schedules, budgets, and stakeholder communication.",
            "Delivered key software products on time and within scope."
        ],
        logo: "/images/logo-esewa.webp",
        order: 3,
        color: "#61bc47"
    },
    {
        id: 4,
        company: "Cloudfactory, Kathmandu, Nepal",
        role: "Frontend Developer - Intern",
        startDate: "2016-06-01",
        endDate: "2018-09-30",
        description: [
            "Contributed to project planning and execution in a fast-paced environment.",
            "Gained foundational experience in project coordination and agile basics."
        ],
        logo: "/images/logo-cloudfactory.webp",
        order: 4,
        color: "#2596be"
    }
];

export const services = [
    {
        id: 1,
        title: "Agile Transformation",
        description: "I coach teams in transitioning to Agile frameworks, ensuring high-value integration of activities within scope and quality standards.",
        category: "Strategy",
        icon: "Zap",
        bg: "bg-blue-100",
        color: "text-blue-600",
        order: 1
    },
    {
        id: 2,
        title: "Strategic Project Delivery",
        description: "Leveraging a background in Information Technology, Business and Project Management, I translate complex technical requirements into achievable project roadmaps.",
        category: "Delivery",
        icon: "Briefcase",
        bg: "bg-green-100",
        color: "text-green-600",
        order: 2
    },
    {
        id: 3,
        title: "Capability Building",
        description: "Through my experience as a VET trainer, I empower teams and individuals with the practical skills needed to navigate evolving industry needs.",
        category: "Growth",
        icon: "Users",
        bg: "bg-purple-100",
        color: "text-purple-600",
        order: 3
    }
];

export const skills = [
    {
        id: 1,
        title: "Project Practices",
        barColor: "bg-blue-500",
        badge: "",
        order: 1,
        skills: [
            { name: "Project Approaches", desc: "Scrum, Kanban, Agile PM and Hybrid Approach", color: "bg-blue-500" },
            { name: "Standard Practices", desc: "PMBOK 6th/7th Ed, Risk and Scope Management, Schedule and Budget Management", color: "bg-green-500" },
            { name: "Lifecycle Management", desc: "SDLC, Requirement Elicitation, VET Compliance", color: "bg-purple-500" }
        ]
    },
    {
        id: 2,
        title: "Tools & Technology",
        barColor: "bg-orange-500",
        badge: "",
        order: 2,
        skills: [
            { name: "PM Software", desc: "Jira, Confluence, MS Project, Trello", color: "bg-blue-600" },
            { name: "Design & Dev", desc: "Figma, Adobe Suite, Python, Wordpress", color: "bg-blue-400" },
            { name: "Collaboration", desc: "Miro, Slack, Github, Teams", color: "bg-blue-300" }
        ]
    },
    {
        id: 3,
        title: "Professional Skills",
        barColor: "bg-green-500",
        badge: "",
        order: 3,
        skills: [
            { name: "Strategic Problem Solving", desc: "Adaptability & continuous learning", color: "bg-yellow-500" },
            { name: "Team Leadership", desc: "Cross functional coaching and stakeholder engagement", color: "bg-green-400" },
            { name: "Effective Communication", desc: "Technical and business communication,Conflict Resolution & Negotiation", color: "bg-red-500" }
        ]
    }
];

export const educations = [
    {
        id: 1,
        title: "Master of Project Management",
        name: "Project Management",
        institution: "Curtin University",
        location: "Perth, Australia",
        year: "2024",
        order: 1,
        image: {
            url: "/images/edu-curtin.webp"
        }
    },
    {
        id: 2,
        title: "Master of Business Administration in IT",
        name: "MBA IT",
        institution: "School of Management, Tribhuvan University",
        location: "Kathmandu, Nepal",
        year: "2020",
        order: 2,
        image: {
            url: "/images/edu-tu.webp"
        }
    },
    {
        id: 3,
        title: "Bachelor of Computer Engineering",
        name: "Computer Engineering",
        institution: "Kathmandu University",
        location: "Dhulikhel, Nepal",
        year: "2016",
        order: 3,
        image: {
            url: "/images/edu-ku.webp"
        }
    }
];

export const certifications = [
    {
        id: 1,
        name: "PMP®",
        role: "Project Management",
        issuer: "Project Management Institute",
        year: "2026",
        link: "https://www.credly.com/badges/94a20fb6-0cc4-47a5-9c10-f9541b7a9e65",
        description: "Project Management Professional",
        order: 1,
        logo: {
            url: "/images/cert-pmp.webp"
        }
    },
    {
        id: 2,
        name: "CAPM®",
        role: "Certified Associate Project Manager",
        issuer: "Project Management Institute",
        year: "2025",
        link: "#",
        description: "Certified Associate in Project Management",
        order: 2,
        logo: {
            url: "/images/cert-capm.webp"
        }
    },
    {
        id: 4,
        name: "Google PM",
        role: "Google Project Management Certificate",
        issuer: "Coursera",
        year: "2025",
        link: "#",
        description: "Google Project Management Certificate",
        order: 3,
        // No badge image: shown as a monogram tile in its brand colour
        monogram: { text: "G", color: "#4285F4" }
    },
    {
        id: 5,
        name: "TAE40122",
        role: "Certificate IV in Training and Assessment",
        issuer: "Masters in Education",
        year: "2024",
        link: "#",
        description: "Certificate IV in Training and Assessment",
        order: 4,
        monogram: { text: "IV", color: "#6A317F" }
    },
    {
        id: 3,
        name: "CSPO®",
        role: "Certified Scrum Product Owner",
        issuer: "Scrum Alliance",
        year: "2019",
        link: "#",
        description: "Certified Scrum Product Owner",
        order: 5,
        logo: {
            url: "/images/cert-cspo.webp"
        }
    }
];

export const socialLinks = [
    {
        id: 1,
        platform: "LinkedIn",
        url: "https://linkedin.com/in/iramesh",
        order: 1,
        icon: "Linkedin",
        label: "Connect on LinkedIn",
        showInContact: true
    },
    {
        id: 2,
        platform: "Email",
        url: "mailto:ramestiwarii@gmail.com",
        order: 2,
        icon: "Mail",
        label: "Send an Email",
        showInContact: true
    },
    {
        id: 3,
        platform: "X",
        url: "https://twitter.com/ramesgunner",
        order: 3,
        icon: "X",
        label: "Follow on X",
        showInContact: true
    }
];
