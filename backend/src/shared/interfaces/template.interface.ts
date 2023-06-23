export interface PersonalDetails {
  address: string;
  birthday: object;
  detailsOrder: string[];
  displayEmail: string;
  drivingLicense: string;
  fullName: string;
  gender: string;
  jobTitle: string;
  maritalStatus: string;
  nationality: string;
  phone: number;
  links: object;
}

export interface Customization {
  advanced: object;
  applyAccentColor: object;
  background: object;
  border: object;
  certificateDisplay: object;
  colors: object;
  creativeNameFont: object;
  customSkillSections: object;
  educationDisplay: object;
  entryLayout: object;
  expert: object;
  font: object;
  header: object;
  heading: object;
  interestDisplay: object;
  languageDisplay: object;
  layout: object;
  regional: object;
  sectionOrder: object;
  skillDisplay: object;
  spacing: object;
  unsplashImageHistory: string[];
  workDisplay: object;
}

type contentType = {
  entries: object[];
  sectionType: string;
  icon: string;
  displayName: string;
};

export interface Content {
  education: contentType;
  experience: contentType;
  skill: contentType;
  language: contentType;
  certificate: contentType;
  interest: contentType;
  project: contentType;
  course: contentType;
  award: contentType;
  organization: contentType;
  publication: contentType;
  reference: contentType;
  declaration: contentType;
  custom: contentType;
}

export interface ProfessionalExperience {
  city: string;
  country: string;
  employer: string;
  jobTitle: string;
  startDate: {
    year: number;
    month: number;
    dontshow: boolean;
    onlyyear: boolean;
    presentyear: boolean;
  };
  endDate: {
    year: number;
    month: number;
    dontshow: boolean;
    onlyyear: boolean;
    presentyear: boolean;
  };
  link: string;
  id: number;
  description: string;
  visible: boolean;
}

export interface Education {
  city: string;
  country: string;
  school: string;
  degree: string;
  startDate: {
    year: number;
    month: number;
    dontshow: boolean;
    onlyyear: boolean;
    presentyear: boolean;
  };
  endDate: {
    year: number;
    month: number;
    dontshow: boolean;
    onlyyear: boolean;
    presentyear: boolean;
  };
  link: string;
  id: number;
  description: string;
  visible: boolean;
}

export interface Courses {
  city: string;
  country: string;
  courseTitle: string;
  institution: string;
  startDate: {
    year: number;
    month: number;
    dontshow: boolean;
    onlyyear: boolean;
    presentyear: boolean;
  };
  endDate: {
    year: number;
    month: number;
    dontshow: boolean;
    onlyyear: boolean;
    presentyear: boolean;
  };
  link: string;
  id: number;
  description: string;
  visible: boolean;
}

export interface Skills {
  skill: string;
  description: string;
  skillLevel: number;
  id: number;
  visible: boolean;
}

export interface Languages {
  language: string;
  description: string;
  languageLevel: number;
  id: number;
  visible: boolean;
}

export interface Projects {
  startDate: {
    year: number;
    month: number;
    dontshow: boolean;
    onlyyear: boolean;
    presentyear: boolean;
  };
  endDate: {
    year: number;
    month: number;
    dontshow: boolean;
    onlyyear: boolean;
    presentyear: boolean;
  };
  subTitle: string;
  title: string;
  description: string;
  id: number;
  visible: boolean;
  projectTitle: string;
}

export interface Interests {
  interest: string;
  description: string;
  id: number;
  visible: boolean;
}

export interface Certificates {
  certificate: string;
  description: string;
  id: number;
  visible: boolean;
  link: string;
}

export interface ResumeData {
  professionalExperience: ProfessionalExperience[];
  education: Education[];
  courses: Courses[];
  skills: Skills[];
  languages: Languages[];
  projects: Projects[];
  interests: Interests[];
  certificates: Certificates[];
  personalDetails;
}
