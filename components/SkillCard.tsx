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
			className={`grid content-center justify-center text-8xl w-full w-max-[500px] h-max-[500px] bg-[#292929] aspect-square rounded-3xl shadow-2xl shadow-black ${styles.grow} ${styles.cardglow}`}
		>
			{SkillLogo ? <SkillLogo /> : props.skill}
		</div>
	);
}

type SkillCardProps = {
	skill: String;
};

export default SkillCard;
