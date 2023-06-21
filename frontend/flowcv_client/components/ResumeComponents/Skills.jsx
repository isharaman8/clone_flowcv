import { useAppSelector } from "@redux/hooks";
import { addSkills, removeSkills, resetEditObj, resetPrevObj, setEditObj, setPrevObj, updateSkills } from "@redux/resume/features";
import { AVAILABLE_COMPONENTS } from "@utils/Constants";
import React, { useEffect, useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import { useDispatch } from "react-redux";

const Skills = ({ setCurrentComponent }) => {
    const dispatch = useDispatch();

    const { skills, editObj = {}, prevObj = {} } = useAppSelector((state) => state.persistedReducer.resume);

    const handleAddOrUpdateSkill = (payload = {}) => {
        if (!editObj.skills) {
            dispatch(setEditObj({ key: "skills", value: { ...payload, id: skills.length + 1 } }));
            dispatch(addSkills({ ...payload, id: skills.length + 1 }));
        } else {
            dispatch(setEditObj({ key: "skills", value: { ...(editObj?.skills || {}), ...payload } }));
            dispatch(updateSkills(editObj?.skills));
        }
    };

    const [data, setData] = useState({
        skill: "",
        sub_skill: "",
        level: "",
    });

    const handleCancel = () => {
        console.log("EDITOBJ", editObj.skills);
        console.log("PREVOBJ", prevObj.skills);

        if (!editObj.skills) {
            setCurrentComponent(AVAILABLE_COMPONENTS.personalInfo);
            return;
        }

        if (!prevObj.skills) {
            dispatch(removeSkills({ id: editObj.skills?.id }));
        } else {
            dispatch(updateSkills(prevObj.skills));
        }

        dispatch(resetEditObj());
        dispatch(resetPrevObj());

        setCurrentComponent(AVAILABLE_COMPONENTS.personalInfo);
    };

    const handleSave = () => {
        setCurrentComponent(AVAILABLE_COMPONENTS.personalInfo);
        dispatch(resetEditObj());
    };

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
        dispatch(setPrevObj({ key: "skills", value: editObj.skills }));
        console.log("PREVOBJ", prevObj.skills);
    }, []);
    return (
        <div className="w-full">
            <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
                <h1 className="text-xl font-bold mb-5">Create Skill</h1>

                <div>
                    <div>
                        <label htmlFor="skill" className="text-sm font-semibold">
                            Skill
                            <span className="gradient min-h-1 min-w-1 ml-[5px] mt-1 inline-block h-1 w-1 rounded-full align-top"></span>
                        </label>
                        <br />
                        <input
                            className="bg-gray-100 w-full rounded-md px-2 py-3 mb-2 mt-1"
                            type="text"
                            name="skill"
                            id="skill"
                            placeholder="Enter skill"
                            value={editObj.skills?.skill || ""}
                            onChange={(e) => handleAddOrUpdateSkill({ skill: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="sub_skill" className="text-sm font-semibold">
                            Information / Sub-skills
                        </label>
                        <span className="text-[.65rem] pl-2 font-semibold text-gray-400">recommended</span>
                        <br />
                        <input
                            className="bg-gray-100 w-full rounded-md px-2 py-3 mb-2 mt-1"
                            type="text"
                            name="sub_skill"
                            id="sub_skill"
                            placeholder="Enter information or sub-skills"
                            value={editObj.skills?.description || ""}
                            onChange={(e) => handleAddOrUpdateSkill({ description: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="sub_skill" className="text-sm font-semibold">
                            Select skill level
                        </label>
                        <br />
                        <select
                            className="w-full px-2 py-3 rounded-md bg-gray-100 mt-1"
                            name="skill_level"
                            id="skill_level"
                            value={editObj.skills?.skillLevel || ""}
                            onChange={(e) => handleAddOrUpdateSkill({ skillLevel: e.target.value })}
                        >
                            <option value="novice">Novice</option>
                            <option value="beginner">Beginner</option>
                            <option value="skillful">Skillful</option>
                            <option value="experienced">Experienced</option>
                            <option value="expert">Expert</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl w-full py-4 px-5 md:px-7 lg:px-9 relative max-w-full mt-4 flex justify-end items-center gap-6">
                <button className="font-bold" onClick={handleCancel}>
                    Cancel
                </button>
                <button
                    onClick={handleSave}
                    className="flex gradient border-none cursor-pointer appearance-none touch-manipulation items-center gap-4 outline-none shadow-md rounded-full font-extrabold hover:opacity-80 text-white bg-gradient-to-r from-brandPink to-brandRed py-3 px-[2rem]"
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

export default Skills;
