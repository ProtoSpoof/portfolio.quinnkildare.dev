import React from 'react';
import styles from '../styles/ProjectCard.module.scss';

function ProjectCard(props: ProjectCardProps) {
	return (
		<button
			className={`flex flex-col gap-4 w-full lg:w-[calc(50%-1rem)] 2xl:w-[calc(33.333%-1.34rem)] bg-[#FFFFFF10] shadow-black shadow-2xl rounded-md p-4 ${styles.card} ${styles.grow}`}
			onClick={() => {
				window.open(props.url.toString());
			}}
		>
			<p className='w-full text-xl text-left break-words text-[snow] border-b border-gray-200 pb-4'>
				{props.name}
			</p>

			<p className='text-sm text-left text-gray-300 flex-grow'>
				{props.summary ? props.summary : 'Just checkout the github'}
			</p>

			<div className='flex flex-wrap gap-1'>
				{props.languages.map((e, ind) => {
					return (
						<div key={ind} className={`bg-[#00000070] rounded-full`}>
							<div
								className={`py-2 px-4 text-xs text-transparent bg-clip-text font-medium ${styles.background}`}
							>
								{e.toString()}
							</div>
						</div>
					);
				})}
			</div>
		</button>
	);
}

type ProjectCardProps = {
	name: String;
	summary: String;
	url: String;
	languages: String[];
};

export default ProjectCard;
