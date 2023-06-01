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
  social: object;
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
