import { AVAILABLE_COMPONENTS, LINKS } from "./Constants";

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
