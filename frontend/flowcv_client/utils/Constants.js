import { BiAward } from "react-icons/bi";
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
