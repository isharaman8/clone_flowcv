import { createSlice } from "@reduxjs/toolkit";
import {
    _createOrUpdateCourse,
    _createOrUpdateEducation,
    _createOrUpdateInterest,
    _createOrUpdateLanguages,
    _createOrUpdateProfessionalExperience,
    _createOrUpdateProject,
    _createOrUpdateSkills,
} from "./helper";

const initialState = {
    personalInfo: {
        fullName: null,
        jobTitle: null,
        email: null,
        phone: null,
        address: null,
        links: {},
    },
    professionaExperience: [],
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
            state.personalInfo = structuredClone({ ...state.personalInfo, ...action.payload });
        },
        resetPersonalInfo: (state) => {
            state.personalInfo = initialState.personalInfo;
        },
        addLinks: (state, action) => {
            state.personalInfo.links = structuredClone({ ...state.personalInfo.links, ...action.payload });
        },
        // PROFESSIONAL EXPERIENCE
        addProfessionalExperience: (state, action) => {
            state.professionaExperience.push(_createOrUpdateProfessionalExperience(action.payload));
        },
        removeProfessionalExperience: (state, action) => {
            state.professionaExperience = structuredClone(state.professionaExperience.filter((c) => c.id !== action.payload.id));
        },
        resetProfessionExperience: (state) => {
            state.professionaExperience = initialState.professionaExperience;
        },
        updateProfessionalExperience: (state, action) => {
            const requiredProfessionalExpIdx = state.professionaExperience.findIndex((c) => c.id === action.payload.id);

            if (requiredProfessionalExpIdx === -1) {
                return;
            }

            const updatedProfessionalExp = _createOrUpdateProfessionalExperience(
                action.payload,
                state.professionaExperience[requiredProfessionalExpIdx]
            );

            state.professionaExperience = structuredClone([
                ...state.professionaExperience.slice(0, requiredProfessionalExpIdx),
                updatedProfessionalExp,
                ...state.professionaExperience.slice(requiredProfessionalExpIdx + 1),
            ]);
        },
        // SKILLS
        addSkills: (state, action) => {
            state.skills.push(_createOrUpdateSkills(action.payload));
        },
        removeSkills: (state, action) => {
            state.skills = structuredClone(state.skills.filter((c) => c.id !== action.payload.id));
        },
        resetSkills: (state) => {
            state.skills = initialState.skills;
        },
        updateSkills: (state, action) => {
            const requiredSkillsIdx = state.skills.findIndex((c) => c.id === action.payload.id);

            if (requiredSkillsIdx === -1) {
                return;
            }

            const updatedSkills = _createOrUpdateSkills(action.payload, state.skills[requiredSkillsIdx]);

            state.skills = structuredClone([
                ...state.skills.slice(0, requiredSkillsIdx),
                updatedSkills,
                ...state.skills.slice(requiredSkillsIdx + 1),
            ]);
        },
        // LANGUAGES
        addLanguages: (state, action) => {
            state.languages.push(_createOrUpdateLanguages(action.payload));
        },
        removeLanguage: (state, action) => {
            state.languages = structuredClone(state.languages.filter((c) => c.id !== action.payload.id));
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

            state.languages = structuredClone([
                ...state.languages.slice(0, requiredLanguageIdx),
                updatedLanguage,
                ...state.languages.slice(requiredLanguageIdx + 1),
            ]);
        },
        // PROJECTS
        addProjects: (state, action) => {
            state.projects.push(_createOrUpdateProject(action.payload));
        },
        removeProject: (state, action) => {
            state.projects = structuredClone(state.projects.filter((c) => c.id !== action.payload.id));
        },
        resetProjects: (state) => {
            state.projects = initialState.projects;
        },
        updateProject: (state, action) => {
            const requiredProjectIdx = state.projects.findIndex((c) => c.id === action.payload.id);

            if (requiredProjectIdx === -1) {
                return;
            }

            const updatedProject = _createOrUpdateProject(action.payload, state.projects[requiredProjectIdx]);

            state.projects = structuredClone([
                ...state.projects.slice(0, requiredProjectIdx),
                updatedProject,
                ...state.projects.slice(requiredProjectIdx + 1),
            ]);
        },
        // INTEREST
        addInterest: (state, action) => {
            state.interests.push(_createOrUpdateInterest(action.payload));
        },
        removeInterest: (state, action) => {
            state.interests = structuredClone(state.interests.filter((c) => c.id !== action.payload.id));
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

            state.interests = structuredClone([
                ...state.interests.slice(0, requiredInterestIdx),
                updatedInterest,
                ...state.interests.slice(requiredInterestIdx + 1),
            ]);
        },
        // EDUCATION
        addEducation: (state, action) => {
            state.education.push(_createOrUpdateEducation(action.payload));
        },
        removeEducation: (state, action) => {
            state.education = structuredClone(state.education.filter((c) => c.id !== action.payload.id));
        },
        resetEducation: (state) => {
            state.education = initialState.education;
        },
        updateEducation: (state, action) => {
            const requiredEducationIdx = state.interests.findIndex((c) => c.id === action.payload.id);

            if (requiredEducationIdx === -1) {
                return;
            }

            const updatedEducation = _createOrUpdateEducation(action.payload, state.interests[requiredEducationIdx]);

            state.interests = structuredClone([
                ...state.interests.slice(0, requiredEducationIdx),
                updatedEducation,
                ...state.interests.slice(requiredEducationIdx + 1),
            ]);
        },
        // COURSE
        addCourse: (state, action) => {
            state.courses.push(_createOrUpdateCourse(action.payload));
        },
        removeCourse: (state, action) => {
            state.courses = structuredClone(state.courses.filter((c) => c.id !== action.payload.id));
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

            state.courses = structuredClone([
                ...state.courses.slice(0, requiredCourseIdx),
                updatedCourse,
                ...state.courses.slice(requiredCourseIdx + 1),
            ]);
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
} = resume.actions;
export default resume.reducer;
