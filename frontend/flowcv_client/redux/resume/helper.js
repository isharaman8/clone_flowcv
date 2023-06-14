export const _getProfessionalExperience = (payload = {}, oldData = {}) => {
    return {
        employer: payload.employer || oldData.employer || null,
        jobTitle: payload.jobTitle || oldData.jobTitle || null,
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
        id: !Object.values(oldData).length ? payload.id : null,
    };
};

export const _getSkills = (payload = {}, oldData = {}) => {
    return {
        skill: payload.skill || oldData.skill || null,
        description: payload.description || oldData.description || null,
        skillLevel: payload.skillLevel || oldData.skillLevel || null,
        id: !Object.values(oldData).length ? payload.id : null,
    };
};

export const _getLanguages = (payload = {}, oldData = {}) => {
    return {
        language: payload.language || oldData.language || null,
        description: payload.description || oldData.description || null,
        languageLevel: payload.languageLevel || oldData.languageLevel || null,
        id: !Object.values(oldData).length ? payload.id : null,
    };
};

export const _getProject = (payload = {}, oldData = {}) => {
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
    };
};

export const _getInterest = (payload = {}, oldData = {}) => {
    return {
        interest: payload.interest || oldData.interest || null,
        description: payload.description || oldData.description || null,
        id: !Object.values(oldData).length ? payload.id : null,
    };
};
