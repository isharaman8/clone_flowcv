import { useAppSelector } from "@redux/hooks";
import { DATE_LAYOUT, HEADING_LAYOUT, MONTHS, NULL_VALUE } from "@utils/Constants";
import React from "react";
import { FaFolderOpen } from "react-icons/fa";

const Projects = ({ spacing, heading, date }) => {
    const data = useAppSelector((state) => state.persistedReducer.resume.projects);

    console.log("DATA", data);

    if (!data.length) {
        return;
    }

    return data.filter((c) => c.visible).length ? (
        <div className="mt-4">
            <h1
                className={`font-semibold flex gap-2 items-center text-sm ${HEADING_LAYOUT[heading.style]} ${
                    heading.textTransform?.toLowerCase() || "capitalize"
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
                {heading.icons && <FaFolderOpen className="text-xl" />} Projects
            </h1>
            {heading.style === 4 && <div className="w-[2.6em] mt-[3px] border-b-[6px] border-black rounded-[1px]"></div>}
            {data
                .filter((c) => c.visible)
                .map((c) => (
                    <div
                        key={`${c.id}${Date.now()}`}
                        className="flex justify-between gap-4 w-full text-xs my-2"
                        style={{ lineHeight: `${spacing.value.lineHeight}rem`, fontSize: `${spacing.value.fontSize - 1}pt` }}
                    >
                        <div className="w-2/4 break-words">
                            <div>
                                <span className="font-semibold">{c.title} </span>
                            </div>
                            {c.subTitle && <div>{c.subTitle}</div>}
                            {c.description && <div>{c.description}</div>}
                        </div>
                        <div
                            className="w-2/4 break-words flex flex-col items-end text-xs"
                            style={{ lineHeight: `${spacing.value.lineHeight}rem`, fontSize: `${spacing.value.fontSize - 1}pt` }}
                        >
                            <div>
                                {!c.startDate.dontshow && c.startDate.month && (
                                    <span>
                                        {date.format === "YYYY/MM/DD"
                                            ? `${c.startDate?.year}${date.month === "digits" ? DATE_LAYOUT[date.delimiter] || "/" : " "}${
                                                  date.month === "digits"
                                                      ? MONTHS[c.startDate?.month]
                                                      : date.month === "short"
                                                      ? c.startDate?.month?.slice(0, 3)
                                                      : c.startDate?.month
                                              }`
                                            : `${
                                                  date.month === "digits"
                                                      ? MONTHS[c.startDate?.month]
                                                      : date.month === "short"
                                                      ? c.startDate?.month?.slice(0, 3)
                                                      : c.startDate?.month
                                              }${date.month === "digits" ? DATE_LAYOUT[date.delimiter] || "/" : " "}${c.startDate?.year}`}
                                    </span>
                                )}
                                {!c.endDate.dontshow && (
                                    <span>
                                        {!c.endDate?.presentyear
                                            ? c.endDate?.month
                                                ? ` - ${
                                                      date.format === "YYYY/MM/DD"
                                                          ? `${c.endDate?.year}${date.month === "digits" ? DATE_LAYOUT[date.delimiter] || "/" : " "}${
                                                                date.month === "digits"
                                                                    ? MONTHS[c.endDate?.month]
                                                                    : date.month === "short"
                                                                    ? c.endDate?.month?.slice(0, 3)
                                                                    : c.endDate?.month
                                                            }`
                                                          : `${
                                                                date.month === "digits"
                                                                    ? MONTHS[c.endDate?.month]
                                                                    : date.month === "short"
                                                                    ? c.endDate?.month?.slice(0, 3)
                                                                    : c.endDate?.month
                                                            }${date.month === "digits" ? DATE_LAYOUT[date.delimiter] || "/" : " "}${c.endDate?.year}`
                                                  }`
                                                : ""
                                            : " - present"}
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
