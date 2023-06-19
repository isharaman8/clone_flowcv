import React, { useState } from "react";
import { BiArrowToTop } from "react-icons/bi";

import List from "./List";

const DropDownComp = ({ list = [], title, handleClick, handleEditObj }) => {
    const [show, setShow] = useState(false);

    const toggleShow = () => setShow((p) => !p);

    const handleEditObjWrapper = (key, value) => {
        handleEditObj(key, value);
        handleClick();
        toggleShow();
    };

    return (
        <div id="certificateWrapper" draggable="false" className="sc-cbTmKc iCNYLv mt-5 shadow-lg rounded-3xl">
            <div
                className={`flex w-full cursor-pointer justify-between bg-white p-4 md:p-6 rounded-t-3xl ${
                    !show && "rounded-b-3xl transition-all"
                } border-b-[5px] border-solid border-inputBackground`}
            >
                <div className="flex flex-grow items-center space-x-4 pr-2">
                    <div className="flex items-center justify-center">
                        <div className="w-full">
                            <div className="w-18">
                                <div className="relative w-8">
                                    <button
                                        className="flex h-10 w-full items-center rounded-lg bg-gray-200"
                                        id="headlessui-listbox-button-17"
                                        type="button"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-headlessui-state=""
                                    >
                                        <div className="sc-hFxENk dbYcMo">
                                            <div className="flex items-center justify-center pb-[1px] text-lg">
                                                <span color="#200E32" className="sc-iLOkMM cBCTWE">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path d="M160 64c0-35.3 28.7-64 64-64H384V128c0 17.7 14.3 32 32 32H544V448c0 35.3-28.7 64-64 64H253.3c1.8-5.1 2.7-10.5 2.7-16V416c1.3-.5 2.5-1 3.8-1.5c6.8-3 14.3-7.8 20.6-15.5c6.4-7.9 10.1-17.2 11.4-27.1c.5-3.6 .8-5.7 1.1-7.1c1.1-.9 2.8-2.3 5.6-4.5c19.9-15.4 27.1-42.2 17.5-65.5c-1.4-3.3-2.1-5.4-2.6-6.7c.5-1.4 1.2-3.4 2.6-6.7c9.5-23.3 2.4-50.1-17.5-65.5c-2.8-2.2-4.5-3.6-5.6-4.5c-.3-1.4-.6-3.6-1.1-7.1c-3.4-24.9-23-44.6-47.9-47.9c-3.6-.5-5.7-.8-7.1-1.1c-.9-1.1-2.3-2.8-4.5-5.6c-15.4-19.9-42.2-27.1-65.5-17.5c-2.6 1.1-5.1 2.3-6.6 3l-.1 .1V64zm384 64H416V0L544 128zM141.2 161.6L157 168c1.9 .8 4.1 .8 6.1 0l15.8-6.5c10-4.1 21.5-1 28.1 7.5l10.5 13.5c1.3 1.7 3.2 2.7 5.2 3l16.9 2.3c10.7 1.5 19.1 9.9 20.5 20.5l2.3 16.9c.3 2.1 1.4 4 3 5.2l13.5 10.5c8.5 6.6 11.6 18.1 7.5 28.1L280 285c-.8 1.9-.8 4.1 0 6.1l6.5 15.8c4.1 10 1 21.5-7.5 28.1l-13.5 10.5c-1.7 1.3-2.7 3.2-3 5.2l-2.3 16.9c-1.5 10.7-9.9 19.1-20.5 20.6L224 390.2V496c0 5.9-3.2 11.3-8.5 14.1s-11.5 2.5-16.4-.8L160 483.2l-39.1 26.1c-4.9 3.3-11.2 3.6-16.4 .8s-8.5-8.2-8.5-14.1V390.2l-15.5-2.1c-10.7-1.5-19.1-9.9-20.5-20.6l-2.3-16.9c-.3-2.1-1.4-4-3-5.2L41.1 334.9c-8.5-6.6-11.6-18.1-7.5-28.1L40 291c.8-1.9 .8-4.1 0-6.1l-6.5-15.8c-4.1-10-1-21.5 7.5-28.1l13.5-10.5c1.7-1.3 2.7-3.2 3-5.2l2.3-16.9c1.5-10.7 9.9-19.1 20.5-20.5l16.9-2.3c2.1-.3 4-1.4 5.2-3l10.5-13.5c6.6-8.5 18.1-11.6 28.1-7.5zM224 288c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64z"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <BiArrowToTop />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-10/12">
                        <div className=" flex space-x-3">
                            <div className="h-10 rounded-lg group flex max-w-[320px] grow items-center border border-solid  pr-3">
                                <div className="h-10 w-full appearance-none rounded-lg text-base leading-normal shadow-none outline-none md:text-[17px] font-sans m-0 placeholder-inputPlaceholder bg-inputBackground border border-solid border-inputBorder text-inputText p-[10px] js-resumeContentSectionNameForm">
                                    {title}
                                </div>
                                <div className="group-hover:opacity-80">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" className="text-primaryBlack w-[18px]">
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M6.704 1.627H4.523c-1.794 0-2.919 1.27-2.919 3.068v4.85c0 1.797 1.12 3.067 2.919 3.067H9.67c1.8 0 2.92-1.27 2.92-3.068v-2.35"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M5.15 6.37l4.36-4.359a1.391 1.391 0 011.966 0l.71.71a1.39 1.39 0 010 1.967l-4.38 4.38c-.238.237-.56.37-.896.37H4.725l.054-2.204c.009-.324.141-.634.37-.864z"
                                            clipRule="evenodd"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M8.847 2.685l2.663 2.663"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex content-end items-center" onClick={toggleShow}>
                    <div className={`sc-jNHgKk dEeAID transform ${show && "rotate-180"} translate-z-0 transform-origin-center`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[1.4em]">
                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            {show && (
                <div className="sc-hZyDwR cSREZu h-auto">
                    <div className="w-full">
                        <div data-rbd-droppable-id="droppable-1" data-rbd-droppable-context-id="9">
                            <div
                                data-rbd-draggable-context-id="9"
                                data-rbd-draggable-id="ioeBtMzB7ww3YxVO7KXGf"
                                tabIndex="0"
                                role="button"
                                aria-describedby="rbd-hidden-text-9-hidden-text-30"
                                data-rbd-drag-handle-draggable-id="ioeBtMzB7ww3YxVO7KXGf"
                                data-rbd-drag-handle-context-id="9"
                                draggable="false"
                            >
                                {list.map((c, idx) => (
                                    <List key={idx} name={c.name} onClick={handleEditObjWrapper} editObj={c} title={title} />
                                ))}
                            </div>
                        </div>
                        <div className="pt-5 pb-5 flex flex-row justify-center items-center bg-white rounded-b-3xl">
                            <button
                                type="button"
                                onClick={() => handleEditObjWrapper(title.toLowerCase(), null)}
                                className="cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 px-7 py-2 font-extrabold h-10 text-[15px] text-primaryBlack border-4 border-solid border-gray-200 rounded-full min-w-36"
                            >
                                <span className="flex items-center justify-center mr-2 -ml-1 md:mr-3 md:-ml-[6px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" fill="currentColor" className="w-[1.4em]">
                                        <path
                                            fillRule="evenodd"
                                            d="M10.8 2.452a1.3 1.3 0 10-2.6 0v5.316H2.885a1.3 1.3 0 000 2.6H8.2v5.315a1.3 1.3 0 002.6 0v-5.315h5.315a1.3 1.3 0 100-2.6H10.8V2.452z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </span>
                                {title}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropDownComp;
