import { useAppSelector } from "@redux/hooks";
import { updateCustomization } from "@redux/resume/features";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Education = () => {
    const {
        customization: { education: storeEducation },
        education: educationReduxData,
    } = useAppSelector((state) => state.persistedReducer.resume);

    const dispatch = useDispatch();

    const [education, setEducation] = useState({
        type: storeEducation.type || "",
    });

    const handleCustomization = () => {
        dispatch(updateCustomization({ key: "education", value: education }));
    };

    useEffect(() => {
        handleCustomization();
    }, [education]);

    if (!educationReduxData.length) {
        return (
            <>
                <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
                    <h1 className="text-xl font-bold mb-5">Education</h1>
                    <div className="text-sm max-w-[30rem]">To see design options, add an education entry 📚</div>
                </div>
            </>
        );
    }
    return (
        <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
            <h1 className="text-xl font-bold mb-5">Education</h1>
            <div>
                <div className="flex gap-2">
                    <div
                        className={`py-2 px-[2.4rem] text-sm border  ${
                            education.type === "Degree - School" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setEducation({ ...education, type: "Degree - School" })}
                    >
                        Degree - School
                    </div>

                    <div
                        className={`py-2 px-[2.4rem] text-sm border ${
                            education.type === "School - Degree" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setEducation({ ...education, type: "School - Degree" })}
                    >
                        School - Degree
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
