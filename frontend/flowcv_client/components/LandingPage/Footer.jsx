import React from "react";

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <div className="w-[80vw] mt-10 mb-5">
                <img src={"/flowcv.svg"} alt="img" className="w-40" />

                {/* FEEDBACK */}
                <div className="flex flex-row items-start justify-between mt-10">
                    <div>
                        <label htmlFor="footerUserFeedback" className="text-xl font-bold">
                            Do you have feedback?
                        </label>
                        <div className="mt-2 flex max-w-[500px] items-center border-b-2 border-solid border-gray-300 pb-2">
                            <textarea
                                id="userFeedbackArea"
                                name="userFeedback"
                                className="mt-1 block grow bg-transparent text-[.9rem] resize-none appearance-none text-xl placeholder-gray-500 outline-none border-none overflow-auto overflow-y-hidden border-transparent focus:outline-none focus:border-transparent shadow-none outline-0 outline-offset-0 focus:outline-0 focus:outline-offset-0 ring-transparent focus:ring-transparent p-0"
                                placeholder="Enter feedback"
                                rows="1"
                            ></textarea>
                            <button
                                type="submit"
                                className="flex border-none cursor-pointer appearance-none touch-manipulation items-center justify-center outline-none hover:opacity-80 text-white bg-gradient-to-r from-pink-600 to-red-300 h-11 w-11 min-w-min rounded-full"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 25" className="w-7">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9.723 18.952l5.275-6.25-5.275-6.25"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-[auto_auto] md:justify-end gap-16 md:gap-24 lg:gap-40">
                        <div className="flex flex-col items-start">
                            <h3 className="text-pink-600 text-xl">FlowCV</h3>
                            <a href="/about" className="mt-3 block py-3 text-base hover:opacity-80 ">
                                About
                            </a>
                            <a href="/partners" target="_blank" className="block py-3 text-base hover:opacity-80">
                                Partners
                            </a>
                            <a href="/privacy-policy" target="_blank" className="block py-3 text-base hover:opacity-80">
                                Privacy Policy
                            </a>
                            <a href="/terms-of-service" target="_blank" className="block py-3 text-base hover:opacity-80">
                                Terms of Service
                            </a>
                        </div>
                        <div className="flex flex-col items-start">
                            <h3 className="text-pink-600 text-xl">Help</h3>
                            <a href="/pricing" target="_blank" className="mt-3 block py-3 text-base hover:opacity-80">
                                Pricing
                            </a>
                            <a href="mailto:contact@flowcv.com" className="block py-3 text-base hover:opacity-80" target="_blank">
                                Contact us
                            </a>
                            <a
                                target="_blank"
                                href="https://drive.google.com/drive/folders/1smxbAvm_OL8ZmPOyTEac5sOi2ibu5uL2?usp=sharing"
                                className="block py-3 text-base hover:opacity-80"
                            >
                                Press Kit
                            </a>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="flex flex-row justify-around items-center mt-20">
                    <div className="w-full">
                        <div className="flex items-center space-x-4 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 33 33" className="w-7">
                                <path
                                    fill="currentColor"
                                    d="M16.678.5C7.846.5.694 7.668.694 16.5s7.152 16 15.984 16c8.848 0 16.016-7.168 16.016-16S25.526.5 16.678.5zm11.088 9.6h-4.72c-.512-2-1.248-3.92-2.208-5.696a12.847 12.847 0 016.928 5.696zM16.694 3.764A22.539 22.539 0 0119.75 10.1h-6.112a22.539 22.539 0 013.056-6.336zM4.31 19.7a13.187 13.187 0 01-.416-3.2c0-1.104.16-2.176.416-3.2h5.408c-.128 1.056-.224 2.112-.224 3.2s.096 2.144.224 3.2H4.31zm1.312 3.2h4.72c.512 2 1.248 3.92 2.208 5.696A12.779 12.779 0 015.622 22.9zm4.72-12.8h-4.72a12.779 12.779 0 016.928-5.696 25.039 25.039 0 00-2.208 5.696zm6.352 19.136a22.539 22.539 0 01-3.056-6.336h6.112a22.539 22.539 0 01-3.056 6.336zm3.744-9.536H12.95c-.144-1.056-.256-2.112-.256-3.2s.112-2.16.256-3.2h7.488c.144 1.04.256 2.112.256 3.2s-.112 2.144-.256 3.2zm.4 8.896a25.039 25.039 0 002.208-5.696h4.72a12.847 12.847 0 01-6.928 5.696zM23.67 19.7c.128-1.056.224-2.112.224-3.2s-.096-2.144-.224-3.2h5.408c.256 1.024.416 2.096.416 3.2s-.16 2.176-.416 3.2H23.67z"
                                ></path>
                            </svg>
                            <div className="w-28">
                                <div className="relative inline-block w-full">
                                    <select
                                        className="flex w-full cursor-pointer appearance-none items-center rounded-full border-2 border-primaryBlack bg-transparent px-4 pr-8 font-bold leading-tight shadow focus:outline-none js-LanguageSelect bg-none h-12"
                                        aria-label="language selection"
                                        name="selectedLanguage"
                                    >
                                        <option value="en" selected="">
                                            English
                                        </option>
                                        <option value="de">Deutsch</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pr-4 pt-[1px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8" className="w-4">
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12.834 1.083L7 6.917 1.167 1.084"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:order-2">
                        <div className="flex flex-col md:-mr-3 md:flex-row md:items-center md:justify-end">
                            <p className="flex items-center text-xl w-[15rem] font-extrabold md:mr-8 md:font-normal">Share with your friends</p>
                            <div className="mt-5 -ml-3 grid grid-cols-[min-content_min-content_min-content_min-content_min-content]  gap-6 md:mt-0 md:ml-0 ">
                                <button
                                    type="button"
                                    className="flex border-none cursor-pointer appearance-none touch-manipulation items-center justify-center outline-none hover:opacity-80"
                                    id="shareBtn__twitter"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-11 p-3 hover:opacity-80">
                                        <path
                                            fill="#200E32"
                                            d="M20 2.924a8.548 8.548 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.193 8.193 0 01-2.6.992 4.099 4.099 0 00-7.093 2.804c0 .325.028.638.096.935-3.409-.166-6.425-1.8-8.451-4.288A4.128 4.128 0 00.83 3.82c0 1.42.732 2.679 1.821 3.408A4.05 4.05 0 01.8 6.723v.045a4.12 4.12 0 003.285 4.028 4.094 4.094 0 01-1.075.135c-.262 0-.527-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.856a8.238 8.238 0 01-5.084 1.75A7.67 7.67 0 010 15.41a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.668 0-.18-.006-.356-.015-.53A8.179 8.179 0 0020 2.925z"
                                        ></path>
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    className="flex border-none cursor-pointer appearance-none touch-manipulation items-center justify-center outline-none hover:opacity-80"
                                    id="shareBtn__linkedin"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-11 p-3 hover:opacity-80 ">
                                        <g clip-path="url(#clip0_260_2916)">
                                            <path
                                                fill="#200E32"
                                                d="M18.524 0H1.476A1.476 1.476 0 000 1.476v17.048A1.476 1.476 0 001.476 20h17.048A1.476 1.476 0 0020 18.524V1.476A1.476 1.476 0 0018.524 0zM5.96 17.038H2.954V7.486h3.007v9.552zM4.456 6.162a1.726 1.726 0 111.736-1.724 1.702 1.702 0 01-1.736 1.724zm12.588 10.884H14.04v-5.218c0-1.54-.654-2.014-1.499-2.014-.891 0-1.766.672-1.766 2.053v5.179H7.767V7.493h2.891v1.324h.04c.29-.588 1.306-1.592 2.858-1.592 1.677 0 3.49.996 3.49 3.912l-.002 5.909z"
                                            ></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_260_2916">
                                                <path fill="#fff" d="M0 0H20V20H0z"></path>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    className="flex border-none cursor-pointer appearance-none touch-manipulation items-center justify-center outline-none hover:opacity-80"
                                    id="shareBtn__reddit"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21" className="w-11 p-3 hover:opacity-80">
                                        <g clip-path="url(#clip0_741_3518)">
                                            <path
                                                fill="#200E32"
                                                d="M20 10.191a2.211 2.211 0 00-3.747-1.582c-1.509-.993-3.55-1.625-5.81-1.705l1.236-3.891 3.347.784-.005.048c0 .994.812 1.803 1.811 1.803.999 0 1.81-.809 1.81-1.803a1.81 1.81 0 00-3.494-.654l-3.607-.846a.308.308 0 00-.367.208L9.796 6.892c-2.365.028-4.508.665-6.083 1.687a2.202 2.202 0 00-1.5-.593C.993 7.986 0 8.976 0 10.191c0 .808.444 1.51 1.097 1.893a3.93 3.93 0 00-.071.714c0 3.259 4.006 5.91 8.932 5.91s8.934-2.651 8.934-5.91a3.96 3.96 0 00-.063-.675A2.194 2.194 0 0020 10.19zM5.647 11.704a1.317 1.317 0 012.636 0c0 .724-.591 1.312-1.318 1.312a1.317 1.317 0 01-1.318-1.312zm7.55 3.891c-.664.661-1.706.983-3.186.983L10 16.575l-.01.003c-1.482 0-2.524-.322-3.188-.983a.307.307 0 010-.436.31.31 0 01.439 0c.542.54 1.44.801 2.748.801l.011.003.01-.003c1.308 0 2.207-.262 2.75-.801.12-.121.317-.12.438 0 .12.12.12.316 0 .436zm-.157-2.579a1.316 1.316 0 01-1.317-1.312 1.317 1.317 0 012.635 0c0 .724-.591 1.312-1.318 1.312z"
                                            ></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_741_3518">
                                                <path fill="#fff" d="M0 0H20V20H0z" transform="translate(0 .375)"></path>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    className="flex border-none cursor-pointer appearance-none touch-manipulation items-center justify-center outline-none hover:opacity-80"
                                    id="shareBtn__fb"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-11 p-3 hover:opacity-80">
                                        <path
                                            fill="#200E32"
                                            d="M13.175 3.32h1.826V.14A23.576 23.576 0 0012.34 0C9.708 0 7.905 1.656 7.905 4.7v2.8H5v3.555h2.905V20h3.562v-8.944h2.787l.443-3.555h-3.231V5.05c0-1.027.277-1.73 1.709-1.73z"
                                        ></path>
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    className="flex border-none cursor-pointer appearance-none touch-manipulation items-center justify-center outline-none hover:opacity-80"
                                    id="shareBtn__wa"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21" className="w-11 p-3  hover:opacity-80">
                                        <path
                                            fill="#200E32"
                                            d="M10 .375c-5.522 0-10 4.478-10 10C0 12.251.527 14 1.426 15.5L.09 20.375l4.978-1.307A9.946 9.946 0 0010 20.375c5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zM6.577 5.71c.163 0 .33 0 .474.007.178.004.372.017.558.428.22.488.702 1.713.763 1.837.062.125.106.27.02.433-.082.167-.124.268-.244.415-.124.144-.26.322-.373.43-.124.124-.252.26-.109.508.143.247.641 1.059 1.377 1.714.946.845 1.744 1.104 1.992 1.229.248.124.392.104.536-.062.147-.163.62-.72.786-.969.162-.248.328-.205.553-.123.229.081 1.446.681 1.694.805.249.124.412.186.474.287.064.104.064.6-.141 1.178-.206.578-1.217 1.136-1.67 1.175-.458.043-.885.206-2.974-.617-2.52-.992-4.11-3.573-4.233-3.74-.125-.162-1.01-1.342-1.01-2.558 0-1.221.64-1.82.865-2.067a.91.91 0 01.662-.31z"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
