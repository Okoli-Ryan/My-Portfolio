import Image from "next/image";
import React from "react";

import Initials from "./Logo";

export default function Header() {
	return (
		<header className="h-16 bg-dark flex items-center sticky top-0">
			<div className="container flex justify-between items-center">
				<span className="text-light font-bold !font-sans">UGOCHUKWU OKOLI</span>
				<span className="flex md:hidden">
					<Image width={24} height={24} alt="Menu button" src="/icons/hamburger menu.svg" />
				</span>
			</div>
		</header>
	);
}
