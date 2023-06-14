import { useEffect, useState } from "react";
import Popup from "./minicomponents/Popup";
import { MONTHS } from "@utils/Constants";
import { _getYears } from "@utils/helpers";
import DatePicker from "./minicomponents/DatePicker";

const ProjectComponent = () => {
    const [subTitle, setSubTitle] = useState("");
    const [description, setDescription] = useState("");
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

    const handleSubTitle = (e) => setSubTitle(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);

    useEffect(() => {
        console.log("MONTH", month);
        console.log("YEAR", year);
        console.log("POPUP OPEN", popupOpen);
    }, [month, year, popupOpen]);

    useEffect(() => {
        console.log("DESCRIPTION", description);
        console.log("SUBTITLE", subTitle);
    }, [description, subTitle]);

    return (
        <div class="relative">
            <div class="relative w-full rounded-lg bg-white shadow-card px-5 md:px-7 lg:px-9 py-5 pb-5 md:py-7 md:pb-9 lg:py-9 lg:pb-10">
                <div class="mb-8 grid grid-cols-[auto_auto] items-center gap-2">
                    <h3 class="text-xl font-extrabold md:text-2xl">Create Project</h3>
                </div>
                <form class="flex w-full flex-wrap justify-between">
                    <div class="mb-4 w-full">
                        <label
                            for="inputprojectTitle"
                            class="text-primaryBlack mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]"
                        >
                            <span>Project title</span>
                            <span class="gradient min-h-1 min-w-1 ml-[5px] mt-1 inline-block h-1 w-1 rounded-full align-top"></span>
                        </label>
                    </div>
                    <div class="mb-4 w-full">
                        <label
                            for="inputsubTitle"
                            class="text-primaryBlack mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]"
                        >
                            <span>Sub title</span>
                            <span class="ml-2 text-[11px]  text-gray-400">optional</span>
                        </label>
                        <div class="relative flex items-center">
                            <input
                                name="subTitle"
                                id="inputsubTitle"
                                type="text"
                                placeholder="Enter sub title"
                                class="h-10 w-full appearance-none rounded-md text-base leading-normal shadow-none outline-none md:text-[17px] font-sans m-0 placeholder-inputPlaceholder bg-gray-100 border border-solid border-inputBorder text-inputText p-[10px]"
                                autocomplete="off"
                                value={subTitle}
                                onInput={handleSubTitle}
                            />
                        </div>
                    </div>
                    <div class="mb-4 flex w-full flex-col">
                        <div class="relative grid grid-cols-1 justify-between gap-4 md:grid-cols-[48.5%_48.5%] md:gap-0">
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
                    </div>
                    <div className="w-full">
                        <label for="" className="text-primaryBlack mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]">
                            <span>Description</span>
                            <span class="ml-2 text-[11px]  text-gray-400">optional</span>
                        </label>
                        <textarea
                            className="w-full bg-gray-100 p-2 rounded-md"
                            placeholder="write something"
                            rows={5}
                            value={description}
                            onInput={handleDescription}
                        ></textarea>
                    </div>
                </form>
            </div>
            <div class="fixed bottom-0 left-0 right-0 z-[20] flex w-full justify-between gap-2 bg-white p-4 px-5 shadow-card sm:sticky sm:left-auto sm:right-auto sm:mt-6 sm:mb-6 sm:gap-4 sm:rounded-lg md:px-7 lg:px-9">
                <div class="flex items-center justify-start"></div>
                <div class="flex space-x-7">
                    <button
                        type="button"
                        class="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 py-2 rounded-full text-primaryBlack font-extrabold h-12 min-w-min px-4 text-[16px]"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        class="border-none cursor-pointer appearance-none touch-manipulation flex items-center focus-visible:outline-blue-600 hover:opacity-80 px-7 py-2 rounded-full font-extrabold min-w-[120px] text-white gradient h-12 justify-between pl-4 text-[16px]"
                    >
                        <span class="border-r border-solid border-gray-100 border-opacity-60 pr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                            </svg>
                        </span>
                        <span class="pr flex justify-center pl-5">Save</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectComponent;
