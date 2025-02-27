import { useAppSelector } from "@redux/hooks";
import { addLanguages, removeLanguage, resetEditObj, resetPrevObj, setEditObj, setPrevObj, updateLanguages } from "@redux/resume/features";
import React, { useEffect, useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { _parseEditObjPayload } from "@utils/helpers";
import { AVAILABLE_COMPONENTS } from "@utils/Constants";

const Language = ({ setCurrentComponent }) => {
    const dispatch = useDispatch();

    const { languages, editObj = {}, prevObj = {} } = useAppSelector((state) => state.persistedReducer.resume);

    const handleAddOrUpdateLanguage = (payload = {}) => {
        console.log("PAYLOAD 123", payload);

        if (!editObj.languages) {
            dispatch(setEditObj({ key: "languages", value: { ..._parseEditObjPayload(payload), id: languages.length + 1 } }));
            dispatch(addLanguages({ ...payload, id: languages.length + 1 }));
        } else {
            dispatch(updateLanguages({ ...editObj.languages, ...payload }));
            dispatch(setEditObj({ key: "languages", value: { ...(editObj?.languages || {}), ..._parseEditObjPayload(payload) } }));
        }
    };

    const handleCancel = () => {
        console.log("EDITOBJ", editObj.languages);
        console.log("PREVOBJ", prevObj.languages);

        if (!editObj.languages) {
            setCurrentComponent(AVAILABLE_COMPONENTS.personalInfo);
            return;
        }

        if (!prevObj.languages) {
            dispatch(removeLanguage({ id: editObj.languages?.id }));
        } else {
            dispatch(updateLanguages(prevObj.languages));
        }

        dispatch(resetEditObj());
        dispatch(resetPrevObj());

        setCurrentComponent(AVAILABLE_COMPONENTS.personalInfo);
    };

    const handleSave = () => {
        setCurrentComponent(AVAILABLE_COMPONENTS.personalInfo);
        dispatch(resetEditObj());
        dispatch(resetPrevObj());
    };

    const [data, setData] = useState({
        language: "",
        info: "",
        level: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = () => {
        const payload = {
            ...data,
        };

        console.log(payload);
    };

    useEffect(() => {
        console.log("Languages", languages);
    }, [languages]);

    useEffect(() => {
        dispatch(setPrevObj({ key: "languages", value: editObj.languages }));
        console.log("PREVOBJ", prevObj.languages);
    }, []);

    return (
        <div className="w-full">
            <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
                <h1 className="text-xl font-bold mb-5">Create Language</h1>

                <div>
                    <div>
                        <label htmlFor="language" className="text-sm font-semibold">
                            Language
                            <span className="gradient min-h-1 min-w-1 ml-[5px] mt-1 inline-block h-1 w-1 rounded-full align-top"></span>
                        </label>
                        <br />
                        <input
                            className="bg-gray-100 w-full rounded-md px-2 py-3 mb-2 mt-1"
                            type="text"
                            name="language"
                            id="language"
                            value={editObj.languages?.language || ""}
                            onChange={(e) => handleAddOrUpdateLanguage({ language: e.target.value || NULL_VALUE })}
                            placeholder="Enter language"
                        />
                    </div>
                    <div>
                        <label htmlFor="info" className="text-sm font-semibold">
                            Additional Information
                        </label>
                        <span className="text-[.65rem] pl-2 font-semibold text-gray-400">recommended</span>
                        <br />
                        <input
                            className="bg-gray-100 w-full rounded-md px-2 py-3 mb-2 mt-1"
                            type="text"
                            name="info"
                            value={editObj.languages?.description || ""}
                            onChange={(e) => handleAddOrUpdateLanguage({ description: e.target.value || NULL_VALUE })}
                            id="info"
                            placeholder="e.g. C2, 4+, TOEFL, IELTS,..."
                        />
                    </div>
                    <div>
                        <label htmlFor="sub_language" className="text-sm font-semibold">
                            Select language level
                        </label>
                        <br />
                        <select
                            className="w-full px-2 py-3 rounded-md bg-gray-100 mt-1"
                            name="language_level"
                            id="language_level"
                            value={editObj.languages?.languageLevel || ""}
                            onChange={(e) => handleAddOrUpdateLanguage({ languageLevel: e.target.value || NULL_VALUE })}
                        >
                            <option value="beginner">Beginner (A1, 0/0+)</option>
                            <option value="elementary">Elementary proficiency (A2, 1)</option>
                            <option value="working">Limited working proficiency (B1, 1+)</option>
                            <option value="high">Highly proficient in speaking and writing (B2-C1, 2/2+/3/3+)</option>
                            <option value="native">Native / full working proficiency (C2, 4/4+)</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl w-full py-4 px-5 md:px-7 lg:px-9 relative max-w-full mt-4 flex justify-end items-center gap-6">
                <button className="font-bold" onClick={handleCancel}>
                    Cancel
                </button>
                <button
                    className="flex gradient border-none cursor-pointer appearance-none touch-manipulation items-center gap-4 outline-none shadow-md rounded-full font-extrabold hover:opacity-80 text-white bg-gradient-to-r from-brandPink to-brandRed py-3 px-[2rem]"
                    onClick={handleSave}
                >
                    <span className="flex items-center gap-2">
                        <BsCheck2 className="text-2xl" />
                        <span className="font-extralight text-xl">|</span>
                    </span>
                    Save
                </button>
            </div>
        </div>
    );
};

export default Language;
