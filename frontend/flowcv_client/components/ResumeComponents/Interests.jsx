const Interest = () => {
  return (
    <div class="relative shadow-lg">
      <div class="relative w-full rounded-lg bg-white shadow-card px-5 md:px-7 lg:px-9 py-5 pb-5 md:py-7 md:pb-9 lg:py-9 lg:pb-10">
        <div class="mb-8 grid grid-cols-[auto_auto] items-center gap-2">
          <h3 class="text-xl font-extrabold md:text-2xl">Create Interest</h3>
        </div>
        <form class="flex w-full flex-col justify-between items-stretch">
          <div class="mb-4 w-full">
            <label
              for="inputinterest"
              class="text-primaryBlack mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]"
            >
              <span>Interest</span>
              <span class="bg-gradientPinkRed min-h-1 min-w-1 ml-[5px] mt-1 inline-block h-1 w-1 rounded-full align-top"></span>
            </label>
            <div class="relative flex items-center">
              <input
                name="interest"
                id="inputinterest"
                type="text"
                placeholder="Enter Interest / Hobby"
                class="h-10 w-full appearance-none rounded-md text-base leading-normal shadow-none outline-none md:text-[17px] font-sans m-0 placeholder-inputPlaceholder bg-gray-200 border border-solid text-inputText p-[10px]"
                autocomplete="off"
                value=""
              />
              <div class="relative">
                <button
                  type="button"
                  class="cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 bg-white text-[#8f8f8f] border-uncheckedGray border border-solid ml-1 h-10 rounded-md pl-3 pr-4"
                >
                  <img src="/interest2.svg" className="w-5" />
                  <span class="ml-1 whitespace-nowrap">Link</span>
                </button>
              </div>
            </div>
          </div>
          <div className="mb-4 w-full">
            <label
              for="info"
              className="text-primaryBlack mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]"
            >
              <span>Additional information</span>
              <span className="ml-2 text-[11px]  text-gray-400">optional</span>
            </label>
            <textarea
              name="info"
              id="info"
              placeholder="Enter additional information"
              className="m-0 block w-full resize-none appearance-none overflow-hidden rounded-md border border-solid bg-gray-200 p-[10px] font-sans text-base leading-normal text-inputText placeholder-inputPlaceholder shadow-none outline-none md:text-[17px]"
              rows="1"
            ></textarea>
          </div>
        </form>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-[20] flex w-full justify-between gap-2 bg-white p-4 px-5 shadow-card sm:sticky sm:left-auto sm:right-auto sm:mt-6 sm:mb-6 sm:gap-4 sm:rounded-lg md:px-7 lg:px-9">
        <div className="flex items-center justify-start"></div>
        <div className="flex space-x-7">
          <button
            type="button"
            className="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 py-2 rounded-full text-primaryBlack font-extrabold h-12 min-w-min px-4 text-[16px]"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="border-none cursor-pointer appearance-none touch-manipulation flex items-center focus-visible:outline-blue-600 hover:opacity-80 px-7 py-2 rounded-full font-extrabold min-w-[120px] text-white gradient h-12 justify-between pl-4 text-[16px]"
          >
            <span className="border-r border-solid border-gray-100 border-opacity-60 pr-3">
              <img src="/interest3.svg" className="w-8" />
            </span>
            <span className="pr flex justify-center pl-5">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Interest;
