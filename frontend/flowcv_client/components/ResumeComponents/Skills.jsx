import { useAppSelector } from "@redux/hooks";
import { addSkills, updateSkills } from "@redux/resume/features";
import { AVAILABLE_COMPONENTS } from "@utils/Constants";
import React, { useEffect, useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import { useDispatch } from "react-redux";

const Skills = ({ setCurrentComponent, skill = {} }) => {
    const [currentSkill, setCurrentSkill] = useState({});
    const [skillEditMode, setSkillEditMode] = useState(Boolean(Object.keys(skill).length));

    const dispatch = useDispatch();

    const skills = useAppSelector((state) => state.persistedReducer.resume.skills);

    const handleAddOrUpdateSkill = (payload = {}) => {
        if (!skillEditMode) {
            setSkillEditMode(true);
            setCurrentSkill({ ...payload, id: skills.length + 1 });
            dispatch(addSkills({ ...payload, id: skills.length + 1 }));
        }

        setCurrentSkill((p) => ({ ...p, ...payload }));
    };

    useEffect(() => {
        if (Number.isInteger(currentSkill.id)) {
            dispatch(updateSkills(currentSkill));
        }
    }, [currentSkill]);

    useEffect(() => {
        if (JSON.stringify(currentSkill) !== JSON.stringify(skill)) {
            setCurrentSkill(skill);
        }
        console.log("SKILL", skill);
    }, [skill]);

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
                            value={currentSkill.skill || ""}
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
                            value={currentSkill.description || ""}
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
                            value={currentSkill.skillLevel || ""}
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
                <button className="font-bold" onClick={() => setCurrentComponent("personalInfo")}>
                    Cancel
                </button>
                <button
                    onClick={() => setCurrentComponent(AVAILABLE_COMPONENTS.personalInfo)}
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
