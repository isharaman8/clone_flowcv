import { useAppSelector } from "@redux/hooks";
import { HEADING_LAYOUT, SEPARATOR } from "@utils/Constants";
import React from "react";
import { FaGuitar } from "react-icons/fa";

const InterestComponent = ({ spacing, heading, interest }) => {
    const data = useAppSelector((state) => state.persistedReducer.resume.interests) || [];

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
                {heading.icons && <FaGuitar className="text-xl" />} Interests
            </h1>
            {heading.style === 4 && <div className="w-[2.6em] mt-[3px] border-b-[6px] border-black rounded-[1px]"></div>}
            <div
                className={`w-full ${
                    interest.type === "grid"
                        ? "grid grid-cols-4 gap-x-2"
                        : interest.type === "level"
                        ? "grid grid-cols-2 gap-x-8"
                        : "flex items-center"
                } ${interest.type === "text" && interest.separator === "wrap" ? "gap-0.5" : "gap-1"}`}
            >
                {data
                    .filter((c) => c.visible)
                    .map((c, i) => (
                        <div
                            key={c.id}
                            className={`flex ${["text", "bubble"].includes(interest.type) ? "" : "justify-between w-full"} ${
                                interest.type === "text" && interest.separator === "wrap" ? "gap-0.5" : "gap-2"
                            } text-xs my-2`}
                            style={{ lineHeight: `${spacing.value.lineHeight}rem`, fontSize: `${spacing.value.fontSize - 1}pt` }}
                        >
                            <div
                                className={`break-words ${interest.type === "bubble" ? "border-2 border-black px-1 py-1 rounded-lg" : ""} ${
                                    ["text", "bubble"].includes(interest.type) ? "flex items-center gap-1" : ""
                                }`}
                            >
                                <div className="font-semibold">{c.interest}</div>
                                {c.description && <div>{["text", "bubble"].includes(interest.type) ? `(${c.description})` : c.description}</div>}
                            </div>
                            {interest.type === "text" && i !== data.filter((c) => c.visible).length - 1 && (
                                <>
                                    <div>{SEPARATOR[interest.separator]}</div>
                                </>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    ) : (
        <></>
    );
};

export default InterestComponent;
