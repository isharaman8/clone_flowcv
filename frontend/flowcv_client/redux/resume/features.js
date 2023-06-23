// third party imports
import _, { add } from "lodash";

// inner imports
import { createSlice } from "@reduxjs/toolkit";
import {
    _createOrUpdateCertificates,
    _createOrUpdateCourse,
    _createOrUpdateEducation,
    _createOrUpdateInterest,
    _createOrUpdateLanguages,
    _createOrUpdateProfessionalExperience,
    _createOrUpdateProject,
    _createOrUpdateSkills,
} from "./helper";
import { _getCamelCaseString } from "@utils/helpers";

const initialState = {
    personalInfo: {
        fullName: null,
        jobTitle: null,
        email: null,
        phone: null,
        address: null,
        links: {},
    },
    editObj: {
        professionalExperience: null,
        skills: null,
        languages: null,
        projects: null,
        certificates: null,
        interests: null,
        education: null,
        courses: null,
    },
    prevObj: {
        professionalExperience: null,
        skills: null,
        languages: null,
        projects: null,
        certificates: null,
        interests: null,
        education: null,
        courses: null,
    },
    professionalExperience: [],
    skills: [],
    languages: [],
    projects: [],
    certificates: [],
    interests: [],
    education: [],
    courses: [],
};

export const resume = createSlice({
    name: "resume",
    initialState,
    reducers: {
        // PERSONAL INFO
        addOrUpdatePersonalInfo: (state, action) => {
            state.personalInfo = _.cloneDeep({ ...state.personalInfo, ...action.payload });
        },
        resetPersonalInfo: (state) => {
            state.personalInfo = initialState.personalInfo;
        },
        addLinks: (state, action) => {
            console.log("LINKS 1 PAYLOAD", action.payload);

            state.personalInfo.links = _.cloneDeep({ ...state.personalInfo.links, ...action.payload });

            console.log("UPDATED LINKS", JSON.stringify(state.personalInfo.links));
        },
        // PROFESSIONAL EXPERIENCE
        addProfessionalExperience: (state, action) => {
            console.log("ADD PAYLOAD", action.payload);

            state.professionalExperience.push(_createOrUpdateProfessionalExperience(action.payload));

            console.log("ADDED STATE", JSON.stringify(state.professionalExperience));
        },
        removeProfessionalExperience: (state, action) => {
            state.professionalExperience = _.cloneDeep(state.professionalExperience.filter((c) => c.id !== action.payload.id));
        },
        resetProfessionExperience: (state) => {
            state.professionalExperience = initialState.professionalExperience;
        },
        updateProfessionalExperience: (state, action) => {
            console.log("UPDATE PAYLOAD", action.payload);

            const requiredProfessionalExpIdx = state.professionalExperience.findIndex((c) => c.id === action.payload.id);

            console.log("PROFESSIONAL IDX", requiredProfessionalExpIdx);

            if (requiredProfessionalExpIdx === -1) {
                return;
            }

            const updatedProfessionalExp = _createOrUpdateProfessionalExperience(
                action.payload,
                state.professionalExperience[requiredProfessionalExpIdx]
            );

            state.professionalExperience = _.cloneDeep([
                ...state.professionalExperience.slice(0, requiredProfessionalExpIdx),
                updatedProfessionalExp,
                ...state.professionalExperience.slice(requiredProfessionalExpIdx + 1),
            ]);

            console.log("UPDATED STATE", JSON.stringify(state.professionalExperience));
        },
        // SKILLS
        addSkills: (state, action) => {
            state.skills.push(_createOrUpdateSkills(action.payload));

            console.log("ADDED SKILLS", JSON.stringify(state.skills));
        },
        removeSkills: (state, action) => {
            state.skills = _.cloneDeep(state.skills.filter((c) => c.id !== action.payload.id));
        },
        resetSkills: (state) => {
            state.skills = initialState.skills;
        },
        updateSkills: (state, action) => {
            const requiredSkillsIdx = state.skills.findIndex((c) => c.id === action.payload.id);

            console.log("SKILLS IDX", requiredSkillsIdx);
            console.log("SKILLS PAYLOAD", action.payload);

            if (requiredSkillsIdx === -1) {
                state.skills = _.cloneDeep(state.skills);
                return;
            }

            const updatedSkills = _createOrUpdateSkills(action.payload, state.skills[requiredSkillsIdx]);

            state.skills[requiredSkillsIdx] = updatedSkills;

            console.log("UPDATED SKILLS", JSON.stringify(state.skills));
        },
        // LANGUAGES
        addLanguages: (state, action) => {
            state.languages.push(_createOrUpdateLanguages(action.payload));
        },
        removeLanguage: (state, action) => {
            state.languages = _.cloneDeep(state.languages.filter((c) => c.id !== action.payload.id));
        },
        resetLanguages: (state) => {
            state.languages = initialState.languages;
        },
        updateLanguages: (state, action) => {
            const requiredLanguageIdx = state.languages.findIndex((c) => c.id === action.payload.id);

            if (requiredLanguageIdx === -1) {
                return;
            }

            const updatedLanguage = _createOrUpdateLanguages(action.payload, state.languages[requiredLanguageIdx]);

            state.languages = _.cloneDeep([
                ...state.languages.slice(0, requiredLanguageIdx),
                updatedLanguage,
                ...state.languages.slice(requiredLanguageIdx + 1),
            ]);
        },
        // CERTIFICATES
        addCertificates: (state, action) => {
            state.certificates.push(_createOrUpdateCertificates(action.payload));
        },
        removeCertificate: (state, action) => {
            state.certificates = _.cloneDeep(state.certificates.filter((c) => c.id !== action.payload.id));
        },
        resetCertificates: (state) => {
            state.certificates = initialState.certificates;
        },
        updateCertificates: (state, action) => {
            const requiredCertificateIdx = state.certificates.findIndex((c) => c.id === action.payload.id);

            if (requiredCertificateIdx === -1) {
                return;
            }

            const updatedCertificate = _createOrUpdateCertificates(action.payload, state.certificates[requiredCertificateIdx]);

            state.certificates = _.cloneDeep([
                ...state.certificates.slice(0, requiredCertificateIdx),
                updatedCertificate,
                ...state.certificates.slice(requiredCertificateIdx + 1),
            ]);
        },
        // PROJECTS
        addProjects: (state, action) => {
            console.log("ADDED PROJECT PAYLOAD", action.payload);

            state.projects.push(_createOrUpdateProject(action.payload));

            console.log("UPDATED ADD PROJECT", JSON.stringify(state.projects));
        },
        removeProject: (state, action) => {
            state.projects = _.cloneDeep(state.projects.filter((c) => c.id !== action.payload.id));
        },
        resetProjects: (state) => {
            state.projects = initialState.projects;
        },
        updateProject: (state, action) => {
            console.log("UPDATE PROJECT PAYLOAD", action.payload);

            const requiredProjectIdx = state.projects.findIndex((c) => c.id === action.payload.id);

            if (requiredProjectIdx === -1) {
                return;
            }

            const updatedProject = _createOrUpdateProject(action.payload, state.projects[requiredProjectIdx]);

            state.projects = _.cloneDeep([
                ...state.projects.slice(0, requiredProjectIdx),
                updatedProject,
                ...state.projects.slice(requiredProjectIdx + 1),
            ]);

            console.log("UPDATED UPDATE PROJECTS", JSON.stringify(state.projects));
        },
        // INTEREST
        addInterest: (state, action) => {
            state.interests.push(_createOrUpdateInterest(action.payload));
        },
        removeInterest: (state, action) => {
            state.interests = _.cloneDeep(state.interests.filter((c) => c.id !== action.payload.id));
        },
        resetInterests: (state) => {
            state.interests = initialState.interests;
        },
        updateInterest: (state, action) => {
            const requiredInterestIdx = state.interests.findIndex((c) => c.id === action.payload.id);

            if (requiredInterestIdx === -1) {
                return;
            }

            const updatedInterest = _createOrUpdateInterest(action.payload, state.interests[requiredInterestIdx]);

            state.interests = _.cloneDeep([
                ...state.interests.slice(0, requiredInterestIdx),
                updatedInterest,
                ...state.interests.slice(requiredInterestIdx + 1),
            ]);
        },
        // EDUCATION
        addEducation: (state, action) => {
            console.log("EDUCATION PAYLOAD", action.payload);

            state.education.push(_createOrUpdateEducation(action.payload));

            console.log("UPDATED ADD EDU", JSON.stringify(state.education));
        },
        removeEducation: (state, action) => {
            state.education = _.cloneDeep(state.education.filter((c) => c.id !== action.payload.id));
        },
        resetEducation: (state) => {
            state.education = initialState.education;
        },
        updateEducation: (state, action) => {
            console.log("UPDATE EDU PAYLOAD", action.payload);

            const requiredEducationIdx = state.education.findIndex((c) => c.id === action.payload.id);

            console.log("UPDATE REQD IDX", requiredEducationIdx);

            if (requiredEducationIdx === -1) {
                return;
            }

            const updatedEducation = _createOrUpdateEducation(action.payload, state.education[requiredEducationIdx]);

            console.log("UPDATED UPDATE EDU", JSON.stringify(state.education));

            state.education = _.cloneDeep([
                ...state.education.slice(0, requiredEducationIdx),
                updatedEducation,
                ...state.education.slice(requiredEducationIdx + 1),
            ]);
        },
        // COURSE
        addCourse: (state, action) => {
            state.courses.push(_createOrUpdateCourse(action.payload));
        },
        removeCourse: (state, action) => {
            state.courses = _.cloneDeep(state.courses.filter((c) => c.id !== action.payload.id));
        },
        resetCourses: (state) => {
            state.courses = initialState.courses;
        },
        updateCourse: (state, action) => {
            const requiredCourseIdx = state.courses.findIndex((c) => c.id === action.payload.id);

            if (requiredCourseIdx === -1) {
                return;
            }

            const updatedCourse = _createOrUpdateCourse(action.payload, state.courses[requiredCourseIdx]);

            state.courses = _.cloneDeep([...state.courses.slice(0, requiredCourseIdx), updatedCourse, ...state.courses.slice(requiredCourseIdx + 1)]);
        },

        // EDIT OBJ
        setEditObj: (state, action) => {
            console.log("PAYLOAD", action.payload);

            const { key, value } = action.payload;

            let addOrUpdateFunc = null;

            console.log("KEY", key);

            switch (_getCamelCaseString(key)) {
                case "professionalExperience":
                    addOrUpdateFunc = _createOrUpdateProfessionalExperience;
                    break;
                case "skills":
                    addOrUpdateFunc = _createOrUpdateSkills;
                    break;
                case "languages":
                    addOrUpdateFunc = _createOrUpdateLanguages;
                    break;
                case "projects":
                    addOrUpdateFunc = _createOrUpdateProject;
                    break;
                case "interests":
                    addOrUpdateFunc = _createOrUpdateInterest;
                    break;
                case "education":
                    addOrUpdateFunc = _createOrUpdateEducation;
                    break;
                case "courses":
                    addOrUpdateFunc = _createOrUpdateCourse;
                    break;
                case "certificates":
                    addOrUpdateFunc = _createOrUpdateCertificates;
                    break;
                default:
                    break;
            }

            if (!key || !value) {
                return;
            }

            state.editObj[key] = addOrUpdateFunc(value || {}, state.editObj[key] || {});

            console.log("UPDATED STATE OBJ", JSON.stringify(state.editObj[key]));
        },

        resetEditObj: (state) => {
            state.editObj = initialState.editObj;
        },

        // PREV OBJ
        setPrevObj: (state, action) => {
            const { key, value } = action.payload;

            console.log("PREV OBJ SET PAYLOAD", action.payload);

            if (!key || !value) {
                return;
            }

            state.prevObj[key] = value;

            console.log("UPDATED PREV OBJ", JSON.stringify(state.prevObj[key]));
        },

        resetPrevObj: (state) => {
            state.prevObj = initialState.prevObj;
        },
    },
});

export const {
    addLinks,
    addSkills,
    addCourse,
    addInterest,
    addProjects,
    addLanguages,
    addEducation,
    addOrUpdatePersonalInfo,
    addProfessionalExperience,
    removeCourse,
    removeEducation,
    removeInterest,
    removeLanguage,
    removeProfessionalExperience,
    removeProject,
    removeSkills,
    resetCourses,
    resetEducation,
    resetInterests,
    resetLanguages,
    resetPersonalInfo,
    resetProfessionExperience,
    resetProjects,
    resetSkills,
    updateCourse,
    updateEducation,
    updateInterest,
    updateLanguages,
    updateProfessionalExperience,
    updateProject,
    updateSkills,
    setEditObj,
    resetEditObj,
    setPrevObj,
    resetPrevObj,
    addCertificates,
    resetCertificates,
    updateCertificates,
    removeCertificate,
} = resume.actions;
export default resume.reducer;
