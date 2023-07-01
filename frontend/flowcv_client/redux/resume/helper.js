import { _getParsedBoolean, _getValue } from "@utils/helpers";

const _createOrUpdateProfessionalExperience = (payload = {}, oldData = {}) => {
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
        id: _getValue(payload, oldData, "id"),
        link: _getValue(payload, oldData, "link"),
        description: _getValue(payload, oldData, "description"),
        visible: payload.visible === false ? false : oldData.false ? false : true,
    };
};

const _createOrUpdateEducation = (payload = {}, oldData = {}) => {
    return {
        city: _getValue(payload, oldData, "city"),
        school: _getValue(payload, oldData, "school"),
        degree: _getValue(payload, oldData, "degree"),
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
        id: _getValue(payload, oldData, "id"),
        link: _getValue(payload, oldData, "link"),
        description: _getValue(payload, oldData, "description"),
        visible: payload.visible === false ? false : oldData.false ? false : true,
    };
};

const _createOrUpdateCourse = (payload = {}, oldData = {}) => {
    return {
        city: _getValue(payload, oldData, "city"),
        country: _getValue(payload, oldData, "country"),
        courseTitle: _getValue(payload, oldData, "courseTitle"),
        institution: _getValue(payload, oldData, "institution"),
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
        id: _getValue(payload, oldData, "id"),
        link: _getValue(payload, oldData, "link"),
        description: _getValue(payload, oldData, "description"),
        visible: payload.visible === false ? false : oldData.false ? false : true,
    };
};

const _createOrUpdateSkills = (payload = {}, oldData = {}) => {
    console.log("PREV SKILL", oldData.skill);
    console.log("PAYLOAD SKILL", payload.skill);

    console.log("GET VALUE", _getValue(payload, oldData, "skill"));

    return {
        id: _getValue(payload, oldData, "id"),
        skill: _getValue(payload, oldData, "skill"),
        skillLevel: _getValue(payload, oldData, "skillLevel"),
        description: _getValue(payload, oldData, "description"),
        visible: payload.visible === false ? false : oldData.false ? false : true,
    };
};

const _createOrUpdateLanguages = (payload = {}, oldData = {}) => {
    return {
        id: _getValue(payload, oldData, "id"),
        language: _getValue(payload, oldData, "language"),
        description: _getValue(payload, oldData, "description"),
        languageLevel: _getValue(payload, oldData, "languageLevel"),
        visible: payload.visible === false ? false : oldData.false ? false : true,
    };
};

const _createOrUpdateProject = (payload = {}, oldData = {}) => {
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
        id: _getValue(payload, oldData, "id"),
        title: _getValue(payload, oldData, "title"),
        subTitle: _getValue(payload, oldData, "subTitle"),
        description: _getValue(payload, oldData, "description"),
        projectTitle: _getValue(payload, oldData, "projectTitle"),
        visible: payload.visible === false ? false : oldData.false ? false : true,
    };
};

const _createOrUpdateInterest = (payload = {}, oldData = {}) => {
    return {
        id: _getValue(payload, oldData, "id"),
        interest: _getValue(payload, oldData, "interest"),
        description: _getValue(payload, oldData, "description"),
        visible: payload.visible === false ? false : oldData.false ? false : true,
    };
};

const _createOrUpdateCertificates = (payload = {}, oldData = {}) => {
    return {
        id: _getValue(payload, oldData, "id"),
        link: _getValue(payload, oldData, "link"),
        certificate: _getValue(payload, oldData, "certificate"),
        description: _getValue(payload, oldData, "description"),
        visible: payload.visible === false ? false : oldData.false ? false : true,
    };
};

const _setSpacing = (payload = {}, oldData = {}) => {
    return {
        fontSize: _getValue(payload, oldData, "fontSize"),
        lRMargin: _getValue(payload, oldData, "lRMargin"),
        tBMargin: _getValue(payload, oldData, "tBMargin"),
        lineHeight: _getValue(payload, oldData, "lineHeight"),
        spaceBtwEntries: _getValue(payload, oldData, "spaceBtwEntries"),
    };
};

const _setLayout = (payload = {}, oldData = {}) => {
    return {
        columns: _getValue(payload, oldData, "columns"),
        direction: _getValue(payload, oldData, "direction"),
        contentArrangement: _getValue(payload, oldData, "contentArrangement"),
        columnWidth: {
            left: _getValue(payload.columnWidth, oldData.columnWidth, "left"),
            right: _getValue(payload.columnWidth, oldData.columnWidth, "right"),
        },
    };
};

const _setColors = (payload = {}, oldData = {}) => {
    return {
        basic: _getParsedBoolean(_getValue(payload, oldData, "basic")),
        multiColorValue: _getValue(payload, oldData, "multiColorValue"),
        border: _getParsedBoolean(_getValue(payload, oldData, "border")),
        accent: _getParsedBoolean(_getValue(payload, oldData, "accent")),
        accentColorValue: _getValue(payload, oldData, "accentColorValue"),
        advanced: _getParsedBoolean(_getValue(payload, oldData, "advanced")),
        applyAccentColorTo: _getValue(payload, oldData, "applyAccentColorTo"),
        multicolor: _getParsedBoolean(_getValue(payload, oldData, "multicolor")),
    };
};

const _setFont = (payload = {}, oldData = {}) => {
    return {
        font: _getValue(payload, oldData, "font"),
        family: _getValue(payload, oldData, "family"),
    };
};

const _setHeading = (payload = {}, oldData = {}) => {
    return {
        size: _getValue(payload, oldData, "size"),
        icons: _getValue(payload, oldData, "icons"),
        style: _getValue(payload, oldData, "style"),
        textTransform: _getValue(payload, oldData, "textTransform"),
    };
};

const _setEntryLayout = (payload = {}, oldData = {}) => {
    return {
        size: _getValue(payload, oldData, "size"),
        subtitleStyle: _getValue(payload, oldData, "subtitleStyle"),
        subtitlePlacement: _getValue(payload, oldData, "subtitlePlacement"),
        listStyle: _getValue(payload, oldData, "listStyle"),
    };
};

const _setHeader = (payload = {}, oldData = {}) => {
    return {
        type: _getValue(payload, oldData, "type"),
        details: _getValue(payload, oldData, "details"),
        sections: _getValue(payload, oldData, "sections"),
    };
};

const _setName = (payload = {}, oldData = {}) => {
    return {
        size: _getValue(payload, oldData, "size"),
        bold: _getValue(payload, oldData, "bold"),
        creativeFont: _getValue(payload, oldData, "creativeFont"),
        fontFamily: _getValue(payload, oldData, "fontFamily"),
    };
};

const _setJob = (payload = {}, oldData = {}) => {
    return {
        size: _getValue(payload, oldData, "size"),
        style: _getValue(payload, oldData, "style"),
        position: _getValue(payload, oldData, "position"),
    };
};

const _setPhoto = (payload = {}, oldData = {}) => {
    return {
        size: _getValue(payload, oldData, "size"),
        show: _getValue(payload, oldData, "show"),
        grayscale: _getValue(payload, oldData, "grayscale"),
    };
};

const _setFooter = (payload = {}, oldData = {}) => {
    return {
        page: _getValue(payload, oldData, "page"),
        name: _getValue(payload, oldData, "name"),
        email: _getValue(payload, oldData, "email"),
    };
};

const _setDate = (payload = {}, oldData = {}) => {
    return {
        month: _getValue(payload, oldData, "month"),
        format: _getValue(payload, oldData, "format"),
        delimiter: _getValue(payload, oldData, "delimiter"),
    };
};

const _setSkills = (payload = {}, oldData = {}) => {
    return {
        type: _getValue(payload, oldData, "type"),
        level: _getValue(payload, oldData, "level"),
        separator: _getValue(payload, oldData, "separator"),
    };
};

const _setLanguage = (payload = {}, oldData = {}) => {
    return {
        type: _getValue(payload, oldData, "type"),
        level: _getValue(payload, oldData, "level"),
        separator: _getValue(payload, oldData, "separator"),
    };
};

const _setInterest = (payload = {}, oldData = {}) => {
    return {
        type: _getValue(payload, oldData, "type"),
        separator: _getValue(payload, oldData, "separator"),
    };
};

const _setCertificate = (payload = {}, oldData = {}) => {
    return {
        type: _getValue(payload, oldData, "type"),
        separator: _getValue(payload, oldData, "separator"),
    };
};

const _setEducation = (payload = {}, oldData = {}) => {
    return {
        type: _getValue(payload, oldData, "type"),
    };
};

const _setProfessionalExp = (payload = {}, oldData = {}) => {
    return {
        type: _getValue(payload, oldData, "type"),
    };
};

export const CustomizationHelpers = Object.freeze({
    spacing: _setSpacing,
    layout: _setLayout,
    colors: _setColors,
    fonts: _setFont,
    heading: _setHeading,
    entryLayout: _setEntryLayout,
    header: _setHeader,
    name: _setName,
    job: _setJob,
    photo: _setPhoto,
    footer: _setFooter,
    date: _setDate,
    skills: _setSkills,
    language: _setLanguage,
    interest: _setInterest,
    certificate: _setCertificate,
    education: _setEducation,
    professionalExp: _setProfessionalExp,
});

export const ResumeData = Object.freeze({
    professionalExp: _createOrUpdateProfessionalExperience,
    skills: _createOrUpdateSkills,
    languages: _createOrUpdateLanguages,
    projects: _createOrUpdateProject,
    certificates: _createOrUpdateCertificates,
    interests: _createOrUpdateInterest,
    education: _createOrUpdateEducation,
    courses: _createOrUpdateCourse,
});
