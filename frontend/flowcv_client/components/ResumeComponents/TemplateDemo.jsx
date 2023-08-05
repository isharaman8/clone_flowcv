import { _camelize } from "@utils/helpers";
import { COLUMN_LAYOUT } from "@utils/Constants";
import PersonalData from "@components/ResumeTemplate/PersonalData";
import Education from "@components/ResumeTemplate/EducationCoursesAndExp";
import SkillsComponent from "@components/ResumeTemplate/Skills";
import Languages from "@components/ResumeTemplate/Languages";
import Certificates from "@components/ResumeTemplate/Certificates";
import InterestComponent from "@components/ResumeTemplate/InterestComponent";
import Projects from "@components/ResumeTemplate/Projects";

const TemplateDemo = ({ resumeData }) => {
    const { layout, spacing, heading, header, name, footer, job, date, skills, language, interest, certificate, education, professionalExperience } =
        resumeData.customization || {};

    const personalInfo = resumeData.personalInfo;
    return (
        <div className="relative w-full min-h-screen h-full pb-[3rem]">
            {layout.direction === "top" || !layout.direction ? (
                <div style={{ display: "flex", flexDirection: "column", rowGap: `${spacing.value.spaceBtwEntries}px` }}>
                    <PersonalData job={job} name={name} header={header} spacing={spacing} />
                    {layout.columns === 1 ? (
                        <>
                            <Education education={education} date={date} spacing={spacing} heading={heading} currentComponent={"education"} />
                            <Education
                                professionalExperience={professionalExperience}
                                date={date}
                                spacing={spacing}
                                heading={heading}
                                currentComponent={"professional Experience"}
                            />
                            <Education date={date} spacing={spacing} heading={heading} currentComponent={"courses"} />
                            <SkillsComponent skills={skills} spacing={spacing} heading={heading} />
                            <Languages language={language} spacing={spacing} heading={heading} />
                            <Certificates certificate={certificate} spacing={spacing} heading={heading} />
                            <InterestComponent interest={interest} spacing={spacing} heading={heading} />
                            <Projects date={date} spacing={spacing} heading={heading} />
                        </>
                    ) : (
                        <>
                            <div className={`flex gap-4`}>
                                <div className="w-1/2">
                                    <Education education={education} date={date} spacing={spacing} heading={heading} currentComponent={"education"} />
                                    <Education
                                        professionalExperience={professionalExperience}
                                        date={date}
                                        spacing={spacing}
                                        heading={heading}
                                        currentComponent={"professional Experience"}
                                    />
                                    <Education date={date} spacing={spacing} heading={heading} currentComponent={"courses"} />
                                    <SkillsComponent skills={skills} spacing={spacing} heading={heading} />
                                </div>
                                <div className="w-1/2">
                                    <Languages language={language} spacing={spacing} heading={heading} />
                                    <Certificates certificate={certificate} spacing={spacing} heading={heading} />
                                    <InterestComponent interest={interest} spacing={spacing} heading={heading} />
                                    <Projects date={date} spacing={spacing} heading={heading} />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            ) : (
                <>
                    {layout.columns === 2 && (
                        <div className={`${COLUMN_LAYOUT.layout[layout.direction]}`}>
                            <div
                                style={{
                                    width: `${layout.columnWidth.left}%`,
                                    display: "flex",
                                    flexDirection: "column",
                                    rowGap: `${spacing.value.spaceBtwEntries}px`,
                                }}
                            >
                                {layout.direction === "left" && <PersonalData job={job} name={name} header={header} spacing={spacing} />}
                                <Education education={education} date={date} spacing={spacing} currentComponent={"education"} heading={heading} />
                                <Education
                                    professionalExperience={professionalExperience}
                                    date={date}
                                    spacing={spacing}
                                    currentComponent={"professional Experience"}
                                    heading={heading}
                                />
                                <Education date={date} spacing={spacing} currentComponent={"courses"} heading={heading} />
                                <SkillsComponent skills={skills} spacing={spacing} heading={heading} />
                            </div>
                            <div
                                style={{
                                    width: `${layout.columnWidth.right}%`,
                                    display: "flex",
                                    flexDirection: "column",
                                    rowGap: `${spacing.value.spaceBtwEntries}px`,
                                }}
                            >
                                {layout.direction === "right" && <PersonalData job={job} name={name} header={header} spacing={spacing} />}
                                <Languages language={language} spacing={spacing} heading={heading} />
                                <Certificates certificate={certificate} spacing={spacing} heading={heading} />
                                <InterestComponent interest={interest} spacing={spacing} heading={heading} />
                                <Projects date={date} spacing={spacing} heading={heading} />
                            </div>
                        </div>
                    )}
                    {layout.columns === 1 && (
                        <div style={{ display: "flex", flexDirection: "column", rowGap: `${spacing.value.spaceBtwEntries}px` }}>
                            <div className={`${layout.direction === "left" ? "flex gap-2" : "flex justify-end"}`}>
                                <div style={{ width: `${layout.columnWidth.left}%` }}>
                                    {layout.direction === "left" && <PersonalData job={job} name={name} header={header} spacing={spacing} />}
                                </div>
                                <div style={{ width: `${layout.columnWidth.right}%` }}>
                                    {layout.direction === "right" && <PersonalData job={job} name={name} header={header} spacing={spacing} />}
                                </div>
                            </div>
                            <Education education={education} date={date} spacing={spacing} currentComponent={"education"} heading={heading} />
                            <Education
                                professionalExperience={professionalExperience}
                                date={date}
                                spacing={spacing}
                                currentComponent={"professional Experience"}
                                heading={heading}
                            />
                            <Education date={date} spacing={spacing} currentComponent={"courses"} heading={heading} />
                            <SkillsComponent skills={skills} spacing={spacing} heading={heading} />
                            <Languages language={language} spacing={spacing} heading={heading} />
                            <Certificates certificate={certificate} spacing={spacing} heading={heading} />
                            <InterestComponent interest={interest} spacing={spacing} heading={heading} />
                            <Projects date={date} spacing={spacing} heading={heading} />
                        </div>
                    )}
                </>
            )}
            {(footer.name || footer.page || footer.email) && (
                <div className="absolute bottom-4 w-full flex items-center text-[.6rem] text-gray-600 justify-between ">
                    <div>{footer.name && personalInfo?.fullName}</div>
                    <div>{footer.email && personalInfo?.email}</div>
                    <div>{footer.page && "1/1"}</div>
                </div>
            )}
        </div>
    );
};

export default TemplateDemo;
