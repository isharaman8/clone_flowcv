import { useAppSelector } from "@redux/hooks";
import { HEADER_LAYOUT } from "@utils/Constants";
import { _rgbaStringToHex } from "@utils/helpers";
import React, { useEffect } from "react";
import { BsGithub, BsGlobe, BsMedium, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";

const Details = ({ icon, title, spacing, header }) => {
    return (
        <div
            className="flex justify-center items-center gap-[.4rem] text-xs mx-2"
            style={{ lineHeight: `${spacing.value.lineHeight}rem`, fontSize: `${spacing.value.fontSize - 1}pt` }}
        >
            {header.details === "Icon" && <span>{icon()}</span>}
            {header.details === "Bullet" && <span className="text-xl">•</span>}
            {header.details === "Bar" && <span>|</span>}
            <p>{title}</p>
        </div>
    );
};

const PersonalData = ({ spacing, header, name, job }) => {
    const personalInfoData = useAppSelector((state) => state.persistedReducer.resume.personalInfo);
    const {
        customization: { colors },
    } = useAppSelector((state) => state.persistedReducer.resume);

    useEffect(() => {
        console.log("COLOR VALUE", colors.accentColorValue && "text-" + "[" + _rgbaStringToHex(colors.accentColorValue) + "]");
    }, [colors]);

    return (
        <div className={`relative mt-10 ${HEADER_LAYOUT[header.type]}`}>
            <div className={`${job.position === "same line" && "flex gap-4 flex-wrap items-center justify-center"}`}>
                <h2
                    className={`text-lg ${name.bold && "font-bold"} ${
                        colors.accentColorValue && "text-" + "[" + _rgbaStringToHex(colors.accentColorValue) + "]"
                    }`}
                    style={{
                        lineHeight: `${spacing.value.lineHeight}rem`,
                        fontSize: `${
                            spacing.value.fontSize +
                            5.5 +
                            (name.size === "XS"
                                ? -3
                                : name.size === "S"
                                ? -2
                                : name.size === "M"
                                ? -1
                                : name.size === "L"
                                ? 2
                                : name.size === "XL"
                                ? 3
                                : 0)
                        }pt`,
                        fontFamily: `${name.creativeFont ? name.fontFamily : "Poppins"}`,
                    }}
                >
                    {personalInfoData.fullName}
                </h2>
                <p
                    className={`text-sm mt-2 ${colors.accentColorValue && "text-" + "[" + _rgbaStringToHex(colors.accentColorValue) + "]"}`}
                    style={{
                        lineHeight: `${spacing.value.lineHeight}rem`,
                        fontSize: `${spacing.value.fontSize + 0.5 + (job.size === "S" ? 0 : job.size === "M" ? 1 : 2)}pt`,
                        fontStyle: `${job.style}`,
                    }}
                >
                    {personalInfoData.jobTitle}
                </p>
            </div>
            <div className={`flex flex-wrap items-center my-2  ${HEADER_LAYOUT[header.type]}`}>
                {personalInfoData.email?.length && <Details icon={MdEmail} title={personalInfoData.email} spacing={spacing} header={header} />}
                {personalInfoData.phone?.length && <Details icon={FaPhoneAlt} title={personalInfoData.phone} spacing={spacing} header={header} />}
                {personalInfoData.address?.length && (
                    <Details icon={MdLocationPin} title={personalInfoData.address} spacing={spacing} header={header} />
                )}
                {personalInfoData.links?.github && (
                    <Details icon={BsGithub} title={personalInfoData.links.github} spacing={spacing} header={header} />
                )}
                {personalInfoData.links?.website && (
                    <Details icon={BsGlobe} title={personalInfoData.links.website} spacing={spacing} header={header} />
                )}
                {personalInfoData.links?.linkedin && (
                    <Details icon={FaLinkedinIn} title={personalInfoData.links.linkedin} spacing={spacing} header={header} />
                )}
                {personalInfoData.links?.twitter && (
                    <Details icon={BsTwitter} title={personalInfoData.links.twitter} spacing={spacing} header={header} />
                )}
                {personalInfoData.links?.medium && (
                    <Details icon={BsMedium} title={personalInfoData.links.medium} spacing={spacing} header={header} />
                )}
            </div>
        </div>
    );
};

export default PersonalData;
