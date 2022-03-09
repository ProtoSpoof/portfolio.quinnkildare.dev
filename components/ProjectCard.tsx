import React from 'react';
import styles from '../styles/ProjectCard.module.scss';

function ProjectCard(props: ProjectCardProps) {
	return (
		<li
			className={`flex flex-col gap-4 p-4 w-full lg:w-[calc(50%-1rem)] 2xl:w-[calc(33.333%-1.34rem)] bg-[#FFFFFF10] shadow-black shadow-2xl rounded-md list-none cursor-pointer ${styles.card} ${styles.grow}`}
			tabIndex={0}
			onClick={() => {
				window.open(props.url.toString());
			}}
			onKeyPress={(e) => {
				if (e.key == 'Enter') window.open(props.url.toString());
			}}
			title={`link to ${props.name} on github`}
			role='link listitem'
		>
			<h3
				className='w-full text-xl text-left break-words text-[snow] border-b border-gray-200 pb-4'
				title='project name'
			>
				{props.name}
			</h3>

			<p className='text-sm text-left text-gray-300 flex-grow' title='project summary'>
				{props.summary ? props.summary : 'Just checkout the github'}
			</p>

			<ul className='flex flex-wrap gap-1' title='project languages'>
				{props.languages.map((e, ind) => {
					return (
						<li key={ind} className={`bg-[#00000070] rounded-full`}>
							<div
								className={`py-2 px-4 text-xs text-transparent bg-clip-text font-medium ${styles.background}`}
							>
								{e.toString()}
							</div>
						</li>
					);
				})}
			</ul>
		</li>
	);
}

type ProjectCardProps = {
	name: String;
	summary: String;
	url: String;
	languages: String[];
};

export default ProjectCard;
