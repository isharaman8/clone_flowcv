import React, { useState } from "react";

const Skills = () => {
    const [skills, setSkills] = useState({
        type: "",
        level: "",
        separator: "",
    });

    if (!skills.type) {
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
            <div className="max-w-[30rem]">
                <div>
                    <div className="flex gap-2">
                        <div
                            className={`py-2 px-[2rem] text-sm border  ${
                                skills.type === "grid" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setSkills({ ...skills, type: "grid" })}
                        >
                            Grid
                        </div>
                        <div
                            className={`py-2 px-[2rem] text-sm border ${
                                skills.type === "level" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setSkills({ ...skills, type: "level" })}
                        >
                            Level
                        </div>
                        <div
                            className={`py-2 px-[2rem] text-sm border ${
                                skills.type === "text" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setSkills({ ...skills, type: "text" })}
                        >
                            Text
                        </div>
                        <div
                            className={`py-2 px-[2rem] text-sm border ${
                                skills.type === "bubble" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setSkills({ ...skills, type: "bubble" })}
                        >
                            Bubble
                        </div>
                    </div>
                </div>
                {skills.type === "level" && (
                    <div>
                        <div className="flex gap-2">
                            <div
                                className={`py-2 px-[2rem] text-sm border  ${
                                    skills.level === "dots" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                                } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                                onClick={() => setSkills({ ...skills, level: "dots" })}
                            >
                                Dots
                            </div>
                            <div
                                className={`py-2 px-[2rem] text-sm border ${
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
                        <div className="flex gap-2">
                            <div
                                className={`py-2 px-[2rem] text-sm border  ${
                                    skills.separator === "bullet" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                                } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                                onClick={() => setSkills({ ...skills, separator: "bullet" })}
                            >
                                Bullet
                            </div>
                            <div
                                className={`py-2 px-[2rem] text-sm border ${
                                    skills.separator === "wrap" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                                }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                                onClick={() => setSkills({ ...skills, separator: "wrap" })}
                            >
                                Wrap
                            </div>
                            <div
                                className={`py-2 px-[2rem] text-sm border ${
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
