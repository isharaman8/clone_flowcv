import React from "react";

const DetailsCard = ({ icon, title, description }) => {
	return (
		<div className="max-w-[500px]">
			<img src={icon} alt="svg icon" className="w-10 lg:w-12" />
			<h3 className="text-strong font-bold text-xl mt-4">{title}</h3>
			<p className="mt-2 text-sm leading-6 font-thin">{description}</p>
		</div>
	);
};

export default DetailsCard;
