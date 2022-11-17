import React from "react";
import { FaChevronDown } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";

export const Arrow = () => {
	return (
		<>
			<ScrollIntoView selector="#portfolio">
				<div className="mx-auto pt-16 md:pt-10 p-12 ">
					<FaChevronDown className="mx-auto text-3xl animate-bounce text-blue-500 cursor-pointer" />
				</div>
			</ScrollIntoView>
		</>
	);
};