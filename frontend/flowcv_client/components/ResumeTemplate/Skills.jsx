import { useAppSelector } from "@redux/hooks";
import { HEADING_LAYOUT, SEPARATOR, SKILL_LEVELS } from "@utils/Constants";
import React from "react";
import { GiSkills } from "react-icons/gi";

const Skills = ({ spacing, heading, skills }) => {
    const data = useAppSelector((state) => state.persistedReducer.resume.skills) || [];

    return data.filter((c) => c.visible).length ? (
        <div className="mt-4">
            <h1
                className={`font-semibold flex gap-2 items-center text-sm ${HEADING_LAYOUT[heading.style]} ${
                    heading.textTransform?.toLowerCase() || "capitalize"
                }`}
                style={{
                    textTransform: `${heading.textTransform?.toLowerCase()}`,
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
                {heading.icons && <GiSkills className="text-xl" />} Skills
            </h1>
            {heading.style === 4 && <div className="w-[2.6em] mt-[3px] border-b-[6px] border-black rounded-[1px]"></div>}
            <div
                className={`w-full ${
                    skills.type === "grid" ? "grid grid-cols-4 gap-x-2" : skills.type === "level" ? "grid grid-cols-2 gap-x-8" : "flex items-center"
                } ${skills.type === "text" && skills.separator === "wrap" ? "gap-0.5" : "gap-1"}`}
            >
                {data
                    .filter((c) => c.visible)
                    .map((c, i) => (
                        <div
                            key={c.id}
                            className={`flex ${["text", "bubble"].includes(skills.type) ? "" : "justify-between w-full"} ${
                                skills.type === "text" && skills.separator === "wrap" ? "gap-0.5" : "gap-2"
                            } text-xs my-2`}
                            style={{ lineHeight: `${spacing.value.lineHeight}rem`, fontSize: `${spacing.value.fontSize - 1}pt` }}
                        >
                            <div
                                className={`break-words ${skills.type === "bubble" ? "border-2 border-black px-1 py-1 rounded-lg" : ""} ${
                                    ["text", "bubble"].includes(skills.type) ? "flex items-center gap-1" : ""
                                }`}
                            >
                                <div className="font-semibold">{c.skill}</div>
                                {c.description && <div>{["text", "bubble"].includes(skills.type) ? `(${c.description})` : c.description}</div>}
                            </div>
                            {skills.type === "text" && i !== data.filter((c) => c.visible).length - 1 && (
                                <>
                                    <div>{SEPARATOR[skills.separator]}</div>
                                </>
                            )}
                            <div className="w-2/4 break-words flex gap-1 mt-2 justify-end text-xs">
                                {skills.type === "level" && skills.level === "dots" && (
                                    <>
                                        {Array(SKILL_LEVELS[c.skillLevel])
                                            .fill(1)
                                            .map((c, i) => (
                                                <div key={i} className="w-2 h-2 bg-black rounded-full"></div>
                                            ))}
                                        {Array(5 - SKILL_LEVELS[c.skillLevel || "novice"])
                                            .fill(1)
                                            .map((c, i) => (
                                                <div key={i} className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                            ))}
                                    </>
                                )}
                                {skills.type === "level" && skills.level === "bar" && (
                                    <>
                                        <div className="relative w-full h-1 bg-gray-300 rounded-full">
                                            <div
                                                className="absolute left-0 top-0 h-1 bg-black rounded-full"
                                                style={{
                                                    width: `${(SKILL_LEVELS[c.skillLevel] / 5) * 100}%`,
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

export default Skills;
