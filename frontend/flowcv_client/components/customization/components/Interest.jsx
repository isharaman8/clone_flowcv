import { useAppSelector } from "@redux/hooks";
import { updateCustomization } from "@redux/resume/features";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Interest = () => {
    const {
        customization: { interest: storeInterest },
        interests: interestReduxData,
    } = useAppSelector((state) => state.persistedReducer.resume);

    const dispatch = useDispatch();

    const [interest, setInterest] = useState({
        type: storeInterest.type || "",
        separator: storeInterest.separator || "",
    });

    const handleCustomization = () => {
        dispatch(updateCustomization({ key: "interest", value: interest }));
    };

    useEffect(() => {
        handleCustomization();
    }, [interest]);

    if (!interestReduxData.length) {
        return (
            <>
                <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
                    <h1 className="text-xl font-bold mb-5">Interest</h1>
                    <div className="text-sm max-w-[30rem]">To see design options, add some interests 🏈</div>
                </div>
            </>
        );
    }
    return (
        <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
            <h1 className="text-xl font-bold mb-5">Interest</h1>
            <div className="max-w-[30rem]">
                <div>
                    <div className="flex gap-2">
                        <div
                            className={`py-2 px-[2rem] text-sm border  ${
                                interest.type === "grid" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setInterest({ ...interest, type: "grid" })}
                        >
                            Grid
                        </div>

                        <div
                            className={`py-2 px-[2rem] text-sm border ${
                                interest.type === "text" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setInterest({ ...interest, type: "text" })}
                        >
                            Text
                        </div>
                        <div
                            className={`py-2 px-[2rem] text-sm border ${
                                interest.type === "bubble" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setInterest({ ...interest, type: "bubble" })}
                        >
                            Bubble
                        </div>
                    </div>
                </div>

                {interest.type === "text" && (
                    <div>
                        <div className="flex gap-2">
                            <div
                                className={`py-2 px-[2rem] text-sm border  ${
                                    interest.separator === "bullet" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                                } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                                onClick={() => setInterest({ ...interest, separator: "bullet" })}
                            >
                                Bullet
                            </div>
                            <div
                                className={`py-2 px-[2rem] text-sm border ${
                                    interest.separator === "wrap" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                                }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                                onClick={() => setInterest({ ...interest, separator: "wrap" })}
                            >
                                Wrap
                            </div>
                            <div
                                className={`py-2 px-[2rem] text-sm border ${
                                    interest.separator === "pipe" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                                }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                                onClick={() => setInterest({ ...interest, separator: "pipe" })}
                            >
                                Pipe
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Interest;
