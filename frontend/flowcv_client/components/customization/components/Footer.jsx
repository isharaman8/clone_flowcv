import { useAppSelector } from "@redux/hooks";
import { updateCustomization } from "@redux/resume/features";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Footer = () => {
    const { footer: storeFooter } = useAppSelector((state) => state.persistedReducer.resume.customization);

    const dispatch = useDispatch();

    const [footer, setFooter] = useState({
        page: storeFooter.page || false,
        name: storeFooter.name || false,
        email: storeFooter.email || false,
    });

    const handleCustomization = () => {
        dispatch(updateCustomization({ key: "footer", value: footer }));
    };

    useEffect(() => {
        handleCustomization();
    }, [footer]);

    return (
        <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
            <h1 className="text-xl font-bold mb-5">Footer</h1>
            <div className="flex items-center text-sm my-4">
                <input
                    id="page"
                    type="checkbox"
                    className="h-6 w-6 rounded border-gray-200 border-1 text-indigo-600 focus:ring-indigo-600 mr-2"
                    checked={footer.page}
                    onChange={(event) => setFooter({ ...footer, page: event.target.checked })}
                />
                <label htmlFor="page" className="cursor-pointer">
                    Page numbers
                </label>
            </div>
            <div className="flex items-center text-sm my-4">
                <input
                    id="email"
                    type="checkbox"
                    className="h-6 w-6 rounded border-gray-200 border-1 text-indigo-600 focus:ring-indigo-600 mr-2"
                    checked={footer.email}
                    onChange={(event) => setFooter({ ...footer, email: event.target.checked })}
                />
                <label htmlFor="email" className="cursor-pointer">
                    Email
                </label>
            </div>
            <div className="flex items-center text-sm my-4">
                <input
                    id="name"
                    type="checkbox"
                    className="h-6 w-6 rounded border-gray-200 border-1 text-indigo-600 focus:ring-indigo-600 mr-2"
                    checked={footer.name}
                    onChange={(event) => setFooter({ ...footer, name: event.target.checked })}
                />
                <label htmlFor="name" className="cursor-pointer">
                    Name
                </label>
            </div>
        </div>
    );
};

export default Footer;
