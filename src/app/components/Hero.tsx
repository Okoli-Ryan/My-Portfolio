import Image from "next/image";
import React from "react";

export default function Hero() {
	return (
		<div className="h-full flex justify-center items-center relative flex-col gap-4">
			<h1 className="text-4xl font-bold text-white font-sans">Hey, I&#39;m Ugo Okoli</h1>
			<h3 className="text-white text-2xl font-semibold font-raleway">Mobile || Frontend Developer</h3>
		</div>
	);
}
