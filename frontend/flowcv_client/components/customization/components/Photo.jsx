import { useAppSelector } from "@redux/hooks";
import { updateCustomization } from "@redux/resume/features";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Photo = () => {
    const { photo: storePhoto } = useAppSelector((state) => state.persistedReducer.resume.customization);

    const dispatch = useDispatch();

    const [photo, setPhoto] = useState({
        size: storePhoto.size || "",
        show: storePhoto.show || true,
        grayscale: storePhoto.grayscale || false,
    });

    const handleCustomization = () => {
        dispatch(updateCustomization({ key: "photo", value: photo }));
    };

    useEffect(() => {
        handleCustomization();
    }, [photo]);

    if (!photo.size) {
        return (
            <>
                <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
                    <h1 className="text-xl font-bold mb-5">Photo</h1>
                    <div className="text-sm max-w-[30rem]">
                        Here you can show/hide your photo and change the size. You currently don't have a photo 📸
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
            <h1 className="text-xl font-bold mb-5">Photo</h1>
            <div className="flex items-center text-sm my-4">
                <input
                    id="show"
                    type="checkbox"
                    className="h-6 w-6 rounded border-gray-200 border-1 text-indigo-600 focus:ring-indigo-600 mr-2"
                    checked={photo.show}
                    onChange={(event) => setPhoto({ ...photo, show: event.target.checked })}
                />
                <label htmlFor="show" className="cursor-pointer">
                    Show
                </label>
            </div>
            <div className="flex items-center text-sm my-4">
                <input
                    id="grayscale"
                    type="checkbox"
                    className="h-6 w-6 rounded border-gray-200 border-1 text-indigo-600 focus:ring-indigo-600 mr-2"
                    checked={photo.grayscale}
                    onChange={(event) => setPhoto({ ...photo, grayscale: event.target.checked })}
                />
                <label htmlFor="grayscale" className="cursor-pointer">
                    Grayscale
                </label>
            </div>
            <div>
                <p className="font-semibold text-sm">Size</p>
                <div className="flex gap-4">
                    <div
                        className={`h-[2.4rem] w-[2.4rem] grid place-content-center text-sm border ${
                            photo.size === "XS" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setPhoto({ ...photo, size: "XS" })}
                    >
                        XS
                    </div>
                    <div
                        className={`h-[2.4rem] w-[2.4rem] grid place-content-center text-sm border ${
                            photo.size === "S" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setPhoto({ ...photo, size: "S" })}
                    >
                        S
                    </div>
                    <div
                        className={`h-[2.4rem] w-[2.4rem] grid place-content-center text-sm border ${
                            photo.size === "M" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setPhoto({ ...photo, size: "M" })}
                    >
                        M
                    </div>
                    <div
                        className={`h-[2.4rem] w-[2.4rem] grid place-content-center text-sm border ${
                            photo.size === "L" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setPhoto({ ...photo, size: "L" })}
                    >
                        L
                    </div>
                    <div
                        className={`h-[2.4rem] w-[2.4rem] grid place-content-center text-sm border ${
                            photo.size === "XL" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80`}
                        onClick={() => setPhoto({ ...photo, size: "XL" })}
                    >
                        XL
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Photo;
