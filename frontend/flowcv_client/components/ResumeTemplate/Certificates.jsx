import { useAppSelector } from "@redux/hooks";
import { HEADING_LAYOUT, SEPARATOR } from "@utils/Constants";
import React from "react";
import { GrCertificate } from "react-icons/gr";

const Certificates = ({ spacing, heading, certificate }) => {
    const data = useAppSelector((state) => state.persistedReducer.resume.certificates) || [];

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
                {heading.icons && <GrCertificate className="text-lg" />} Certificates
            </h1>
            {heading.style === 4 && <div className="w-[2.6em] mt-[3px] border-b-[6px] border-black rounded-[1px]"></div>}
            <div
                className={`w-full ${
                    certificate.type === "grid"
                        ? "grid grid-cols-4 gap-x-2"
                        : certificate.type === "level"
                        ? "grid grid-cols-2 gap-x-8"
                        : "flex items-center"
                } ${certificate.type === "text" && certificate.separator === "wrap" ? "gap-0.5" : "gap-1"}`}
            >
                {data
                    .filter((c) => c.visible)
                    .map((c, i) => (
                        <div
                            key={c.id}
                            className={`flex ${["text", "bubble"].includes(certificate.type) ? "" : "justify-between w-full"} ${
                                certificate.type === "text" && certificate.separator === "wrap" ? "gap-0.5" : "gap-2"
                            } text-xs my-2`}
                            style={{ lineHeight: `${spacing.value.lineHeight}rem`, fontSize: `${spacing.value.fontSize - 1}pt` }}
                        >
                            <div
                                className={`break-words ${certificate.type === "bubble" ? "border-2 border-black px-1 py-1 rounded-lg" : ""} ${
                                    ["text", "bubble"].includes(certificate.type) ? "flex items-center gap-1" : ""
                                }`}
                            >
                                <div className="font-semibold">{c.certificate}</div>
                                {c.description && <div>{["text", "bubble"].includes(certificate.type) ? `(${c.description})` : c.description}</div>}
                            </div>
                            {certificate.type === "text" && i !== data.filter((c) => c.visible).length - 1 && (
                                <>
                                    <div>{SEPARATOR[certificate.separator]}</div>
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

export default Certificates;
