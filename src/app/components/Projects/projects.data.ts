export interface ProjectItemProps {
	desktop?: string;
	mobile: string;
	name: string;
	link: string;
	description: string;
	type: "web" | "mobile";
	tools?: string[];
}

export const PROJECTS: ProjectItemProps[] = [
	{
		desktop: "/images/projects/figocard_desktop.png",
		mobile: "/images/projects/figocard_mobile.png",
		name: "Billsclan Storefront",
		description: "The Billsclan storefront is a personalized e-commerce platform, which allows registered users own an online storefront",
		link: "/billsclan",
		type: "web",
		tools: ["React", "Bootstrap 5", "JavaScript", "Redux", "PostgreSQL", ".NET", "C#", "Flutterwave", "Jest"],
	},
	{
		desktop: "/images/projects/panto_desktop.png",
		mobile: "/images/projects/panto_mobile.png",
		name: "Panto",
		description: "A landing page for a furniture shop. The website is designed to be a one-stop-shop for all your furniture needs",
		link: "/panto",
		type: "web",
		tools: ["React", "HTML", "CSS", "Ant Design"],
	},
	{
		desktop: "/images/projects/getlinked_desktop.png",
		mobile: "/images/projects/getlinked_mobile.png",
		name: "Get Linked",
		description: "A landing page for GetLinked Challenge",
		link: "/getlinked",
		type: "web",
		tools: ["React", "HTML", "CSS", "SASS"],
	},
	{
		desktop: "/images/projects/raadio_desktop.png",
		mobile: "/images/projects/raadio_mobile.png",
		name: "Raadio",
		description: "An responsive local music player",
		link: "/raadio",
		type: "web",
		tools: ["React", "HTML", "CSS", "Tailwind CSS"],
	},
	{
		desktop: "/images/projects/clickup_desktop.png",
		mobile: "/images/projects/clickup_mobile.png",
		name: "Clickup",
		description: "A landing page for Clickup, a project management tool",
		link: "/clickup",
		type: "web",
		tools: ["React", "HTML", "CSS", "Webpack", "SASS"],
	},
	{
		desktop: "/images/projects/teamflow_desktop.png",
		mobile: "/images/projects/teamflow_mobile.png",
		name: "TeamFlow",
		description: "A landing page for Teamflow, a dummy software company for team collaboration and project management",
		link: "/teamflow",
		type: "web",
		tools: ["React", "HTML", "CSS", "Tailwind CSS"],
	},
	{
		desktop: "/images/projects/space-tourism_desktop.png",
		mobile: "/images/projects/space-tourism_mobile.png",
		name: "Space Tourism",
		description: "A landing page for Space Exploration",
		link: "/space-tourism",
		type: "web",
		tools: ["React", "HTML", "CSS", "Tailwind CSS"],
	},
	{
		mobile: "/images/projects/wazobia_app.png",
		name: "Wazobia App",
		description: "A multilingual dictionary showcasing different topics about Nigeria in textual and audio format in it's core languages",
		link: "/wazobia",
		type: "mobile",
		tools: ["React Native", "Redux", "Native Base", "Firebase", "A/B Testing"],
	},
	{
		mobile: "/images/projects/instagram_app.png",
		name: "Instagram Clone",
		description: "A clone of the instagram app",
		link: "/instagram",
		type: "mobile",
		tools: ["React Native"],
	},
	{
		mobile: "/images/projects/figocard_app.png",
		name: "Billsclan white-labelled App",
		description: "The white-labelled mobile storefront for Billsclan, enabling businesses own their store app",
		link: "/billsclan-app",
		type: "mobile",
		tools: ["React Native", "Redux", "Native Base", "Firebase", "React Testing Library", "Jest"],
	},
];
