import React from "react";

import FaqSection from "./FaqSection";
import ResumeCard from "./ResumeCard";
import DetailsCard from "./DetailsCard";
import { cardsData, faqData } from "../../utils/Constants";

const BottomSection = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="text-3xl font-semibold">A better way to build your resume</h1>
            <p className="text-[rgb(107,114,128)] mt-2">More flexible than templates, easier than using a word processor</p>

            <div className="w-[50px] h-[2px] bg-black rounded-sm mt-5 mb-10"></div>

            <div className="grid grid-cols-2 gap-12 place-items-center place-content-center">
                {cardsData.map((c) => (
                    <DetailsCard key={c.heading} title={c.heading} description={c.description} icon={c.img} />
                ))}
            </div>

            <ResumeCard />

            {/* FAQ */}

            <div className="flex flex-col items-center ml-auto mr-auto pl-[1.25rem] pr-[1.25rem] mt-20 max-w-[1250px]">
                <h2 className="text-2xl xl:text-3xl font-bold lg:text-center">Frequently Asked</h2>
                {faqData.map((c) => (
                    <FaqSection key={c} question={c.question} answer={c.answer} />
                ))}
            </div>
        </div>
    );
};

export default BottomSection;
