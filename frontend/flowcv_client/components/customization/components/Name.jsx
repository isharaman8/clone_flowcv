import { useAppSelector } from "@redux/hooks";
import { updateCustomization } from "@redux/resume/features";
import { CREATIVE_FONTS } from "@utils/Constants";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Name = () => {
    const { name: storeName } = useAppSelector((state) => state.persistedReducer.resume.customization);

    const dispatch = useDispatch();

    const [name, setName] = useState({
        size: storeName.size || "",
        bold: storeName.bold || false,
        creativeFont: storeName.creativeFont || false,
        fontFamily: storeName.fontFamily || "",
    });

    const handleCustomization = () => {
        dispatch(updateCustomization({ key: "name", value: name }));
    };

    useEffect(() => {
        handleCustomization();
    }, [name]);

    return (
        <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
            <h1 className="text-xl font-bold mb-5">Name</h1>
            <div>
                <p className="font-semibold text-sm">Size</p>
                <div className="flex gap-4">
                    <div
                        className={`h-[2.4rem] w-[2.4rem] grid place-content-center text-sm border ${
                            name.size === "XS" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setName({ ...name, size: "XS" })}
                    >
                        XS
                    </div>
                    <div
                        className={`h-[2.4rem] w-[2.4rem] grid place-content-center text-sm border ${
                            name.size === "S" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setName({ ...name, size: "S" })}
                    >
                        S
                    </div>
                    <div
                        className={`h-[2.4rem] w-[2.4rem] grid place-content-center text-sm border ${
                            name.size === "M" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setName({ ...name, size: "M" })}
                    >
                        M
                    </div>
                    <div
                        className={`h-[2.4rem] w-[2.4rem] grid place-content-center text-sm border ${
                            name.size === "L" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setName({ ...name, size: "L" })}
                    >
                        L
                    </div>
                    <div
                        className={`h-[2.4rem] w-[2.4rem] grid place-content-center text-sm border ${
                            name.size === "XL" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setName({ ...name, size: "XL" })}
                    >
                        XL
                    </div>
                </div>
            </div>
            <div className="flex items-center text-sm my-4">
                <input
                    id="name"
                    type="checkbox"
                    className="h-6 w-6 rounded border-gray-200 border-1 text-indigo-600 focus:ring-indigo-600 mr-2"
                    checked={name.bold}
                    onChange={(event) => setName({ ...name, bold: event.target.checked })}
                />
                <label htmlFor="name" className="cursor-pointer">
                    Name Bold
                </label>
            </div>
            <div className="my-4">
                <p className="font-semibold text-sm">Font</p>
                <div className="flex gap-4">
                    <div
                        className={`py-2 px-[4rem] text-sm border ${
                            !name.creativeFont ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setName({ ...name, creativeFont: false })}
                    >
                        Body Font
                    </div>
                    <div
                        className={`py-2 px-[4rem] text-sm border ${
                            name.creativeFont ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setName({ ...name, creativeFont: true })}
                    >
                        Creative
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[30rem] grid grid-cols-3 gap-4 my-4">
                {name.creativeFont &&
                    CREATIVE_FONTS.map((c) => (
                        <div
                            onClick={() => setName({ ...name, fontFamily: c })}
                            key={c}
                            className={`${
                                name.fontFamily === c ? "border-blue-700 bg-blue-100 text-blue-700" : "border-gray-300 bg-white text-black"
                            } cursor-pointer hover:opacity-80 border text-xs rounded-md text-center grid place-content-center w-full h-[40px]`}
                            style={{ fontFamily: c.toLowerCase() }}
                        >
                            <span>{c}</span>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Name;
