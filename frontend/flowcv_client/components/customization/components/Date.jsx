import React, { useState } from "react";

const Date = () => {
    const [date, setDate] = useState({
        format: "",
        month: "",
        delimiter: "",
    });

    return (
        <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
            <h1 className="text-xl font-bold mb-5">Date</h1>
            <div className="max-w-[30rem]">
                <div>
                    <p className="font-semibold text-sm mt-4">Format</p>
                    <div className="flex gap-2">
                        <div
                            className={`py-2 px-[2rem] text-sm border  ${
                                date.format === "DD/MM/YYYY" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setDate({ ...date, format: "DD/MM/YYYY" })}
                        >
                            DD/MM/YYYY
                        </div>
                        <div
                            className={`py-2 px-[2rem] text-sm border ${
                                date.format === "MM/DD/YYYY" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setDate({ ...date, format: "MM/DD/YYYY" })}
                        >
                            MM/DD/YYYY
                        </div>
                        <div
                            className={`py-2 px-[2rem] text-sm border ${
                                date.format === "YYYY/MM/DD" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setDate({ ...date, format: "YYYY/MM/DD" })}
                        >
                            YYYY/MM/DD
                        </div>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-sm mt-4">Month</p>
                    <div className="flex gap-2">
                        <div
                            className={`py-2 px-[2rem] text-sm border  ${
                                date.month === "digits" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setDate({ ...date, month: "digits" })}
                        >
                            Digits
                        </div>
                        <div
                            className={`py-2 px-[2rem] text-sm border ${
                                date.month === "short" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setDate({ ...date, month: "short" })}
                        >
                            Short
                        </div>
                        <div
                            className={`py-2 px-[2rem] text-sm border ${
                                date.month === "long" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setDate({ ...date, month: "long" })}
                        >
                            Long
                        </div>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-sm mt-4">Delimiter</p>
                    <div className="flex gap-2">
                        <div
                            className={`py-2 px-[2rem] text-sm border  ${
                                date.delimiter === "slash" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setDate({ ...date, delimiter: "slash" })}
                        >
                            / Slash
                        </div>
                        <div
                            className={`py-2 px-[2rem] text-sm border ${
                                date.delimiter === "hyphen" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setDate({ ...date, delimiter: "hyphen" })}
                        >
                            - Hyphen
                        </div>
                        <div
                            className={`py-2 px-[2rem] text-sm border ${
                                date.delimiter === "dot" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setDate({ ...date, delimiter: "dot" })}
                        >
                            . Dot
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Date;
