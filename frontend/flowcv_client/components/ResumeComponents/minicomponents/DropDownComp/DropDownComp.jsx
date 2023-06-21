import React, { useState } from "react";
import { BiArrowToTop } from "react-icons/bi";

import List from "./List";
import { ADD_CONTENT } from "@utils/Constants";

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
                                        className="flex h-10 w-full items-center justify-center rounded-lg bg-gray-200"
                                        id="headlessui-listbox-button-17"
                                        type="button"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-headlessui-state=""
                                    >
                                        <div className="flex justify-center items-center">
                                            {ADD_CONTENT.filter((c) => title.includes(c.title))[0].icon()}
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-10/12">
                        <div className=" flex space-x-3 items-center">
                            <div className="h-10 rounded-lg group flex max-w-[320px] grow items-center justify-center border border-solid  pr-3">
                                <div className="h-10 w-full appearance-none rounded-lg text-base leading-normal shadow-none outline-none md:text-[17px] font-sans m-0 placeholder-inputPlaceholder bg-inputBackground  text-inputText p-[10px] js-resumeContentSectionNameForm">
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
