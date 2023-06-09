const ResumeMain = () => {
	return (
		<div class="flex  justify-center items-center w-[100vw] min-h-[80vh] bg-gray-200">
			<div className="flex flex-col justify-center items-center gap-20">
				<div className="flex flex-row justify-start items-center ml-auto mr-auto">
					<div className="w-[100px] md:w-[120px] lg:order-2 lg:w-[310px] xl:w-[340px]">
						<div class="relative z-10 mt-2 flex w-full items-center justify-center">
							{/* svg2 */}
							<img src="/svg2.svg" alt="svg2" className="w-32" />
						</div>
					</div>
					<div class="mt-10 w-full md:mt-12 lg:mt-8">
						<h1 class="text-center text-4xl font-extrabold md:text-5xl lg:text-left lg:text-6xl">
							Let's boost your career
						</h1>
						<h2 class="mt-4 text-center text-lg text-gray-500 md:text-xl lg:text-left lg:text-2xl">
							Showcase your skills and talents. Make a great first impression.
						</h2>
					</div>
				</div>

				{/*RESUME CARD*/}
				<div className="ml-auto mr-auto w-full">
					<h2 class="mx-5 text-2xl font-bold md:mx-0 md:text-3xl lg:text-4xl">
						Resumes
					</h2>
					<p class="mx-5 text-sm text-gray-500 md:mx-0 md:mt-3 md:text-base">
						Your first resume – 100% free, forever, all features, unlimited
						downloads, yes really.
					</p>
					<div class="mt-6 grid grid-cols-1 justify-start gap-12 md:mt-10 md:grid-cols-[min-content_1fr]">
						<div class="hidden h-[200px] w-[200px] items-center justify-center rounded-full border-[10px] border-solid border-white md:flex cursor-pointer hover:opacity-80">
							<img src="/svg3.svg" alt="svg3" className="w-20" />
						</div>

						{/* BOTTOM SECTION */}
						<div>
							<a
								className=" flex items-center rounded-lg p-5 relative w-[500px] min-h-[100px]  border border-dashed border-gray-300 md:h-20"
								href="/resume/content"
							>
								<div class="mr-3 grow">
									<p class="text-lg font-bold md:text-xl ">New resume</p>
								</div>
								<button
									type="button"
									class="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 min-h-[30px] min-w-[30px] text-white bg-black h-9 w-20 shrink-0 rounded-full sm:hidden"
								>
									<img src="/svg5.svg" alt="svg5" className="w-20" />
								</button>
								<button
									type="button"
									class="border-none cursor-pointer appearance-none touch-manipulation items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 p-2 rounded-full font-extrabold h-10 text-[15px] min-w-[120px] text-white bg-black hidden w-auto sm:flex"
								>
									<span class="flex items-center justify-center mr-2 -ml-1 md:mr-3 md:-ml-[6px] pb-0 md:pb-0">
										<img src="/svg6.svg" alt="svg6" />
									</span>
									Create
								</button>
								<div class="rounded-full bg-gradient-to-r from-pink-600 to-red-300 px-3 text-sm font-bold text-white absolute left-8 top-full z-[6] -mt-2 flex w-min shrink space-x-1 sm:left-12 md:-left-8 md:top-0 md:mt-3">
									<span class="">free</span>
									<span class="ml-1 mt-1 -mr-[3px] h-1 w-1 rounded-full bg-white"></span>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResumeMain;
