import {
	FaAward,
	FaFolderOpen,
	FaGraduationCap,
	FaGuitar,
	FaMarker,
	FaPuzzlePiece,
	FaSuitcase,
} from "react-icons/fa";
import { GiEarthAmerica, GiSkills } from "react-icons/gi";
import { GrCertificate, GrDocumentUser, GrOrganization } from "react-icons/gr";
import { ImBooks } from "react-icons/im";
import { VscReferences } from "react-icons/vsc";

export const ADD_CONTENT = [
	{
		id: 1,
		title: "Education",
		description:
			"Show off your primary education, college degrees & exchange semesters.",
		icon: FaGraduationCap,
	},
	{
		id: 2,
		title: "Professional Experience",
		description:
			"A place to highlight your professional experience - including internships.",
		icon: FaSuitcase,
	},
	{
		id: 3,
		title: "Skill",
		description:
			"List your technical, managerial or soft skills in this section.",
		icon: GiSkills,
	},
	{
		id: 4,
		title: "Language",
		description:
			"You speak more than one language? Make sure to list them here.",
		icon: GiEarthAmerica,
	},
	{
		id: 5,
		title: "Certificate",
		description:
			"Drivers licenses and other industry-specific certificates you have belong here.",
		icon: GrCertificate,
	},
	{
		id: 6,
		title: "Interest",
		description:
			"Do you have interests that align with your career aspiration?",
		icon: FaGuitar,
	},
	{
		id: 7,
		title: "Project",
		description:
			"Worked on a particular challenging project in the past? Mention it here.",
		icon: FaFolderOpen,
	},
	{
		id: 8,
		title: "Course",
		description:
			"Did you complete MOOCs or an evening course? Show them off in this section.",
		icon: ImBooks,
	},
	{
		id: 9,
		title: "Award",
		description:
			"Awards like student competitions or industry accolades belong here.",
		icon: FaAward,
	},
	{
		id: 10,
		title: "Organisation",
		description:
			"If you volunteer or participate in a good cause, why not state it?",
		icon: GrOrganization,
	},
	{
		id: 11,
		title: "Publication",
		description:
			"Academic publications or book releases have a dedicated place here.",
		icon: GrDocumentUser,
	},
	{
		id: 12,
		title: "Reference",
		description:
			"If you have former colleagues or bosses that vouch for you, list them.",
		icon: VscReferences,
	},
	{
		id: 13,
		title: "Declaration",
		description: "You need a declaration with signature?",
		icon: FaMarker,
	},
	{
		id: 14,
		title: "Custom",
		description:
			"You didn't find what you are looking for? Or you want to combine two sections to save space?",
		icon: FaPuzzlePiece,
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
		description:
			"A great deal of effort went into making sure that your PDF looks as crisp as it gets when printed or shared.",
		img: "/high_quality_pdf.svg",
	},
	{
		heading: "Data privacy",
		description:
			"We don't sell your data. Ever. Instead, we are GDPR-ready and let you delete all of your data in a heartbeat if you decide so.",
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
		answer:
			"Yes, for your first resume, all features are free and there is no paywall. If you wanna support indie-development, we also offer the possibility to buy us a cup of coffee:)",
	},
	{
		question: "Can I try FlowCV without an account?",
		answer:
			"Yes, you can try nearly all functionality without creating an account. Click on Try it and check it out!",
	},
	{
		question: "Will you sell my data?",
		answer:
			"No, we fully respect your data and privacy. Your data is your data and we will not share or sell it to anyone. Furthermore, you can easily delete all of your data anytime",
	},
	{
		question: "Can you give me feedback on my resume?",
		answer:
			"Unfortunately, we can not provide you with individual feedback to your resume. However, we built an option into the app which makes it really easy for you to gather feedback from family & friends.",
	},
	{
		question: "Which layout do you recommend?",
		answer:
			"As with resumes in general, the layout is a very individual matter, depending upon your taste, the company you are applying to and how much space your resume takes up. Rest assured that you can easily change the layout of your resume within the app in a matter of a click, so do not be afraid to experiment a little.",
	},
];

export const AVAILABLE_COMPONENTS = Object.freeze({
	personalInfo: "personalInfo",
	skill: "Skill",
	certificate: "Certificate",
	project: "Project",
	achievements: "Achievements",
	language: "Language",
	professionalExperience: "Professional Experience",
	interests: "Interest",
});

export const MONTHS = Object.freeze({
	jan: "January",
	feb: "February",
	mar: "March",
	apr: "April",
	may: "May",
	jun: "June",
	jul: "July",
	aug: "August",
	sep: "September",
	oct: "October",
	nov: "November",
	dec: "December",
});

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const YEARS = Array.from(
  { length: new Date().getFullYear() - 1990 + 1 },
  (_, i) => 1990 + i
);
