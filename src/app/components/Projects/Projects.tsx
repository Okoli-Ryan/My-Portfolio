import { ProjectItem } from "./ProjectItem";
import { PROJECTS } from "./projects.data";

export default function Projects() {
	return (
		<div className="container flex gap-8 flex-col bottom-border py-16">
			<h2 className="text-3xl ">Projects</h2>
			<div className="flex gap-12 flex-col">
				{PROJECTS.map((project) => (
					<ProjectItem {...project} key={project.name} />
				))}
			</div>
		</div>
	);
}
