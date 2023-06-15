import React, { useEffect, useRef, useState } from "react";
import { BsLink45Deg, BsCheck2 } from "react-icons/bs";
import DatePicker from "./minicomponents/DatePicker";
import LinkPopup from "./minicomponents/LinkPopup";

const ProfessionalExperience = ({ setCurrentComponent, mainHeading, subOne, subTwo }) => {
    const [data, setData] = useState({
        [subOne]: "",
        [subTwo]: "",
        link: "",
        city: "",
        country: "",
        description: "",
    });
    const [popupOpen, setPopupOpen] = useState(null);
    const [year, setYear] = useState({ startYear: null, endYear: null });
    const [month, setMonth] = useState({ startMonth: null, endMonth: null });
    const [showLink, setShowLink] = useState(false);
    const [checkboxData, setCheckboxData] = useState({
        start_show: false,
        start_year: false,
        present: false,
        end_show: false,
        end_year: false,
    });

    const popupRef = useRef(null);

    const handleMonth = (e) => {
        setMonth((p) => ({ ...p, ...e }));
        setPopupOpen(false);
    };
    const handleYear = (e) => {
        setYear((p) => ({ ...p, ...e }));
        setPopupOpen(false);
    };

    const handleCheckbox = (e) => {
        const { name, checked } = e.target;
        setCheckboxData((prevData) => ({ ...prevData, [name]: checked }));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setPopupOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = () => {
        const payload = {
            ...data,
            startDate: `${month.startMonth},${year.startYear}`,
            endDate: !checkboxData.present ? `${month.endMonth},${year.endYear}` : "Present",
        };

        console.log(payload);
    };

    return (
        <div className="w-full">
            <div className="bg-white shadow-md rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
                <h1 className="text-xl font-bold mb-5">{mainHeading}</h1>

                <div>
                    <div>
                        <label htmlFor={subOne} className="text-sm font-semibold">
                            {subOne}

                            {subOne === "Course title" && (
                                <span className="gradient min-h-1 min-w-1 ml-[5px] mt-1 inline-block h-1 w-1 rounded-full align-top"></span>
                            )}
                        </label>
                        {subOne !== "Course title" && <span className="text-[.65rem] pl-2 font-semibold text-gray-400">optional</span>}
                        <br />
                        <div className="flex gap-2 items-center relative">
                            <input
                                className="bg-gray-100 w-full rounded-md px-2 py-3 mb-2 mt-1"
                                type="text"
                                name={subOne}
                                id={subOne}
                                onChange={handleChange}
                                value={data[subOne]}
                                placeholder={`Enter ${subOne}`}
                            />
                            <button
                                className={`flex gap-2 cursor-pointer appearance-none touch-manipulation items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 ${
                                    data.link ? "bg-blue-50 border-blue-500 text-blue-500" : "bg-white text-gray-400 border-gray-400"
                                }  border border-solid ml-1 rounded-xl pl-3 pr-4 py-[.7rem] text-sm`}
                                onClick={() => setShowLink(true)}
                            >
                                <BsLink45Deg className="text-2xl" />
                                Link
                            </button>
                            {showLink && <LinkPopup setData={setData} data={data} setShowLink={setShowLink} />}
                        </div>
                    </div>
                    <div>
                        <label htmlFor={subTwo} className="text-sm font-semibold">
                            {subTwo}
                        </label>
                        <span className="text-[.65rem] pl-2 font-semibold text-gray-400">optional</span>
                        <br />
                        <input
                            className="bg-gray-100 w-full rounded-md px-2 py-3 mb-2 mt-1"
                            type="text"
                            name={subTwo}
                            id={subTwo}
                            onChange={handleChange}
                            value={data[subTwo]}
                            placeholder={`Enter ${subTwo}`}
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
                                value={data.city}
                                onChange={handleChange}
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
                                value={data.country}
                                onChange={handleChange}
                                placeholder="Enter country"
                            />
                        </div>
                    </div>

                    <div className="mb-4 flex w-full flex-col">
                        <div className="relative grid grid-cols-1 justify-between gap-4 md:grid-cols-[48.5%_48.5%] md:gap-0" ref={popupRef}>
                            <DatePicker
                                year={year.startYear}
                                handleYear={handleYear}
                                month={month.startMonth}
                                handleMonth={handleMonth}
                                popupOpen={popupOpen}
                                handlePopupOpen={setPopupOpen}
                                mainHeading={"Start Date"}
                                prefix="start"
                                checkboxData={checkboxData}
                            />
                            <DatePicker
                                year={year.endYear}
                                handleYear={handleYear}
                                month={month.endMonth}
                                handleMonth={handleMonth}
                                popupOpen={popupOpen}
                                handlePopupOpen={setPopupOpen}
                                mainHeading={"End Date"}
                                prefix="end"
                                checkboxData={checkboxData}
                            />
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <div className="my-3 flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="start_show"
                                        id="start_show"
                                        className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        value={checkboxData.start_show}
                                        onChange={handleCheckbox}
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
                                        name="start_year"
                                        id="start_year"
                                        className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        value={checkboxData.start_year}
                                        onChange={handleCheckbox}
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
                                        value={checkboxData.present}
                                        onChange={handleCheckbox}
                                    />

                                    <label htmlFor="present" className="text-sm cursor-pointer">
                                        Present (current)
                                    </label>
                                </div>
                                <div className="my-3 flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="end_show"
                                        id="show"
                                        className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        value={checkboxData.end_show}
                                        onChange={handleCheckbox}
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
                                        name="end_year"
                                        id="end_year"
                                        className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        value={checkboxData.end_year}
                                        onChange={handleCheckbox}
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
                <div className="w-full">
                    <label htmlFor="description" className="text-primaryBlack mb-[2.5px]  inline-block w-full text-[14px] font-bold md:text-[15px]">
                        <span>Description</span>
                        <span className="ml-2 text-[11px]  text-gray-400">optional</span>
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="w-full bg-gray-100 p-2 rounded-md"
                        placeholder="write something"
                        value={data.description}
                        onChange={handleChange}
                        rows={5}
                    ></textarea>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 z-[20] flex w-full justify-end gap-2 bg-white p-4 px-5 shadow-card sm:sticky sm:left-auto sm:right-auto sm:mt-6 sm:mb-6 sm:gap-4 sm:rounded-lg md:px-7 lg:px-9">
                <button className="font-bold" onClick={() => setCurrentComponent("personalInfo")}>
                    Cancel
                </button>
                <button
                    className="flex gradient border-none cursor-pointer appearance-none touch-manipulation items-center gap-4 outline-none shadow-md rounded-full font-extrabold hover:opacity-80 text-white bg-gradient-to-r from-brandPink to-brandRed py-3 px-[2rem]"
                    onClick={handleSubmit}
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

export default ProfessionalExperience;
