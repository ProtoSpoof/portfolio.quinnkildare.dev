import React from 'react';
import * as SiIcons from 'react-icons/si';
import styles from '../styles/SkillCard.module.scss';

function SkillCard(props: SkillCardProps) {
	const SkillLogo =
		SiIcons[
			'Si' +
				(props.skill[0].toUpperCase() + props.skill.slice(1).toLowerCase())
					.replaceAll('+', 'plus')
					.replaceAll('.', 'dot')
		];
	return (
		<div
			className={`w-[calc(50%-1rem)] md:w-[calc(25%-1.5rem)] aspect-square rounded-md ${styles.card} ${styles.grow}`}
		>
			<div
				className={`w-full aspect-square bg-[#FFFFFF10] rounded-md shadow-2xl shadow-black ${styles.cardinner}`}
			>
				<div className={`grid content-center justify-center h-full text-7xl ${styles.frontface}`}>
					{SkillLogo ? <SkillLogo className={`${styles.logo}`} /> : props.skill}
				</div>
				<div
					className={`grid content-center justify-center text-center w-full aspect-square ${styles.backface}`}
				>
					<h2 className='text-[125%]'>{props.skill}</h2>
					<h3 className='text-[100%]'>{props.level}</h3>
				</div>
			</div>
		</div>
	);
}

type SkillCardProps = {
	skill: String;
	level: String;
};

export default SkillCard;
