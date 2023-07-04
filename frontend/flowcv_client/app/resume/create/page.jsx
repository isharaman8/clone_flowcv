"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { useAppSelector } from "@redux/hooks";
import { _camelize } from "../../../utils/helpers";
import { AVAILABLE_COMPONENTS } from "@utils/Constants";
import Skills from "@components/ResumeComponents/Skills";
import Language from "@components/ResumeComponents/Language";
import Interest from "@components/ResumeComponents/Interests";
import { setEditObj, setPrevObj } from "@redux/resume/features";
import AddContent from "@components/ResumeComponents/AddContent";
import Certificate from "@components/ResumeComponents/Certificate";
import ProjectComponent from "@components/ResumeComponents/Project";
import PersonalInfo from "@components/ResumeComponents/PersonalInfo";
import ProfessionalExperience from "@components/ResumeComponents/ProfessionalExpAndEducation";
import DropDownComp from "@components/ResumeComponents/minicomponents/DropDownComp/DropDownComp";
import PersonalData from "@components/ResumeTemplate/PersonalData";
import Education from "@components/ResumeTemplate/EducationCoursesAndExp";
import SkillsComponent from "@components/ResumeTemplate/Skills";
import Languages from "@components/ResumeTemplate/Languages";
import Certificates from "@components/ResumeTemplate/Certificates";
import InterestComponent from "@components/ResumeTemplate/InterestComponent";
import Projects from "@components/ResumeTemplate/Projects";
import Customization from "@components/customization/Customization";

const CreateResume = () => {
    const [addContent, setAddContent] = useState(false);
    const [currentComponent, setCurrentComponent] = useState(AVAILABLE_COMPONENTS.project);

    const resumeData = useAppSelector((state) => state.persistedReducer.resume);

    console.log("CUSTOMIZATION OBJ", resumeData.customization.layout.contentArrangement);

    const dispatch = useDispatch();

    const handleCurrentComponent = (e) => {
        setCurrentComponent(e.title);

        console.log("TITLE", e.title);

        setAddContent(false);
    };

    const currentComponentWrapper = (value) => {
        return () => {
            setCurrentComponent(value);
        };
    };

    const handleEditObj = (key, value) => {
        console.log("KEY", key);
        console.log("VLAUE", value);

        dispatch(setEditObj({ key, value }));
        dispatch(setPrevObj({ key, value: null }));
    };

    useEffect(() => {
        console.log("RESUME DATA", resumeData);
    }, []);

    return (
        <div className="min-h-[90vh] w-[100vw] flex gap-5 relative bg-[#EEF0F4] px-10">
            {/* left */}
            <div className="flex grow items-start gap-8 relative">
                {/* left */}
                <div className="grow-0 sticky top-8 z-[10000] flex flex-col items-center justify-center gap-10 px-2 py-5 rounded-xl shadow-lg bg-gray-50">
                    <Link href={"/"}>
                        <img src="/flowcv.svg" alt="flow cv" className="w-16" />
                    </Link>
                    <div
                        className={`flex flex-col px-4 py-3 justify-center items-center cursor-pointer rounded-xl ${
                            currentComponent === AVAILABLE_COMPONENTS.personalInfo ? "text-[#FC7E88] bg-gray-100" : ""
                        }`}
                        onClick={() => setCurrentComponent(AVAILABLE_COMPONENTS.personalInfo)}
                    >
                        <img
                            src={currentComponent === AVAILABLE_COMPONENTS.personalInfo ? "/content.svg" : "/content1.svg"}
                            alt="content"
                            className="w-10"
                        />
                        <p>Content</p>
                    </div>
                    <div
                        className={`flex flex-col px-4 py-3 justify-center items-center cursor-pointer rounded-xl ${
                            currentComponent === "CUSTOMIZE" ? "text-[#FC7E88] bg-gray-100" : ""
                        } `}
                        onClick={() => setCurrentComponent("CUSTOMIZE")}
                    >
                        <img src={currentComponent === "CUSTOMIZE" ? "/customize1.svg" : "/customize.svg"} alt="customize" className="w-10" />
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
                        {currentComponent === AVAILABLE_COMPONENTS.skill && <Skills setCurrentComponent={setCurrentComponent} />}
                        {currentComponent === "CUSTOMIZE" && <Customization setCurrentComponent={setCurrentComponent} />}
                        {currentComponent === AVAILABLE_COMPONENTS.language && <Language setCurrentComponent={setCurrentComponent} />}
                        {currentComponent === AVAILABLE_COMPONENTS.interests && <Interest setCurrentComponent={setCurrentComponent} />}
                        {currentComponent === AVAILABLE_COMPONENTS.certificate && <Certificate setCurrentComponent={setCurrentComponent} />}
                        {currentComponent === AVAILABLE_COMPONENTS.project && <ProjectComponent setCurrentComponent={setCurrentComponent} />}
                        {currentComponent === AVAILABLE_COMPONENTS.personalInfo && <PersonalInfo setCurrentComponent={setCurrentComponent} />}
                        {currentComponent === AVAILABLE_COMPONENTS.professionalExperience && (
                            <ProfessionalExperience
                                setCurrentComponent={setCurrentComponent}
                                mainHeading={"Create Professional Experience"}
                                subOne={"employer"}
                                subTwo={"jobTitle"}
                            />
                        )}
                        {currentComponent === AVAILABLE_COMPONENTS.education && (
                            <ProfessionalExperience
                                setCurrentComponent={setCurrentComponent}
                                mainHeading={"Create Education"}
                                subOne={"school"}
                                subTwo={"degree"}
                            />
                        )}
                        {currentComponent === AVAILABLE_COMPONENTS.course && (
                            <ProfessionalExperience
                                setCurrentComponent={setCurrentComponent}
                                mainHeading={"Create Course"}
                                subOne={"courseTitle"}
                                subTwo={"institution"}
                            />
                        )}

                        {/* LIST WISE DROPDOWN */}
                        {currentComponent === "personalInfo" && (resumeData.professionalExperience || []).length > 0 && (
                            <DropDownComp
                                list={resumeData.professionalExperience.map((c) => ({ ...c, name: c.jobTitle }))}
                                title={_camelize("Professional Experience")}
                                handleClick={currentComponentWrapper(AVAILABLE_COMPONENTS.professionalExperience)}
                                handleEditObj={handleEditObj}
                            />
                        )}
                        {currentComponent === "personalInfo" && (resumeData.skills.length || []) > 0 && (
                            <DropDownComp
                                list={resumeData.skills.map((c) => ({ ...c, name: c.skill }))}
                                handleClick={currentComponentWrapper(AVAILABLE_COMPONENTS.skill)}
                                title={_camelize("Skills")}
                                handleEditObj={handleEditObj}
                            />
                        )}
                        {currentComponent === "personalInfo" && (resumeData.languages || []).length > 0 && (
                            <DropDownComp
                                list={resumeData.languages.map((c) => ({ ...c, name: c.language }))}
                                handleClick={currentComponentWrapper(AVAILABLE_COMPONENTS.language)}
                                title={"Languages"}
                                handleEditObj={handleEditObj}
                            />
                        )}
                        {currentComponent === "personalInfo" && (resumeData.projects || []).length > 0 && (
                            <DropDownComp
                                list={resumeData.projects.map((c) => ({ ...c, name: c.title }))}
                                handleClick={currentComponentWrapper(AVAILABLE_COMPONENTS.project)}
                                title={"Projects"}
                                handleEditObj={handleEditObj}
                            />
                        )}
                        {currentComponent === "personalInfo" && (resumeData.interests || []).length > 0 && (
                            <DropDownComp
                                list={resumeData.interests.map((c) => ({ ...c, name: c.interest }))}
                                handleClick={currentComponentWrapper(AVAILABLE_COMPONENTS.interests)}
                                title={"Interests"}
                                handleEditObj={handleEditObj}
                            />
                        )}
                        {currentComponent === "personalInfo" && (resumeData.certificates || []).length > 0 && (
                            <DropDownComp
                                list={resumeData.certificates.map((c) => ({ ...c, name: c.certificate }))}
                                handleClick={currentComponentWrapper(AVAILABLE_COMPONENTS.certificate)}
                                title={"Certificates"}
                                handleEditObj={handleEditObj}
                            />
                        )}
                        {currentComponent === "personalInfo" && (resumeData.education || []).length > 0 && (
                            <DropDownComp
                                list={resumeData.education.map((c) => ({ ...c, name: c.degree }))}
                                handleClick={currentComponentWrapper(AVAILABLE_COMPONENTS.education)}
                                title={"Education"}
                                handleEditObj={handleEditObj}
                            />
                        )}
                        {currentComponent === "personalInfo" && (resumeData.courses || []).length > 0 && (
                            <DropDownComp
                                list={resumeData.courses.map((c) => ({ ...c, name: c.courseTitle }))}
                                handleClick={currentComponentWrapper(AVAILABLE_COMPONENTS.course)}
                                title={"Courses"}
                                handleEditObj={handleEditObj}
                            />
                        )}
                    </div>
                    {currentComponent === "personalInfo" && (
                        <div className="flex justify-center mb-10">
                            <button
                                className="mt-8  flex gradient border-none cursor-pointer appearance-none touch-manipulation items-center justify-center outline-none hover:scale-105 transition-transform shadow-md rounded-full font-extrabold h-15 text-[17px] min-w-[180px] text-white bg-gradient-to-r from-brandPink to-brandRed py-4 px-[4rem]"
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
            <div className="grow-[4] bg-white h-screen my-[2rem] w-1/4 px-[3rem] overflow-hidden break-words sticky top-8">
                <div>
                    {resumeData.customization.layout.columnsArrangement.left.map((data) => {
                        switch (data.title) {
                            case "Personal Info":
                                return <PersonalData />;

                            case "Certificates":
                                return <Certificates />;

                            case "Skills":
                                return <SkillsComponent />;

                            case "Courses":
                                return <Education currentComponent="courses" />;

                            case "Projects":
                                return <Projects />;

                            case "Languages":
                                return <Languages />;

                            case "Professional Experience":
                                return <Education currentComponent={"professional Experience"} />;

                            case "Interests":
                                return <InterestComponent />;

                            case "Education":
                                return <Education currentComponent="education" />;
                        }
                    })}
                </div>

                <div>
                    {resumeData.customization.layout.columnsArrangement.right.map((data) => {
                        switch (data.title) {
                            case "Personal Info":
                                return <PersonalData />;

                            case "Certificates":
                                return <Certificates />;

                            case "Skills":
                                return <SkillsComponent />;

                            case "Courses":
                                return <Education currentComponent="courses" />;

                            case "Projects":
                                return <Projects />;

                            case "Languages":
                                return <Languages />;

                            case "Professional Experience":
                                return <Education currentComponent={"professional Experience"} />;

                            case "Interests":
                                return <InterestComponent />;

                            case "Education":
                                return <Education currentComponent="education" />;
                        }
                    })}

                    {/*

                <Education currentComponent={"education"} />
                <Education currentComponent={"professional Experience"} />
                <Education currentComponent={"courses"} />
                <SkillsComponent />
                <Languages />
                <Certificates />
                <InterestComponent />
                <Projects />

                */}
                </div>
            </div>
            {addContent && <AddContent setAddContent={setAddContent} handleCurrentComponent={handleCurrentComponent} />}
        </div>
    );
};

export default CreateResume;

// , certificate, education, course
