import { useAppSelector } from "@redux/hooks";
import React from "react";

const Certificates = () => {
    const data = useAppSelector((state) => state.persistedReducer.resume.certificates) || [];

    if (!data.length) return;

    return (
        <div className="mt-4">
            <h1 className="font-semibold text-sm border-b-2 border-black capitalize">Certificates</h1>
            <div className="w-full grid grid-cols-3 gap-4">
                {data.map((c) => (
                    <>
                        {c.visible && (
                            <div key={c.id} className="flex justify-between gap-4 w-full text-xs my-2">
                                <div className="w-2/4 break-words">
                                    <div className="font-semibold">{c.certificate}</div>
                                    {c.description && <div>{c.description}</div>}
                                </div>
                            </div>
                        )}
                    </>
                ))}
            </div>
        </div>
    );
};

export default Certificates;
