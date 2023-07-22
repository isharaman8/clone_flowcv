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
import { ADD_CONTENT, AVAILABLE_COMPONENTS, LINKS, NULL_VALUE, PERSONAL_INFO_ID, TEMPLATE_BOOLEAN_KEYS } from "./Constants";

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
    if ((TEMPLATE_BOOLEAN_KEYS.includes(key) && [true, "true", false, "false"].includes(obj1[key])) || Number.isInteger(+obj1[key])) {
        return obj1[key];
    }

    console.log("KEY: - ", key);
    console.log("GET VALUE", obj1[key] === NULL_VALUE ? null : obj1[key] || obj2[key] || null);

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

export const _getColumnsArrangement = (resume = {}, direction) => {
    const retObj = {
        left: [],
        right: [],
    };

    if (resume.personalInfo) {
        const personalInfoContent = ADD_CONTENT.find((c) => c.id === PERSONAL_INFO_ID);

        switch (direction.toLowerCase()) {
            case "top":
            case "left":
                retObj.left.unshift(personalInfoContent);
                retObj.right = retObj.right.filter((c) => c.id !== PERSONAL_INFO_ID);
                break;

            case "right":
                retObj.left = retObj.right.filter((c) => c.id !== PERSONAL_INFO_ID);
                retObj.right.unshift(personalInfoContent);
                break;

            default:
                break;
        }
    }

    const compObj = {
        professionalExperience: Boolean(resume.professionalExperience?.length),
        skills: Boolean(resume.skills?.length),
        languages: Boolean(resume.languages?.length),
        projects: Boolean(resume.projects?.length),
        certificates: Boolean(resume.certificates?.length),
        interests: Boolean(resume.interests?.length),
        education: Boolean(resume.education?.length),
        courses: Boolean(resume.courses?.length),
    };

    for (const key in compObj) {
        if (compObj[key]) {
            const reqdContent = ADD_CONTENT.find((c) => {
                return _getLowerCaseStr(key) === _getLowerCaseStr(c.title);
            });

            if (reqdContent) {
                retObj.left.push(reqdContent);
            }
        }
    }

    if (retObj.left.length + retObj.right.length === resume.columnsArrangement.left.length + resume.columnsArrangement.right.length) {
        return resume.columnsArrangement;
    }

    return retObj;
};

export const _getComponentsArrangement = (resume = {}) => {
    const retArray = [];

    const compObj = {
        professionalExperience: Boolean(resume.professionalExperience?.length),
        skills: Boolean(resume.skills?.length),
        languages: Boolean(resume.languages?.length),
        projects: Boolean(resume.projects?.length),
        certificates: Boolean(resume.certificates?.length),
        interests: Boolean(resume.interests?.length),
        education: Boolean(resume.education?.length),
        courses: Boolean(resume.courses?.length),
    };

    console.log("COMPOBJ OBJ", compObj);

    for (const key in compObj) {
        if (compObj[key]) {
            const reqdContent = ADD_CONTENT.find((c) => {
                console.log("KEY", _getLowerCaseStr(key));
                console.log("C.TITLE", _getLowerCaseStr(c.title));

                return _getLowerCaseStr(key) === _getLowerCaseStr(c.title);
            });

            console.log("REQD CONTENT", reqdContent);
            console.log("KEY", key);

            if (reqdContent) {
                retArray.push(reqdContent);
            }
        }
    }

    console.log("RESUME ARRAY", retArray);
    console.log("RESUME", resume);
    console.log("RESUME COMPOBJ", compObj);

    if (resume.contentArrangement?.length === retArray.length) {
        return resume.contentArrangement;
    }

    return retArray;
};

export const _getLowerCaseStr = (str = "") => {
    return str.split(" ").join("").toLowerCase();
};

export const _rgbaStringToHex = (rgbaString = "") => {
    if (!rgbaString.trim()) {
        return rgbaString;
    }

    console.log("COLOR VALUE", rgbaString);

    // Remove the "rgba(" prefix and ")" suffix from the string
    const rgbaValues = rgbaString.slice(5, -1);

    console.log("COLOR VALUE", rgbaValues);

    // Split the string into individual color components
    const components = rgbaValues.split(",");

    console.log("COLOR VALUE", components);

    // Extract the red, green, blue, and alpha values
    const red = parseInt(components[0].trim());
    const green = parseInt(components[1].trim());
    const blue = parseInt(components[2].trim());
    const alpha = parseFloat(components[3]?.trim() || 1);

    // Convert each color component to hexadecimal
    const hexRed = red.toString(16).padStart(2, "0");
    const hexGreen = green.toString(16).padStart(2, "0");
    const hexBlue = blue.toString(16).padStart(2, "0");
    const hexAlpha = Math.round(alpha * 255)
        .toString(16)
        .padStart(2, "0");

    // Concatenate the color components
    const hexValue = "#" + hexRed + hexGreen + hexBlue + hexAlpha;

    return hexValue;
};
