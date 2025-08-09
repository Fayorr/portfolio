'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import './globals.css';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import GithubCalender from '@/components/GithubCalender';
import { ParticleBackground } from '@/components/ui/ParticleBackground';

export default function Home() {
	return (
		<>
			<ParticleBackground />
			<Header />
			<div className='flex flex-col md:flex-row items-center justify-center  px-8 md:px-20 mt-20 md:mt-20 pt-10 md:pt-12 font-[Montserrat] dark:bg-[#0f172a]'>
				<div className='flex flex-col items-center md:items-start mt-4 md:mt-5  justify-center min-h-auto p-0  gap-8 md:gap-14 md:p-0 w-[100%] md:w-1/2 '>
					<h2 className='font-montserrat  md:text-4xl text-2xl font-bold dark:text-white text-black'>
						Hello<span className='text-orange-500'>.</span>
					</h2>
					<div className='flex md:flex-row flex-col-reverse gap-2'>
						<p className='flex justify-center items-center text-3xl font-bold text-orange-500'>
							______
						</p>
						<p className='text-black dark:text-white text-2xl md:text-4xl'>
							I&apos;m Fayo
						</p>
					</div>
					<h2 className='text-3xl md:text-5xl font-bold text-black dark:text-white'>
						Frontend Developer
					</h2>
					<div className='flex flex-row gap-2'>
						<Button
							className='cursor-pointer rounded-none p-5 bg-orange-500 border-2 border-orange-500 text-black dark:text-white hover:bg-transparent'
							asChild
						>
							<Link
								target='_blank'
								href='https://wa.me/2348090928406?text=Hello%20Fayokunmi%2C%20I%20saw%20your%20portfolio%20and%20I%20have%20a%20project%20for%20you.'
							>
								Got a project?
							</Link>
						</Button>
						<Button
							className='cursor-pointer rounded-none p-5 bg-transparent text-black dark:text-white border-2 border-orange-500 hover:bg-orange-500'
							asChild
						>
							<Link
								target='_blank'
								href='https://drive.google.com/file/d/1uIj0rKRT1Oo3wyFKA_f1ZNXNiYVP1WJU/view?usp=sharing'
							>
								My resume
							</Link>
						</Button>
					</div>
				</div>
				<div className='flex justify-center items-center '>
					{/* Light mode image */}
					<Image
						src='/images/porfolioPicLight.png'
						alt='Fayo'
						width={550}
						height={550}
						className='block dark:hidden'
					/>
					{/* Dark mode image */}
					<Image
						src='/images/porfolioPicDark.png'
						alt='Fayo'
						width={650}
						height={650}
						className='hidden dark:block'
					/>
				</div>
			</div>
			<section className='bg-[#fcddca] dark:bg-[#17232d] text-lg font-bold font-montserrat py-5 px-8 md:px-20 h-auto '>
				<ul className='relative z-30  grid grid-cols-3 sm:grid-cols-4 md:flex md:justify-between gap-4 md:gap-0 text-center md:text-left'>
					<li className='flex justify-start'>HTML5</li>
					<li className='flex justify-start'>CSS3</li>
					<li className='flex justify-start'>JavaScript</li>
					<li className='flex justify-start'>React</li>
					<li className='flex justify-start'>Next.js</li>
					<li className='flex justify-start'>TypeScript</li>
					<li className='flex justify-start'>Git</li>
					<li className='flex justify-start'>Github</li>
				</ul>
			</section>

			<GithubCalender />
			<Footer />
		</>
	);
}
