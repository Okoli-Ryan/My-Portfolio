import Image from "next/image";

import Button from "@/components/Button";

import ProjectImage from "./ProductImage";
import { ProjectItemProps } from "./projects.data";

export function ProjectItem({ name, desktop, mobile, description, type }: Partial<ProjectItemProps>) {
	return (
		<div className="mt-4 flex flex-col gap-8">
			{type === "web" ? (
				<ProjectImage name={name} desktop={desktop} mobile={mobile} />
			) : (
				<Image width={750} height={519} alt={`${name} app image`} src={mobile!} className="w-full h-auto max-h-96 max-w-xl object-contain" />
			)}
			<h3 className="text-white text-2xl font-bold text-center mt-8">{name}</h3>
			<p className="text-center leading-6">{description}</p>
			<Button className="w-max self-center">CASE STUDY</Button>
		</div>
	);
}
