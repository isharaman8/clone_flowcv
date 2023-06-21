import { _getParsedBoolean, _getValue } from "@utils/helpers";

export const _createOrUpdateProfessionalExperience = (payload = {}, oldData = {}) => {
    console.log("payload", payload);
    console.log("olddata", JSON.stringify(oldData));

    return {
        city: _getValue(payload, oldData, "city"),
        country: _getValue(payload, oldData, "country"),
        employer: _getValue(payload, oldData, "employer"),
        jobTitle: _getValue(payload, oldData, "jobTitle"),
        startDate: {
            year: _getValue(payload.startDate, oldData.startDate, "year"),
            month: _getValue(payload.startDate, oldData.startDate, "month"),
            dontshow: _getParsedBoolean(_getValue(payload.startDate, oldData.startDate, "dontshow") || false),
            onlyyear: _getParsedBoolean(_getValue(payload.startDate, oldData.startDate, "onlyyear") || false),
            presentyear: _getParsedBoolean(_getValue(payload.startDate, oldData.startDate, "presentyear") || false),
        },
        endDate: {
            year: _getValue(payload.endDate, oldData.endDate, "year"),
            month: _getValue(payload.endDate, oldData.endDate, "month"),
            dontshow: _getParsedBoolean(_getValue(payload.endDate, oldData.endDate, "dontshow") || false),
            onlyyear: _getParsedBoolean(_getValue(payload.endDate, oldData.endDate, "onlyyear") || false),
            presentyear: _getParsedBoolean(_getValue(payload.endDate, oldData.endDate, "presentyear") || false),
        },
        link: _getValue(payload, oldData, "link"),
        id: _getValue(payload, oldData, "id"),
        description: _getValue(payload, oldData, "description"),
        visible: payload.visible === false ? false : oldData.false ? false : true,
    };
};

export const _createOrUpdateEducation = (payload = {}, oldData = {}) => {
    return {
        school: _getValue(payload, oldData, "school"),
        degree: _getValue(payload, oldData, "degree"),
        city: payload.city || oldData.city || null,
        country: payload.country || oldData.country || null,
        startDate: {
            year: _getValue(payload.startDate, oldData.startDate, "year"),
            month: _getValue(payload.startDate, oldData.startDate, "month"),
            dontshow: _getParsedBoolean(_getValue(payload.startDate, oldData.startDate, "dontshow") || false),
            onlyyear: _getParsedBoolean(_getValue(payload.startDate, oldData.startDate, "onlyyear") || false),
            presentyear: _getParsedBoolean(_getValue(payload.startDate, oldData.startDate, "presentyear") || false),
        },
        endDate: {
            year: _getValue(payload.endDate, oldData.endDate, "year"),
            month: _getValue(payload.endDate, oldData.endDate, "month"),
            dontshow: _getParsedBoolean(_getValue(payload.endDate, oldData.endDate, "dontshow") || false),
            onlyyear: _getParsedBoolean(_getValue(payload.endDate, oldData.endDate, "onlyyear") || false),
            presentyear: _getParsedBoolean(_getValue(payload.endDate, oldData.endDate, "presentyear") || false),
        },
        link: _getValue(payload, oldData, "link"),
        id: _getValue(payload, oldData, "id"),
        description: _getValue(payload, oldData, "description"),
        visible: payload.visible === false ? false : oldData.false ? false : true,
    };
};

export const _createOrUpdateCourse = (payload = {}, oldData = {}) => {
    return {
        courseTitle: _getValue(payload, oldData, "courseTitle"),
        institution: _getValue(payload, oldData, "institution"),
        city: _getValue(payload, oldData, "city"),
        country: _getValue(payload, oldData, "country"),
        startDate: {
            year: _getValue(payload.startDate, oldData.startDate, "year"),
            month: _getValue(payload.startDate, oldData.startDate, "month"),
            dontshow: _getParsedBoolean(_getValue(payload.startDate, oldData.startDate, "dontshow") || false),
            onlyyear: _getParsedBoolean(_getValue(payload.startDate, oldData.startDate, "onlyyear") || false),
            presentyear: _getParsedBoolean(_getValue(payload.startDate, oldData.startDate, "presentyear") || false),
        },
        endDate: {
            year: _getValue(payload.endDate, oldData.endDate, "year"),
            month: _getValue(payload.endDate, oldData.endDate, "month"),
            dontshow: _getParsedBoolean(_getValue(payload.endDate, oldData.endDate, "dontshow") || false),
            onlyyear: _getParsedBoolean(_getValue(payload.endDate, oldData.endDate, "onlyyear") || false),
            presentyear: _getParsedBoolean(_getValue(payload.endDate, oldData.endDate, "presentyear") || false),
        },
        link: _getValue(payload, oldData, "link"),
        id: _getValue(payload, oldData, "id"),
        description: _getValue(payload, oldData, "description"),
        visible: payload.visible === false ? false : oldData.false ? false : true,
    };
};

export const _createOrUpdateSkills = (payload = {}, oldData = {}) => {
    console.log("PREV SKILL", oldData.skill);
    console.log("PAYLOAD SKILL", payload.skill);

    console.log("GET VALUE", _getValue(payload, oldData, "skill"));

    return {
        skill: _getValue(payload, oldData, "skill"),
        description: _getValue(payload, oldData, "description"),
        skillLevel: _getValue(payload, oldData, "skillLevel"),
        id: _getValue(payload, oldData, "id"),
        visible: payload.visible === false ? false : oldData.false ? false : true,
    };
};

export const _createOrUpdateLanguages = (payload = {}, oldData = {}) => {
    return {
        language: _getValue(payload, oldData, "language"),
        description: _getValue(payload, oldData, "description"),
        languageLevel: _getValue(payload, oldData, "languageLevel"),
        id: _getValue(payload, oldData, "id"),
        visible: payload.visible === false ? false : oldData.false ? false : true,
    };
};

export const _createOrUpdateProject = (payload = {}, oldData = {}) => {
    return {
        startDate: {
            year: _getValue(payload.startDate, oldData.startDate, "year"),
            month: _getValue(payload.startDate, oldData.startDate, "month"),
            dontshow: _getParsedBoolean(_getValue(payload.startDate, oldData.startDate, "dontshow") || false),
            onlyyear: _getParsedBoolean(_getValue(payload.startDate, oldData.startDate, "onlyyear") || false),
            presentyear: _getParsedBoolean(_getValue(payload.startDate, oldData.startDate, "presentyear") || false),
        },
        endDate: {
            year: _getValue(payload.endDate, oldData.endDate, "year"),
            month: _getValue(payload.endDate, oldData.endDate, "month"),
            dontshow: _getParsedBoolean(_getValue(payload.endDate, oldData.endDate, "dontshow") || false),
            onlyyear: _getParsedBoolean(_getValue(payload.endDate, oldData.endDate, "onlyyear") || false),
            presentyear: _getParsedBoolean(_getValue(payload.endDate, oldData.endDate, "presentyear") || false),
        },
        subTitle: _getValue(payload, oldData, "subTitle"),
        description: _getValue(payload, oldData, "description"),
        id: _getValue(payload, oldData, "id"),
        visible: payload.visible === false ? false : oldData.false ? false : true,
    };
};

export const _createOrUpdateInterest = (payload = {}, oldData = {}) => {
    return {
        interest: _getValue(payload, oldData, "interest"),
        description: _getValue(payload, oldData, "description"),
        id: _getValue(payload, oldData, "id"),
        visible: payload.visible === false ? false : oldData.false ? false : true,
    };
};
