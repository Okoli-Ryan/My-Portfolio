export interface ProjectItemProps {
	desktop: string;
	mobile: string;
	name: string;
	link: string;
	description: string;
}

export const PROJECTS: ProjectItemProps[] = [
	{
		desktop: "/images/projects/figocard_desktop.png",
		mobile: "/images/projects/figocard_mobile.png",
		name: "Billsclan Storefront",
		description: "The Billsclan storefront is a personalized e-commerce platform, which allows registered users own an online storefront",
		link: "/billsclan",
	},
	{
		desktop: "/images/projects/panto_desktop.png",
		mobile: "/images/projects/panto_mobile.png",
		name: "Panto",
		description: "A landing page for a furniture shop. The website is designed to be a one-stop-shop for all your furniture needs",
		link: "/panto",
	},
	{
		desktop: "/images/projects/teamflow_desktop.png",
		mobile: "/images/projects/teamflow_mobile.png",
		name: "TeamFlow",
		description: "A landing page for Teamflow, a dummy software company for team collaboration and project management",
		link: "/teamflow",
	},
];
