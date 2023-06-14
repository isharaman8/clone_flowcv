import React from "react";
import { BsCheck2 } from "react-icons/bs";

const Skills = ({ setCurrentComponent }) => {
    return (
        <div className="w-full">
            <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
                <h1 className="text-xl font-bold mb-5">Create Skill</h1>

                <div>
                    <div>
                        <label htmlFor="skill" className="text-sm font-semibold">
                            Skill
                            <span class="gradient min-h-1 min-w-1 ml-[5px] mt-1 inline-block h-1 w-1 rounded-full align-top"></span>
                        </label>
                        <br />
                        <input
                            className="bg-gray-100 w-full rounded-md px-2 py-3 mb-2 mt-1"
                            type="text"
                            name="skill"
                            id="skill"
                            placeholder="Enter skill"
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
                        />
                    </div>
                    <div>
                        <label htmlFor="sub_skill" className="text-sm font-semibold">
                            Select skill level
                        </label>
                        <br />
                        <select className="w-full px-2 py-3 rounded-md bg-gray-100 mt-1" name="skill_level" id="skill_level">
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
                <button className="flex gradient border-none cursor-pointer appearance-none touch-manipulation items-center gap-4 outline-none shadow-md rounded-full font-extrabold hover:opacity-80 text-white bg-gradient-to-r from-brandPink to-brandRed py-3 px-[2rem]">
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
