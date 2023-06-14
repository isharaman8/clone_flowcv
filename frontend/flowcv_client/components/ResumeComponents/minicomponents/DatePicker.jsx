import { MONTHS, YEARS } from "@utils/Constants";
import Popup from "./Popup";

const DatePicker = ({ mainHeading, year, handleYear, month, handleMonth, popupOpen, handlePopupOpen, prefix }) => {
    return (
        <div>
            <label for="startMonth" class="text-primaryBlack mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]">
                <span>{mainHeading}</span>
                <span class="ml-2 text-[11px]  text-gray-400">optional</span>
            </label>
            <div class="flex flex-row justify-center items-center gap-2">
                <div class=" mb-4 relative w-full">
                    <button
                        class="m-0 relative md:text-[17px] text-inputPlaceholder rounded-md border-inputBorder bg-gray-100 placeholder-inputPlaceholder flex w-full appearance-none items-center border border-solid p-[10px] font-sans text-base leading-normal shadow-none focus-visible:outline-blue-600"
                        id="headlessui-listbox-button-29"
                        type="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-headlessui-state=""
                        onClick={() => handlePopupOpen(`${prefix}Month`)}
                    >
                        <span className="truncate">{month || "Month"}</span>
                    </button>
                    {popupOpen === `${prefix}Month` && <Popup list={MONTHS} handleValue={handleMonth} cols={3} monthType={prefix} />}
                </div>
                <div class="mb-4 static w-full">
                    <div class="relative">
                        <button
                            class="m-0 md:text-[17px] text-inputPlaceholder rounded-md border-inputBorder bg-gray-100 placeholder-inputPlaceholder flex w-full appearance-none items-center border border-solid p-[10px] font-sans text-base leading-normal shadow-none focus-visible:outline-blue-600"
                            id="headlessui-listbox-button-31"
                            type="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-headlessui-state=""
                            onClick={() => handlePopupOpen(`${prefix}Year`)}
                        >
                            <span class="truncate">{year || "Year"}</span>
                        </button>

                        {popupOpen === `${prefix}Year` && <Popup list={YEARS} handleValue={handleYear} cols={4} yearType={prefix} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DatePicker;
