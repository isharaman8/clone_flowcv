export const _createOrUpdateProfessionalExperience = (payload = {}, oldData = {}) => {
    return {
        city: payload.city || oldData.city || null,
        country: payload.country || oldData.country || null,
        employer: payload.employer || oldData.employer || null,
        jobTitle: payload.jobTitle || oldData.jobTitle || null,
        startDate: {
            year: payload.startDate?.year || oldData.startDate?.year || null,
            month: payload.startDate?.month || oldData.startDate?.month || null,
            dontshow: payload.startDate?.dontshow || oldData.startDate?.dontshow || false,
            onlyyear: payload.startDate?.onlyyear || oldData.startDate?.onlyyear || false,
        },
        endDate: {
            year: payload.endDate?.year || oldData.endDate?.year || null,
            month: payload.endDate?.month || oldData.endDate?.month || null,
            dontshow: payload.endDate?.dontshow || oldData.endDate?.dontshow || false,
            onlyyear: payload.endDate?.onlyyear || oldData.endDate?.onlyyear || false,
        },
        link: payload.link || oldData.link || null,
        id: !Object.values(oldData).length ? payload.id : null,
        description: payload.description || oldData.description || null,
        visible: payload.visible === false ? false : oldData.false ? false : true,
    };
};

export const _createOrUpdateEducation = (payload = {}, oldData = {}) => {
    return {
        school: payload.school || oldData.school || null,
        degree: payload.degree || oldData.degree || null,
        city: payload.city || oldData.city || null,
        country: payload.country || oldData.country || null,
        startDate: {
            month: payload.startDate?.month || oldData.startDate?.month || null,
            year: payload.startDate?.year || oldData.startDate?.year || null,
            dontshow: payload.startDate?.dontshow || oldData.startDate?.dontshow || false,
            onlyyear: payload.startDate?.onlyyear || oldData.startDate?.onlyyear || false,
        },
        endDate: {
            month: payload.endDate?.month || oldData.endDate?.month || null,
            year: payload.endDate?.year || oldData.endDate?.year || null,
            dontshow: payload.endDate?.dontshow || oldData.endDate?.dontshow || false,
            onlyyear: payload.endDate?.onlyyear || oldData.endDate?.onlyyear || false,
        },
        link: payload.link || oldData.link || null,
        description: payload.description || oldData.description || null,
        id: !Object.values(oldData).length ? payload.id : null,
        visible: payload.visible === false ? false : oldData.false ? false : true,
    };
};

export const _createOrUpdateCourse = (payload = {}, oldData = {}) => {
    return {
        courseTitle: payload.courseTitle || oldData.courseTitle || null,
        institution: payload.institution || oldData.institution || null,
        city: payload.city || oldData.city || null,
        country: payload.country || oldData.country || null,
        startDate: {
            month: payload.startDate?.month || oldData.startDate?.month || null,
            year: payload.startDate?.year || oldData.startDate?.year || null,
            dontshow: payload.startDate?.dontshow || oldData.startDate?.dontshow || false,
            onlyyear: payload.startDate?.onlyyear || oldData.startDate?.onlyyear || false,
        },
        endDate: {
            month: payload.endDate?.month || oldData.endDate?.month || null,
            year: payload.endDate?.year || oldData.endDate?.year || null,
            dontshow: payload.endDate?.dontshow || oldData.endDate?.dontshow || false,
            onlyyear: payload.endDate?.onlyyear || oldData.endDate?.onlyyear || false,
        },
        link: payload.link || oldData.link || null,
        description: payload.description || oldData.description || null,
        id: !Object.values(oldData).length ? payload.id : null,
        visible: payload.visible === false ? false : oldData.false ? false : true,
    };
};

export const _createOrUpdateSkills = (payload = {}, oldData = {}) => {
    return {
        skill: payload.skill || oldData.skill || null,
        description: payload.description || oldData.description || null,
        skillLevel: payload.skillLevel || oldData.skillLevel || null,
        id: payload.id || oldData.id || null,
        visible: payload.visible === false ? false : oldData.false ? false : true,
    };
};

export const _createOrUpdateLanguages = (payload = {}, oldData = {}) => {
    return {
        language: payload.language || oldData.language || null,
        description: payload.description || oldData.description || null,
        languageLevel: payload.languageLevel || oldData.languageLevel || null,
        id: !Object.values(oldData).length ? payload.id : null,
        visible: payload.visible === false ? false : oldData.false ? false : true,
    };
};

export const _createOrUpdateProject = (payload = {}, oldData = {}) => {
    return {
        startDate: {
            month: payload.startDate?.month || oldData.startDate?.month || null,
            year: payload.startDate?.year || oldData.startDate?.year || null,
            dontshow: payload.startDate?.dontshow || oldData.startDate?.dontshow || false,
            onlyyear: payload.startDate?.onlyyear || oldData.startDate?.onlyyear || false,
        },
        endDate: {
            month: payload.endDate?.month || oldData.endDate?.month || null,
            year: payload.endDate?.year || oldData.endDate?.year || null,
            dontshow: payload.endDate?.dontshow || oldData.endDate?.dontshow || false,
            onlyyear: payload.endDate?.onlyyear || oldData.endDate?.onlyyear || false,
        },
        subTitle: payload.subTitle || oldData.subTitle || null,
        description: payload.description || oldData.description || null,
        id: !Object.values(oldData).length ? payload.id : null,
        visible: payload.visible === false ? false : oldData.false ? false : true,
    };
};

export const _createOrUpdateInterest = (payload = {}, oldData = {}) => {
    return {
        interest: payload.interest || oldData.interest || null,
        description: payload.description || oldData.description || null,
        id: !Object.values(oldData).length ? payload.id : null,
        visible: payload.visible === false ? false : oldData.false ? false : true,
    };
};
