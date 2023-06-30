import React, { useState } from "react";

const Certificate = () => {
    const [certificate, setCertificate] = useState({
        type: "",
        separator: "",
    });

    if (!certificate.type) {
        return (
            <>
                <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
                    <h1 className="text-xl font-bold mb-5">Certificate</h1>
                    <div className="text-sm max-w-[30rem]">To see design options, add some certificates 📜</div>
                </div>
            </>
        );
    }
    return (
        <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
            <h1 className="text-xl font-bold mb-5">Certificate</h1>
            <div className="max-w-[30rem]">
                <div>
                    <div className="flex gap-2">
                        <div
                            className={`py-2 px-[2rem] text-sm border  ${
                                certificate.type === "grid" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setCertificate({ ...certificate, type: "grid" })}
                        >
                            Grid
                        </div>

                        <div
                            className={`py-2 px-[2rem] text-sm border ${
                                certificate.type === "text" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setCertificate({ ...certificate, type: "text" })}
                        >
                            Text
                        </div>
                        <div
                            className={`py-2 px-[2rem] text-sm border ${
                                certificate.type === "bubble" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                            }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                            onClick={() => setCertificate({ ...certificate, type: "bubble" })}
                        >
                            Bubble
                        </div>
                    </div>
                </div>

                {certificate.type === "text" && (
                    <div>
                        <div className="flex gap-2">
                            <div
                                className={`py-2 px-[2rem] text-sm border  ${
                                    certificate.separator === "bullet" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                                } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                                onClick={() => setCertificate({ ...certificate, separator: "bullet" })}
                            >
                                Bullet
                            </div>
                            <div
                                className={`py-2 px-[2rem] text-sm border ${
                                    certificate.separator === "wrap" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                                }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                                onClick={() => setCertificate({ ...certificate, separator: "wrap" })}
                            >
                                Wrap
                            </div>
                            <div
                                className={`py-2 px-[2rem] text-sm border ${
                                    certificate.separator === "pipe" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                                }  my-2 rounded-lg cursor-pointer hover:opacity-80`}
                                onClick={() => setCertificate({ ...certificate, separator: "pipe" })}
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

export default Certificate;
