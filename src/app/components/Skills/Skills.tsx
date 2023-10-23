import React from "react";

import Pill from "./Pill";
import { SKILLS } from "./Skills.data";

export default function Skills() {
	return (
		<div className="container flex gap-8 flex-col bottom-border py-16">
			<h2 className="text-3xl ">Skills</h2>
			<div className="flex gap-4 flex-wrap">
				{SKILLS.map((skill) => (
					<Pill key={skill}>{skill}</Pill>
				))}
			</div>
		</div>
	);
}
