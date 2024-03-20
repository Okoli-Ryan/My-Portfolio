export interface ProjectItemProps {
	desktop?: string;
	mobile: string;
	name: string;
	link: string;
	description: string;
	type: "web" | "mobile";
	tools?: string[];
	liveUrl?: string;
	codeUrl?: string;
}

export const PROJECTS: ProjectItemProps[] = [
	{
		desktop: "/images/projects/figocard_desktop.png",
		mobile: "/images/projects/figocard_mobile.png",
		name: "Billsclan Storefront",
		description: "The Billsclan storefront is a personalized e-commerce platform, which allows registered users own an online storefront",
		link: "/billsclan",
		type: "web",
		tools: ["React", "Bootstrap 5", "JavaScript", "Jest", "Redux", "PostgreSQL", "ASP.NET", "C#", "Flutterwave"],
		liveUrl: "https://billsclan.shop/figocard",
	},
	{
		desktop: "/images/projects/dinnin_desktop.png",
		mobile: "/images/projects/dinnin_mobile.png",
		name: "Dinnin",
		description: "A restaurant management project comprising admin dashboard and customer-facing web app",
		link: "/dinnin",
		type: "web",
		tools: ["React", "TypeScript", "Redux Toolkit", "PusherJs", "Jest", "MySQL", "ASP.NET", "RabbitMQ", "Docker"],
		liveUrl: "https://dinnin-dashboard.vercel.app",
		codeUrl: "https://github.com/Okoli-Ryan/Dinnin-dashboard",
	},
	{
		desktop: "/images/projects/todo_desktop.png",
		mobile: "/images/projects/todo_mobile.png",
		name: "Day Planner App",
		description: "Day Planner with calender and time tracker",
		link: "/day-planner",
		type: "web",
		tools: ["React", "HTML", "CSS", "Ant Design", "Tailwind CSS"],
		codeUrl: "https://github.com/Okoli-Ryan/Day-planner",
		liveUrl: "https://day-planner-ten.vercel.app/",
	},
	{
		desktop: "/images/projects/panto_desktop.png",
		mobile: "/images/projects/panto_mobile.png",
		name: "Panto",
		description: "A landing page for a furniture shop. The website is designed to be a one-stop-shop for all your furniture needs",
		link: "/panto",
		type: "web",
		tools: ["React", "HTML", "CSS", "Ant Design"],
		liveUrl: "https://panto-self.vercel.app",
		codeUrl: "https://github.com/Okoli-Ryan/Panto",
	},
	{
		desktop: "/images/projects/raadio_desktop.png",
		mobile: "/images/projects/raadio_mobile.png",
		name: "Raadio",
		description: "An responsive local music player",
		link: "/raadio",
		type: "web",
		tools: ["React", "HTML", "CSS", "Tailwind CSS"],
		codeUrl: "https://github.com/Okoli-Ryan/Music-Player",
		liveUrl: "https://raadio.vercel.app",
	},
	{
		desktop: "/images/projects/getlinked_desktop.png",
		mobile: "/images/projects/getlinked_mobile.png",
		name: "Get Linked",
		description: "A landing page for GetLinked Challenge",
		link: "/getlinked",
		type: "web",
		tools: ["React", "HTML", "CSS", "SASS"],
		liveUrl: "https://get-linked-landing.vercel.app/",
		codeUrl: "https://github.com/Okoli-Ryan/getLinked-landing",
	},
	{
		desktop: "/images/projects/clickup_desktop.png",
		mobile: "/images/projects/clickup_mobile.png",
		name: "Clickup",
		description: "A landing page for Clickup, a project management tool",
		link: "/clickup",
		type: "web",
		tools: ["React", "HTML", "CSS", "Webpack", "SASS"],
		codeUrl: "https://github.com/Okoli-Ryan/Clickup-Challenge",
		liveUrl: "https://clickup-challenge.netlify.app",
	},
	{
		desktop: "/images/projects/teamflow_desktop.png",
		mobile: "/images/projects/teamflow_mobile.png",
		name: "TeamFlow",
		description: "A landing page for Teamflow, a dummy software company for team collaboration and project management",
		link: "/teamflow",
		type: "web",
		tools: ["React", "HTML", "CSS", "Tailwind CSS"],
		codeUrl: "https://github.com/Okoli-Ryan/Teamflow",
		liveUrl: "https://teamflow-six.vercel.app",
	},
	{
		desktop: "/images/projects/space-tourism_desktop.png",
		mobile: "/images/projects/space-tourism_mobile.png",
		name: "Space Tourism",
		description: "A landing page for Space Exploration",
		link: "/space-tourism",
		type: "web",
		tools: ["React", "HTML", "CSS", "Tailwind CSS"],
		codeUrl: "https://github.com/Okoli-Ryan/space-tourism",
		liveUrl: "https://space-tourism-omega-three.vercel.app",
	},
	{
		mobile: "/images/projects/nigerite_app.png",
		name: "Nigerite Emenite App",
		description:
			"Your One-stop shop for building components solutions and market-leader partner in the building components and construction market segment with modern building components and solutions.",
		link: "/nigerite",
		type: "mobile",
		tools: ["React Native", "Redux", "Native Base", "Firebase", "A/B Testing"],
		liveUrl: "https://play.google.com/store/apps/details?id=com.etex.nigeriteetex&hl=en&gl=US&pli=1",
	},
	{
		mobile: "/images/projects/ajotsome_app.png",
		name: "Ajotsome App",
		description: "The innovative platform that digitizes and enhances the traditional saving practice of Ajo",
		link: "/ajotsome",
		type: "mobile",
		tools: ["React Native", "Redux", "Native Base", "A/B Testing"],
		liveUrl: "https://play.google.com/store/apps/details?id=com.ajot",
	},
	{
		mobile: "/images/projects/wazobia_app.png",
		name: "Wazobia App",
		description: "A multilingual dictionary showcasing different topics about Nigeria in textual and audio format in it's core languages",
		link: "/wazobia",
		type: "mobile",
		tools: ["React Native", "Redux", "Native Base", "Firebase", "A/B Testing"],
		codeUrl: "https://github.com/Okoli-Ryan/Wazobia",
		liveUrl: "https://drive.google.com/drive/folders/1JcOIQJfw_ZNW8NgfxnGreNZGm4z_-LBl?usp=share_link",
	},
	{
		mobile: "/images/projects/instagram_app.png",
		name: "Instagram Clone",
		description: "A clone of the instagram app",
		link: "/instagram",
		type: "mobile",
		tools: ["React Native", "React-Native-Reanimated"],
		codeUrl: "https://github.com/Okoli-Ryan/Instagram-UI-clone",
		liveUrl: "https://drive.google.com/drive/folders/1P-TXwFY0tXMU4xvfo4sk-XAYJ_DknbUT?usp=share_link",
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

// TODO Add modern todo project
// TODO Add React Native Ivorypay
// TODO Nigerite Emenite
