import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

const images = [
    "https://prod.flowcvassets.com/resume-templates/tlz6h4qf2ti7uttcfrcf0/1280.webp",
    "https://prod.flowcvassets.com/resume-templates/46sjyo19sjwkgmn-g56z5/2560.webp",
    "https://prod.flowcvassets.com/resume-templates/yrf-1jligslm-ta_zmyji/2560.webp",
    "https://prod.flowcvassets.com/resume-templates/yivr5ujjrocluhf4nbdul/2560.webp",
    "https://prod.flowcvassets.com/resume-templates/v6g7rscizwqa8qitxcadv/2560.webp",
    "https://prod.flowcvassets.com/resume-templates/qh_kpltbeapqidbrq-p2d/2560.webp",
    "https://prod.flowcvassets.com/resume-templates/hzvvtfs-fjct-xo378ip/2560.webp",
    "https://prod.flowcvassets.com/resume-templates/gfra5vynu_7blt4i5wfpi/2560.webp",
    "https://prod.flowcvassets.com/resume-templates/wocpvkrglpwnlc9mw5kuq/2560.webp",
    "https://prod.flowcvassets.com/resume-templates/10j8m87ohtyk26o66ps3e/2560.webp",
    "https://prod.flowcvassets.com/resume-templates/mwo5rdzygyzgpjhr1vdnr/2560.webp",
    "https://prod.flowcvassets.com/resume-templates/wtlzsihj8hcstmoci6upa/2560.webp",
];

const Carousel = () => {
    const carouselRef = useRef(null);
    const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(true);

    const scrollToRight = () => {
        carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
        setIsLeftButtonDisabled(false);
    };

    const scrollToLeft = () => {
        carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
        setIsLeftButtonDisabled(true);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollLeft = carouselRef.current.scrollLeft;

            setIsLeftButtonDisabled(scrollLeft === 0);
        };

        carouselRef.current.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-[30rem] mt-4 mx-auto">
            <div className="flex cursor-all-scroll overflow-scroll scroll-smooth py-4" ref={carouselRef}>
                {images.map((image, index) => (
                    <div key={index} style={{ minWidth: "167.333px" }} className="relative mr-5">
                        <div className="group cursor-pointer shadow-[0_0_5px_0px_rgba(0,0,0,0.2)] hover:opacity-90">
                            <div className="w-full relative">
                                <Image src={image} alt={image} width={290} height={300} />
                                <span className="font-bold bg-gray-800 px-2 py-1 rounded-xl text-white text-[.6rem] absolute bottom-6 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Use this template
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="shadow-lg absolute right-4 top-1/2 grid w-32 -translate-y-1/2 grid-cols-[1fr_min-content_1fr] items-center justify-center rounded-full bg-white border">
                <button
                    type="button"
                    className={`border-none cursor-pointer appearance-none touch-manipulation flex items-center focus-visible:outline-blue-600  min-h-[30px] min-w-[30px] text-primaryBlack h-11 justify-end pr-4 ${
                        isLeftButtonDisabled ? "opacity-30" : "hover:opacity-80"
                    }`}
                    onClick={scrollToLeft}
                    disabled={isLeftButtonDisabled}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.5 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <div className="h-8 w-[1px] bg-gray-200"></div>
                <button
                    type="button"
                    className="border-none cursor-pointer appearance-none touch-manipulation flex items-center focus-visible:outline-blue-600 hover:opacity-80 min-h-[30px] min-w-[30px] text-primaryBlack h-11 justify-start pl-4"
                    onClick={scrollToRight}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.5 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

const Templates = () => {
    return (
        <div className="bg-white rounded-2xl w-full pt-6 pb-9 px-5 md:px-7 lg:px-9 relative max-w-full mt-4">
            <h1 className="text-xl font-bold mb-5">Choose a template</h1>
            <p className="text-sm">Get started with a template and then customize it easily 🐣</p>
            <div className="w-full">
                <Carousel />
            </div>
        </div>
    );
};

export default Templates;
