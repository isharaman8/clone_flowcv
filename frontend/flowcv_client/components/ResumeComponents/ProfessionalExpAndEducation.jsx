// THIRD PARTY IMPORTS
import React, { useState } from "react";
import { BsLink45Deg, BsCheck2 } from "react-icons/bs";

// INNER IMPORTS
import { MONTHS, YEARS } from "@utils/Constants";
import DatePicker from "./minicomponents/DatePicker";

const ProfessionalExperience = ({ setCurrentComponent, mainHeading, subOne, subTwo }) => {
    const [popupOpen, setPopupOpen] = useState(null);
    const [year, setYear] = useState({ startYear: null, endYear: null });
    const [month, setMonth] = useState({ startMonth: null, endMonth: null });

    const handleMonth = (e) => {
        setMonth((p) => ({ ...p, ...e }));
        setPopupOpen(false);
    };
    const handleYear = (e) => {
        setYear((p) => ({ ...p, ...e }));
        setPopupOpen(false);
    };

    const handlePopupOpen = (value) => {
        setPopupOpen(value);
    };

    return (
        <div className="w-full">
            <div className="bg-white shadow-md rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
                <h1 className="text-xl font-bold mb-5">{mainHeading}</h1>

                <div>
                    <div>
                        <label htmlFor="employer" className="text-sm font-semibold">
                            {subOne}
                        </label>
                        <span className="text-[.65rem] pl-2 font-semibold text-gray-400">optional</span>
                        <br />
                        <div className="flex gap-2 items-center">
                            <input
                                className="bg-gray-100 w-full rounded-md px-2 py-3 mb-2 mt-1"
                                type="text"
                                name="employer"
                                id="employer"
                                placeholder="Enter employer"
                            />
                            <button className="flex gap-2 cursor-pointer appearance-none touch-manipulation items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 bg-white text-gray-400 border-gray-400 border border-solid ml-1 h-inputHeight rounded-xl pl-3 pr-4 py-[.7rem] text-sm">
                                <BsLink45Deg className="text-2xl" />
                                Link
                            </button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="title" className="text-sm font-semibold">
                            {subTwo}
                        </label>
                        <span className="text-[.65rem] pl-2 font-semibold text-gray-400">optional</span>
                        <br />
                        <input
                            className="bg-gray-100 w-full rounded-md px-2 py-3 mb-2 mt-1"
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Enter job title"
                        />
                    </div>

                    <div className="w-full relative">
                        <div className="w-2/4 pr-2">
                            <label htmlFor="city" className="text-sm font-semibold">
                                City
                            </label>
                            <span className="text-[.65rem] pl-2 font-semibold text-gray-400">optional</span>
                            <br />
                            <input
                                className="bg-gray-100 w-full relative rounded-md px-2 py-3 mb-2 mt-1"
                                type="text"
                                name="city"
                                id="city"
                                placeholder="Enter city"
                            />
                        </div>
                        <div className="w-2/4 absolute top-0 left-[50%] pl-2">
                            <label htmlFor="country" className="text-sm font-semibold">
                                Country
                            </label>
                            <span className="text-[.65rem] pl-2 font-semibold text-gray-400">optional</span>
                            <br />
                            <input
                                className="bg-gray-100 w-full relative rounded-md px-2 py-3 mb-2 mt-1"
                                type="text"
                                name="country"
                                id="country"
                                placeholder="Enter country"
                            />
                        </div>
                    </div>
                    <div className="relative grid grid-cols-1 justify-between gap-4 md:grid-cols-[48.5%_48.5%] md:gap-0">
                        <DatePicker
                            year={year.startYear}
                            handleYear={handleYear}
                            month={month.startMonth}
                            handleMonth={handleMonth}
                            popupOpen={popupOpen}
                            handlePopupOpen={handlePopupOpen}
                            mainHeading={"Start Date"}
                            prefix="start"
                        />
                        <DatePicker
                            year={year.endYear}
                            handleYear={handleYear}
                            month={month.endMonth}
                            handleMonth={handleMonth}
                            popupOpen={popupOpen}
                            handlePopupOpen={handlePopupOpen}
                            mainHeading={"End Date"}
                            prefix="end"
                        />
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <div className="my-3 flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name="show"
                                    id="start_show"
                                    className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    value=""
                                />
                                <div className="flex cursor-pointer items-center">
                                    <label htmlFor="start_show" className="text-sm cursor-pointer">
                                        Don't show
                                    </label>
                                </div>
                            </div>
                            <div className="my-3 flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name="year"
                                    id="start_year"
                                    className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    value=""
                                />
                                <div className="flex cursor-pointer items-center">
                                    <label htmlFor="start_year" className="text-sm cursor-pointer">
                                        Only year
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="w-2/4 px-2">
                            <div className="my-3 flex items-center gap-2">
                                <input
                                    id="present"
                                    type="checkbox"
                                    name="present"
                                    className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    value=""
                                />

                                <label htmlFor="present" className="text-sm cursor-pointer">
                                    Present (current)
                                </label>
                            </div>
                            <div className="my-3 flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name="show"
                                    id="show"
                                    className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    value=""
                                />
                                <div className="flex cursor-pointer items-center">
                                    <label htmlFor="show" className="text-sm cursor-pointer">
                                        Don't show
                                    </label>
                                </div>
                            </div>
                            <div className="my-3 flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name="year"
                                    id="end_year"
                                    className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    value=""
                                />
                                <div className="flex cursor-pointer items-center">
                                    <label htmlFor="end_year" className="text-sm cursor-pointer">
                                        Only year
                                    </label>
                                </div>
                            </div>
                        </div>
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

export default ProfessionalExperience;
