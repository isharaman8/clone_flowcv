import React from "react";

const Link = ({ heading, value, handleValue }) => {
    return (
        <div class="mb-4" style="width: 100%;">
            <label for="inputwebsite" class="text-primaryBlack mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]">
                <span>{heading}</span>
                <span class="ml-2 text-[11px]  text-gray-400">optional</span>
            </label>
            <div class="relative flex items-center">
                <input
                    name={heading.toLowerCase()}
                    type="text"
                    placeholder="Enter website link"
                    class="h-inputHeight w-full appearance-none rounded-medium text-base leading-normal shadow-none outline-none md:text-[17px] font-sans m-0 placeholder-inputPlaceholder bg-inputBackground border border-solid border-inputBorder text-inputText p-[10px]"
                    autocomplete="off"
                    value={value}
                    onInput={handleValue}
                />
                <div class="relative">
                    <button
                        type="button"
                        class="cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 bg-white text-uncheckedGray border-uncheckedGray border border-solid ml-1 h-inputHeight rounded-medium pl-3 pr-4"
                    >
                        <svg viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" class="mr-[2px] mb-[1px] h-[18px] w-[18px]">
                            <path
                                d="M10.563 6.47a4.678 4.678 0 0 0-1.126-.812.387.387 0 0 0-.437.094l-.125.125c-.281.25-.438.594-.469.937-.031.157.063.313.188.407.281.125.531.28.719.5a2.622 2.622 0 0 1 0 3.719l-2.344 2.343a2.622 2.622 0 0 1-3.719 0 2.622 2.622 0 0 1 0-3.718l1.438-1.438a.353.353 0 0 0 .093-.344c-.093-.375-.125-.781-.156-1.187 0-.313-.406-.47-.625-.25L2.031 8.814c-1.719 1.72-1.719 4.5 0 6.188 1.688 1.719 4.469 1.719 6.188 0 2.562-2.563 2.437-2.438 2.625-2.688 1.406-1.687 1.312-4.25-.281-5.843Zm4.874-4.874c-1.687-1.719-4.468-1.719-6.187 0-2.563 2.562-2.438 2.437-2.625 2.687-1.406 1.688-1.313 4.25.281 5.844.344.344.719.594 1.125.813a.387.387 0 0 0 .438-.094l.125-.125c.281-.25.437-.594.469-.938.03-.156-.063-.312-.188-.406-.281-.125-.531-.281-.719-.5a2.622 2.622 0 0 1 0-3.719L10.5 2.814a2.622 2.622 0 0 1 3.719 0 2.622 2.622 0 0 1 0 3.72L12.78 7.97a.353.353 0 0 0-.094.343c.094.375.126.782.157 1.188 0 .312.406.469.625.25l1.969-1.969c1.718-1.719 1.718-4.5 0-6.187Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        <span class="ml-1 whitespace-nowrap">Link</span>
                    </button>
                </div>
                <button
                    type="button"
                    class="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 bg-red-50 text-red-800 min-w-inputHeight ml-1 h-inputHeight w-inputHeight min-w-min flex-[0_0_theme(spacing.inputHeight)] rounded-medium"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 17" class="w-5">
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M13.38 7.258s-.361 4.49-.571 6.382c-.1.903-.658 1.432-1.572 1.449-1.74.031-3.481.033-5.22-.003-.88-.018-1.428-.554-1.526-1.442-.211-1.908-.571-6.386-.571-6.386M14.302 5.106H2.997M12.124 5.106c-.523 0-.974-.37-1.076-.883l-.162-.81a.853.853 0 00-.825-.633H7.24a.853.853 0 00-.825.632l-.162.811a1.099 1.099 0 01-1.076.883"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Link;
