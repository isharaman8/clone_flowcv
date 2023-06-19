import { removeSkills, updateSkills } from "@redux/resume/features";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useDispatch } from "react-redux";

const List = ({ name, onClick, title, editObj }) => {
    let toggleFunc;

    const dispatch = useDispatch();

    const toggleVisibility = () => {
        switch (title.toLowerCase()) {
            case "skills":
                toggleFunc = updateSkills;
                break;

            default:
                break;
        }

        if (!toggleFunc) {
            return;
        }

        dispatch(toggleFunc({ id: editObj.id, visible: !editObj.visible }));
    };

    const removeItem = () => {
        let removeFunc;

        switch (title.toLowerCase()) {
            case "skills":
                removeFunc = removeSkills;
                break;

            default:
                break;
        }

        if (!removeFunc) {
            return;
        }

        dispatch(removeFunc({ id: editObj.id }));
    };

    return (
        <div className="group flex w-full cursor-pointer items-center border-b-[5px] border-solid border-inputBackground px-4 py-3 md:px-6 md:py-4">
            <div className="flex w-full items-center pr-2 group-hover:opacity-70">
                <div className="sc-ddnlvQ fNBUeZ">
                    <div className="mr-4" onClick={() => onClick(title?.toLowerCase(), editObj)}>
                        <p className="sc-jQrDum dbdSXR">{name}</p>
                    </div>
                    <div>
                        <p className="sc-jQrDum gJLjtI"></p>
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <button
                    type="button"
                    onClick={toggleVisibility}
                    className="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 h-8 px-3 text-gray-700 hover:opacity-80"
                >
                    {editObj.visible ? <BsEye /> : <BsEyeSlash />}
                </button>
                <button
                    type="button"
                    onClick={removeItem}
                    className="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 h-8 px-3 text-gray-700 hover:opacity-80"
                >
                    <AiOutlineDelete className="text-red-800" />
                </button>
            </div>
        </div>
    );
};

export default List;
