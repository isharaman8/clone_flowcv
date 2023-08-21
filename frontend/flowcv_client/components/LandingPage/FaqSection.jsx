"use client";

import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const FaqSection = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <div className="w-full md:w-[44rem] lg:w-[44rem] xl:w-[44rem] m-auto pt-5 pb-5 border-t border-solid border-gray-200  hover:opacity-80 cursor-pointer faqItem faqItem--closed mt-7">
            <div className="flex items-center">
                <div>
                    <HiOutlineArrowNarrowRight className={`text-[1.6rem] ${showAnswer ? "rotate-90" : ""}`} />
                </div>
                <p className="font-bold pl-5 mt-1 faqItem__question" onClick={() => setShowAnswer(!showAnswer)}>
                    {question}
                </p>
            </div>
            {showAnswer && <p className="faqItem__answer pl-11 mt-2 mb-2">{answer}</p>}
        </div>
    );
};

export default FaqSection;
