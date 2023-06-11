import PersonalInfo from "@components/ResumeComponents/PersonalInfo";

const CreateResume = () => {
  return (
    <div className="min-h-[90vh] w-[100vw] flex flex-row gap-5 justify-center items-start bg-gray-200 pt-5">
      {/* left */}
      <div className="flex grow flex-row justify-center items-start gap-5">
        {/* left */}
        <div className="grow-0 flex flex-col items-center justify-center gap-10 p-5 rounded-xl shadow-lg bg-gray-50">
          <img src="/flowcv.svg" alt="flow cv" className="w-16" />
          <div className="flex flex-col justify-center items-center">
            <img src="/content.svg" alt="content" className="w-10" />
            <p>Content</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/customize.svg" alt="customize" className="w-10" />
            <p>Customize</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/links.svg" alt="links" className="w-10" />
            <p>Links</p>
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col justify-center items-stretch gap-4">
          <div class="sidebar:flex sidebar:justify-between sidebar:rounded-large sidebar:shadow-card sticky top-8 grid max-w-full grid-cols-[min-content_1fr_min-content] items-center bg-gray-50 px-6 py-3 md:px-8 md:py-4  lg:px-9 lg:py-5 rounded-xl shadow-lg">
            <a class="sidebar:hidden mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 hover:cursor-pointer hover:opacity-80">
              <img src="/arrow.svg" className="w-6" />
            </a>
            <div class="min-w-0">
              <div class="flex w-full cursor-pointer items-center space-x-2 pr-4 hover:opacity-80">
                <p class="text-black truncate text-2xl font-extrabold">
                  Resume No. 1
                </p>
                <button
                  type="button"
                  class="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 min-h-[30px] min-w-[30px] text-gray-400"
                >
                  <img src="/edit.svg" className="w-5" />
                </button>
              </div>
            </div>
            <div>
              <button
                type="button"
                class="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 min-h-[30px] min-w-[30px] text-white bg-black h-12 w-12 rounded-full md:hidden"
              >
                <img src="/download.svg" />
              </button>
              <button
                type="button"
                class="border-none cursor-pointer appearance-none touch-manipulation items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 px-7 py-2 rounded-full font-extrabold h-10 text-[15px] min-w-[120px] text-white bg-black hidden md:flex"
              >
                Download
              </button>
            </div>
          </div>

          {/* resume components */}
          <PersonalInfo />
        </div>
      </div>

      {/* right */}
      <div className="grow bg-red-50 h-10"></div>
    </div>
  );
};

export default CreateResume;
