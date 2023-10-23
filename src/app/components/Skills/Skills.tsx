import React from "react";

import Pill from "./Pill";

const skillList = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "NextJs", "C#", "ASP.NET", "Redux", "Git", "Github", "Responsive Design", , "SASS"];

export default function Skills() {
	return (
		<div className="container flex gap-8 flex-col bottom-border py-16">
			<h2 className="text-3xl ">Skills</h2>
			<div className="flex gap-4 flex-wrap">
				{skillList.map((skill) => (
					<Pill key={skill}>{skill}</Pill>
				))}
			</div>
		</div>
	);
}
