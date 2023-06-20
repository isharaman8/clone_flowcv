import { MONTHS, YEARS } from "@utils/Constants";
import Popup from "./Popup";

const DatePicker = ({ mainHeading, popupOpen, handlePopupOpen, prefix, handleDateData, dateData = {} }) => {
    const { year, month, dontshow = false, onlyyear = false, presentyear = false } = dateData;

    return (
        <div>
            <label htmlFor="startMonth" className="text-sm font-semibold">
                <span>{mainHeading}</span>
                <span className="text-[.65rem] pl-2 font-semibold text-gray-400">optional</span>
            </label>
            {prefix === "end" && presentyear ? (
                <button
                    className="m-0 relative md:text-[17px] text-inputPlaceholder rounded-md border-inputBorder bg-gray-100 placeholder-inputPlaceholder flex w-full appearance-none items-center border border-solid p-[10px] font-sans text-base leading-normal shadow-none focus-visible:outline-blue-600"
                    id="headlessui-listbox-button-29"
                    type="button"
                >
                    <span className="truncate">Present</span>
                </button>
            ) : (
                !dontshow && (
                    <div className="flex flex-row justify-center items-center gap-2">
                        {!onlyyear && (
                            <div className="mb-4 relative w-full">
                                <button
                                    className="m-0 relative md:text-[17px] text-inputPlaceholder rounded-md border-inputBorder bg-gray-100 placeholder-inputPlaceholder flex w-full appearance-none items-center border border-solid p-[10px] font-sans text-base leading-normal shadow-none focus-visible:outline-blue-600"
                                    id="headlessui-listbox-button-29"
                                    type="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    data-headlessui-state=""
                                    onClick={() => handlePopupOpen(`${prefix}Month`)}
                                >
                                    <span className="truncate">{month || "Month"}</span>
                                </button>
                                {popupOpen === `${prefix}Month` && <Popup list={MONTHS} handleValue={handleDateData} cols={3} monthType={prefix} />}
                            </div>
                        )}
                        <div className="mb-4 static w-full">
                            <div className="relative">
                                <button
                                    className="m-0 md:text-[17px] text-inputPlaceholder rounded-md border-inputBorder bg-gray-100 placeholder-inputPlaceholder flex w-full appearance-none items-center border border-solid p-[10px] font-sans text-base leading-normal shadow-none focus-visible:outline-blue-600"
                                    id="headlessui-listbox-button-31"
                                    type="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    data-headlessui-state=""
                                    onClick={() => handlePopupOpen(`${prefix}Year`)}
                                >
                                    <span className="truncate">{year || "Year"}</span>
                                </button>
                                {popupOpen === `${prefix}Year` && <Popup list={YEARS} handleValue={handleDateData} cols={4} yearType={prefix} />}
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default DatePicker;
