import { ADD_CONTENT } from "@utils/Constants";
import React from "react";
import { IoMdClose } from "react-icons/io";

const AddContent = ({ setAddContent, handleCurrentComponent }) => {
  return (
    <>
      <div className="absolute top-0 left-0 z-[200000] bg-[rgba(0,0,0,0.5)] w-screen min-h-screen">
        <div className="bg-white w-[94vw] m-auto mt-[8rem] rounded-3xl shadow-xl px-[3.2rem] py-[2.4rem]">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Add Content</h1>
            <span
              className="text-2xl bg-slate-800 px-[1.4rem] py-2 text-white rounded-[4rem] cursor-pointer"
              onClick={() => setAddContent(false)}
            >
              <IoMdClose />
            </span>
          </div>
          <div className="grid grid-cols-4 gap-3 mt-8">
            {ADD_CONTENT.map((c) => (
              <div
                key={c.id}
                onClick={() => handleCurrentComponent(c)}
                className={`px-4 py-6 bg-gray-100 rounded-xl cursor-pointer hover:scale-[1.02] transition-transform ${
                  c.title === "Custom"
                    ? "border border-dashed border-gray-900"
                    : ""
                }`}
              >
                <h1 className="flex gap-3 items-center font-bold">
                  <span>{c.icon()}</span> {c.title}
                </h1>
                <p className="text-[.8rem] text-gray-600 mt-2">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddContent;
