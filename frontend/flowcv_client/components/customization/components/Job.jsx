import { useAppSelector } from "@redux/hooks";
import { updateCustomization } from "@redux/resume/features";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Job = () => {
    const { job: storeJob } = useAppSelector((state) => state.persistedReducer.resume.customization);
    const personalInfoData = useAppSelector((state) => state.persistedReducer.resume.personalInfo);

    const dispatch = useDispatch();

    const [job, setJob] = useState({
        size: storeJob.size || "",
        position: storeJob.position || "",
        style: storeJob.style || "",
    });

    const handleCustomization = () => {
        dispatch(updateCustomization({ key: "job", value: job }));
    };

    useEffect(() => {
        handleCustomization();
    }, [job]);

    if (!personalInfoData?.jobTitle) {
        return (
            <>
                <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
                    <h1 className="text-xl font-bold mb-5">Job Title</h1>
                    <div className="text-xs max-w-[30rem]">To see design options, go to your personal details & enter a job title 💼</div>
                </div>
            </>
        );
    }

    return (
        <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
            <h1 className="text-xl font-bold mb-5">Job Title</h1>
            <div>
                <p className="font-semibold text-sm">Size</p>
                <div className="flex gap-4">
                    <div
                        className={`h-[2.4rem] w-[2.4rem] grid place-content-center text-sm border ${
                            job.size === "S" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setJob({ ...job, size: "S" })}
                    >
                        S
                    </div>
                    <div
                        className={`h-[2.4rem] w-[2.4rem] grid place-content-center text-sm border ${
                            job.size === "M" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setJob({ ...job, size: "M" })}
                    >
                        M
                    </div>
                    <div
                        className={`h-[2.4rem] w-[2.4rem] grid place-content-center text-sm border ${
                            job.size === "L" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setJob({ ...job, size: "L" })}
                    >
                        L
                    </div>
                </div>
            </div>
            <div className="my-4">
                <p className="font-semibold text-sm">Position</p>
                <div className="flex gap-4">
                    <div
                        className={`py-2 px-[4rem] text-sm border ${
                            job.position === "same line" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setJob({ ...job, position: "same line" })}
                    >
                        Try same line
                    </div>
                    <div
                        className={`py-2 px-[4rem] text-sm border ${
                            job.position === "below" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setJob({ ...job, position: "below" })}
                    >
                        Below
                    </div>
                </div>
            </div>
            <div className="my-4">
                <p className="font-semibold text-sm">Style</p>
                <div className="flex gap-4">
                    <div
                        className={`py-2 px-[4rem] text-sm border ${
                            job.style === "normal" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setJob({ ...job, style: "normal" })}
                    >
                        Normal
                    </div>
                    <div
                        className={`py-2 px-[4rem] text-sm border ${
                            job.style === "italic" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80 italic`}
                        onClick={() => setJob({ ...job, style: "italic" })}
                    >
                        Italic
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;
