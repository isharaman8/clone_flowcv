import { LINKS } from "@utils/Constants";
import { _getLinksObj } from "@utils/helpers";
import { useState } from "react";

const PersonalInfo = () => {
    const [open, setOpen] = useState(false);
    const [links, setLinks] = useState(_getLinksObj());

    const toggleOpen = () => setOpen((p) => !p);
    const handleCancel = () => {
        toggleOpen();
    };
    const handleSave = () => {
        toggleOpen();
    };

    const handleSetLinks = (e) => {
        setLinks((p) => ({ ...p, [e.target.name]: e.target.value }));
    };

    return (
        <>
            <div class="w-full rounded-xl shadow-md bg-white shadow-card px-5 md:px-7 lg:px-9 relative max-w-full cursor-pointer break-words pt-6 pb-9">
                {!open && (
                    <div onClick={toggleOpen}>
                        <button
                            type="button"
                            class="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 min-h-[30px] min-w-[30px] rounded-full text-white gradient absolute top-4 right-4 h-8 w-8"
                        >
                            <img src="/resume1.svg" alt="resume1" />
                        </button>
                        <div class="mt-2">
                            <div class=" mb-4 w-16 sm:hidden">
                                <div class="sc-hxaKAp eUurRf">
                                    <div class="sc-gfXuXe iWLUGs">
                                        <img src="/personal1.svg" alt="personal1" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p class="text-xl font-bold">
                                    <span class="text-placeholderGrayOnWhite">Your name</span>
                                </p>
                            </div>
                            <div class="mt-4  grid items-center gap-3 sm:grid-cols-[1fr_90px] md:grid-cols-[1fr_110px]">
                                <div>
                                    <span class="flex items-center  text-placeholderGrayOnWhite">
                                        <img src="/email.svg" alt="email" className="w-5 mr-2" />
                                        Email
                                    </span>
                                    <span class="mt-4 flex items-center text-placeholderGrayOnWhite">
                                        <img src="/phone.svg" alt="phone" className="w-5 mr-2" />
                                        Phone
                                    </span>
                                    <span class="mt-4 flex items-center  text-placeholderGrayOnWhite">
                                        <img src="/address.svg" alt="address" className="w-5 mr-2" />
                                        Address
                                    </span>
                                </div>
                                <div class="hidden sm:block">
                                    <div class="sc-hxaKAp eUurRf">
                                        <div class="sc-gfXuXe iWLUGs">
                                            <svg width="44px" height="63px" viewBox="0 0 44 63" version="1.1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g transform="translate(0.000000, 1.000000)">
                                                        <path
                                                            d="M15,44 L17,52"
                                                            stroke="#999999"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M29,44 L27,52"
                                                            stroke="#999999"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M33.92,44 C39.41,38 43,28.82 43,21.49 C43.1333198,9.75750809 33.7324462,0.137280776 22,0 C10.2675538,0.137280776 0.866680171,9.75750809 1,21.49 C1,28.82 4.59,38 10.08,44 L33.92,44 Z"
                                                            stroke="#54596E"
                                                            stroke-width="2"
                                                            fill="#FFD578"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M33.92,39 L10.08,39 C5.15511183,33.4084083 2.03841174,26.4568424 1.14,19.06 C1.06,19.86 1,20.67 1,21.49 C1,28.82 4.59,38 10.08,44 L33.92,44 C39.41,38 43,28.82 43,21.49 C43,20.67 42.94,19.86 42.86,19.06 C41.9615883,26.4568424 38.8448882,33.4084083 33.92,39 Z"
                                                            fill="#54596E"
                                                            opacity="0.15"
                                                        ></path>
                                                        <path
                                                            d="M28.25,44 C31.12,38 33,28.82 33,21.49 C33,9.62 28.08,0 22,0 C15.92,0 11,9.62 11,21.49 C11,28.82 12.88,38 15.75,44 L28.25,44 Z"
                                                            stroke="#54596E"
                                                            stroke-width="2"
                                                            fill="#F4A14E"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></path>
                                                        <ellipse fill="#54596E" cx="22" cy="32" rx="3" ry="5"></ellipse>
                                                        <circle fill="#54596E" cx="6" cy="21" r="2"></circle>
                                                        <circle fill="#54596E" cx="38" cy="21" r="2"></circle>
                                                        <polygon
                                                            stroke="#54596E"
                                                            stroke-width="2"
                                                            fill="#A1B7FF"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            points="27 61 17 61 16 52 28 52"
                                                        ></polygon>
                                                        <path
                                                            d="M14,52 L30,52"
                                                            stroke="#54596E"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {open && (
                    <div class="">
                        <div>
                            <div class="mb-4 grid grid-cols-[auto_min-content] items-center gap-2">
                                <h3 class="text-xl font-extrabold md:text-2xl">Edit personal details</h3>
                            </div>
                            <div class="grid w-full grid-cols-1 items-center md:grid-cols-[auto_min-content] md:gap-6 xl:gap-8 justify-stretch">
                                <div className="order-2 md:order-1 w-full">
                                    <div class="mb-4 w-full">
                                        <label
                                            for="inputfullName"
                                            class="text-black mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]"
                                        >
                                            <span>Full name</span>
                                        </label>
                                        <div class="relative flex items-center">
                                            <input
                                                name="fullName"
                                                id="inputfullName"
                                                type="text"
                                                placeholder="Enter your title, first- and last name"
                                                class="h-12 w-full appearance-none rounded-md text-base leading-normal shadow-none outline-none md:text-[17px] font-sans m-0 placeholder-inputPlaceholder bg-gray-100 border border-solid border-inputBorder text-inputText p-[10px]"
                                                autocomplete="off"
                                                value=""
                                            />
                                        </div>
                                    </div>
                                    <div class="mb-4 w-full">
                                        <label
                                            for="inputjobTitle"
                                            class="text-black mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]"
                                        >
                                            <span>Job title</span>
                                            <span class="ml-2 text-[11px]  text-gray-400">optional</span>
                                        </label>
                                        <div class="relative flex items-center">
                                            <input
                                                name="jobTitle"
                                                id="inputjobTitle"
                                                type="text"
                                                placeholder="Enter Job title"
                                                class="h-12 w-full appearance-none rounded-md text-base leading-normal shadow-none outline-none md:text-[17px] font-sans m-0 placeholder-inputPlaceholder bg-gray-100 border border-solid border-inputBorder text-inputText p-[10px]"
                                                autocomplete="off"
                                                value=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="">
                                <div class="flex w-full space-x-4">
                                    <div class="mb-4 w-1/2">
                                        <label
                                            for="inputdisplayEmail"
                                            class="text-black mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]"
                                        >
                                            <span>Email</span>
                                            <span class="ml-2 text-[11px]  text-gray-400">recommended</span>
                                        </label>
                                        <div class="relative flex items-center">
                                            <input
                                                name="displayEmail"
                                                id="inputdisplayEmail"
                                                type="email"
                                                placeholder="Enter email"
                                                class="h-12 w-full appearance-none rounded-md text-base leading-normal shadow-none outline-none md:text-[17px] font-sans m-0 placeholder-inputPlaceholder bg-gray-100 border border-solid border-inputBorder text-inputText p-[10px]"
                                                autocomplete="off"
                                                value=""
                                            />
                                        </div>
                                    </div>
                                    <div class="mb-4 w-1/2">
                                        <label
                                            for="inputphone"
                                            class="text-black mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]"
                                        >
                                            <span>Phone</span>
                                            <span class="ml-2 text-[11px]  text-gray-400">recommended</span>
                                        </label>
                                        <div class="relative flex items-center">
                                            <input
                                                name="phone"
                                                id="inputphone"
                                                type="text"
                                                placeholder="Enter Phone"
                                                class="h-12 w-full appearance-none rounded-md text-base leading-normal shadow-none outline-none md:text-[17px] font-sans m-0 placeholder-inputPlaceholder bg-gray-100 border border-solid border-inputBorder text-inputText p-[10px]"
                                                autocomplete="off"
                                                value=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-4 w-full">
                                    <label
                                        for="inputaddress"
                                        class="text-black mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]"
                                    >
                                        <span>Address</span>
                                        <span class="ml-2 text-[11px]  text-gray-400">recommended</span>
                                    </label>
                                    <div class="relative flex items-center">
                                        <input
                                            name="address"
                                            id="inputaddress"
                                            type="text"
                                            placeholder="City, Country"
                                            class="h-12 w-full appearance-none rounded-md text-base leading-normal shadow-none outline-none md:text-[17px] font-sans m-0 placeholder-inputPlaceholder bg-gray-100 border border-solid border-inputBorder text-inputText p-[10px]"
                                            autocomplete="off"
                                            value=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-9">
                            <h3 class="mb-4 w-full text-2xl font-extrabold">Links</h3>
                            <div class="">
                                <div class="">
                                    <div class="flex w-full flex-wrap items-center ">
                                        {LINKS.map((c) => (
                                            <div
                                                key={c}
                                                class="flex w-auto cursor-pointer items-center justify-center rounded-md bg-gray-100 p-2 pr-[10px] text-sm text-inputPlaceholder hover:opacity-80 mr-2 mb-2"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" fill="black" class="w-[1.4em]">
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M10.8 2.452a1.3 1.3 0 10-2.6 0v5.316H2.885a1.3 1.3 0 000 2.6H8.2v5.315a1.3 1.3 0 002.6 0v-5.315h5.315a1.3 1.3 0 100-2.6H10.8V2.452z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                                <span class="ml-1">{c}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {open && (
                <div class="bg-white rounded-2xl w-full py-4 px-5 md:px-7 lg:px-9 relative max-w-full mt-4 flex justify-end items-center gap-6">
                    <button class="font-bold" onClick={handleCancel}>
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        class="flex gradient border-none cursor-pointer appearance-none touch-manipulation items-center gap-4 outline-none shadow-md rounded-full font-extrabold hover:opacity-80 text-white bg-gradient-to-r from-brandPink to-brandRed py-3 px-[2rem]"
                    >
                        <span class="flex items-center gap-2">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 16 16"
                                class="text-2xl"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                            </svg>
                            <span class="font-extralight text-xl">|</span>
                        </span>
                        Save
                    </button>
                </div>
            )}
        </>
    );
};

export default PersonalInfo;
