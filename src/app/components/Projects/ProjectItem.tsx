import Image from "next/image";

import LinkButton from "@/components/Button";

import ProjectImage from "./ProductImage";
import { ProjectItemProps } from "./projects.data";

export function ProjectItem({ name, desktop, mobile, description, type, tools }: Partial<ProjectItemProps>) {
	return (
		<div className="mt-4 flex flex-col gap-8">
			{type === "web" ? (
				<ProjectImage name={name} desktop={desktop} mobile={mobile} />
			) : (
				<Image width={750} height={519} alt={`${name} app image`} src={mobile!} className="w-full h-auto max-h-96 max-w-xl object-contain" />
			)}
			<h3 className="text-white text-2xl font-bold text-center mt-8">{name}</h3>
			<p className="text-center leading-6">{description}</p>
			<div className="flex gap-2 flex-wrap justify-center">
				{tools!.map((tool, index) => (
					<span key={index} className="flex gap-3 items-center bg-darkGray rounded-2xl  py-1 px-3">
						<span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"></span>
						<span className="font-mono text-sm">{tool}</span>
					</span>
				))}
			</div>
			<LinkButton className="w-max self-center">CASE STUDY</LinkButton>
		</div>
	);
}
