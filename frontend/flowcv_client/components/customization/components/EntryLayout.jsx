import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";

import { useAppSelector } from "@redux/hooks";
import { updateCustomization } from "@redux/resume/features";

const EntryLayout = () => {
    const { entryLayout: storeEntryLayout } = useAppSelector((state) => state.persistedReducer.resume.customization);

    const dispatch = useDispatch();

    const [entryLayout, setEntryLayout] = useState({
        size: storeEntryLayout.size || "",
        subtitleStyle: storeEntryLayout.subtitleStyle || "",
        subtitlePlacement: storeEntryLayout.subtitlePlacement || "",
        listStyle: storeEntryLayout.listStyle || "",
    });

    const handleCustomization = () => {
        dispatch(updateCustomization({ key: "entryLayout", value: entryLayout }));
    };

    useEffect(() => {
        handleCustomization();
    }, [entryLayout]);

    return (
        <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
            <h1 className="text-xl font-bold mb-5">Entry Layout</h1>
            <div className="max-w-[30rem]">
                <div>
                    <p className="font-semibold text-sm">Title & subtitle size</p>
                    <div className="flex gap-4">
                        <div
                            className={`h-[2.4rem] w-[2.4rem] grid place-content-center text-sm border ${
                                entryLayout.size === "S" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setEntryLayout({ ...entryLayout, size: "S" })}
                        >
                            S
                        </div>
                        <div
                            className={`h-[2.4rem] w-[2.4rem] grid place-content-center text-sm border ${
                                entryLayout.size === "M" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setEntryLayout({ ...entryLayout, size: "M" })}
                        >
                            M
                        </div>
                        <div
                            className={`h-[2.4rem] w-[2.4rem] grid place-content-center text-sm border ${
                                entryLayout.size === "L" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setEntryLayout({ ...entryLayout, size: "L" })}
                        >
                            L
                        </div>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-sm mt-4">Subtitle style</p>
                    <div className="flex gap-2">
                        <div
                            className={`py-2 px-[4rem] text-sm border  ${
                                entryLayout.subtitleStyle === "Normal" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setEntryLayout({ ...entryLayout, subtitleStyle: "Normal" })}
                        >
                            Normal
                        </div>
                        <div
                            className={`py-2 px-[4rem] text-sm border ${
                                entryLayout.subtitleStyle === "Bold" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80 font-bold`}
                            onClick={() => setEntryLayout({ ...entryLayout, subtitleStyle: "Bold" })}
                        >
                            Bold
                        </div>
                        <div
                            className={`py-2 px-[4rem] text-sm border ${
                                entryLayout.subtitleStyle === "Italic" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80 italic`}
                            onClick={() => setEntryLayout({ ...entryLayout, subtitleStyle: "Italic" })}
                        >
                            Italic
                        </div>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-sm mt-4">Subtitle placement</p>
                    <div className="flex gap-2">
                        <div
                            className={`py-2 px-[4rem] text-sm border  ${
                                entryLayout.subtitlePlacement === "same line" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setEntryLayout({ ...entryLayout, subtitlePlacement: "same line" })}
                        >
                            Try Same Line
                        </div>
                        <div
                            className={`py-2 px-[4rem] text-sm border ${
                                entryLayout.subtitlePlacement === "next line" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setEntryLayout({ ...entryLayout, subtitlePlacement: "next line" })}
                        >
                            Next Line
                        </div>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-sm mt-4">List Style</p>
                    <div className="flex gap-2">
                        <div
                            className={`py-2 px-[4rem] text-sm border  ${
                                entryLayout.listStyle === "bullet" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setEntryLayout({ ...entryLayout, listStyle: "bullet" })}
                        >
                            • bullet
                        </div>
                        <div
                            className={`py-2 px-[4rem] text-sm border ${
                                entryLayout.listStyle === "hyphen" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setEntryLayout({ ...entryLayout, listStyle: "hyphen" })}
                        >
                            - hyphen
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EntryLayout;
