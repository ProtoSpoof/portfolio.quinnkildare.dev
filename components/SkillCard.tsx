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
			className={`w-full w-max-[200px] h-max-[200px] aspect-square rea cursor-pointer ${styles.card} ${styles.grow}`}
		>
			<div className={`w-full h-full bg-[#292929] rounded-3xl shadow-2xl shadow-black ${styles.cardinner}`}>
				<div className={`grid content-center justify-center h-full text-7xl ${styles.frontface}`}>
					{SkillLogo ? <SkillLogo className={`${styles.logo}`} /> : props.skill}
				</div>
				<div className={`grid content-center justify-center text-center w-full h-full ${styles.backface}`}>
					<h2 className='sm:text-xl lg:text-3xl'>{props.skill}</h2>
					<h3 className='md:text-2xl'>{props.level}</h3>
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
