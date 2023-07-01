import { useAppSelector } from "@redux/hooks";
import { updateCustomization } from "@redux/resume/features";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Language = () => {
    const {
        customization: { language: storeLanguage },
        languages: languageReduxData,
    } = useAppSelector((state) => state.persistedReducer.resume);

    const dispatch = useDispatch();

    const [language, setLanguage] = useState({
        type: storeLanguage.type || "",
        level: storeLanguage.level || "",
        separator: storeLanguage.separator || "",
    });

    const handleCustomization = () => {
        dispatch(updateCustomization({ key: "language", value: language }));
    };

    useEffect(() => {
        handleCustomization();
    }, [language]);

    if (!languageReduxData.length) {
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
                            onClick={() => setLanguage({ ...language, type: "grid", separator: null, level: null })}
                        >
                            Grid
                        </div>
                        <div
                            className={`py-2 px-[2rem] text-sm border ${
                                language.type === "level" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setLanguage({ ...language, type: "level", separator: null, level: null })}
                        >
                            Level
                        </div>
                        <div
                            className={`py-2 px-[2rem] text-sm border ${
                                language.type === "text" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setLanguage({ ...language, type: "text", separator: null, level: null })}
                        >
                            Text
                        </div>
                        <div
                            className={`py-2 px-[2rem] text-sm border ${
                                language.type === "bubble" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setLanguage({ ...language, type: "bubble", separator: null, level: null })}
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
