import { NULL_VALUE } from "@utils/Constants";
import React, { useEffect, useState } from "react";

const LinkPopup = ({ setShowLink, setData, data }) => {
    const handleCancel = () => {
        setData({ link: NULL_VALUE });
        setShowLink(false);
    };

    const handleSave = () => {
        setShowLink(false);
    };

    useEffect(() => {
        console.log("DATA LINK", data?.link);
    }, [data]);

    return (
        <div className="absolute right-0 px-6 py-4 border z-10 bg-white rounded-md shadow-2xl">
            <label htmlFor="link" className="text-sm font-semibold">
                Link URL
            </label>
            <br />
            <input
                className="bg-gray-100 w-full rounded-md px-2 py-3 mb-2 mt-1"
                type="text"
                name="link"
                id="link"
                onChange={(e) => setData({ link: e.target.value || NULL_VALUE })}
                value={data?.link || ""}
                placeholder="Enter link"
            />
            <div className="flex w-full gap-4 justify-between">
                <button
                    className="mt-1 px-[2rem] font-bold text-sm rounded-full border-4 border-[#F0F2F6] h-10 w-full min-w[120px] hover:border-[#f2f4f7]"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
                <button
                    className="mt-1 gradient border-none cursor-pointer outline-none hover:opacity-80 px-[2rem] w-full font-bold text-sm rounded-full text-white"
                    onClick={handleSave}
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default LinkPopup;
