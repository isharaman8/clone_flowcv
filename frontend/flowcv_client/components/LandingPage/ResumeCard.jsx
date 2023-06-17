import React from "react";

const ResumeCard = () => {
    return (
        <div className="flex flex-col items-center p-8 pt-9 rounded border-solid border-black border-2 w-11/12 max-w-[800px] mx-auto mt-44">
            <h3 className="text-2xl xl:text-3xl font-bold text-primaryBlack text-center">Build your resume online</h3>
            <a
                className="flex border-none cursor-pointer appearance-none touch-manipulation items-center justify-center outline-none hover:opacity-80 px-7 rounded-full font-extrabold h-15 text-[17px] min-w-[180px] text-white bg-gradient-to-r from-pink-600 to-red-300 mt-6 md:mt-7 py-4 w-48"
                href="https://app.flowcv.com/"
            >
                Try for free
            </a>
            <p className="mt-4 text-center">No account needed</p>
        </div>
    );
};

export default ResumeCard;
