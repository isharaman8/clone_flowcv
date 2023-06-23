import { useAppSelector } from "@redux/hooks";
import { MONTHS, NULL_VALUE } from "@utils/Constants";
import React from "react";

const Projects = () => {
    const data = useAppSelector((state) => state.persistedReducer.resume.projects);

    console.log("DATA", data);

    if (!data.length) {
        return;
    }

    return data.filter((c) => c.visible).length ? (
        <div className="mt-4">
            <h1 className="font-semibold text-sm border-b-2 border-black capitalize">Projects</h1>
            {data
                .filter((c) => c.visible)
                .map((c) => (
                    <div key={`${c.id}${Date.now()}`} className="flex justify-between gap-4 w-full text-xs my-2">
                        <div className="w-2/4 break-words">
                            <div>
                                <span className="font-semibold">{c.title} </span>
                            </div>
                            {c.subTitle && <div>{c.subTitle}</div>}
                            {c.description && <div>{c.description}</div>}
                        </div>
                        <div className="w-2/4 break-words flex flex-col items-end text-xs">
                            <div>
                                {!c.startDate.dontshow && c.startDate.month && (
                                    <span>
                                        {MONTHS[c.startDate?.month]}/{c.startDate?.year}
                                    </span>
                                )}
                                {!c.startDate.dontshow && " - "}
                                {!c.endDate.dontshow && (
                                    <span>
                                        {!c.endDate?.presentyear
                                            ? c.endDate.month
                                                ? (MONTHS[c.endDate?.month] || "") + "/" + (c.endDate?.year || "")
                                                : c.endDate?.year || ""
                                            : ` - present`}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    ) : (
        <></>
    );
};

export default Projects;
