import BottomSection from "@components/LandingPage/BottomSection";
import Footer from "@components/LandingPage/Footer";
import TemplatesSection from "@components/LandingPage/TemplatesSection";
import Testimonials from "@components/LandingPage/Testimonials";
import VideoSection from "@components/LandingPage/VideoSection";
import Nav from "@components/Nav";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Nav />
      <section>
        <div className="pageContainer pt-4 md:pt-8 pb-12 lg:pt-28 lg:pb-28">
          <div className="grid grid-cols-1 justify-items-center lg:justify-items-stretch lg:grid-cols-[10fr_8fr] xl:grid-cols-[10fr_9fr] lg:gap-4">
            <div className="w-[360px] sm:w-[400px] lg:w-auto lg:order-2 relative flex">
              <div className="pr-5 pl-10 w-full">
                <img src="/mainimage.svg" alt="main image" />
              </div>
              {/* main svg */}
              <img src="/something.svg" alt="something" className="w-0" />
            </div>
            <div className="mt-12">
              <h1 className="text-4xl md:text-5xl xl:text-[3.5rem] text-center lg:text-left font-bold">
                Build a job-winning resume for free
              </h1>
              <p className="text-center text-base lg:text-left px-6 md:px-0 mt-4 lg:mt-5 leading-[1.6] lg:px-0 lg:pr-20 text-gray-600 md:text-lg xl:text-[1.1rem]">
                Set yourself apart with a modern resume. Expert tips,
                customizable templates &amp; quick PDF download included.
              </p>
              <div className="flex justify-center mt-8 lg:justify-start lg:mt-12">
                <div className="flex flex-col items-center">
                  <Link
                    href="/resume"
                    className="flex gradient border-none cursor-pointer appearance-none touch-manipulation items-center justify-center outline-none hover:opacity-80 px-7 py-2 rounded-full font-bold h-16 text-[19px] min-w-[240px] xl:h-18 xl:text-[1.4rem] xl:min-w-[240px] text-white w-[240px] md:w-[320px]"
                  >
                    Try for free
                  </Link>
                  <p className="max-w-full mt-5 text-center lg:text-left text-[.9rem]">
                    No account needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <VideoSection
          header={"Beautiful design made easy"}
          description={
            "Format your resume with just a few clicks and reformat it easily."
          }
        />
        <TemplatesSection />
        <VideoSection
          header={"Avoid common pitfalls"}
          description={"Get guidance on what goes inside a job-winning resume."}
        />
        <Testimonials />
        <VideoSection
          header={"Quick, easy & flexible"}
          description={"Effortless editing with live preview."}
        />
        <BottomSection />
      </section>
      <Footer />
    </>
  );
};

export default Home;
