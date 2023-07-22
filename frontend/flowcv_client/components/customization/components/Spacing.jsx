import { useAppSelector } from "@redux/hooks";
import { updateCustomization } from "@redux/resume/features";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const SpacingComponents = ({ title, transform, handleDecrement, handleIncrement, handleChange, value }) => {
    return (
        <div className="grid w-full grid-cols-[1fr_88px] gap-2">
            <div className="relative flex w-full items-center rounded-sm bg-gray-100">
                <input type="radio" name="fontSize" id="fontSize0" className="sc-hWBuOZ fyFuvR" value="0" />
                <label
                    htmlFor="fontSize0"
                    width="11.11111111111111"
                    className="sc-bttaWv gNNkgc"
                    onClick={() =>
                        handleChange(title, {
                            transform: 0,
                            value: {
                                fontSize: 9,
                                lineHeight: 1.1,
                                leftRightMargin: 10,
                                topBottomMargin: 10,
                                space: 1,
                            },
                        })
                    }
                ></label>
                <div className="sc-kLnunm kXkbjt"></div>
                <input type="radio" name="fontSize" id="fontSize1" className="sc-hWBuOZ fyFuvR" value="1" />
                <label
                    htmlFor="fontSize1"
                    width="11.11111111111111"
                    className="sc-bttaWv gNNkgc"
                    onClick={() =>
                        handleChange(title, {
                            transform: 99,
                            value: {
                                fontSize: 9.5,
                                lineHeight: 1.15,
                                leftRightMargin: 12,
                                topBottomMargin: 12,
                                space: 2,
                            },
                        })
                    }
                ></label>
                <div className="sc-kLnunm kXkbjt"></div>
                <input type="radio" name="fontSize" id="fontSize2" className="sc-hWBuOZ fyFuvR" value="2" />
                <label
                    htmlFor="fontSize2"
                    width="11.11111111111111"
                    className="sc-bttaWv gNNkgc"
                    onClick={() =>
                        handleChange(title, {
                            transform: 199,
                            value: {
                                fontSize: 10,
                                lineHeight: 1.2,
                                leftRightMargin: 14,
                                topBottomMargin: 14,
                                space: 3,
                            },
                        })
                    }
                ></label>
                <div className="sc-kLnunm kXkbjt"></div>
                <input type="radio" name="fontSize" id="fontSize3" className="sc-hWBuOZ fyFuvR" value="3" />
                <label
                    htmlFor="fontSize3"
                    width="11.11111111111111"
                    className="sc-bttaWv gNNkgc"
                    onClick={() =>
                        handleChange(title, {
                            transform: 299,
                            value: {
                                fontSize: 10.5,
                                lineHeight: 1.25,
                                leftRightMargin: 16,
                                topBottomMargin: 16,
                                space: 4,
                            },
                        })
                    }
                ></label>
                <div className="sc-kLnunm kXkbjt"></div>
                <input type="radio" name="fontSize" id="fontSize4" className="sc-hWBuOZ fyFuvR" value="4" />
                <label
                    htmlFor="fontSize4"
                    width="11.11111111111111"
                    className="sc-bttaWv gNNkgc"
                    onClick={() =>
                        handleChange(title, {
                            transform: 399,
                            value: {
                                fontSize: 11,
                                lineHeight: 1.3,
                                leftRightMargin: 18,
                                topBottomMargin: 18,
                                space: 5,
                            },
                        })
                    }
                ></label>
                <div className="sc-kLnunm kXkbjt"></div>
                <input type="radio" name="fontSize" id="fontSize5" className="sc-hWBuOZ fyFuvR" value="5" />
                <label
                    htmlFor="fontSize5"
                    width="11.11111111111111"
                    className="sc-bttaWv gNNkgc"
                    onClick={() =>
                        handleChange(title, {
                            transform: 499,
                            value: {
                                fontSize: 11.5,
                                lineHeight: 1.35,
                                leftRightMargin: 20,
                                topBottomMargin: 20,
                                space: 6,
                            },
                        })
                    }
                ></label>
                <div className="sc-kLnunm kXkbjt"></div>
                <input type="radio" name="fontSize" id="fontSize6" className="sc-hWBuOZ fyFuvR" value="6" />
                <label
                    htmlFor="fontSize6"
                    width="11.11111111111111"
                    className="sc-bttaWv gNNkgc"
                    onClick={() =>
                        handleChange(title, {
                            transform: 599,
                            value: {
                                fontSize: 12,
                                lineHeight: 1.4,
                                leftRightMargin: 22,
                                topBottomMargin: 22,
                                space: 7,
                            },
                        })
                    }
                ></label>
                <div className="sc-kLnunm kXkbjt"></div>
                <input type="radio" name="fontSize" id="fontSize7" className="sc-hWBuOZ fyFuvR" value="7" />
                <label
                    htmlFor="fontSize7"
                    width="11.11111111111111"
                    className="sc-bttaWv gNNkgc"
                    onClick={() =>
                        handleChange(title, {
                            transform: 699,
                            value: {
                                fontSize: 12.5,
                                lineHeight: 1.45,
                                leftRightMargin: 24,
                                topBottomMargin: 24,
                                space: 8,
                            },
                        })
                    }
                ></label>
                <div className="sc-kLnunm kXkbjt"></div>
                <input type="radio" name="fontSize" id="fontSize8" className="sc-hWBuOZ fyFuvR" value="8" />
                <label
                    htmlFor="fontSize8"
                    width="11.11111111111111"
                    className="sc-bttaWv gNNkgc"
                    onClick={() =>
                        handleChange(title, {
                            transform: 799,
                            value: {
                                fontSize: 13,
                                lineHeight: 1.5,
                                leftRightMargin: 26,
                                topBottomMargin: 26,
                                space: 9,
                            },
                        })
                    }
                ></label>
                <div width="12" className="sc-kNzDjo bbIOiy" style={{ transform: `translateX(${transform[title]}%)` }}></div>
            </div>
            <div className="grid grid-cols-2 gap-2 ">
                <button
                    type="button"
                    className="cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 text-primaryBlack border-4 border-solid border-buttonGray min-w-10 min-h-10 h-10 w-10 rounded-small"
                    fdprocessedid="a87izf"
                    onClick={() => handleDecrement(title, value)}
                    disabled={transform[title] < 2}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[1.4em]">
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M19 13H5v-2h14v2z"></path>
                    </svg>
                </button>
                <button
                    type="button"
                    className="cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 text-primaryBlack border-4 border-solid border-buttonGray min-w-10 min-h-10 h-10 w-10 rounded-small"
                    fdprocessedid="aqmg3"
                    onClick={() => handleIncrement(title, value)}
                    disabled={transform[title] >= 799}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" fill="currentColor" className="w-[1.4em]">
                        <path
                            fillRule="evenodd"
                            d="M10.8 2.452a1.3 1.3 0 10-2.6 0v5.316H2.885a1.3 1.3 0 000 2.6H8.2v5.315a1.3 1.3 0 002.6 0v-5.315h5.315a1.3 1.3 0 100-2.6H10.8V2.452z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

const Spacing = () => {
    const { spacing } = useAppSelector((state) => state.persistedReducer.resume.customization);

    const [transform, setTransform] = useState({
        fontSize: spacing.transform.fontSize || 0,
        lineHeight: spacing.transform.lineHeight || 0,
        leftRightMargin: spacing.transform.lRMargin || 0,
        topBottomMargin: spacing.transform.tBMargin || 0,
        space: spacing.transform.spaceBtwEntries || 0,
    });

    const [value, setValue] = useState({
        fontSize: spacing.value.fontSize || 9,
        lineHeight: spacing.value.lineHeight || 1.1,
        leftRightMargin: spacing.value.lRMargin || 10,
        topBottomMargin: spacing.value.tBMargin || 10,
        space: spacing.value.spaceBtwEntries || 1,
    });

    const dispatch = useDispatch();

    const handleChange = (title, val) => {
        setTransform({ ...transform, [title]: val.transform });
        setValue({ ...value, [title]: val.value[title] });
    };

    const handleDecrement = (title, val) => {
        setTransform({ ...transform, [title]: +transform[title] - 100 });

        let result = Number(value[title]) - Number(val);
        if (title === "lineHeight") {
            result = result.toFixed(2);
            if (result.endsWith("0")) result = result.slice(0, -1);
        }

        setValue({ ...value, [title]: result });
    };

    const handleIncrement = (title, val) => {
        setTransform({ ...transform, [title]: +transform[title] + 100 });

        let result = Number(value[title]) + Number(val);
        if (title === "lineHeight") {
            result = result.toFixed(2);
            if (result.endsWith("0")) result = result.slice(0, -1);
        }

        setValue({ ...value, [title]: result });
    };

    const handleSpacingCustomization = () => {
        dispatch(
            updateCustomization({
                key: "spacing",
                value: {
                    value: {
                        fontSize: value.fontSize,
                        lineHeight: value.lineHeight,
                        lRMargin: value.leftRightMargin,
                        tBMargin: value.topBottomMargin,
                        spaceBtwEntries: value.space,
                    },
                    transform: {
                        fontSize: transform.fontSize,
                        lineHeight: transform.lineHeight,
                        lRMargin: transform.leftRightMargin,
                        tBMargin: transform.topBottomMargin,
                        spaceBtwEntries: transform.space,
                    },
                },
            })
        );
    };

    console.log("SPACING", spacing);
    useEffect(() => {
        handleSpacingCustomization();
    }, [transform]);

    return (
        <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
            <h1 className="text-xl font-bold mb-5">Spacing</h1>
            <div className="flex flex-wrap justify-between text-sm items-center w-full max-w-[440px] my-3">
                <p className="font-semibold my-2">Font Size</p>
                <span className="my-2">{value.fontSize}pt</span>
                <SpacingComponents
                    title={"fontSize"}
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement}
                    handleChange={handleChange}
                    transform={transform}
                    value={0.5}
                />
            </div>
            <div className="flex flex-wrap justify-between text-sm items-center w-full max-w-[440px] my-3">
                <p className="font-semibold my-2">Line Height</p>
                <span className="my-2">{value.lineHeight}</span>
                <SpacingComponents
                    title={"lineHeight"}
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement}
                    handleChange={handleChange}
                    transform={transform}
                    value={0.05}
                />
            </div>
            <div className="flex flex-wrap justify-between text-sm items-center w-full max-w-[440px] my-3">
                <p className="font-semibold my-2">Left & Right Margin</p>
                <span className="my-2">{value.leftRightMargin}mm</span>
                <SpacingComponents
                    title={"leftRightMargin"}
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement}
                    handleChange={handleChange}
                    transform={transform}
                    value={2}
                />
            </div>
            <div className="flex flex-wrap justify-between text-sm items-center w-full max-w-[440px] my-3">
                <p className="font-semibold my-2">Top & Bottom Margin</p>
                <span className="my-2">{value.topBottomMargin}mm</span>
                <SpacingComponents
                    title={"topBottomMargin"}
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement}
                    handleChange={handleChange}
                    transform={transform}
                    value={2}
                />
            </div>
            <div className="flex flex-wrap justify-between text-sm items-center w-full max-w-[440px] my-3">
                <p className="font-semibold my-2">Space between Entries</p>
                <span className="my-2">
                    [
                    {Array(value.space)
                        .fill("-")
                        .map((c) => c)}
                    ]
                </span>
                <SpacingComponents
                    title={"space"}
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement}
                    handleChange={handleChange}
                    transform={transform}
                    value={1}
                />
            </div>
        </div>
    );
};

export default Spacing;
