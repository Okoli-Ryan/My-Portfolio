import Button from "@/components/Button";

import ProjectImage from "./ProductImage";
import { ProjectItemProps } from "./projects.data";

export function ProjectItem({ name, desktop, mobile, description }: Partial<ProjectItemProps>) {
	return (
		<div className="mt-4 flex flex-col gap-8">
			<ProjectImage name={name} desktop={desktop} mobile={mobile} />
			<h3 className="text-white text-2xl font-bold text-center mt-8">{name}</h3>
			<p className="text-center leading-6">{description}</p>
			<Button className="w-max self-center">CASE STUDY</Button>
		</div>
	);
}
