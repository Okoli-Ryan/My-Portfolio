import Image from 'next/image';
import React from 'react';

import { ProjectItemProps } from './projects.data';

export default function ProjectImage({ name, desktop, mobile }: Partial<ProjectItemProps>) {
	return (
		<div className="relative overflow-hidden w-max lg:w-full mx-auto lg:mx-[unset]">
			<Image width={540} height={350} alt={`${name} desktop image`} src={desktop!} className="w-full h-auto max-w-lg object-contain" />
			<Image
				width={450}
				height={1000}
				alt={`${name} mobile image`}
				src={mobile!}
				className="absolute right-[0%] -bottom-[0] h-4/5 w-[30%] max-w-xs object-contain"
			/>
		</div>
	);
}
