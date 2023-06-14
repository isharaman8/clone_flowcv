import React, { useEffect } from "react";

const Popup = ({ handleValue, list, cols = 3, monthType = "", yearType = "" }) => {
    useEffect(() => {}, []);

    return (
        <div
            className={`absolute top-0 left-0 min-w-[400px] grid ${
                cols === 3 ? "grid-cols-3" : "grid-cols-4"
            } bg-gray-200 z-50 p-3 gap-3 scroll-m-0 overflow-y-scroll max-h-[400px]`}
        >
            {list.map((c) => (
                <p
                    key={c}
                    className="bg-white p-2 border text-xs border-gray-300 rounded-md hover:bg-gray-100 hover:cursor-pointer text-center"
                    onClick={() => {
                        monthType ? handleValue({ [`${monthType}Month`]: c }) : handleValue({ [`${yearType}Year`]: c });
                    }}
                >
                    {c}
                </p>
            ))}
        </div>
    );
};

export default Popup;
