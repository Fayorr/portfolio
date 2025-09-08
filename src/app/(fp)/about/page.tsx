import Link from 'next/link';
import { Github } from 'lucide-react';
const About = () => {
	return (
		<section
			id='about'
			className='flex flex-col-reverse md:flex-row gap-14 md:gap-0 justify-center items-center px-8 md:px-20 py-18  md:py-40 dark:bg-[#0f172a]'
		>
			<div className='flex flex-col md:flex-row justify-center items-center  w-[100%] md:w-1/2 h-[40dvh] gap-10 md:gap-0'>
				<div className='flex md:flex-col items-center justify-center mr-0 md:mr-10 pb-2 md:pb-0'>
					<div className='border-3 w-[4rem] md:w-0 md:h-[4rem] bg-orange-500'></div>
					<div className='border-5 bg-orange-500 rounded-full mx-1 md:my-1 '></div>
					<div className='border-3 w-[4rem] md:w-0 md:h-[4rem] bg-orange-500'></div>
					<div className='border-5 bg-orange-500 rounded-full mx-1 md:my-1 '></div>
					<div className='border-3 w-[4rem] md:w-0 md:h-[4rem] bg-orange-500'></div>
				</div>
				<div className='flex flex-col justify-between items-center md:items-start  h-[14rem] w-1/1'>
					<div className='flex gap-2  items-center'>
						<div className='cursor-pointer flex justify-center items-center rounded-full h-10 w-10 bg-[#0f172a] dark:bg-white'>
							<Link
								target='_blank'
								href='https://www.github.com/Fayorr'
							>
								<Github
									size={18}
									className='text-white dark:text-[#0f172a] '
								/>
							</Link>
						</div>
						<p className='font-montserrat font-semibold'>
							Website Development.
						</p>
					</div>
					<div className='flex gap-2 items-center'>
						<div className='cursor-pointer flex justify-center items-center rounded-full h-10 w-10 bg-[#0f172a] dark:bg-white'>
							<Link
								target='_blank'
								href='https://www.github.com/Fayorr'
							>
								<Github
									size={18}
									className='text-white dark:text-[#0f172a] '
								/>
							</Link>
						</div>
						<p className='font-montserrat font-semibold'>
							Frontend Engineering
						</p>
					</div>
					<div className='flex gap-2 items-center'>
						<div className='cursor-pointer flex justify-center items-center rounded-full h-10 w-10 bg-[#0f172a] dark:bg-white'>
							<Link
								target='_blank'
								href='https://www.github.com/Fayorr'
							>
								<Github
									size={18}
									className='text-white dark:text-[#0f172a] '
								/>
							</Link>
						</div>
						<p className='font-montserrat font-semibold'>Web App Development</p>
					</div>
				</div>
			</div>
			<div className='md:w-1/2 flex flex-col justify-between  md:h-[20rem] text-center md:text-left'>
				<h2 className='font-open-sans text-4xl md:text-5xl font-bold text-black dark:text-white '>
					About Me
				</h2>
				<p className='font-montserrat py-10'>
					I started my software journey from graphics design. Through that, i
					learned to love the process of creating from scratch. Since then, this
					has led me to software development as it fufils my love for learning
					and building things.
				</p>
				<div className='flex justify-center md:justify-start gap-15 md:gap-30'>
					<div>
						<h3 className='font-open-sans text-3xl md:text-4xl font-bold text-black dark:text-white'>
							50 <span className='text-orange-500'>+</span>
						</h3>
						<p>
							Completed
							<br />
							Projects
						</p>
					</div>
					<div>
						<h3 className='font-open-sans text-3xl md:text-4xl font-bold text-black dark:text-white'>
							95 <span className='text-orange-500'>%</span>
						</h3>
						<p>
							Client
							<br />
							satisfaction
						</p>
					</div>
					<div>
						<h3 className='font-open-sans text-3xl md:text-4xl font-bold text-black dark:text-white'>
							3 <span className='text-orange-500'>+</span>
						</h3>
						<p>
							Years of
							<br />
							experience
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
