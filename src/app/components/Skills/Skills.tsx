import React from "react";

import Pill from "./Pill";
import { SKILLS } from "./Skills.data";

export default function Skills() {
	return (
		<div className="flex gap-8 flex-col py-8 lg:py-0" id="skills">
			<h3 className="text-white text-2xl font-bold text-center lg:text-left">My Skills</h3>
			<div className="flex gap-4 flex-wrap">
				{SKILLS.map((skill) => (
					<Pill key={skill}>{skill}</Pill>
				))}
			</div>
		</div>
	);
}
