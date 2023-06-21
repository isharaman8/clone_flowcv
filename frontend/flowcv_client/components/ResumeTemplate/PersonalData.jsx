import { useAppSelector } from "@redux/hooks";
import React from "react";
import { BsGithub, BsGlobe, BsMedium, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";

const Details = ({ icon, title }) => {
    return (
        <div className="flex justify-center items-center gap-[.4rem] text-xs mx-2 my-1">
            <span>{icon()}</span>
            <p>{title}</p>
        </div>
    );
};

const PersonalData = () => {
    const personalInfoData = useAppSelector((state) => state.persistedReducer.resume.personalInfo);
    return (
        <div className="relative mt-10 text-center">
            <h2 className="font-bold text-lg">{personalInfoData.fullName}</h2>
            <p className="text-sm">{personalInfoData.jobTitle}</p>
            <div className="flex flex-wrap items-center justify-center my-2">
                {personalInfoData.email?.length && <Details icon={MdEmail} title={personalInfoData.email} />}
                {personalInfoData.phone?.length && <Details icon={FaPhoneAlt} title={personalInfoData.phone} />}
                {personalInfoData.address?.length && <Details icon={MdLocationPin} title={personalInfoData.address} />}
                {personalInfoData.links?.github && <Details icon={BsGithub} title={personalInfoData.links.github} />}
                {personalInfoData.links?.website && <Details icon={BsGlobe} title={personalInfoData.links.website} />}
                {personalInfoData.links?.linkedin && <Details icon={FaLinkedinIn} title={personalInfoData.links.linkedin} />}
                {personalInfoData.links?.twitter && <Details icon={BsTwitter} title={personalInfoData.links.twitter} />}
                {personalInfoData.links?.medium && <Details icon={BsMedium} title={personalInfoData.links.medium} />}
            </div>
        </div>
    );
};

export default PersonalData;
