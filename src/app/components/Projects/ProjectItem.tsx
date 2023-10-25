import Image from "next/image";

import LinkButton from "@/components/Button";

import ProjectImage from "./ProductImage";
import { ProjectItemProps } from "./projects.data";

export function ProjectItem({ name, desktop, mobile, description, type, tools, codeUrl, liveUrl }: Partial<ProjectItemProps>) {
	return (
		<div className="mt-4 flex flex-col lg:flex-row gap-8 gap-x-[10%]">
			{type === "web" ? (
				<ProjectImage name={name} desktop={desktop} mobile={mobile} />
			) : (
				<Image
					width={750}
					height={519}
					alt={`${name} app image`}
					src={mobile!}
					className="w-full h-auto max-h-96 lg:max-h-[28rem] max-w-lg object-contain"
				/>
			)}
			<div className="flex flex-col gap-8 max-w-xl self-end">
				<h3 className="text-white text-2xl font-bold text-center lg:text-left mt-8">{name}</h3>
				<p className="text-center leading-6 lg:text-left">{description}</p>
				<div className="flex gap-2 flex-wrap justify-center lg:justify-start">
					{tools!.map((tool, index) => (
						<span key={index} className="flex gap-3 items-center bg-darkGray rounded-2xl max-w-max py-1 px-3">
							<span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"></span>
							<span className="font-mono text-sm">{tool}</span>
						</span>
					))}
				</div>
				<div className="flex gap-4 justify-center lg:justify-start">
					{codeUrl && (
						<LinkButton variant="outline" className="w-max self-center" newRoute href={codeUrl}>
							View Code
						</LinkButton>
					)}
					{liveUrl && (
						<LinkButton className="w-max self-center" target="_blank" newRoute href={liveUrl}>
							View Demo
						</LinkButton>
					)}
				</div>
			</div>
		</div>
	);
}
