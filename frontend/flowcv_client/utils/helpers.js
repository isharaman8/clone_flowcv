import { LINKS } from "./Constants";

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
