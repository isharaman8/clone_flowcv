import { useAppSelector } from "@redux/hooks";
import { updateCustomization } from "@redux/resume/features";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const HeadersElement = ({ heading, setHeading }) => {
    const HeaderOne = (i) => {
        return (
            <svg width="52" height="17" viewBox="0 0 52 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="52" height="9" fill={`${i === heading.style ? "#4B55DC" : "#C2C2C2"}`} />
                <rect y="14" width="52" height="3" fill={`${i === heading.style ? "#4B55DC" : "#C2C2C2"}`} />
            </svg>
        );
    };

    const HeaderTwo = (i) => {
        return (
            <svg width="76" height="24" viewBox="0 0 76 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="13" y="7" width="52" height="9" fill={`${i === heading.style ? "#4B55DC" : "#C2C2C2"}`} />
                <rect x="1.5" y="1.5" width="73" height="21" stroke={`${i === heading.style ? "#4B55DC" : "#C2C2C2"}`} stroke-width="3" />
            </svg>
        );
    };

    const HeaderThree = (i) => {
        return (
            <svg width="52" height="9" viewBox="0 0 52 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="52" height="9" fill={`${i === heading.style ? "#4B55DC" : "#C2C2C2"}`} />
            </svg>
        );
    };

    const HeaderFour = (i) => {
        return (
            <svg width="52" height="23" viewBox="0 0 52 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="7" width="52" height="9" fill={`${i === heading.style ? "#4B55DC" : "#C2C2C2"}`} />
                <rect y="20" width="52" height="3" fill={`${i === heading.style ? "#4B55DC" : "#C2C2C2"}`} />
                <rect width="52" height="3" fill={`${i === heading.style ? "#4B55DC" : "#C2C2C2"}`} />
            </svg>
        );
    };

    const HeaderFive = (i) => {
        return (
            <svg width="52" height="17" viewBox="0 0 52 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="52" height="9" fill={`${i === heading.style ? "#4B55DC" : "#C2C2C2"}`} />
                <rect y="14" width="25" height="3" fill={`${i === heading.style ? "#4B55DC" : "#C2C2C2"}`} />
            </svg>
        );
    };
    return (
        <>
            <p className="font-semibold text-sm">Style</p>
            <div className="flex items-center gap-4 max-w-[30rem] flex-wrap my-2">
                {[HeaderOne, HeaderTwo, HeaderThree, HeaderFour, HeaderFive].map((c, i) => (
                    <div
                        key={c}
                        className={`border ${
                            heading.style === i ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } rounded-md w-[8rem] h-[2.4rem] p-2 grid place-content-center cursor-pointer hover:opacity-80`}
                        onClick={() => setHeading({ ...heading, style: i })}
                    >
                        {c(i)}
                    </div>
                ))}
            </div>
        </>
    );
};

const Heading = () => {
    const { heading: storeHeading } = useAppSelector((state) => state.persistedReducer.resume.customization);

    const dispatch = useDispatch();

    const [heading, setHeading] = useState({
        size: storeHeading.size || "",
        style: storeHeading.style || 0,
        icons: storeHeading.icons || false,
        textTransform: storeHeading.textTransform || "",
    });

    const handleCustomization = () => {
        dispatch(updateCustomization({ key: "heading", value: heading }));
    };

    useEffect(() => {
        handleCustomization();
    }, [heading]);

    return (
        <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
            <h1 className="text-xl font-bold mb-5">Heading</h1>
            <div className="my-4">
                <HeadersElement heading={heading} setHeading={setHeading} />
            </div>
            <div>
                <p className="font-semibold text-sm">Capitalization</p>
                <div className="flex gap-2">
                    <div
                        className={`py-2 px-[4rem] text-sm border  ${
                            heading.textTransform === "Capitalize" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setHeading({ ...heading, textTransform: "Capitalize" })}
                    >
                        Capitalize
                    </div>
                    <div
                        className={`py-2 px-[4rem] text-sm border ${
                            heading.textTransform === "Uppercase" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setHeading({ ...heading, textTransform: "Uppercase" })}
                    >
                        Uppercase
                    </div>
                </div>
            </div>
            <div>
                <p className="font-semibold text-sm">Size</p>
                <div className="flex gap-4">
                    <div
                        className={`h-[2.4rem] w-[2.4rem] grid place-content-center text-sm border ${
                            heading.size === "S" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setHeading({ ...heading, size: "S" })}
                    >
                        S
                    </div>
                    <div
                        className={`h-[2.4rem] w-[2.4rem] grid place-content-center text-sm border ${
                            heading.size === "M" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setHeading({ ...heading, size: "M" })}
                    >
                        M
                    </div>
                    <div
                        className={`h-[2.4rem] w-[2.4rem] grid place-content-center text-sm border ${
                            heading.size === "L" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setHeading({ ...heading, size: "L" })}
                    >
                        L
                    </div>
                    <div
                        className={`h-[2.4rem] w-[2.4rem] grid place-content-center text-sm border ${
                            heading.size === "XL" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setHeading({ ...heading, size: "XL" })}
                    >
                        XL
                    </div>
                </div>
            </div>
            <div>
                <p className="font-semibold text-sm">Icons</p>
                <div className="flex gap-4">
                    <div
                        className={`py-2 px-[4rem] text-sm border ${
                            !heading.icons ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setHeading({ ...heading, icons: false })}
                    >
                        None
                    </div>
                    <div
                        className={`py-2 px-[4rem] text-sm border ${
                            heading.icons ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setHeading({ ...heading, icons: true })}
                    >
                        Filled
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Heading;
