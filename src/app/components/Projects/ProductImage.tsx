import Image from "next/image";
import React from "react";

import { ProjectItemProps } from "./projects.data";

export default function ProjectImage({ name, desktop, mobile }: Partial<ProjectItemProps>) {
	return (
		<div className="relative overflow-hidden">
			<Image width={750} height={519} alt={`${name} desktop image`} src={desktop!} className="w-full h-auto max-w-xl object-contain" />
			<Image
				width={450}
				height={1000}
				alt={`${name} mobile image`}
				src={mobile!}
				className="absolute right-[5%] -bottom-[20%] h-full w-[30%] max-w-[unset] object-contain"
			/>
		</div>
	);
}
