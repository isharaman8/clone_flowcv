import React from "react";

const VideoSection = ({ header, description }) => {
  const src1 =
    "https://prod.flowcvassets.com/landing/videos/flow-cv-resume-builder-intro-video-en1.mp4";
  const src2 =
    "https://prod.flowcvassets.com/landing/videos/flow-cv-resume-builder-intro-video-en2.mp4";
  const src3 =
    "https://prod.flowcvassets.com/landing/videos/flow-cv-resume-builder-intro-video-en3.mp4";
  return (
    <section className="pageContainer pt-4 md:pt-8 pb-12 lg:pt-28 lg:pb-28 flex flex-col justify-center items-center">
      <h2 className="text-3xl xl:text-4xl font-extrabold">{header}</h2>
      <p className="mt-4 leading-relaxed md:text-xl text-gray-500">
        {description}
      </p>
      <div class="mt-6 md:mt-7 lg:mt-8 h-[2px] w-[3rem] bg-black"></div>
      <div class="mt-8 md:mt-9 lg:mt-10 w-full m-w-[1200px]">
        <div class="shadow-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1280 45"
            class=""
          >
            <g fill="none" fill-rule="evenodd">
              <path
                fill="#2A2A2A"
                d="M8.974 0h1262.052c3.12 0 4.252.325 5.393.935a6.36 6.36 0 0 1 2.646 2.646c.61 1.14.935 2.272.935 5.393V45H0V8.974c0-3.12.325-4.252.935-5.393A6.36 6.36 0 0 1 3.581.935C4.721.325 5.853 0 8.974 0z"
              ></path>
              <g transform="translate(20 16)">
                <circle cx="7" cy="7" r="7" fill="#FF6767"></circle>
                <circle cx="27" cy="7" r="7" fill="#FFD202"></circle>
                <circle cx="47" cy="7" r="7" fill="#00FF54"></circle>
              </g>
            </g>
          </svg>
          <div class="relative w-full pt-[62.5%]">
            <video
              class="absolute left-0 top-0 w-full h-auto rounded"
              autoplay=""
              loop=""
              playsinline=""
              muted=""
              width="100%"
              height="auto"
            >
              <source
                data-src={
                  header.toLowerCase().includes("design")
                    ? src1
                    : header.toLowerCase().includes("avoid")
                    ? src2
                    : src3
                }
                type="video/mp4"
                src={
                  header.toLowerCase().includes("design")
                    ? src1
                    : header.toLowerCase().includes("avoid")
                    ? src2
                    : src3
                }
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
