import {
    addCourse,
    addEducation,
    addProfessionalExperience,
    removeCourse,
    removeEducation,
    removeProfessionalExperience,
    updateCourse,
    updateEducation,
    updateProfessionalExperience,
} from "@redux/resume/features";
import { AVAILABLE_COMPONENTS, LINKS, NULL_VALUE } from "./Constants";

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

export const _getValue = (obj1 = {}, obj2 = {}, key = "") => {
    // FOR BOOLEAN VALUES
    if (["dontshow", "onlyyear", "presentyear"].includes(key)) {
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
            return addProfessionalExperience(payload);
        case "school":
            return addEducation(payload);
        case "courseTitle":
            return addCourse(payload);
        default:
            return {};
    }
};

export const _generalUpdateReduxFunc = (payload = {}, key) => {
    switch (key) {
        case "employer":
            return updateProfessionalExperience(payload);
        case "school":
            return updateEducation(payload);
        case "courseTitle":
            return updateCourse(payload);
        default:
            return {};
    }
};

export const _generalRemoveReduxFunc = (payload = {}, key) => {
    switch (key) {
        case "employer":
            return removeProfessionalExperience(payload);
        case "school":
            return removeEducation(payload);
        case "courseTitle":
            return removeCourse(payload);
        default:
            return {};
    }
};

export const _getParsedBoolean = (value) => {
    return [true, "true"].includes(value) ? true : false;
};
