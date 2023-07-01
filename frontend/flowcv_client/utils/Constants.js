import { FaFolderOpen, FaGraduationCap, FaGuitar, FaSuitcase, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { GiEarthAmerica, GiSkills } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import { ImBooks } from "react-icons/im";
import { BsGithub, BsGlobe, BsMedium, BsTwitter } from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";

export const ADD_CONTENT = [
    {
        id: 1,
        title: "Education",
        description: "Show off your primary education, college degrees & exchange semesters.",
        icon: FaGraduationCap,
    },
    {
        id: 2,
        title: "Professional Experience",
        description: "A place to highlight your professional experience - including internships.",
        icon: FaSuitcase,
    },
    {
        id: 3,
        title: "Skills",
        description: "List your technical, managerial or soft skills in this section.",
        icon: GiSkills,
    },
    {
        id: 4,
        title: "Languages",
        description: "You speak more than one language? Make sure to list them here.",
        icon: GiEarthAmerica,
    },
    {
        id: 5,
        title: "Certificates",
        description: "Drivers licenses and other industry-specific certificates you have belong here.",
        icon: GrCertificate,
    },
    {
        id: 6,
        title: "Interests",
        description: "Do you have interests that align with your career aspiration?",
        icon: FaGuitar,
    },
    {
        id: 7,
        title: "Projects",
        description: "Worked on a particular challenging project in the past? Mention it here.",
        icon: FaFolderOpen,
    },
    {
        id: 8,
        title: "Courses",
        description: "Did you complete MOOCs or an evening course? Show them off in this section.",
        icon: ImBooks,
    },
];

export const ICONS_OBJ = Object.freeze({
    ...ADD_CONTENT.reduce((acc, val) => ({ ...acc, [val.title]: val.icon }), {}),
});
export const PROFILE_ICONS = [
    {
        id: 1,
        icon: MdEmail,
    },
    {
        id: 2,
        icon: FaPhoneAlt,
    },
    {
        id: 3,
        icon: MdLocationPin,
    },
    {
        id: 4,
        icon: BsGithub,
    },
    {
        id: 5,
        icon: BsGlobe,
    },
    {
        id: 6,
        icon: FaLinkedinIn,
    },
    {
        id: 7,
        icon: BsTwitter,
    },
    {
        id: 8,
        icon: BsMedium,
    },
];

export const cardsData = [
    {
        heading: "Fully flexible design",
        description:
            "Being easy to use doesn't have to mean that you are forced into using a pre-made template. Make your resume stand out from the pack by trying different colours, fonts, headline formats and much more.",
        img: "/fully_flexible_design.svg",
    },

    {
        heading: "Free, as in free",
        description:
            "Your first resume is entirely for free and it will be free of watermarks. There are no premium-only options and you can download your resume for free, as many times as you like.",
        img: "/free.svg",
    },
    {
        heading: "High-quality PDF",
        description: "A great deal of effort went into making sure that your PDF looks as crisp as it gets when printed or shared.",
        img: "/high_quality_pdf.svg",
    },
    {
        heading: "Data privacy",
        description: "We don't sell your data. Ever. Instead, we are GDPR-ready and let you delete all of your data in a heartbeat if you decide so.",
        img: "/privacy.svg",
    },
    {
        heading: "Multiple resumes",
        description:
            "Create a version of your resume in a different language or for a different job with just a click. A one-size-fits-all resume is a thing of the past.",
        img: "/multiple_resume.svg",
    },
    {
        heading: "Multilingual",
        description:
            "Whether you need your resume in English, Spanish, Chinese or really any other language, we have got you covered. Every detail can be adjusted to your language.",
        img: "/multilingual.svg",
    },
    {
        heading: "Resume tips",
        description:
            "With context-aware tips always ready at hand, you can concentrate on your resume. In addition our curated list of action words will make sure that you always find the right way to describe your achievements.",
        img: "/resume_tips.svg",
    },
    {
        heading: "Smart formatting",
        description:
            "Adjusting margins manually or pressing backspace a few dozen times is a thing of the past. Rest assured that page breaks, text flow and the content width of your resume will be taken care of.",
        img: "/smart_formatting.svg",
    },
    {
        heading: "Saved securely",
        description:
            "Your resume is being saved and backed up by us - so no matter what happens, you can always be sure that you can download a copy of it whenever you need it.",
        img: "/saved_securly.svg",
    },
    {
        heading: "Get feedback",
        description:
            "Ask your friends for feedback with a link & have changes updated immediately so you do not have to send a new version each time you change something.",
        img: "/get_feedback.svg",
    },
    {
        heading: "Effortless editing",
        description:
            "Whether you want to input skills, professional experience or educational history, instead of being thrown into cold water, we designed guided forms to help you inputting all the data necessary.",
        img: "/effortless_editing.svg",
    },
    {
        heading: "ATS-ready",
        description:
            "With most employers, your resume will be scanned by an applicant tracking system (ATS), parsing resumes for keywords. Using FlowCV, you will get a PDF that is proven to be readable by an ATS.",
        img: "/ats-ready.svg",
    },
];

export const faqData = [
    {
        question: "Is FlowCV really free?",
        answer: "Yes, for your first resume, all features are free and there is no paywall. If you wanna support indie-development, we also offer the possibility to buy us a cup of coffee:)",
    },
    {
        question: "Can I try FlowCV without an account?",
        answer: "Yes, you can try nearly all functionality without creating an account. Click on Try it and check it out!",
    },
    {
        question: "Will you sell my data?",
        answer: "No, we fully respect your data and privacy. Your data is your data and we will not share or sell it to anyone. Furthermore, you can easily delete all of your data anytime",
    },
    {
        question: "Can you give me feedback on my resume?",
        answer: "Unfortunately, we can not provide you with individual feedback to your resume. However, we built an option into the app which makes it really easy for you to gather feedback from family & friends.",
    },
    {
        question: "Which layout do you recommend?",
        answer: "As with resumes in general, the layout is a very individual matter, depending upon your taste, the company you are applying to and how much space your resume takes up. Rest assured that you can easily change the layout of your resume within the app in a matter of a click, so do not be afraid to experiment a little.",
    },
];

export const AVAILABLE_COMPONENTS = Object.freeze({
    personalInfo: "personalInfo",
    skill: "Skills",
    certificate: "Certificates",
    project: "Projects",
    achievements: "Achievements",
    language: "Languages",
    professionalExperience: "Professional Experience",
    interests: "Interests",
    education: "Education",
    course: "Courses",
});

export const MONTHS = {
    January: "01",
    February: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12",
};

export const SKILL_LEVELS = {
    novice: 1,
    beginner: 2,
    skillful: 3,
    experienced: 4,
    expert: 5,
};

export const LANGUAGE_LEVELS = {
    beginner: 1,
    elementary: 2,
    working: 3,
    high: 4,
    native: 5,
};

export const COLORS = [
    "#fff",
    "rgb(73, 89, 99)",
    "rgb(84, 121, 128)",
    "rgb(147, 183, 190)",
    "rgb(52, 138, 167)",
    "rgb(53, 92, 125)",
    "rgb(56, 111, 164)",
    "rgb(103, 152, 192)",
    "rgb(89, 165, 216)",
    "rgb(132, 210, 246)",
    "rgb(67, 35, 113)",
    "rgb(103, 45, 80)",
    "rgb(192, 108, 132)",
    "rgb(199, 65, 123)",
    "rgb(244, 91, 105)",
    "picker",
];

export const FONTS = {
    serif: [
        "Vollkorn",
        "Lora",
        "PT Serif",
        "Alegreya",
        "Aleo",
        "Crimson Pro",
        "EB Garamond",
        "Zilla Slab",
        "Cormorant Garamond",
        "Crimson Text",
        "Noto Serif",
        "IBM Plex Serif",
    ],
    sans: [
        "Source Sans 3",
        "Karla",
        "Mulish",
        "Lato",
        "Titillium Web",
        "Work Sans",
        "Barlow",
        "Jost",
        "Fira Sans",
        "Roboto",
        "Rubik",
        "Nunito",
        "Open Sans",
        "Poppins",
    ],
    mono: ["Inconsolata", "Source Code Pro", "IBM Plex Mono", "Overpass Mono", "Space Mono", "Courier Prime"],
};

export const CREATIVE_FONTS = [
    "Abril Fatface",
    "Amatic SC",
    "Bungee Shade",
    "Caveat",
    "Caveat Brush",
    "Comfortaa",
    "Elsie",
    "Lobster",
    "Pacifico",
    "Parisienne",
    "Vibur",
];

export const YEARS = Array.from({ length: new Date().getFullYear() - 1944 + 1 }, (_, i) => 1944 + i).reverse();

export const LINKS = ["Github", "Website", "LinkedIn", "Twitter", "Medium"];

export const NULL_VALUE = "NULL_VALUE";

export const TEMPLATE_BOOLEAN_KEYS = ["dontshow", "onlyyear", "presentyear", "basic", "advanced", "border", "accent", "multicolor"];

export const COLOR_CHECK_BOXES = ["Name", "Dots/Bars/Bubbles", "Headings", "Dates", "Header icons", "Link icons"];
