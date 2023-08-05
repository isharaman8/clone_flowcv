import { AVAILABLE_COMPONENTS } from "@utils/Constants";

const MobileNav = ({ currentComponent, setCurrentComponent, setDemo }) => {
    return (
        <div className="fixed flex flex-col gap-4 sm:hidden right-4 bottom-20 z-[8]">
            <div
                className={`flex flex-col bg-white shadow-xl border rounded-full px-4 py-4 justify-center items-center cursor-pointer ${
                    currentComponent === AVAILABLE_COMPONENTS.personalInfo ? "text-[#FC7E88]" : ""
                }`}
                onClick={() => setCurrentComponent(AVAILABLE_COMPONENTS.personalInfo)}
            >
                <img src={currentComponent === AVAILABLE_COMPONENTS.personalInfo ? "/content.svg" : "/content1.svg"} alt="content" className="w-8" />
            </div>
            <div
                className={`flex flex-col bg-white shadow-xl border rounded-full px-4 py-4 justify-center items-center cursor-pointer ${
                    currentComponent === "CUSTOMIZE" ? "text-[#FC7E88]" : ""
                } `}
                onClick={() => setCurrentComponent("CUSTOMIZE")}
            >
                <img src={currentComponent === "CUSTOMIZE" ? "/customize1.svg" : "/customize.svg"} alt="customize" className="w-8" />
            </div>
            <button
                type="button"
                class="border-none cursor-pointer bg-black appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 transition-transform duration-200 hover:scale-[1.03] min-h-[30px] min-w-[30px] text-white bg-primaryBlack px-4 py-4 rounded-full"
                fdprocessedid="sp12yj"
                onClick={() => setDemo(true)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 38" class="w-10">
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.8"
                        d="M33.049 18.226v-5.367l-8.225-8.177H14.025c-3.343 0-6.224 2.587-6.224 5.78v16.642c0 3.373 2.691 6.025 6.224 6.025.825 0 4.442-.06 6.25 0"
                    ></path>
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.8"
                        d="M24.398 4.663v4.509c0 2.201 1.865 3.987 4.17 3.991 2.137.005 4.323.006 4.471-.003"
                    ></path>
                    <ellipse
                        cx="29.41"
                        cy="28.15"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.8"
                        rx="6.386"
                        ry="5.805"
                    ></ellipse>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M33.852 32.49l2.503 2.27"></path>
                </svg>
            </button>
        </div>
    );
};

export default MobileNav;
