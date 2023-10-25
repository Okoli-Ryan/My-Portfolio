import { ProjectItem } from './ProjectItem';
import { PROJECTS } from './projects.data';

export default function Projects() {
	return (
		<div className="container flex gap-8 flex-col bottom-border py-16" id="projects">
			<h2 className="text-4xl font-bold text-center font-mono head-underline w-max mx-auto">Projects</h2>
			<div className="flex gap-24 lg:gap-y-48 flex-col">
				{PROJECTS.map((project) => (
					<ProjectItem {...project} key={project.name} />
				))}
			</div>
		</div>
	);
}
