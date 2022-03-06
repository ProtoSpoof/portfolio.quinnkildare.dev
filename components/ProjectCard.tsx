import React from 'react';
import styles from '../styles/ProjectCard.module.scss';

function ProjectCard(props: ProjectCardProps) {
	return (
		<div className={`${styles.card} self-center justify-self-center`}>
			<div className={`${styles.face} ${styles.face1}`}>
				<div className={`${styles.content}`}>
					<h3>{props.name}</h3>
				</div>
			</div>
			<div className={`${styles.face} ${styles.face2}`}>
				<div className={`${styles.content}`}>
					<p> {props.summary}</p>
					<br />
					<h4>
						<em>Languages: </em>
						{props.languages.map((e, ind) => {
							return <em key={ind}>{e.toString() + (ind < props.languages.length - 1 ? ', ' : '')}</em>;
						})}
					</h4>

					<a href={props.url.toString()} type='button'>
						View
					</a>
				</div>
			</div>
		</div>
	);
}

type ProjectCardProps = {
	name: String;
	summary: String;
	url: String;
	languages: String[];
};

export default ProjectCard;
