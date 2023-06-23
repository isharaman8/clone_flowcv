import { useAppSelector } from "@redux/hooks";
import { MONTHS } from "@utils/Constants";
import React from "react";

const Education = ({ currentComponent }) => {
    const key = currentComponent.toLowerCase().includes("education")
        ? "education"
        : currentComponent.toLowerCase().includes("course")
        ? "courses"
        : "professionalExperience";

    const subOne = key === "education" ? "school" : key === "courses" ? "courseTitle" : "employer";
    const subTwo = key === "education" ? "degree" : key === "courses" ? "institution" : "jobTitle";

    const data = useAppSelector((state) => state.persistedReducer.resume[key]) || [];

    return data.filter((c) => c.visible).length ? (
        <div className="mt-4">
            <h1 className="font-semibold text-sm border-b-2 border-black capitalize">{currentComponent}</h1>
            {data
                .filter((c) => c.visible)
                .map((c) => (
                    <div key={c.id} className="flex justify-between gap-4 w-full text-xs my-2">
                        <div className="w-2/4 break-words">
                            <div>
                                <span className="font-semibold">{c[subTwo]}, </span>
                                {c[subOne]}
                            </div>
                            {c.description && <div>{c.description}</div>}
                        </div>
                        <div className="w-2/4 break-words flex flex-col items-end text-xs">
                            <div>
                                {!c.startDate.dontshow && c.startDate.month && (
                                    <span>
                                        {MONTHS[c.startDate?.month]}/{c.startDate?.year}
                                    </span>
                                )}
                                {!c.endDate.dontshow && (
                                    <span>
                                        {!c.endDate?.presentyear
                                            ? c.endDate.month
                                                ? " - " + (MONTHS[c.endDate?.month] || "") + "/" + (c.endDate?.year || "")
                                                : ""
                                            : ` - present`}
                                    </span>
                                )}
                            </div>

                            {c.city && (
                                <div>
                                    {c.city}, {c.country}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
        </div>
    ) : (
        <></>
    );
};

export default Education;
