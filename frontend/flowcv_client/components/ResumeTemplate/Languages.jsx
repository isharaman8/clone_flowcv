import { useAppSelector } from "@redux/hooks";
import { HEADING_LAYOUT, LANGUAGE_LEVELS } from "@utils/Constants";
import React from "react";
import { GiEarthAmerica } from "react-icons/gi";

const Languages = ({ spacing, heading, language }) => {
    const data = useAppSelector((state) => state.persistedReducer.resume.languages) || [];

    return data.filter((c) => c.visible).length ? (
        <div className="mt-4">
            <h1
                className={`font-semibold flex gap-2 items-center text-sm ${HEADING_LAYOUT[heading.style]} ${
                    heading.textTransform.toLowerCase() || "capitalize"
                }`}
                style={{
                    lineHeight: `${spacing.value.lineHeight}rem`,
                    fontSize: `${
                        spacing.value.fontSize +
                        0.5 +
                        (heading.size === "S" ? -1 : heading.size === "M" ? -0.5 : heading.size === "L" ? 0.5 : heading.size === "XL" ? 1 : 0)
                    }pt`,
                    borderTop: `${heading.style === 3 ? "2px solid #111" : ""} `,
                    borderBottom: `${heading.style === 3 ? "2px solid #111" : ""} `,
                }}
            >
                {heading.icons && <GiEarthAmerica className="text-xl" />} Languages
            </h1>
            {heading.style === 4 && <div className="w-[2.6em] mt-[3px] border-b-[6px] border-black rounded-[1px]"></div>}
            <div
                className={`w-full ${
                    language.type === "grid"
                        ? "grid grid-cols-4 gap-x-2"
                        : language.type === "level"
                        ? "grid grid-cols-2 gap-x-8"
                        : "flex items-center"
                } ${language.type === "text" && language.separator === "wrap" ? "gap-0.5" : "gap-1"}`}
            >
                {data
                    .filter((c) => c.visible)
                    .map((c, i) => (
                        <div
                            key={c.id}
                            className={`flex ${["text", "bubble"].includes(language.type) ? "" : "justify-between w-full"} ${
                                language.type === "text" && language.separator === "wrap" ? "gap-0.5" : "gap-2"
                            } text-xs my-2`}
                            style={{ lineHeight: `${spacing.value.lineHeight}rem`, fontSize: `${spacing.value.fontSize - 1}pt` }}
                        >
                            <div
                                className={`break-words ${language.type === "bubble" ? "border-2 border-black px-1 py-1 rounded-lg" : ""} ${
                                    ["text", "bubble"].includes(language.type) ? "flex items-center gap-1" : ""
                                }`}
                            >
                                <div className="font-semibold">{c.language}</div>
                                {c.description && <div>{["text", "bubble"].includes(language.type) ? `(${c.description})` : c.description}</div>}
                            </div>
                            {language.type === "text" && i !== data.filter((c) => c.visible).length - 1 && (
                                <>
                                    <div>{SEPARATOR[language.separator]}</div>
                                </>
                            )}
                            <div className="w-2/4 break-words flex gap-1 mt-2 justify-end text-xs">
                                {language.type === "level" && language.level === "dots" && (
                                    <>
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
                                    </>
                                )}

                                {language.type === "level" && language.level === "bar" && (
                                    <>
                                        <div className="relative w-full h-1 bg-gray-300 rounded-full">
                                            <div
                                                className="absolute left-0 top-0 h-1 bg-black rounded-full"
                                                style={{
                                                    width: `${(LANGUAGE_LEVELS[c.languageLevel] / 5) * 100}%`,
                                                }}
                                            ></div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    ) : (
        <></>
    );
};

export default Languages;
