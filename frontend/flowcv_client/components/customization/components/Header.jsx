import { useAppSelector } from "@redux/hooks";
import { updateCustomization } from "@redux/resume/features";
import { ICONS_OBJ, PROFILE_ICONS } from "@utils/Constants";
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";

const HeaderOne = ({ header, setHeader }) => {
    return (
        <div
            className={`flex justify-center items-center border ${
                header.type === 1 ? "border-blue-700 bg-blue-50" : "border-gray-300"
            } rounded-xl py-2 px-4 cursor-pointer hover:opacity-80`}
            onClick={() => setHeader({ ...header, type: 1 })}
        >
            <svg width="90" height="40" viewBox="0 0 325 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="5" width="235" height="26" rx="5" fill={`${header.type === 1 ? "#4B55DC" : "#C2C2C2"}`} />
                <rect y="39" width="235" height="26" rx="5" fill={`${header.type === 1 ? "#4B55DC" : "#C2C2C2"}`} />
                <ellipse cx="289.5" cy="34.5" rx="35.5" ry="34.5" fill={`${header.type === 1 ? "#4B55DC" : "#C2C2C2"}`} />
            </svg>
        </div>
    );
};

const HeaderTwo = ({ header, setHeader }) => {
    return (
        <div
            className={`flex justify-center items-center border ${
                header.type === 2 ? "border-blue-700 bg-blue-50" : "border-gray-300"
            } rounded-xl py-2 px-4 cursor-pointer hover:opacity-80`}
            onClick={() => setHeader({ ...header, type: 2 })}
        >
            <svg width="90" height="40" viewBox="0 0 235 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="77" width="235" height="26" rx="5" fill={`${header.type === 2 ? "#4B55DC" : "#C2C2C2"}`} />
                <rect y="111" width="235" height="26" rx="5" fill={`${header.type === 2 ? "#4B55DC" : "#C2C2C2"}`} />
                <ellipse cx="117.5" cy="34.5" rx="35.5" ry="34.5" fill={`${header.type === 2 ? "#4B55DC" : "#C2C2C2"}`} />
            </svg>
        </div>
    );
};

const HeaderThree = ({ header, setHeader }) => {
    return (
        <div
            className={`flex justify-center items-center border ${
                header.type === 3 ? "border-blue-700 bg-blue-50" : "border-gray-300"
            } rounded-xl py-2 px-4 cursor-pointer hover:opacity-80`}
            onClick={() => setHeader({ ...header, type: 3 })}
        >
            <svg width="90" height="40" viewBox="0 0 321 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="86" y="1" width="235" height="26" rx="5" fill={`${header.type === 3 ? "#4B55DC" : "#C2C2C2"}`} />
                <rect x="86" y="35" width="235" height="26" rx="5" fill={`${header.type === 3 ? "#4B55DC" : "#C2C2C2"}`} />
                <ellipse cx="35.5" cy="34.5" rx="35.5" ry="34.5" fill={`${header.type === 3 ? "#4B55DC" : "#C2C2C2"}`} />
            </svg>
        </div>
    );
};

const RearrangeSection = ({ sections, handleDragEnd }) => {
    return (
        <div className="relative">
            <div className="flex gap-3">
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="sections" direction="horizontal">
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef} className="flex gap-3">
                                {sections.map((section, index) => {
                                    console.log("BIG SECTION", section);

                                    return (
                                        <Draggable key={section.id.toString()} draggableId={section.id.toString()} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="grid place-content-center bg-gray-100 rounded-xl my-3 gap-3 py-2 px-3 cursor-grab"
                                                >
                                                    <h1 className="flex gap-3 items-center font-semibold text-sm">
                                                        <span className="text-lg">{section.icon()}</span>
                                                    </h1>
                                                </div>
                                            )}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        </div>
    );
};

const Header = () => {
    const { header: storeHeader } = useAppSelector((state) => state.persistedReducer.resume.customization);

    const dispatch = useDispatch();

    const [header, setHeader] = useState({
        type: storeHeader.type || "",
        details: storeHeader.details || "",
    });
    const [sections, setSections] = useState(PROFILE_ICONS);

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const newSections = Array.from(sections);
        const [reorderedSection] = newSections.splice(result.source.index, 1);
        newSections.splice(result.destination.index, 0, reorderedSection);

        setSections(newSections);
    };

    const handleCustomization = () => {
        dispatch(updateCustomization({ key: "header", value: { ...header, sections } }));
    };

    useEffect(() => {
        handleCustomization();
    }, [header, sections]);

    return (
        <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
            <h1 className="text-xl font-bold mb-5">Header</h1>
            <div className="flex gap-[2rem]">
                <HeaderOne header={header} setHeader={setHeader} />
                <HeaderTwo header={header} setHeader={setHeader} />
                <HeaderThree header={header} setHeader={setHeader} />
            </div>
            <div className="max-w-[30rem]">
                <p className="font-semibold text-sm mt-4">Details</p>
                <div className="flex gap-2">
                    <div
                        className={`py-2 px-[3.4rem] text-sm border  ${
                            header.details === "Icon" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        } my-2 rounded-lg cursor-pointer hover:opacity-80 grid place-content-center`}
                        onClick={() => setHeader({ ...header, details: "Icon" })}
                    >
                        😎 Icon
                    </div>
                    <div
                        className={`py-2 px-[3.4rem] text-sm border ${
                            header.details === "Bullet" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        }  my-2 rounded-lg cursor-pointer hover:opacity-80 grid place-content-center`}
                        onClick={() => setHeader({ ...header, details: "Bullet" })}
                    >
                        • Bullet
                    </div>
                    <div
                        className={`py-2 px-[3.4rem] text-sm border ${
                            header.details === "Bar" ? "border-blue-700 text-blue-700 bg-blue-50" : "border-gray-300"
                        }  my-2 rounded-lg cursor-pointer hover:opacity-80 grid place-content-center`}
                        onClick={() => setHeader({ ...header, details: "Bar" })}
                    >
                        | Bar
                    </div>
                </div>
            </div>
            <div className="max-w-[30rem]">
                <p className="font-semibold text-sm mt-4">Change order</p>
                <RearrangeSection handleDragEnd={handleDragEnd} sections={sections} />
            </div>
        </div>
    );
};

export default Header;
