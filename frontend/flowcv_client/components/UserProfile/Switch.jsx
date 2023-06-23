import React from "react";

const Switch = ({ checked, handleToggle }) => {
    return (
        <>
            <label htmlFor="toggle" className="flex items-center cursor-pointer">
                <div className="relative">
                    <input id="toggle" type="checkbox" className="sr-only" checked={checked} onChange={handleToggle} />
                    <div className={`block  w-10 h-6 rounded-full ${checked ? "bg-gray-600" : "bg-gray-300"}`}></div>
                    <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${checked ? "translate-x-full" : ""}`}></div>
                </div>
                <div className="ml-3 text-gray-700 font-medium">Get cool product updates for your career 😎</div>
            </label>
        </>
    );
};

export default Switch;
