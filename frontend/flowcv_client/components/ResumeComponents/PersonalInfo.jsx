import { LINKS } from "@utils/Constants";
import { useState } from "react";
import Link from "./minicomponents/Link";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@redux/hooks";
import { addLinks, addOrUpdatePersonalInfo, resetPersonalInfo } from "@redux/resume/features";

const PersonalInfo = () => {
    // VARIABLES
    const personalInfoData = useAppSelector((state) => state.persistedReducer.resume.personalInfo);

    const [open, setOpen] = useState(false);
    const [linkArray, setLinkArray] = useState([]);

    const dispatch = useDispatch();

    // FUNCTIONS
    const toggleOpen = () => setOpen((p) => !p);

    const handleCancel = () => {
        dispatch(resetPersonalInfo());
        toggleOpen();
    };

    const handleSave = () => {
        toggleOpen();
    };

    const dispatchPersonalInfo = (payload = {}) => {
        dispatch(addOrUpdatePersonalInfo(payload));
    };

    const dispatchLinks = (payload = {}) => {
        dispatch(addLinks(payload));
    };

    const handleSetLinks = (e) => {
        dispatchLinks({ [e.target.name]: e.target.value });
    };

    const handleLink = (heading = "") => {
        setLinkArray((p) => [...p, { heading: heading, value: personalInfoData.links[heading?.toLowerCase()], handleValue: handleSetLinks }]);
    };

    const handleLinkDelete = (heading) => {
        dispatchLinks({ [heading.toLowerCase()]: null });
        setLinkArray((p) => p.filter((c) => c.heading.toLowerCase() !== heading.toLowerCase()));
    };

    return (
        <>
            <div className="w-full rounded-xl shadow-md bg-white shadow-card px-5 md:px-7 lg:px-9 relative max-w-full cursor-pointer break-words pt-6 pb-9">
                {!open && (
                    <div onClick={toggleOpen}>
                        <button
                            type="button"
                            className="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 min-h-[30px] min-w-[30px] rounded-full text-white gradient absolute top-4 right-4 h-8 w-8"
                        >
                            <img className="w-[1rem]" src="/resume1.svg" alt="resume1" />
                        </button>
                        <div className="mt-2">
                            <div className=" mb-4 w-16 sm:hidden">
                                <div className="sc-hxaKAp eUurRf">
                                    <div className="sc-gfXuXe iWLUGs">
                                        <img src="/personal1.svg" alt="personal1" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-xl font-bold">
                                    <span className="text-placeholderGrayOnWhite">{personalInfoData.fullName || "Your Name"}</span>
                                </p>
                            </div>
                            <div className="mt-4  grid items-center gap-3 sm:grid-cols-[1fr_90px] md:grid-cols-[1fr_110px]">
                                <div>
                                    <span className="flex items-center  text-placeholderGrayOnWhite">
                                        <img src="/email.svg" alt="email" className="w-5 mr-2" />
                                        {personalInfoData.email || "Email"}
                                    </span>
                                    <span className="mt-4 flex items-center text-placeholderGrayOnWhite">
                                        <img src="/phone.svg" alt="phone" className="w-5 mr-2" />
                                        {personalInfoData.phone || "Phone"}
                                    </span>
                                    <span className="mt-4 flex items-center  text-placeholderGrayOnWhite">
                                        <img src="/address.svg" alt="address" className="w-5 mr-2" />
                                        {personalInfoData.address || "Address"}
                                    </span>
                                </div>
                                <div className="hidden sm:block">
                                    <div className="sc-hxaKAp eUurRf">
                                        <div className="sc-gfXuXe iWLUGs">
                                            <svg width="44px" height="63px" viewBox="0 0 44 63" version="1.1">
                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <g transform="translate(0.000000, 1.000000)">
                                                        <path
                                                            d="M15,44 L17,52"
                                                            stroke="#999999"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M29,44 L27,52"
                                                            stroke="#999999"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M33.92,44 C39.41,38 43,28.82 43,21.49 C43.1333198,9.75750809 33.7324462,0.137280776 22,0 C10.2675538,0.137280776 0.866680171,9.75750809 1,21.49 C1,28.82 4.59,38 10.08,44 L33.92,44 Z"
                                                            stroke="#54596E"
                                                            strokeWidth="2"
                                                            fill="#FFD578"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M33.92,39 L10.08,39 C5.15511183,33.4084083 2.03841174,26.4568424 1.14,19.06 C1.06,19.86 1,20.67 1,21.49 C1,28.82 4.59,38 10.08,44 L33.92,44 C39.41,38 43,28.82 43,21.49 C43,20.67 42.94,19.86 42.86,19.06 C41.9615883,26.4568424 38.8448882,33.4084083 33.92,39 Z"
                                                            fill="#54596E"
                                                            opacity="0.15"
                                                        ></path>
                                                        <path
                                                            d="M28.25,44 C31.12,38 33,28.82 33,21.49 C33,9.62 28.08,0 22,0 C15.92,0 11,9.62 11,21.49 C11,28.82 12.88,38 15.75,44 L28.25,44 Z"
                                                            stroke="#54596E"
                                                            strokeWidth="2"
                                                            fill="#F4A14E"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <ellipse fill="#54596E" cx="22" cy="32" rx="3" ry="5"></ellipse>
                                                        <circle fill="#54596E" cx="6" cy="21" r="2"></circle>
                                                        <circle fill="#54596E" cx="38" cy="21" r="2"></circle>
                                                        <polygon
                                                            stroke="#54596E"
                                                            strokeWidth="2"
                                                            fill="#A1B7FF"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            points="27 61 17 61 16 52 28 52"
                                                        ></polygon>
                                                        <path
                                                            d="M14,52 L30,52"
                                                            stroke="#54596E"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
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
                    <div className="">
                        <div>
                            <div className="mb-4 grid grid-cols-[auto_min-content] items-center gap-2">
                                <h3 className="text-xl font-extrabold md:text-2xl">Edit personal details</h3>
                            </div>
                            <div className="grid w-full grid-cols-1 items-center md:grid-cols-[auto_min-content] md:gap-6 xl:gap-8 justify-stretch">
                                <div className="order-2 md:order-1 w-full">
                                    <div className="mb-4 w-full">
                                        <label
                                            htmlFor="inputfullName"
                                            className="text-black mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]"
                                        >
                                            <span>Full name</span>
                                        </label>
                                        <div className="relative flex items-center">
                                            <input
                                                name="fullName"
                                                id="inputfullName"
                                                type="text"
                                                placeholder="Enter your title, first- and last name"
                                                className="h-12 w-full appearance-none rounded-md text-base leading-normal shadow-none outline-none md:text-[17px] font-sans m-0 placeholder-inputPlaceholder bg-gray-100 border border-solid border-inputBorder text-inputText p-[10px]"
                                                autoComplete="off"
                                                value={personalInfoData.fullName || ""}
                                                onChange={(e) => dispatchPersonalInfo({ fullName: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4 w-full">
                                        <label
                                            htmlFor="inputjobTitle"
                                            className="text-black mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]"
                                        >
                                            <span>Job title</span>
                                            <span className="ml-2 text-[11px]  text-gray-400">optional</span>
                                        </label>
                                        <div className="relative flex items-center">
                                            <input
                                                name="jobTitle"
                                                id="inputjobTitle"
                                                type="text"
                                                placeholder="Enter Job title"
                                                className="h-12 w-full appearance-none rounded-md text-base leading-normal shadow-none outline-none md:text-[17px] font-sans m-0 placeholder-inputPlaceholder bg-gray-100 border border-solid border-inputBorder text-inputText p-[10px]"
                                                autoComplete="off"
                                                value={personalInfoData.jobTitle || ""}
                                                onChange={(e) => dispatchPersonalInfo({ jobTitle: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="">
                                <div className="flex w-full space-x-4">
                                    <div className="mb-4 w-1/2">
                                        <label
                                            htmlFor="inputdisplayEmail"
                                            className="text-black mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]"
                                        >
                                            <span>Email</span>
                                            <span className="ml-2 text-[11px]  text-gray-400">recommended</span>
                                        </label>
                                        <div className="relative flex items-center">
                                            <input
                                                name="displayEmail"
                                                id="inputdisplayEmail"
                                                type="email"
                                                placeholder="Enter email"
                                                className="h-12 w-full appearance-none rounded-md text-base leading-normal shadow-none outline-none md:text-[17px] font-sans m-0 placeholder-inputPlaceholder bg-gray-100 border border-solid border-inputBorder text-inputText p-[10px]"
                                                autoComplete="off"
                                                value={personalInfoData.email || ""}
                                                onChange={(e) => dispatchPersonalInfo({ email: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4 w-1/2">
                                        <label
                                            htmlFor="inputphone"
                                            className="text-black mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]"
                                        >
                                            <span>Phone</span>
                                            <span className="ml-2 text-[11px]  text-gray-400">recommended</span>
                                        </label>
                                        <div className="relative flex items-center">
                                            <input
                                                name="phone"
                                                id="inputphone"
                                                type="text"
                                                placeholder="Enter Phone"
                                                className="h-12 w-full appearance-none rounded-md text-base leading-normal shadow-none outline-none md:text-[17px] font-sans m-0 placeholder-inputPlaceholder bg-gray-100 border border-solid border-inputBorder text-inputText p-[10px]"
                                                autoComplete="off"
                                                value={personalInfoData.phone || ""}
                                                onChange={(e) => dispatchPersonalInfo({ phone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4 w-full">
                                    <label
                                        htmlFor="inputaddress"
                                        className="text-black mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]"
                                    >
                                        <span>Address</span>
                                        <span className="ml-2 text-[11px]  text-gray-400">recommended</span>
                                    </label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="address"
                                            id="inputaddress"
                                            type="text"
                                            placeholder="City, Country"
                                            className="h-12 w-full appearance-none rounded-md text-base leading-normal shadow-none outline-none md:text-[17px] font-sans m-0 placeholder-inputPlaceholder bg-gray-100 border border-solid border-inputBorder text-inputText p-[10px]"
                                            autoComplete="off"
                                            value={personalInfoData.address || ""}
                                            onChange={(e) => dispatchPersonalInfo({ address: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-9">
                            <h3 className="mb-4 w-full text-2xl font-extrabold">Links</h3>

                            {linkArray.map((c) => (
                                <Link
                                    heading={c.heading}
                                    value={c.value}
                                    handleValue={c.handleValue}
                                    key={c.heading}
                                    handleLinkDelete={handleLinkDelete}
                                />
                            ))}

                            <div className="">
                                <div className="">
                                    <div className="flex w-full flex-wrap items-center ">
                                        {LINKS.filter((c) => !linkArray.some((d) => d.heading.toLowerCase() === c.toLowerCase())).map((c) => (
                                            <div
                                                key={c}
                                                className="flex w-auto cursor-pointer items-center justify-center rounded-md bg-gray-100 p-2 pr-[10px] text-sm text-inputPlaceholder hover:opacity-80 mr-2 mb-2"
                                                onClick={() => handleLink(c)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" fill="black" className="w-[1.4em]">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.8 2.452a1.3 1.3 0 10-2.6 0v5.316H2.885a1.3 1.3 0 000 2.6H8.2v5.315a1.3 1.3 0 002.6 0v-5.315h5.315a1.3 1.3 0 100-2.6H10.8V2.452z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                                <span className="ml-1">{c}</span>
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
                <div className="bg-white rounded-2xl w-full py-4 px-5 md:px-7 lg:px-9 relative max-w-full mt-4 flex justify-end items-center gap-6">
                    <button className="font-bold" onClick={handleCancel}>
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="flex gradient border-none cursor-pointer appearance-none touch-manipulation items-center gap-4 outline-none shadow-md rounded-full font-extrabold hover:opacity-80 text-white bg-gradient-to-r from-brandPink to-brandRed py-3 px-[2rem]"
                    >
                        <span className="flex items-center gap-2">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 16 16"
                                className="text-2xl"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                            </svg>
                            <span className="font-extralight text-xl">|</span>
                        </span>
                        Save
                    </button>
                </div>
            )}
        </>
    );
};

export default PersonalInfo;
