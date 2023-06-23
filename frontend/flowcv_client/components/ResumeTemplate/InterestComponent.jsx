import { useAppSelector } from "@redux/hooks";
import React from "react";

const InterestComponent = () => {
    const data = useAppSelector((state) => state.persistedReducer.resume.interests) || [];

    return data.filter((c) => c.visible).length ? (
        <div className="mt-4">
            <h1 className="font-semibold text-sm border-b-2 border-black capitalize">Interests</h1>
            <div className="w-full grid grid-cols-3 gap-4">
                {data
                    .filter((c) => c.visible)
                    .map((c, i) => (
                        <div key={c.id} className="w-full flex justify-between  items-center text-xs my-1">
                            <span className="w-full">
                                <span className="font-semibold">{c.interest}</span>
                                {c.description && <span>{`(${c.description})`}</span>}
                            </span>
                            {i !== data.length - 1 && <span className="text-base">|</span>}
                        </div>
                    ))}
            </div>
        </div>
    ) : (
        <></>
    );
};

export default InterestComponent;
