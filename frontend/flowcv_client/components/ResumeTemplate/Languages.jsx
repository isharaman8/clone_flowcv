import { useAppSelector } from "@redux/hooks";
import { LANGUAGE_LEVELS } from "@utils/Constants";
import React from "react";

const Languages = () => {
    const data = useAppSelector((state) => state.persistedReducer.resume.languages) || [];

    if (!data.length) return;

    return (
        <div className="mt-4">
            <h1 className="font-semibold text-sm border-b-2 border-black capitalize">Languages</h1>
            <div className="w-full grid grid-cols-2 gap-4">
                {data.map((c) => (
                    <>
                        {c.visible && (
                            <div key={c.id} className="flex justify-between gap-4 w-full text-xs my-2">
                                <div className="w-2/4 break-words">
                                    <div className="font-semibold">{c.language}</div>
                                    {c.description && <div>{c.description}</div>}
                                </div>
                                <div className="w-2/4 break-words flex gap-1 justify-end text-xs">
                                    {Array(LANGUAGE_LEVELS[c.languageLevel])
                                        .fill(1)
                                        .map((c, i) => (
                                            <div key={i} className="w-2 h-2 bg-black rounded-full"></div>
                                        ))}
                                    {Array(5 - LANGUAGE_LEVELS[c.languageLevel || "beginner"])
                                        .fill(1)
                                        .map((c, i) => (
                                            <div key={i} className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                        ))}
                                </div>
                            </div>
                        )}
                    </>
                ))}
            </div>
        </div>
    );
};

export default Languages;
