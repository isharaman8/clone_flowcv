import { useEffect, useRef, useState } from "react";
import DatePicker from "./minicomponents/DatePicker";
import { BsLink45Deg } from "react-icons/bs";
import LinkPopup from "./minicomponents/LinkPopup";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@redux/hooks";
import { addProjects, removeProject, resetEditObj, resetPrevObj, setEditObj, updateProject } from "@redux/resume/features";
import { _getParsedBoolean, _parseEditObjPayload } from "@utils/helpers";
import { AVAILABLE_COMPONENTS } from "@utils/Constants";

const ProjectComponent = ({ setCurrentComponent }) => {
    const dispatch = useDispatch();
    const { projects, editObj = {}, prevObj = {} } = useAppSelector((state) => state.persistedReducer.resume);

    const handleAddOrUpdateProject = (payload = {}) => {
        console.log("PAYLOAD", payload);

        if (!editObj.projects) {
            dispatch(setEditObj({ key: "projects", value: { ..._parseEditObjPayload(payload), id: projects.length + 1 } }));
            dispatch(addProjects({ ...payload, id: projects.length + 1 }));
        } else {
            dispatch(setEditObj({ key: "projects", value: { ...(editObj.projects || {}), ..._parseEditObjPayload(payload) } }));
            dispatch(updateProject({ ...(editObj.projects || {}), ...payload }));
        }
    };

    const handleCancel = () => {
        if (!editObj.projects) {
            setCurrentComponent(AVAILABLE_COMPONENTS.personalInfo);
            return;
        }

        if (!prevObj.projects) {
            dispatch(removeProject({ id: editObj.projects?.id }));
        } else {
            dispatch(updateProject(prevObj.projects));
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

    const [subTitle, setSubTitle] = useState("");
    const [description, setDescription] = useState("");
    const [popupOpen, setPopupOpen] = useState(null);
    const [year, setYear] = useState({ startYear: null, endYear: null });
    const [month, setMonth] = useState({ startMonth: null, endMonth: null });
    const [showLink, setShowLink] = useState(false);
    const [data, setData] = useState({
        title: "",
        link: "",
    });
    const [checkboxData, setCheckboxData] = useState({
        start_show: false,
        start_year: false,
        present: false,
        end_show: false,
        end_year: false,
    });

    const popupRef = useRef(null);

    const handleDateData = (payload = {}) => {
        handleAddOrUpdateProject(payload);
        setPopupOpen(false);
    };

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

        handleAddOrUpdateProject({ [mainKey]: payload });
    };

    const handleSubTitle = (e) => setSubTitle(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = () => {
        const payload = {
            ...data,
            subTitle,
            description,
            startDate: `${month.startMonth},${year.startYear}`,
            endDate: !checkboxData.present ? `${month.endMonth},${year.endYear}` : "Present",
        };

        console.log(payload);
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

    return (
        <div className="relative">
            <div className="relative w-full rounded-lg bg-white shadow-card px-5 md:px-7 lg:px-9 py-5 pb-5 md:py-7 md:pb-9 lg:py-9 lg:pb-10">
                <div className="mb-8 grid grid-cols-[auto_auto] items-center gap-2">
                    <h3 className="text-xl font-extrabold md:text-2xl">Create Project</h3>
                </div>
                <form className="w-full">
                    <div className="mb-4 w-full">
                        <label
                            for="inputprojectTitle"
                            className="text-primaryBlack mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]"
                        >
                            <span>Project title</span>
                            <span className="gradient min-h-1 min-w-1 ml-[5px] mt-1 inline-block h-1 w-1 rounded-full align-top"></span>
                        </label>
                        <div className="relative flex items-center">
                            <input
                                name="title"
                                id="inputprojectTitle"
                                type="text"
                                placeholder="Enter Project Title"
                                className="h-10 w-full appearance-none rounded-md text-base leading-normal shadow-none outline-none md:text-[17px] font-sans m-0 placeholder-inputPlaceholder bg-gray-100 border border-solid text-inputText p-[10px]"
                                autoComplete="off"
                                onChange={(e) => handleAddOrUpdateProject({ title: e.target.value || NULL_VALUE })}
                                value={editObj.projects?.title || ""}
                            />
                            <div className="relative">
                                <button
                                    type="button"
                                    className={`flex gap-2 cursor-pointer appearance-none touch-manipulation items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 ${
                                        data.link ? "bg-blue-50 border-blue-500 text-blue-500" : "bg-white text-gray-400 border-gray-400"
                                    }  border border-solid ml-1 rounded-xl pl-3 pr-4 py-[.7rem] text-sm`}
                                    onClick={() => setShowLink(true)}
                                >
                                    <BsLink45Deg className="text-2xl" />
                                    <span className="ml-1 whitespace-nowrap">Link</span>
                                </button>
                            </div>
                            {showLink && <LinkPopup setData={setData} data={data} setShowLink={setShowLink} />}
                        </div>
                    </div>
                    <div className="mb-4 w-full">
                        <label
                            for="inputsubTitle"
                            className="text-primaryBlack mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]"
                        >
                            <span>Sub title</span>
                            <span className="ml-2 text-[11px]  text-gray-400">optional</span>
                        </label>
                        <div className="relative flex items-center">
                            <input
                                name="subTitle"
                                id="inputsubTitle"
                                type="text"
                                placeholder="Enter sub title"
                                className="h-10 w-full appearance-none rounded-md text-base leading-normal shadow-none outline-none md:text-[17px] font-sans m-0 placeholder-inputPlaceholder bg-gray-100 border border-solid border-inputBorder text-inputText p-[10px]"
                                autoComplete="off"
                                onChange={(e) => handleAddOrUpdateProject({ subTitle: e.target.value || NULL_VALUE })}
                                value={editObj.projects?.subTitle || ""}
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
                                dateData={(editObj.projects || {})["startDate"]}
                            />
                            <DatePicker
                                handleDateData={handleDateData}
                                popupOpen={popupOpen}
                                handlePopupOpen={setPopupOpen}
                                mainHeading={"End Date"}
                                prefix="end"
                                checkboxData={checkboxData}
                                dateData={(editObj.projects || {})["endDate"]}
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
                                        value={(editObj.projects || {}).startDate?.dontshow}
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
                                        value={(editObj.projects || {}).startDate?.onlyyear}
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
                                        value={(editObj.projects || {}).endDate?.presentyear}
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
                                        value={(editObj.projects || {}).endDate?.dontshow}
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
                                        value={(editObj.projects || {}).endDate?.onlyyear}
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
                    <div className="w-full">
                        <label for="" className="text-primaryBlack mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]">
                            <span>Description</span>
                            <span className="ml-2 text-[11px]  text-gray-400">optional</span>
                        </label>
                        <textarea
                            className="w-full bg-gray-100 p-2 rounded-md"
                            placeholder="write something"
                            rows={5}
                            value={(editObj.projects || {})["description"] || ""}
                            onChange={(e) => handleAddOrUpdateProject({ description: e.target.value || NULL_VALUE })}
                        ></textarea>
                    </div>
                </form>
            </div>
            <div className="fixed bottom-0 left-0 right-0 z-[20] flex w-full justify-between gap-2 bg-white p-4 px-5 shadow-card sm:sticky sm:left-auto sm:right-auto sm:mt-6 sm:mb-6 sm:gap-4 sm:rounded-lg md:px-7 lg:px-9">
                <div className="flex items-center justify-start"></div>
                <div className="flex space-x-7">
                    <button
                        type="button"
                        className="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 py-2 rounded-full text-primaryBlack font-extrabold h-12 min-w-min px-4 text-[16px]"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="border-none cursor-pointer appearance-none touch-manipulation flex items-center focus-visible:outline-blue-600 hover:opacity-80 px-7 py-2 rounded-full font-extrabold min-w-[120px] text-white gradient h-12 justify-between pl-4 text-[16px]"
                        onClick={handleSave}
                    >
                        <span className="border-r border-solid border-gray-100 border-opacity-60 pr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                            </svg>
                        </span>
                        <span className="pr flex justify-center pl-5">Save</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectComponent;
