import {
    addCertificates,
    addCourse,
    addEducation,
    addInterest,
    addLanguages,
    addProfessionalExperience,
    addProjects,
    addSkills,
    removeCertificate,
    removeCourse,
    removeEducation,
    removeInterest,
    removeLanguage,
    removeProfessionalExperience,
    removeProject,
    removeSkills,
    updateCertificates,
    updateCourse,
    updateEducation,
    updateInterest,
    updateLanguages,
    updateProfessionalExperience,
    updateProject,
    updateSkills,
} from "@redux/resume/features";
import { AVAILABLE_COMPONENTS, LINKS, NULL_VALUE, TEMPLATE_BOOLEAN_KEYS } from "./Constants";

export const _getYears = () => {
    const year = new Date().getFullYear();
    const array = [];

    for (let i = year; i >= 1944; i--) {
        array.push(i);
    }

    return array;
};

export const _getLinksObj = () => {
    const obj = {};

    for (const link of LINKS) {
        obj[link.toLowerCase()] = null;
    }

    return obj;
};

export const _getEditObj = () => {
    const obj = {};

    for (const key in AVAILABLE_COMPONENTS) {
        obj[key] = undefined;
    }

    return obj;
};

export const _camelize = (str = "") => {
    return str
        .split(" ")
        .map((c) => c[0].toUpperCase() + c.substring(1))
        .join(" ");
};

export const _getCamelCaseString = (str = "") => {
    const strArray = str.split(" ");

    return strArray.reduce((acc, value, idx) => acc + (idx === 0 ? value.toLowerCase() : _camelize(value)), "");
};

export const _getValue = (obj1 = {}, obj2 = {}, key = "") => {
    // FOR BOOLEAN VALUES
    if (TEMPLATE_BOOLEAN_KEYS.includes(key) && [true, "true", false, "false"].includes(obj1[key])) {
        return obj1[key];
    }

    return obj1[key] === NULL_VALUE ? null : obj1[key] || obj2[key] || null;
};

export const _parseEditObjPayload = (payload = {}) => {
    const obj = {};

    for (const key in payload) {
        if (payload[key] === NULL_VALUE) {
            obj[key] = null;
        } else obj[key] = payload[key];
    }

    return obj;
};

export const _generalAddReduxFunc = (payload = {}, key) => {
    switch (key) {
        case "employer":
        case "professionalExperience":
            return addProfessionalExperience(payload);
        case "school":
        case "education":
            return addEducation(payload);
        case "courseTitle":
        case "courses":
            return addCourse(payload);
        case "skills":
            return addSkills(payload);
        case "projects":
            return addProjects(payload);
        case "langauges":
            return addLanguages(payload);
        case "interests":
            return addInterest(payload);
        case "certificates":
            return addCertificates(payload);

        default:
            return {};
    }
};

export const _generalUpdateReduxFunc = (payload = {}, key) => {
    switch (key) {
        case "employer":
        case "professionalExperience":
            return updateProfessionalExperience(payload);
        case "school":
        case "education":
            return updateEducation(payload);
        case "courseTitle":
        case "courses":
            return updateCourse(payload);
        case "skills":
            return updateSkills(payload);
        case "projects":
            return updateProject(payload);
        case "languages":
            return updateLanguages(payload);
        case "interests":
            return updateInterest(payload);
        case "certificates":
            return updateCertificates(payload);
        default:
            return {};
    }
};

export const _generalRemoveReduxFunc = (payload = {}, key) => {
    switch (key) {
        case "employer":
        case "professionalExperience":
            return removeProfessionalExperience(payload);
        case "school":
        case "education":
            return removeEducation(payload);
        case "courseTitle":
        case "courses":
            return removeCourse(payload);
        case "skills":
            return removeSkills(payload);
        case "projects":
            return removeProject(payload);
        case "languages":
            return removeLanguage(payload);
        case "interests":
            return removeInterest(payload);
        case "certificates":
            return removeCertificate(payload);
        default:
            return {};
    }
};

export const _getParsedBoolean = (value) => {
    return [true, "true"].includes(value) ? true : false;
};

export const _getPersonalObjLinks = (linksObj = {}, handleFunc) => {
    const retArr = [];

    for (const key of LINKS) {
        if (linksObj[key.toLowerCase()]) {
            retArr.push({ heading: key.toLowerCase(), value: linksObj[key.toLowerCase()], handleValue: handleFunc });
        }
    }

    return retArr;
};
