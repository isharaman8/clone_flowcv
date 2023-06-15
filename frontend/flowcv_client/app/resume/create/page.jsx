"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { AVAILABLE_COMPONENTS } from "@utils/Constants";
import Skills from "@components/ResumeComponents/Skills";
import Language from "@components/ResumeComponents/Language";
import Interest from "@components/ResumeComponents/Interests";
import AddContent from "@components/ResumeComponents/AddContent";
import Certificate from "@components/ResumeComponents/Certificate";
import ProjectComponent from "@components/ResumeComponents/Project";
import PersonalInfo from "@components/ResumeComponents/PersonalInfo";
import ProfessionalExperience from "@components/ResumeComponents/ProfessionalExpAndEducation";

// import { optimizeFonts } from "@next.config";

const CreateResume = () => {
    const [addContent, setAddContent] = useState(false);
    const [currentComponent, setCurrentComponent] = useState("personalInfo");

    const handleCurrentComponent = (e) => {
        setCurrentComponent(e.title);
        setAddContent(false);
    };

    useEffect(() => {
        console.log(currentComponent);
        console.log(currentComponent === AVAILABLE_COMPONENTS.project);
    }, [currentComponent]);

    return (
        <div className="min-h-[90vh] w-[100vw] flex gap-5 relative bg-[#EEF0F4] px-10">
            {/* left */}
            <div className="flex grow items-start gap-8 relative">
                {/* left */}
                <div className="grow-0 sticky top-8 z-[10000] flex flex-col items-center justify-center gap-10 p-5 rounded-xl shadow-lg bg-gray-50">
                    <Link href={"/"}>
                        <img src="/flowcv.svg" alt="flow cv" className="w-16" />
                    </Link>
                    <div className="flex flex-col justify-center items-center">
                        <img src="/content.svg" alt="content" className="w-10" />
                        <p>Content</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src="/customize.svg" alt="customize" className="w-10" />
                        <p>Customize</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src="/links.svg" alt="links" className="w-10" />
                        <p>Links</p>
                    </div>
                </div>

                {/* right */}
                <div className="flex grow flex-col  justify-center items-stretch gap-4">
                    <div className="sticky top-0 rounded-b-lg pt-[2rem] bg-[#EEF0F4] z-[6] mb-6 w-full shadow-sm">
                        <div className="sticky top-8 z-[1000]  grid max-w-full grid-cols-[min-content_1fr_min-content] items-center bg-gray-50 px-6 py-3 md:px-8 md:py-4  lg:px-9 lg:py-5 rounded-xl shadow-lg">
                            <a className="sidebar:hidden mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 hover:cursor-pointer hover:opacity-80">
                                <img src="/arrow.svg" className="w-6" />
                            </a>
                            <div className="min-w-0">
                                <div className="flex w-full cursor-pointer items-center space-x-2 pr-4 hover:opacity-80">
                                    <p className="text-black truncate text-2xl font-extrabold">Resume No. 1</p>
                                    <button
                                        type="button"
                                        className="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 min-h-[30px] min-w-[30px] text-gray-400"
                                    >
                                        <img src="/edit.svg" className="w-5" />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 min-h-[30px] min-w-[30px] text-white bg-black h-12 w-12 rounded-full md:hidden"
                                >
                                    <img src="/download.svg" />
                                </button>
                                <button
                                    type="button"
                                    className="border-none cursor-pointer appearance-none touch-manipulation items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 px-7 py-2 rounded-full font-extrabold h-10 text-[15px] min-w-[120px] text-white bg-black hidden md:flex"
                                >
                                    Download
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* resume components */}
                    <div className="w-full max-w-[800px] pb-16">
                        {currentComponent === AVAILABLE_COMPONENTS.personalInfo && <PersonalInfo setCurrentComponent={setCurrentComponent} />}
                        {currentComponent === AVAILABLE_COMPONENTS.skill && <Skills setCurrentComponent={setCurrentComponent} />}
                        {currentComponent === AVAILABLE_COMPONENTS.language && <Language setCurrentComponent={setCurrentComponent} />}
                        {currentComponent === AVAILABLE_COMPONENTS.interests && <Interest setCurrentComponent={setCurrentComponent} />}
                        {currentComponent === AVAILABLE_COMPONENTS.project && <ProjectComponent setCurrentComponent={setCurrentComponent} />}
                        {currentComponent === AVAILABLE_COMPONENTS.certificate && <Certificate setCurrentComponent={setCurrentComponent} />}
                        {currentComponent === AVAILABLE_COMPONENTS.professionalExperience && (
                            <ProfessionalExperience
                                setCurrentComponent={setCurrentComponent}
                                mainHeading={"Create Professional Experience"}
                                subOne={"Employer"}
                                subTwo={"Job Title"}
                            />
                        )}
                        {currentComponent === AVAILABLE_COMPONENTS.education && (
                            <ProfessionalExperience
                                setCurrentComponent={setCurrentComponent}
                                mainHeading={"Create Education"}
                                subOne={"School"}
                                subTwo={"Degree"}
                            />
                        )}
                        {currentComponent === AVAILABLE_COMPONENTS.course && (
                            <ProfessionalExperience
                                setCurrentComponent={setCurrentComponent}
                                mainHeading={"Create Course"}
                                subOne={"Course title"}
                                subTwo={"Institution"}
                            />
                        )}
                    </div>
                    {currentComponent === "personalInfo" && (
                        <div className="flex justify-center">
                            <button
                                className="mt-8 flex gradient border-none cursor-pointer appearance-none touch-manipulation items-center justify-center outline-none hover:scale-105 transition-transform shadow-md rounded-full font-extrabold h-15 text-[17px] min-w-[180px] text-white bg-gradient-to-r from-brandPink to-brandRed py-4 px-[4rem]"
                                onClick={() => setAddContent(true)}
                            >
                                <AiOutlinePlus className="text-3xl mr-2" />
                                Add Content
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* right */}
            <div className="grow-[4] bg-white h-10 sticky top-8"></div>
            {addContent && <AddContent setAddContent={setAddContent} handleCurrentComponent={handleCurrentComponent} />}
        </div>
    );
};

export default CreateResume;

// , certificate, education, course
