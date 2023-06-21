import React from "react";

const Link = ({ heading, value, handleValue, handleLinkDelete }) => {
    console.log(heading, value, handleValue, handleLinkDelete);

    return (
        <div className="mb-4 w-full">
            <label for="inputwebsite" className="text-primaryBlack mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]">
                <span>{heading}</span>
                <span className="ml-2 text-[11px]  text-gray-400">optional</span>
            </label>
            <div className="relative flex items-center">
                <input
                    name={heading.toLowerCase()}
                    type="text"
                    placeholder="Enter website link"
                    className="h-10 w-full appearance-none rounded-md text-base leading-normal shadow-none outline-none md:text-[17px] font-sans m-0 placeholder-inputPlaceholder bg-gray-100 border border-solid border-inputBorder text-inputText p-[10px]"
                    autoComplete="off"
                    value={value}
                    onInput={handleValue}
                />
                <div className="relative">
                    <button
                        type="button"
                        className="cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 bg-white text-uncheckedGray border-uncheckedGray border border-solid ml-1 h-10 rounded-md pl-3 pr-4"
                    >
                        <img src="/interest2.svg" alt="link" className="w-7" />
                        <span className="ml-1 whitespace-nowrap">Link</span>
                    </button>
                </div>
                <button
                    type="button"
                    className="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 bg-red-50 text-red-800 ml-1 h-10  min-w-10 flex-[0_0_theme(spacing.inputHeight)] rounded-md p-2"
                    onClick={() => handleLinkDelete(heading)}
                >
                    <img src="/delete.svg" alt="delete" className="w-7" />
                </button>
            </div>
        </div>
    );
};

export default Link;
