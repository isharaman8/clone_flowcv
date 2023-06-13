import { useEffect, useState } from "react";
import Popup from "./minicomponents/Popup";
import { MONTHS } from "@utils/Constants";
import { _getYears } from "@utils/helpers";

const ProjectComponent = () => {
	const [YEARS] = useState(_getYears());

	const [subTitle, setSubTitle] = useState("");
	const [popupOpen, setPopupOpen] = useState(null);
	const [description, setDescription] = useState("");
	const [year, setYear] = useState({ startYear: null, endYear: null });
	const [month, setMonth] = useState({ startMonth: null, endMonth: null });

	const handleMonth = (e) => {
		setMonth((p) => ({ ...p, ...e }));
		setPopupOpen(false);
	};
	const handleYear = (e) => {
		setYear((p) => ({ ...p, ...e }));
		setPopupOpen(false);
	};

	const handleSubTitle = (e) => setSubTitle(e.target.value);
	const handleDescription = (e) => setDescription(e.target.value);

	useEffect(() => {
		console.log("MONTH", month);
		console.log("YEAR", year);
		console.log("POPUP OPEN", popupOpen);
	}, [month, year, popupOpen]);

	useEffect(() => {
		console.log("DESCRIPTION", description);
		console.log("SUBTITLE", subTitle);
	}, [description, subTitle]);

	return (
		<div class="relative">
			<div class="relative w-full rounded-lg bg-white shadow-card px-5 md:px-7 lg:px-9 py-5 pb-5 md:py-7 md:pb-9 lg:py-9 lg:pb-10">
				<div class="mb-8 grid grid-cols-[auto_auto] items-center gap-2">
					<h3 class="text-xl font-extrabold md:text-2xl">Create Project</h3>
				</div>
				<form class="flex w-full flex-wrap justify-between">
					<div class="mb-4 w-full">
						<label
							for="inputprojectTitle"
							class="text-primaryBlack mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]"
						>
							<span>Project title</span>
							<span class="gradient min-h-1 min-w-1 ml-[5px] mt-1 inline-block h-1 w-1 rounded-full align-top"></span>
						</label>
					</div>
					<div class="mb-4 w-full">
						<label
							for="inputsubTitle"
							class="text-primaryBlack mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]"
						>
							<span>Sub title</span>
							<span class="ml-2 text-[11px]  text-gray-400">optional</span>
						</label>
						<div class="relative flex items-center">
							<input
								name="subTitle"
								id="inputsubTitle"
								type="text"
								placeholder="Enter sub title"
								class="h-10 w-full appearance-none rounded-md text-base leading-normal shadow-none outline-none md:text-[17px] font-sans m-0 placeholder-inputPlaceholder bg-gray-100 border border-solid border-inputBorder text-inputText p-[10px]"
								autocomplete="off"
								value={subTitle}
								onInput={handleSubTitle}
							/>
						</div>
					</div>
					<div class="mb-4 flex w-full flex-col">
						<div class="relative grid grid-cols-1 justify-between gap-4 md:grid-cols-[48.5%_48.5%] md:gap-0">
							<div>
								<label
									for="startMonth"
									class="text-primaryBlack mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]"
								>
									<span>Start Date</span>
									<span class="ml-2 text-[11px]  text-gray-400">optional</span>
								</label>
								<div class="flex flex-row justify-center items-center gap-2">
									<div class=" mb-4 relative w-full">
										<button
											class="m-0 relative md:text-[17px] text-inputPlaceholder rounded-md border-inputBorder bg-gray-100 placeholder-inputPlaceholder flex w-full appearance-none items-center border border-solid p-[10px] font-sans text-base leading-normal shadow-none focus-visible:outline-blue-600"
											id="headlessui-listbox-button-29"
											type="button"
											aria-haspopup="true"
											aria-expanded="false"
											data-headlessui-state=""
											onClick={() => setPopupOpen("startMonth")}
										>
											<span className="truncate">
												{month.startMonth || "Month"}
											</span>
										</button>
										{popupOpen === "startMonth" && (
											<Popup
												list={MONTHS}
												handleValue={handleMonth}
												cols={3}
												monthType="start"
											/>
										)}
									</div>
									<div class="mb-4 static w-full">
										<div class="relative">
											<button
												class="m-0 md:text-[17px] text-inputPlaceholder rounded-md border-inputBorder bg-gray-100 placeholder-inputPlaceholder flex w-full appearance-none items-center border border-solid p-[10px] font-sans text-base leading-normal shadow-none focus-visible:outline-blue-600"
												id="headlessui-listbox-button-31"
												type="button"
												aria-haspopup="true"
												aria-expanded="false"
												data-headlessui-state=""
												onClick={() => setPopupOpen("startYear")}
											>
												<span class="truncate">{year.startYear || "Year"}</span>
											</button>

											{popupOpen === "startYear" && (
												<Popup
													list={YEARS}
													handleValue={handleYear}
													cols={4}
													yearType="start"
												/>
											)}
										</div>
									</div>
								</div>
							</div>
							<div>
								<label
									for="endMonth"
									class="text-primaryBlack mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]"
								>
									<span>End Date</span>
									<span class="ml-2 text-[11px]  text-gray-400">optional</span>
								</label>
								<div class="flex flex-row justify-center items-center gap-5">
									<div class="mb-4 static w-full">
										<div class="relative ">
											<button
												class="m-0 md:text-[17px] text-inputPlaceholder rounded-md border-inputBorder bg-gray-100 placeholder-inputPlaceholder flex w-full appearance-none items-center border border-solid p-[10px] font-sans text-base leading-normal shadow-none focus-visible:outline-blue-600"
												id="headlessui-listbox-button-33"
												type="button"
												aria-haspopup="true"
												aria-expanded="false"
												data-headlessui-state=""
												onClick={() => setPopupOpen("endMonth")}
											>
												<span class="truncate">
													{month.endMonth || "Month"}
												</span>
											</button>

											{popupOpen === "endMonth" && (
												<Popup
													list={MONTHS}
													handleValue={handleMonth}
													cols={3}
													monthType="end"
												/>
											)}
										</div>
									</div>
									<div class="mb-4 static w-full">
										<div class="relative">
											<button
												class="m-0 md:text-[17px] text-inputPlaceholder rounded-md border-inputBorder bg-gray-100 placeholder-inputPlaceholder flex w-full appearance-none items-center border border-solid p-[10px] font-sans text-base leading-normal shadow-none focus-visible:outline-blue-600"
												id="headlessui-listbox-button-35"
												type="button"
												aria-haspopup="true"
												aria-expanded="false"
												data-headlessui-state=""
												onClick={() => setPopupOpen("endYear")}
											>
												<span class="truncate">{year.endYear || "Year"}</span>
											</button>
											{popupOpen === "endYear" && (
												<Popup
													list={YEARS}
													handleValue={handleYear}
													cols={4}
													yearType="end"
												/>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full">
						<label
							for=""
							className="text-primaryBlack mb-[2.5px] ml-[11px] inline-block w-full text-[14px] font-bold md:text-[15px]"
						>
							<span>Description</span>
							<span class="ml-2 text-[11px]  text-gray-400">optional</span>
						</label>
						<textarea
							className="w-full bg-gray-100"
							placeholder="write something"
							rows={5}
							value={description}
							onInput={handleDescription}
						></textarea>
					</div>
				</form>
			</div>
			<div class="fixed bottom-0 left-0 right-0 z-[20] flex w-full justify-between gap-2 bg-white p-4 px-5 shadow-card sm:sticky sm:left-auto sm:right-auto sm:mt-6 sm:mb-6 sm:gap-4 sm:rounded-lg md:px-7 lg:px-9">
				<div class="flex items-center justify-start"></div>
				<div class="flex space-x-7">
					<button
						type="button"
						class="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 py-2 rounded-full text-primaryBlack font-extrabold h-12 min-w-min px-4 text-[16px]"
					>
						Cancel
					</button>
					<button
						type="submit"
						class="border-none cursor-pointer appearance-none touch-manipulation flex items-center focus-visible:outline-blue-600 hover:opacity-80 px-7 py-2 rounded-full font-extrabold min-w-[120px] text-white gradient h-12 justify-between pl-4 text-[16px]"
					>
						<span class="border-r border-solid border-gray-100 border-opacity-60 pr-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-5"
							>
								<path d="M0 0h24v24H0z" fill="none"></path>
								<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
							</svg>
						</span>
						<span class="pr flex justify-center pl-5">Save</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectComponent;
