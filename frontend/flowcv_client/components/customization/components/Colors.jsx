import React, { useEffect, useState } from "react";
import { COLORS, COLOR_CHECK_BOXES } from "@utils/Constants";
import { FiCheck } from "react-icons/fi";
import { SlBan } from "react-icons/sl";
import { useAppSelector } from "@redux/hooks";
import { useDispatch } from "react-redux";
import { updateCustomization } from "@redux/resume/features";

const ColorsElement = ({ style, title, selectedColors, setSelectedColors }) => {
    return (
        <>
            <div className="text-center cursor-pointer hover:opacity-80" onClick={() => setSelectedColors(title)}>
                <div
                    style={{
                        borderRadius: "100%",
                        width: "4.2rem",
                        height: "4.2rem",
                        overflow: "hidden",
                        backgroundColor: "#fff",
                        border: `${style.border ? style.border : selectedColors === title ? "2px solid #4B55DC" : "2px solid #cbcbcb"}`,
                    }}
                >
                    {!style.border && <div style={style}></div>}
                </div>
                <p className="capitalize text-sm my-2">{title}</p>
            </div>
        </>
    );
};

const ColorPicker = ({ c, i, setSelectedColor, selectedColor }) => {
    return (
        <div
            key={c}
            className={`w-10 h-10 rounded-full grid place-content-center text-white`}
            style={{
                background: c,
            }}
            onClick={() => {
                if (c === "#fff") c = "#111";
                setSelectedColor({ ...selectedColor, accent: c });
            }}
        >
            {c === selectedColor.accent && i !== 0 && i !== COLORS.length - 1 && <FiCheck className="text-[1.4rem]" />}
            {i === 0 && <SlBan className="text-black text-4xl transform rotate-90" />}
            {/* <FiCheck className="text-base" /> */}
            {i === COLORS.length - 1 && (
                <>
                    <label
                        htmlFor="colorPicker"
                        className="w-10 h-10 rounded-full"
                        style={{
                            background: "conic-gradient(from 90deg, violet, indigo, blue, green, yellow, orange, red, violet)",
                        }}
                    ></label>
                    <input
                        type="color"
                        id="colorPicker"
                        className="hidden"
                        value={selectedColor.accent}
                        onChange={(e) => setSelectedColor({ ...selectedColor, accent: e.target.value })}
                    />
                </>
            )}
        </div>
    );
};

const MultiColorComponent = ({ c, selectedColor, setSelectedColor }) => {
    return (
        <div
            className="flex cursor-pointer"
            key={c}
            onClick={() => {
                if (c === "#fff") c = "#111";
                setSelectedColor({ ...selectedColor, multicolor: c });
            }}
        >
            <div className="w-14 h-12 bg-white border border-[#cbcbcb] border-r-0 rounded-l-xl grid place-content-center">
                <p className={`text-2xl font-bold border-b-2`} style={{ color: c, borderColor: c }}>
                    T
                </p>
            </div>
            <div
                className={`w-14 h-12 border border-[#cbcbcb] border-l-0 rounded-r-xl text-white grid place-content-center`}
                style={{ background: c }}
            >
                {" "}
                {c === selectedColor.multicolor && <FiCheck className="text-[1.4rem]" />}
            </div>
        </div>
    );
};

const ColorsComponent = ({ selectedType, setSelectedType, selectedColor, setSelectedColor, handleApplyAccentColor, applyAccentColor = {} }) => {
    const handleApplyColorWrapper = (e, key) => {
        handleApplyAccentColor((p) => ({ ...p, [key]: e.target.checked }));
    };

    return (
        <>
            <div className="flex text-center gap-[2rem] mt-5">
                <div className="cursor-pointer hover:opacity-80" onClick={() => setSelectedType("accent")}>
                    <div
                        style={{ background: selectedColor.accent }}
                        className={`w-[6rem] h-[3rem] grid rounded-[.8rem] place-content-center text-white`}
                    >
                        {selectedType === "accent" && <FiCheck className="text-[1.4rem]" />}
                    </div>
                    <p className="text-sm my-2">Accent</p>
                </div>
                <div className="cursor-pointer hover:opacity-80" onClick={() => setSelectedType("multicolor")}>
                    <div className="flex">
                        <div className="w-14 h-12 bg-white border border-[#cbcbcb] border-r-0 rounded-l-xl grid place-content-center">
                            <p
                                className={`text-2xl font-bold border-b-2`}
                                style={{ color: selectedColor.multicolor, borderColor: selectedColor.multicolor }}
                            >
                                T
                            </p>
                        </div>
                        <div
                            className={`w-14 h-12 border border-[#cbcbcb] border-l-0 rounded-r-xl text-white grid place-content-center`}
                            style={{ background: selectedColor.multicolor }}
                        >
                            {selectedType === "multicolor" && <FiCheck className="text-[1.4rem]" />}
                        </div>
                    </div>
                    <p className="text-sm my-2">Multicolor</p>
                </div>
            </div>
            {selectedType === "accent" && (
                <div className="flex gap-4 flex-wrap justify-center my-3 w-[19rem] sm:w-[30rem]">
                    {COLORS.map((c, i) => (
                        <ColorPicker c={c} i={i} setSelectedColor={setSelectedColor} selectedColor={selectedColor} key={c} />
                    ))}
                </div>
            )}
            {selectedType === "multicolor" && (
                <div className="flex gap-4 justify-center my-3 w-[30rem]">
                    {["rgb(244, 91, 105)", "rgb(89, 165, 216)", "rgb(192, 108, 132)", "rgb(67, 35, 113)"].map((c) => (
                        <MultiColorComponent c={c} setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
                    ))}
                </div>
            )}
            <div className="mt-8">
                <label className="font-semibold text-sm">Apply Accent color</label>
                <div className="mt-4 grid grid-cols-2 gap-2">
                    {COLOR_CHECK_BOXES.map((c) => (
                        <div key={c} className="flex items-center text-sm">
                            <input
                                checked={applyAccentColor[c] || false}
                                type="checkbox"
                                className="h-6 w-6 rounded border-gray-200 border-1 text-indigo-600 focus:ring-indigo-600 mr-2"
                                onChange={(e) => handleApplyColorWrapper(e, c)}
                            />
                            <label>{c}</label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

const Colors = () => {
    const { customization } = useAppSelector((state) => state.persistedReducer.resume);

    const { colors } = customization;

    const dispatch = useDispatch();

    const handleCustomization = (payload = {}) => {
        dispatch(updateCustomization({ key: "colors", value: { ...colors, ...payload } }));
    };

    const handleColorsCustomization = (title = "") => {
        const colorPayload = {
            basic: false,
            advanced: false,
            border: false,
        };

        switch (title.toLowerCase()) {
            case "basic":
                colorPayload.basic = true;
                break;
            case "advanced":
                colorPayload.advanced = true;
                break;
            case "border":
                colorPayload.border = true;
                break;
            default:
                break;
        }

        handleCustomization(colorPayload);
    };

    const [selectedType, setSelectedType] = useState(colors.accent ? "accent" : colors.multicolor ? "multicolor" : "accent");
    const [applyAccentColor, setApplyAccentColor] = useState(Object.values(colors.applyAccentColorTo || {}).length ? colors.applyAccentColorTo : {});
    const [selectedColors, setSelectedColors] = useState(colors.basic ? "Basic" : colors.advanced ? "Advanced" : colors.border ? "Border" : "Basic");
    const [selectedColor, setSelectedColor] = useState({
        accent: colors.accentColorValue ? colors.accentColorValue : selectedType === "accent" ? "#111" : "#cbcbcb",
        multicolor: colors.multiColorValue ? colors.multiColorValue : selectedType === "multicolor" ? "#111" : "#cbcbcb",
    });

    useEffect(() => {
        const isAccent = selectedType === "accent";
        const accentColorValue = isAccent ? selectedColor.accent : null;
        const multiColorValue = !isAccent ? selectedColor.multicolor : null;

        handleCustomization({ accent: isAccent, multicolor: !isAccent, accentColorValue, multiColorValue });
    }, [selectedType]);

    useEffect(() => {
        const isAccent = selectedType === "accent";
        const accentColorValue = isAccent ? selectedColor.accent : null;
        const multiColorValue = !isAccent ? selectedColor.multicolor : null;

        handleCustomization({ accentColorValue, multiColorValue });
    }, [selectedColor]);

    useEffect(() => {
        const color = selectedColors;

        handleColorsCustomization(color);
    }, [selectedColors]);

    useEffect(() => {
        handleCustomization({ applyAccentColorTo: applyAccentColor });
    }, [applyAccentColor]);

    return (
        <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
            <h1 className="text-xl font-bold mb-5">Colors</h1>
            <div className="flex items-center gap-[1.2rem] my-2">
                <ColorsElement
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: `${selectedColors === "Basic" ? "#4b55dc46" : "#fff"}`,
                    }}
                    title={"Basic"}
                    setSelectedColors={setSelectedColors}
                    selectedColors={selectedColors}
                />
                <ColorsElement
                    style={{
                        width: "100%",
                        backgroundColor: "#cbcbcb",
                        backgroundColor: `${selectedColors === "Advanced" ? "#4B55DC" : "#cbcbcb"}`,
                        height: "50%",
                    }}
                    title={"Advanced"}
                    setSelectedColors={setSelectedColors}
                    selectedColors={selectedColors}
                />
                <ColorsElement
                    style={{
                        border: `${selectedColors === "Border" ? "14px solid #4B55DC" : "14px solid #cbcbcb"}`,
                    }}
                    title={"Border"}
                    setSelectedColors={setSelectedColors}
                    selectedColors={selectedColors}
                />
            </div>
            <ColorsComponent
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                applyAccentColor={applyAccentColor}
                handleApplyAccentColor={setApplyAccentColor}
            />
        </div>
    );
};

export default Colors;
