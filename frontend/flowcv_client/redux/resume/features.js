import { createSlice } from "@reduxjs/toolkit";
import { _getLanguages, _getProfessionalExperience, _getSkills } from "./helper";

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
};

export const auth = createSlice({
    name: "resume",
    initialState,
    reducers: {
        // PERSONAL INFO
        addPersonalInfo: (state, action) => {
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
            state.professionaExperience.push(_getProfessionalExperience(action.payload));
        },
        removeProfessionalExperience: (state, action) => {
            state.professionaExperience = structuredClone(state.professionaExperience.filter((c) => c.id !== action.payload.id));
        },
        resetPersonalInfo: (state) => {
            state.professionaExperience = initialState.professionaExperience;
        },
        // SKILLS
        addSkills: (state, action) => {
            state.skills.push(_getSkills(action.payload));
        },
        removeSkills: (state, action) => {
            state.skills = structuredClone(state.skills.filter((c) => c.id !== action.payload.id));
        },
        resetSkills: (state) => {
            state.skills = initialState.skills;
        },
        // LANGUAGES
        addLanguages: (state, action) => {
            state.languages.push(_getLanguages(action.payload));
        },
        removeLanguage: (state, action) => {
            state.languages = structuredClone(state.languages.filter((c) => c.id !== action.payload.id));
        },
        resetLanguages: (state) => {
            state.languages = initialState.languages;
        },
        // PROJECTS
        addProjects: (state, action) => {
            state.projects.push(_getProject(action.payload));
        },
        removeProject: (state, action) => {
            state.projects = structuredClone(state.projects.filter((c) => c.id !== action.payload.id));
        },
        resetProjects: (state) => {
            state.projects = initialState.projects;
        },
        // INTEREST
        addInterest: (state, action) => {
            state.interests.push(_getInterest(action.payload));
        },
        removeInterest: (state, action) => {
            state.interests = structuredClone(state.interests.filter((c) => c.id !== action.payload.id));
        },
        resetInterests: (state) => {
            state.interests = initialState.interests;
        },
    },
});

export const { addUserData, removeUserData } = auth.actions;
export default auth.reducer;
