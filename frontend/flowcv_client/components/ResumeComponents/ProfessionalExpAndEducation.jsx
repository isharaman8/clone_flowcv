import React, { useEffect, useRef, useState } from "react";
import { BsLink45Deg, BsCheck2 } from "react-icons/bs";
import DatePicker from "./minicomponents/DatePicker";
import LinkPopup from "./minicomponents/LinkPopup";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@redux/hooks";
import { resetEditObj, resetPrevObj, setEditObj, setPrevObj } from "@redux/resume/features";
import {
    _camelize,
    _generalAddReduxFunc,
    _generalRemoveReduxFunc,
    _generalUpdateReduxFunc,
    _getParsedBoolean,
    _parseEditObjPayload,
} from "@utils/helpers";
import { AVAILABLE_COMPONENTS, NULL_VALUE } from "@utils/Constants";

const ProfessionalExperience = ({ setCurrentComponent, mainHeading, subOne, subTwo }) => {
    const dispatch = useDispatch();
    const resume = useAppSelector((state) => state.persistedReducer.resume);
    const { editObj = {}, prevObj = {} } = resume;

    const [objKey, setObjKey] = useState("");

    const handleAddOrUpdatePE = (payload = {}) => {
        console.log("PAYLOAD", payload);
        console.log("OBJKEY", objKey);

        if (!editObj[objKey]) {
            dispatch(setEditObj({ key: objKey, value: { ..._parseEditObjPayload(payload), id: resume[objKey].length + 1 } }));
            dispatch(_generalAddReduxFunc({ ...payload, id: resume[objKey].length + 1 }, subOne));
        } else {
            dispatch(setEditObj({ key: objKey, value: { ...(editObj[objKey] || {}), ..._parseEditObjPayload(payload) } }));
            dispatch(_generalUpdateReduxFunc({ ...(editObj[objKey] || {}), ...payload }, subOne));
        }
    };

    const handleCancel = () => {
        console.log("EDITOBJ", editObj[objKey]);
        console.log("PREVOBJ", prevObj[objKey]);

        if (!editObj[objKey]) {
            setCurrentComponent(AVAILABLE_COMPONENTS.personalInfo);
            return;
        }

        if (!prevObj[objKey]) {
            dispatch(_generalRemoveReduxFunc({ id: editObj[objKey]?.id }, subOne));
        } else {
            dispatch(_generalUpdateReduxFunc(prevObj[objKey], subOne));
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
        [subOne]: "",
        [subTwo]: "",
        link: "",
        city: "",
        country: "",
        description: "",
    });
    const [popupOpen, setPopupOpen] = useState(null);
    const [showLink, setShowLink] = useState(false);
    const [checkboxData, setCheckboxData] = useState({
        start_show: false,
        start_year: false,
        present: false,
        end_show: false,
        end_year: false,
    });

    const popupRef = useRef(null);

    const handleDateData = (payload = {}) => {
        handleAddOrUpdatePE(payload);
        setPopupOpen(false);
    };

    const handleCheckbox = (e) => {
        const { name, checked } = e.target;
        setCheckboxData((prevData) => ({ ...prevData, [name]: checked }));
    };

    const handleChecKBoxes = (prefix, key, value) => {
        console.log("CHECKBOX VLAUE", value);

        if (!["start", "end"].includes(prefix)) {
            return alert("Invalid prefix value provided");
        }

        const mainKey = `${prefix}Date`;

        value = _getParsedBoolean(value);

        const payload = {};

        if (key === "dontshow") {
            payload.year = NULL_VALUE;
            payload.month = NULL_VALUE;
            payload.dontshow = value;
        } else if (key === "onlyyear") {
            payload.month = NULL_VALUE;
            payload.onlyyear = value;
        } else if (key === "presentyear") {
            payload.month = NULL_VALUE;
            payload.year = value ? new Date().getFullYear() : NULL_VALUE;
            payload.presentyear = value;
        }

        handleAddOrUpdatePE({ [mainKey]: payload });
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

    useEffect(() => {
        // SET PREV OBJ TO EDITOBJ
        dispatch(setPrevObj({ key: objKey, value: editObj[objKey] }));

        switch (subOne) {
            case "employer":
                setObjKey("professionalExperience");
                break;
            case "school":
                setObjKey("education");
                break;
            case "courseTitle":
                setObjKey("courses");
                break;

            default:
                break;
        }
    }, []);

    return (
        <div className="w-full">
            <div className="bg-white shadow-md rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
                <h1 className="text-xl font-bold mb-5">{mainHeading}</h1>

                <div>
                    <div>
                        <label htmlFor={subOne} className="text-sm font-semibold capitalize">
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
                                onChange={(e) => handleAddOrUpdatePE({ [subOne]: e.target.value || NULL_VALUE })}
                                value={(editObj[objKey] || {})[subOne] || ""}
                                placeholder={`Enter ${_camelize(subOne)}`}
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
                            {showLink && <LinkPopup setData={handleAddOrUpdatePE} data={editObj[objKey]} setShowLink={setShowLink} />}
                        </div>
                    </div>
                    <div>
                        <label htmlFor={subTwo} className="text-sm font-semibold capitalize">
                            {subTwo}
                        </label>
                        <span className="text-[.65rem] pl-2 font-semibold text-gray-400">optional</span>
                        <br />
                        <input
                            className="bg-gray-100 w-full rounded-md px-2 py-3 mb-2 mt-1"
                            type="text"
                            name={subTwo}
                            id={subTwo}
                            onChange={(e) => handleAddOrUpdatePE({ [subTwo]: e.target.value || NULL_VALUE })}
                            value={(editObj[objKey] || {})[subTwo] || ""}
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
                                value={(editObj[objKey] || {})["city"] || ""}
                                onChange={(e) => handleAddOrUpdatePE({ city: e.target.value || NULL_VALUE })}
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
                                value={(editObj[objKey] || {})["country"] || ""}
                                onChange={(e) => handleAddOrUpdatePE({ country: e.target.value || NULL_VALUE })}
                                placeholder="Enter country"
                            />
                        </div>
                    </div>

                    <div className="mb-4 flex w-full flex-col">
                        <div className="relative grid grid-cols-1 justify-between gap-4 md:grid-cols-[48.5%_48.5%] md:gap-0" ref={popupRef}>
                            <DatePicker
                                handleDateData={handleDateData}
                                popupOpen={popupOpen}
                                handlePopupOpen={setPopupOpen}
                                mainHeading={"Start Date"}
                                prefix="start"
                                checkboxData={checkboxData}
                                dateData={(editObj[objKey] || {})["startDate"]}
                            />
                            <DatePicker
                                handleDateData={handleDateData}
                                popupOpen={popupOpen}
                                handlePopupOpen={setPopupOpen}
                                mainHeading={"End Date"}
                                prefix="end"
                                checkboxData={checkboxData}
                                dateData={(editObj[objKey] || {})["endDate"]}
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
                                        value={(editObj[objKey] || {}).startDate?.dontshow}
                                        onChange={(e) => handleChecKBoxes("start", "dontshow", e.target.checked)}
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
                                        value={(editObj[objKey] || {}).startDate?.onlyyear}
                                        onChange={(e) => handleChecKBoxes("start", "onlyyear", e.target.checked)}
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
                                        value={(editObj[objKey] || {}).endDate?.presentyear}
                                        onChange={(e) => handleChecKBoxes("end", "presentyear", e.target.checked)}
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
                                        value={(editObj[objKey] || {}).endDate?.dontshow}
                                        onChange={(e) => handleChecKBoxes("end", "dontshow", e.target.checked)}
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
                                        value={(editObj[objKey] || {}).endDate?.onlyyear}
                                        onChange={(e) => handleChecKBoxes("end", "onlyyear", e.target.checked)}
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
                        value={(editObj[objKey] || {})["description"] || ""}
                        onChange={(e) => handleAddOrUpdatePE({ description: e.target.value || NULL_VALUE })}
                        rows={5}
                    ></textarea>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 z-[20] flex w-full justify-end gap-2 bg-white p-4 px-5 shadow-card sm:sticky sm:left-auto sm:right-auto sm:mt-6 sm:mb-6 sm:gap-4 sm:rounded-lg md:px-7 lg:px-9">
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

export default ProfessionalExperience;
