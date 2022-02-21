import Image from 'next/image';
import Typewriter from '../components/Typewriter';
import SkillCard from '../components/SkillCard';
import Particles from 'react-tsparticles';
import { useState, useEffect } from 'react';
import me from '../public/images/me.gif';

export default function Home() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch('https://gitconnected.com/v1/portfolio/protospoof')
			.then((res) => res.json())
			.then((user) => {
				setUser(user);
			});
	}, []);

	if (!user) {
		return <div />;
	}

	console.log(user);

	return (
		<div className='min-h-screen w-screen bg-[#121212]'>
			<main className='grid grid-cols-1 content-center justify-center min-h-screen w-full'>
				<Particles
					className='absolute h-screen w-full z-10'
					options={{
						fullScreen: { enable: false },
						background: {
							color: {
								value: '#0000000',
							},
						},
						fpsLimit: 120,
						interactivity: {
							events: {
								onClick: {
									enable: false,
									mode: 'push',
								},
								onHover: {
									enable: false,
									mode: 'repulse',
								},
								resize: true,
							},
							modes: {
								bubble: {
									distance: 400,
									duration: 2,
									opacity: 0.8,
									size: 40,
								},
								push: {
									quantity: 4,
								},
								repulse: {
									distance: 200,
									duration: 0.4,
								},
							},
						},
						particles: {
							color: {
								value: '#ffffff',
							},
							links: {
								color: '#ffffff',
								distance: 150,
								enable: true,
								opacity: 0.5,
								width: 1,
							},
							collisions: {
								enable: true,
							},
							move: {
								direction: 'none',
								enable: true,
								outMode: 'bounce',
								random: false,
								speed: 0.5,
								straight: false,
							},
							number: {
								density: {
									enable: true,
									area: 800,
								},
								value: 60,
							},
							opacity: {
								value: 0.5,
							},
							shape: {
								type: 'circle',
							},
							size: {
								random: true,
								value: 5,
							},
						},
						detectRetina: true,
					}}
				></Particles>
				<div className='grid grid-cols-1 gap-2 sm:gap-5 md:gap-8 content-center justify-center splash w-full h-screen bg-transparent relative top-0 left-0 z-10'>
					<h1 className='glow splash-title justify-self-center text-4xl sm:text-6xl md:text-8xl'>
						Quinlan Kildare
					</h1>
					<h2 className='glow splash-subtitle justify-self-center text-xl sm:text-3xl md:text-6xl'>
						<Typewriter words={['Computer Scientist', 'Programmer', 'Engineer']} loop={true} />
					</h2>
					<div className='grid grid-cols-1 sm:grid-cols-3 content-center justify-center m-12'>
						<div className='flex sm:col-start-2 content-center justify-evenly sm:justify-between md:justify-between lg:justify-around h-fit w-full'>
							<a className='h-fit' href='https://www.linkedin.com/in/quinlan-kildare-a030781ba/'>
								<svg
									className='h-10 sm:h-14 md:h-16 w-auto fill-[snow] icon'
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
								>
									<path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z' />
								</svg>
							</a>
							<a className='h-fit' href='https://github.com/ProtoSpoof'>
								<svg
									className='h-10 sm:h-14 md:h-16 w-auto fill-[snow] icon'
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
								>
									<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
								</svg>
							</a>
						</div>
					</div>
				</div>
				<div id='bio' className='flex flex-col justify-center content-center w-full bg-[#00000050] p-4'>
					<h1 className='text-center text-4xl sm:text-5xl p-4'>About</h1>
					<div className='flex flex-col lg:flex-row self-center content-center justify-center p-4 max-w-[1500px]'>
						<div className='flex content-center justify-center h-fit w-1/2 max-w-[175px] m-4 mb-8 sm:h-[175px] sm:w-fit sm:mr-8 self-center glow-circle'>
							<Image src={me} alt='Picture of the author' className='rounded-full ' />
						</div>
						<p className='self-center text-justify text-lg sm:text-2xl sm:pt-0 p-4 w-fit '>
							I'm a student majoring in Computer Science and the Vice-President of the Knight's Table
							Tennis Club at the University of Central Florida. I started programming in highschool and
							have stuck with it ever since. Since then I have learned and become proficient in many
							programming languages like Python, Java, C and C++, but I prefer to program in C whenever
							possible. I like to work on projects that are closer to the metal, but I have experience
							doing fullstack developement with technologies like React, Nextjs and Nodejs.
						</p>
					</div>
				</div>
				<div id='skills' className='flex flex-col justify-center content-center w-full h-fit p-4'>
					<h1 className='text-center text-4xl sm:text-5xl p-4'>Skills</h1>
					<p className='self-center text-center text-lg sm:text-2xl sm:pt-0 p-4 w-fit '>
						Here are some of the skills I've learned since I started programming.
					</p>
					<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-16 self-center content-center justify-center p-8 w-full max-w-[1500px]'>
						{user.skills.map((e, ind) => {
							return <SkillCard key={ind} skill={e.name.toString()} />;
						})}
					</div>
				</div>
			</main>

			<footer></footer>
		</div>
	);
}
