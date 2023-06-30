import { useAppSelector } from "@redux/hooks";
import { updateCustomization } from "@redux/resume/features";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const ProfessionalExperience = () => {
    const { professionalExperience: storeExperience } = useAppSelector((state) => state.persistedReducer.resume.customization);

    const dispatch = useDispatch();

    const [experience, setExperience] = useState({
        type: storeExperience.type || "",
    });

    const handleCustomization = () => {
        dispatch(updateCustomization({ key: "experience", value: experience }));
    };

    useEffect(() => {
        handleCustomization();
    }, [experience]);

    if (!experience.type) {
        return (
            <>
                <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
                    <h1 className="text-xl font-bold mb-5">Professional Experience</h1>
                    <div className="text-sm max-w-[30rem]">To see design options, add a professional experience entry 💼</div>
                </div>
            </>
        );
    }
    return (
        <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
            <h1 className="text-xl font-bold mb-5">Professional Experience</h1>
            <div>
                <div className="flex gap-2">
                    <div
                        className={`py-2 px-[2.4rem] text-sm border  ${
                            experience.type === "Job title - Employer" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setExperience({ ...experience, type: "Job title - Employer" })}
                    >
                        Job title - Employer
                    </div>

                    <div
                        className={`py-2 px-[2.4rem] text-sm border ${
                            experience.type === "Employer - Job title" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setExperience({ ...experience, type: "Employer - Job title" })}
                    >
                        Employer - Job title
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalExperience;
