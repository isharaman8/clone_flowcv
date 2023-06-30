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
        title: _getValue(payload, oldData, "title"),
        description: _getValue(payload, oldData, "description"),
        id: _getValue(payload, oldData, "id"),
        visible: payload.visible === false ? false : oldData.false ? false : true,
        projectTitle: _getValue(payload, oldData, "projectTitle"),
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

export const _createOrUpdateCertificates = (payload = {}, oldData = {}) => {
    return {
        certificate: _getValue(payload, oldData, "certificate"),
        description: _getValue(payload, oldData, "description"),
        id: _getValue(payload, oldData, "id"),
        visible: payload.visible === false ? false : oldData.false ? false : true,
        link: _getValue(payload, oldData, "link"),
    };
};

export const _setSpacing = (payload = {}, oldData = {}) => {
    return {
        fontSize: _getValue(payload, oldData, "fontSize"),
        lineHeight: _getValue(payload, oldData, "lineHeight"),
        lRMargin: _getValue(payload, oldData, "lRMargin"),
        tBMargin: _getValue(payload, oldData, "tBMargin"),
        spaceBtwEntries: _getValue(payload, oldData, "spaceBtwEntries"),
    };
};

export const _setLayout = (payload = {}, oldData = {}) => {
    return {
        direction: _getValue(payload, oldData, "direction"),
        columns: _getValue(payload, oldData, "columns"),
        contentArrangement: _getValue(payload, oldData, "contentArrangement"),
        columnWidth: {
            left: _getValue(payload.columnWidth, oldData.columnWidth, "left"),
            right: _getValue(payload.columnWidth, oldData.columnWidth, "right"),
        },
    };
};

export const _setColors = (payload = {}, oldData = {}) => {
    return {
        basic: _getParsedBoolean(_getValue(payload, oldData, "basic")),
        advanced: _getParsedBoolean(_getValue(payload, oldData, "advanced")),
        border: _getParsedBoolean(_getValue(payload, oldData, "border")),
        accent: _getParsedBoolean(_getValue(payload, oldData, "accent")),
        accentColorValue: _getValue(payload, oldData, "accentColorValue"),
        multicolor: _getParsedBoolean(_getValue(payload, oldData, "multicolor")),
        multiColorValue: _getValue(payload, oldData, "multiColorValue"),
        applyAccentColorTo: _getValue(payload, oldData, "applyAccentColorTo"),
    };
};

export const _setFont = (payload = {}, oldData = {}) => {
    return {
        family: _getValue(payload, oldData, "family"),
        font: _getValue(payload, oldData, "font"),
    };
};
