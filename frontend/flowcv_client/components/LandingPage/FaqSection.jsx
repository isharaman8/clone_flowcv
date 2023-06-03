import React from "react";

const FaqSection = ({ question, answer }) => {
	return (
		<div class="pt-5 pb-5 border-t border-solid border-gray-200 w-full hover:opacity-80 cursor-pointer faqItem faqItem--closed mt-7">
			<div class="flex items-center">
				<div class="w-6 faqItem__arrow">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 -16 172 172"
					>
						<g
							fill="none"
							stroke-miterlimit="10"
							font-family="none"
							font-weight="none"
							font-size="none"
							text-anchor="none"
						>
							<path d="M0 172V0h172v172z"></path>
							<path
								d="M130.84 48.12a3.485 3.485 0 0 0-3.238 2.083 3.447 3.447 0 0 0 .713 3.775l27.44 28.582H6.96a3.423 3.423 0 0 0-3.01 1.707 3.409 3.409 0 0 0 0 3.466 3.423 3.423 0 0 0 3.01 1.707h148.793l-27.44 28.582a3.44 3.44 0 0 0 .108 4.864 3.428 3.428 0 0 0 4.865-.108L168.6 86l-35.313-36.778a3.458 3.458 0 0 0-2.446-1.102z"
								fill="#333"
							></path>
						</g>
					</svg>
				</div>
				<p class="font-bold pl-5 mt-1 faqItem__question">{question}</p>
			</div>
			<p class="faqItem__answer pl-11 mt-2 mb-2">{answer}</p>
		</div>
	);
};

export default FaqSection;
