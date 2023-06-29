import React, { useState } from "react";

const Language = () => {
    const [language, setLanguage] = useState({
        type: "",
        level: "",
        separator: "",
    });

    if (!language.type) {
        return (
            <>
                <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
                    <h1 className="text-xl font-bold mb-5">Language</h1>
                    <div className="text-sm max-w-[30rem]">To see design options, add some languages 🗺</div>
                </div>
            </>
        );
    }
    return (
        <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
            <h1 className="text-xl font-bold mb-5">Language</h1>
            <div className="max-w-[30rem]">
                <div>
                    <div className="flex gap-2">
                        <div
                            className={`py-2 px-[2rem] text-sm border  ${
                                language.type === "grid" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setLanguage({ ...language, type: "grid" })}
                        >
                            Grid
                        </div>
                        <div
                            className={`py-2 px-[2rem] text-sm border ${
                                language.type === "level" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setLanguage({ ...language, type: "level" })}
                        >
                            Level
                        </div>
                        <div
                            className={`py-2 px-[2rem] text-sm border ${
                                language.type === "text" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setLanguage({ ...language, type: "text" })}
                        >
                            Text
                        </div>
                        <div
                            className={`py-2 px-[2rem] text-sm border ${
                                language.type === "bubble" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setLanguage({ ...language, type: "bubble" })}
                        >
                            Bubble
                        </div>
                    </div>
                </div>
                {language.type === "level" && (
                    <div>
                        <div className="flex gap-2">
                            <div
                                className={`py-2 px-[2rem] text-sm border  ${
                                    language.level === "dots" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                                } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                                onClick={() => setLanguage({ ...language, level: "dots" })}
                            >
                                Dots
                            </div>
                            <div
                                className={`py-2 px-[2rem] text-sm border ${
                                    language.level === "bar" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                                }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                                onClick={() => setLanguage({ ...language, level: "bar" })}
                            >
                                Bar
                            </div>
                        </div>
                    </div>
                )}
                {language.type === "text" && (
                    <div>
                        <div className="flex gap-2">
                            <div
                                className={`py-2 px-[2rem] text-sm border  ${
                                    language.separator === "bullet" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                                } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                                onClick={() => setLanguage({ ...language, separator: "bullet" })}
                            >
                                Bullet
                            </div>
                            <div
                                className={`py-2 px-[2rem] text-sm border ${
                                    language.separator === "wrap" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                                }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                                onClick={() => setLanguage({ ...language, separator: "wrap" })}
                            >
                                Wrap
                            </div>
                            <div
                                className={`py-2 px-[2rem] text-sm border ${
                                    language.separator === "pipe" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                                }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                                onClick={() => setLanguage({ ...language, separator: "pipe" })}
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

export default Language;
