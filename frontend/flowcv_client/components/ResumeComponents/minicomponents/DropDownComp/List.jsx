import React from "react";
import { BsEye } from "react-icons/bs";

const List = ({ name, onClick, title, editObj }) => {
    return (
        <div className="group flex w-full cursor-pointer items-center border-b-[5px] border-solid border-inputBackground px-4 py-3 md:px-6 md:py-4">
            <div className="flex w-full items-center pr-2 group-hover:opacity-70">
                <div className="sc-ddnlvQ fNBUeZ">
                    <div className="mr-4" onClick={() => onClick(title?.toLowerCase(), editObj)}>
                        <p className="sc-jQrDum dbdSXR">{name}</p>
                    </div>
                    <div>
                        <p className="sc-jQrDum gJLjtI"></p>
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <button
                    type="button"
                    className="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 h-8 px-3 text-gray-700 hover:opacity-80"
                >
                    <BsEye />
                </button>
            </div>
        </div>
    );
};

export default List;
