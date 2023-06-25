import React, { useState } from "react";
import { ADD_CONTENT } from "@utils/Constants";
import { CgLayoutGridSmall } from "react-icons/cg";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const LayoutButton = ({ title, style, selectedLayout, setSelectedLayout }) => {
    return (
        <>
            <div className="text-center cursor-pointer hover:opacity-80" onClick={() => setSelectedLayout(title)}>
                <div
                    style={{
                        border: `${selectedLayout === title ? "1px solid #4B55DC" : "1px solid #cbcbcb"}`,
                        borderRadius: ".6rem",
                        width: "4.2rem",
                        height: "4.2rem",
                        overflow: "hidden",
                    }}
                >
                    <div style={{ ...style, backgroundColor: `${selectedLayout === title ? "#4B55DC" : "#cbcbcb"}` }}></div>
                </div>
                <p className="capitalize text-sm mt-1">{title}</p>
            </div>
        </>
    );
};

const Coulumns = ({ setSelectedColumn, selectedColumn }) => {
    return (
        <div className="my-6">
            <h2 className="text-sm font-semibold">Columns</h2>
            <div className="flex items-center gap-[1.4rem] my-2">
                <div
                    className="rounded-[.6rem] px-[.4rem] py-[.8rem] grid place-content-center cursor-pointer w-[6rem] hover:opacity-80"
                    style={{
                        border: `${selectedColumn === 1 ? "1px solid #4B55DC" : "1px solid #cbcbcb"}`,
                    }}
                    onClick={() => setSelectedColumn(1)}
                >
                    <svg width="63" height="21" viewBox="0 0 63 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="63" height="4" rx="2" fill={selectedColumn === 1 ? "#4b55dc" : "#C7C7C7"} />
                        <rect y="8" width="63" height="4" rx="2" fill={selectedColumn === 1 ? "#4b55dc" : "#C7C7C7"} />
                        <rect y="17" width="63" height="4" rx="2" fill={selectedColumn === 1 ? "#4b55dc" : "#C7C7C7"} />
                    </svg>
                </div>
                <div
                    className="rounded-[.6rem] px-[.4rem] py-[.8rem] grid place-content-center cursor-pointer w-[6rem] hover:opacity-80"
                    style={{
                        border: `${selectedColumn === 2 ? "1px solid #4B55DC" : "1px solid #cbcbcb"}`,
                    }}
                    onClick={() => setSelectedColumn(2)}
                >
                    <svg width="63" height="21" viewBox="0 0 63 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="28" height="4" rx="2" fill={selectedColumn === 2 ? "#4b55dc" : "#C7C7C7"} />
                        <rect x="35" width="28" height="4" rx="2" fill={selectedColumn === 2 ? "#4b55dc" : "#C7C7C7"} />
                        <rect y="8" width="28" height="4" rx="2" fill={selectedColumn === 2 ? "#4b55dc" : "#C7C7C7"} />
                        <rect x="35" y="8" width="28" height="4" rx="2" fill={selectedColumn === 2 ? "#4b55dc" : "#C7C7C7"} />
                        <rect y="17" width="28" height="4" rx="2" fill={selectedColumn === 2 ? "#4b55dc" : "#C7C7C7"} />
                        <rect x="35" y="17" width="28" height="4" rx="2" fill={selectedColumn === 2 ? "#4b55dc" : "#C7C7C7"} />
                    </svg>
                </div>
                <div
                    className="rounded-[.6rem] px-[.4rem] py-[.8rem] grid place-content-center cursor-pointer w-[6rem] hover:opacity-80"
                    style={{
                        border: `${selectedColumn === 3 ? "1px solid #4B55DC" : "1px solid #cbcbcb"}`,
                    }}
                    onClick={() => setSelectedColumn(3)}
                >
                    <svg width="63" height="21" viewBox="0 0 63 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="28" height="4" rx="2" fill={selectedColumn === 3 ? "#4b55dc" : "#C7C7C7"} />
                        <rect x="31" width="32" height="4" rx="2" fill={selectedColumn === 3 ? "#4b55dc" : "#C7C7C7"} />
                        <rect y="8" width="63" height="4" rx="2" fill={selectedColumn === 3 ? "#4b55dc" : "#C7C7C7"} />
                        <rect y="17" width="43" height="4" rx="2" fill={selectedColumn === 3 ? "#4b55dc" : "#C7C7C7"} />
                    </svg>
                </div>
            </div>
        </div>
    );
};

const RearrangeSection = ({ sections, handleDragEnd }) => {
    return (
        <div className="relative">
            <h2 className="text-sm font-semibold">Rearrange sections</h2>
            <div className="w-full bg-gray-100 grid place-content-center h-[92px] rounded-xl my-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 55 27" className="w-9 pt-[2px]">
                    <path
                        fill="currentColor"
                        d="M30.428 4.106c0-.743.602-1.346 1.346-1.346H53.64a1.346 1.346 0 010 2.692H31.774a1.346 1.346 0 01-1.346-1.346zm0 8.077c0-.743.602-1.346 1.346-1.346H53.64a1.346 1.346 0 010 2.692H31.774a1.346 1.346 0 01-1.346-1.346zm5.52 8.077c0-.744.602-1.346 1.346-1.346H53.64a1.346 1.346 0 010 2.692H37.294a1.346 1.346 0 01-1.346-1.346zm-18.286-5.792a.253.253 0 01-.216-.22.255.255 0 01.108-.238c1.925-1.343 3.214-3.682 3.214-6.37 0-4.182-3.089-7.573-6.9-7.573-3.81 0-6.9 3.39-6.9 7.572 0 2.689 1.29 5.028 3.214 6.37.077.054.12.145.11.238a.253.253 0 01-.217.22C4.3 15.274.069 17.859.069 20.934v4.058a2 2 0 002 2h23.598a2 2 0 002-2v-4.058c0-3.075-4.231-5.66-10.005-6.465zm7.246 7.83a2 2 0 01-2 2H4.829a2 2 0 01-2-2v-1.365c0-1.143 2.781-3.162 7.81-3.824l.586-.077a2 2 0 001.727-1.757l.145-1.277a2 2 0 00-.88-1.891l-.353-.235c-1.317-.877-2.135-2.499-2.135-4.233 0-2.69 1.857-4.88 4.14-4.88 2.282 0 4.14 2.19 4.14 4.88 0 1.735-.819 3.356-2.136 4.233l-.353.235a2 2 0 00-.88 1.891l.146 1.277a2 2 0 001.726 1.757l.587.078c5.028.662 7.809 2.68 7.809 3.823v1.365z"
                    ></path>
                </svg>
            </div>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="sections">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {sections.map((section, index) => (
                                <Draggable key={section.id.toString()} draggableId={section.id.toString()} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="flex items-center w-full bg-gray-100 rounded-xl my-3 gap-3 py-1 px-1 cursor-grab"
                                        >
                                            <CgLayoutGridSmall className="text-3xl text-gray-400" />
                                            <h1 className="flex gap-3 items-center font-semibold text-sm">
                                                <span className="text-lg">{section.icon()}</span> {section.title}
                                            </h1>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

const Layout = () => {
    const [selectedLayout, setSelectedLayout] = useState("top");
    const [selectedColumn, setSelectedColumn] = useState(1);
    const [sections, setSections] = useState(ADD_CONTENT);

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const newSections = Array.from(sections);
        const [reorderedSection] = newSections.splice(result.source.index, 1);
        newSections.splice(result.destination.index, 0, reorderedSection);

        setSections(newSections);
    };

    return (
        <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
            <h1 className="text-xl font-bold mb-5">Layout</h1>
            <div className="flex items-center gap-[1.2rem] my-2">
                <LayoutButton
                    title={"top"}
                    style={{
                        width: "100%",
                        height: "50%",
                    }}
                    setSelectedLayout={setSelectedLayout}
                    selectedLayout={selectedLayout}
                />
                <LayoutButton
                    title={"left"}
                    style={{
                        width: "52%",
                        height: "100%",
                    }}
                    setSelectedLayout={setSelectedLayout}
                    selectedLayout={selectedLayout}
                />
                <LayoutButton
                    title={"right"}
                    style={{
                        width: "50%",
                        height: "100%",
                        float: "right",
                    }}
                    setSelectedLayout={setSelectedLayout}
                    selectedLayout={selectedLayout}
                />
            </div>
            <Coulumns setSelectedColumn={setSelectedColumn} selectedColumn={selectedColumn} />
            <RearrangeSection sections={sections} handleDragEnd={handleDragEnd} />
        </div>
    );
};

export default Layout;
