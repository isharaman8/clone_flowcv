import { useAppSelector } from "@redux/hooks";
import { updateCustomization } from "@redux/resume/features";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Skills = () => {
    const {
        customization: { skills: storeSkills },
        skills: reduxDataSkills,
    } = useAppSelector((state) => state.persistedReducer.resume);

    const dispatch = useDispatch();

    const [skills, setSkills] = useState({
        type: storeSkills.type || "",
        level: storeSkills.level || "",
        separator: storeSkills.separator || "",
    });

    const handleCustomization = () => {
        dispatch(updateCustomization({ key: "skills", value: skills }));
    };

    useEffect(() => {
        handleCustomization();
    }, [skills]);

    if (!reduxDataSkills.length) {
        return (
            <>
                <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
                    <h1 className="text-xl font-bold mb-5">Skills</h1>
                    <div className="text-sm max-w-[30rem]">To see design options, add some skills 💪</div>
                </div>
            </>
        );
    }
    return (
        <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
            <h1 className="text-xl font-bold mb-5">Skills</h1>
            <div className="w-[19rem] sm:w-[30rem]">
                <div>
                    <div className="flex gap-2 flex-wrap">
                        <div
                            className={`py-2 px-[1.4rem] sm:px-[2rem] text-sm border  ${
                                skills.type === "grid" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setSkills({ ...skills, type: "grid", separator: null, level: null })}
                        >
                            Grid
                        </div>
                        <div
                            className={`py-2 px-[1.4rem] sm:px-[2rem] text-sm border ${
                                skills.type === "level" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setSkills({ ...skills, type: "level", separator: null, level: null })}
                        >
                            Level
                        </div>
                        <div
                            className={`py-2 px-[1.4rem] sm:px-[2rem] text-sm border ${
                                skills.type === "text" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setSkills({ ...skills, type: "text", separator: null, level: null })}
                        >
                            Text
                        </div>
                        <div
                            className={`py-2 px-[1.4rem] sm:px-[2rem] text-sm border ${
                                skills.type === "bubble" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setSkills({ ...skills, type: "bubble", separator: null, level: null })}
                        >
                            Bubble
                        </div>
                    </div>
                </div>
                {skills.type === "level" && (
                    <div>
                        <div className="flex gap-2 flex-wrap">
                            <div
                                className={`py-2 px-[1.4rem] sm:px-[2rem] text-sm border  ${
                                    skills.level === "dots" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                                } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                                onClick={() => setSkills({ ...skills, level: "dots" })}
                            >
                                Dots
                            </div>
                            <div
                                className={`py-2 px-[1.4rem] sm:px-[2rem] text-sm border ${
                                    skills.level === "bar" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                                }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                                onClick={() => setSkills({ ...skills, level: "bar" })}
                            >
                                Bar
                            </div>
                        </div>
                    </div>
                )}
                {skills.type === "text" && (
                    <div>
                        <div className="flex gap-2 flex-wrap">
                            <div
                                className={`py-2 px-[1.4rem] sm:px-[2rem] text-sm border  ${
                                    skills.separator === "bullet" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                                } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                                onClick={() => setSkills({ ...skills, separator: "bullet" })}
                            >
                                Bullet
                            </div>
                            <div
                                className={`py-2 px-[1.4rem] sm:px-[2rem] text-sm border ${
                                    skills.separator === "wrap" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                                }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                                onClick={() => setSkills({ ...skills, separator: "wrap" })}
                            >
                                Wrap
                            </div>
                            <div
                                className={`py-2 px-[1.4rem] sm:px-[2rem] text-sm border ${
                                    skills.separator === "pipe" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                                }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                                onClick={() => setSkills({ ...skills, separator: "pipe" })}
                            >
                                Pipe
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Skills;
