import { FONTS } from "@utils/Constants";
import React, { useState } from "react";

const FontElement = ({ title, setFontFamily, fontFamily }) => {
    return (
        <>
            <div
                className={`border ${
                    fontFamily.family === title ? "border-blue-700 bg-blue-100" : "border-gray-300 bg-white"
                }  rounded-xl w-[5rem] h-[5rem] cursor-pointer hover:opacity-80`}
                onClick={() => setFontFamily({ ...fontFamily, family: title })}
            >
                <div className={`${fontFamily.family === title ? "text-blue-700" : "text-black"} h-full flex flex-col items-center justify-center`}>
                    <span className="text-2xl font-semibold">Aa</span>
                    <span className="text-sm">{title}</span>
                </div>
            </div>
        </>
    );
};

const Font = () => {
    const [fontFamily, setFontFamily] = useState({
        family: "Serif",
        font: "",
    });

    return (
        <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
            <h1 className="text-xl font-bold mb-5">Font</h1>
            <div className="flex gap-[2rem] my-3">
                <FontElement title={"Serif"} fontFamily={fontFamily} setFontFamily={setFontFamily} />
                <FontElement title={"Sans"} fontFamily={fontFamily} setFontFamily={setFontFamily} />
                <FontElement title={"Mono"} fontFamily={fontFamily} setFontFamily={setFontFamily} />
            </div>
            <div className="w-full max-w-[30rem] grid grid-cols-3 gap-4 my-4">
                {FONTS[fontFamily.family.toLowerCase()].map((c) => (
                    <div
                        onClick={() => setFontFamily({ ...fontFamily, font: c })}
                        key={c}
                        className={`${
                            fontFamily.font === c ? "border-blue-700 bg-blue-100 text-blue-700" : "border-gray-300 bg-white text-black"
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

export default Font;
