'use client';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import './globals.css';
import { Header } from '@/components/Header';

export default function Home() {
	const { theme } = useTheme();
	return (
		<>
			<Header />
			<div className='flex flex-col md:flex-row items-center justify-center  px-8 md:px-20 mt-20 md:mt-20 pt-10 md:pt-12 font-[Montserrat] dark:bg-[#0f172a]'>
				<div className='flex flex-col items-center md:items-start mt-13 md:mt-5  justify-center min-h-auto p-0  gap-8 md:gap-14 md:p-0 w-[100%] md:w-1/2 '>
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
					<h2 className='text-4xl md:text-5xl font-bold text-black dark:text-white'>
						Software Developer
					</h2>
					<div className='flex flex-row gap-2'>
						<Button
							className='cursor-pointer rounded-none p-5 bg-orange-500 border-2 border-orange-500 dark:text-white hover:bg-transparent'
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
								href='https://www.linkedin.com/in/fayokunmi-osho'
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
						width={550}
						height={550}
						className='hidden dark:block'
					/>
				</div>
			</div>
			<div className='bg-[#17232d] text-lg font-bold font-montserrat py-5 px-8 md:px-20 h-auto'>
				<ul className='grid grid-cols-4 sm:grid-cols-2 md:flex md:justify-between gap-4 md:gap-0 text-center md:text-left'>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>JavaScript</li>
					<li>React</li>
					<li>Next.js</li>
					<li>TypeScript</li>
					<li>Git</li>
					<li>Github</li>
				</ul>
			</div>
			<section
				id='about'
				className=''
			>
				<div></div>
				<div></div>
			</section>
			<section
				id='contact'
				className=''
			>
				<div></div>
				<div></div>
			</section>
			<section
				id='footer'
				className=''
			>
				{/* <br />
				<br /> */}
				<div className='flex flex-col items-center justify-between dark:bg-[#17232d] py-8 h-[calc(100vh/3)]'>
					<h2 className='font-[montserrat] text-lg'>Fayokunmi Osho</h2>
					<p>Designed with love, all rights reserved.</p>
					<div className='flex justify-between w-[calc(100vw/3)] md:w-[calc(100vw/7)]'>
						<div className='cursor-pointer flex justify-center items-center rounded-full h-12 w-12 bg-[#0f172a] dark:bg-white'>
							<Link
								target='_blank'
								href='mailto:fayokunmiosho@gmail.com'
							>
								<Mail
									size={25}
									className='text-white dark:text-[#0f172a] '
								/>
							</Link>
						</div>
						<div className='cursor-pointer flex justify-center items-center rounded-full h-12 w-12 bg-[#0f172a] dark:bg-white'>
							<Link
								target='_blank'
								href='https://www.linkedin.com/in/fayokunmi-osho'
							>
								<Linkedin
									size={25}
									className='text-white dark:text-[#0f172a] '
								/>
							</Link>
						</div>
						<div className='cursor-pointer flex justify-center items-center rounded-full h-12 w-12 bg-[#0f172a] dark:bg-white'>
							<Link
								target='_blank'
								href='https://www.github.com/Fayorr'
							>
								<Github
									size={25}
									className='text-white dark:text-[#0f172a] '
								/>
							</Link>
						</div>
					</div>
				</div>
			</section>
			{/* <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] dark:bg-[#0f172a]'>
				<main className='flex flex-col gap-[32px] row-start-2 justify-center items-center sm:items-center font-montserrat'>
					<h1 className='text-4xl font-bold text-center'>
						Portfolio Coming Soon!
					</h1>
					<Button
						className='cursor-pointer'
						variant='outline'
						asChild
					>
						<Link
							target='_blank'
							href='https://github.com/Fayorr'
						>
							Go to Github
						</Link>
					</Button>
				</main> 
			</div> */}
		</>
	);
}
