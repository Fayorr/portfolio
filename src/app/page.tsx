'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import './globals.css';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Header } from '@/components/Header';

export default function Home() {
	interface IFormInput {
		name: string;
		email: string;
		message: string;
	}
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
	return (
		<>
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
						Software Developer
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
			<div className='bg-[#fcddca] dark:bg-[#17232d] text-lg font-bold font-montserrat py-5 px-8 md:px-20 h-auto '>
				<ul className='grid grid-cols-3 sm:grid-cols-4 md:flex md:justify-between gap-8 md:gap-0 text-center md:text-left'>
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
				className='flex flex-col-reverse md:flex-row gap-14 md:gap-0 justify-center items-center px-8 md:px-20 py-18  md:py-30 dark:bg-[#0f172a]'
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
								Website Development
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
							<p className='font-montserrat font-semibold'>
								Web App Development
							</p>
						</div>
					</div>
				</div>
				<div className='md:w-1/2 flex flex-col justify-between  md:h-[20rem] text-center md:text-left'>
					<h2 className='font-open-sans text-4xl md:text-5xl font-bold text-black dark:text-white '>
						About Me
					</h2>
					<p className='font-montserrat py-10'>
						I started my software journey from graphics design. Through that, i
						learned to love the process of creating from scratch. Since then,
						this has led me to software development as it fufils my love for
						learning and building things.
					</p>
					<div className='flex justify-between gap-2 md:gap-20'>
						<div>
							<h3 className='font-open-sans text-3xl md:text-4xl font-bold text-black dark:text-white'>
								120 <span className='text-orange-500'>+</span>
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
			<section
				id='contact'
				className=''
			>
				<div className='flex flex-col md:flex-row items-center justify-center  px-8 md:px-20  pb-20 md:py-30  md:pt-12 font-[Montserrat] dark:bg-[#0f172a]'>
					<div className='flex flex-col items-center md:items-start mt-13 md:mt-5  justify-center min-h-auto p-0  gap-8 md:gap-14 md:p-0 w-[100%] md:w-1/2 '>
						<div className='flex md:flex-row flex-col-reverse gap-0 '>
							<p className='flex justify-center items-center text-1xl font-bold text-orange-500'>
								______
							</p>
							<p className='text-black dark:text-white text-2xl md:text-2xl'>
								Contact
							</p>
						</div>
						<h2 className='flex flex-col justify-center md:justify-start items-center md:items-start text-4xl md:text-5xl font-bold text-black dark:text-white  w-[100%]'>
							Have a project? <span>Lets talk</span>
						</h2>
					</div>
					<div className='flex justify-center items-center w-[80vw] md:w-1/2  h-[auto] '>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className='flex flex-col grow pt-6 '
						>
							<label>Name</label>
							<input
								{...register('name', { required: true })}
								className='border-b-2 border-b-white'
							/>
							{errors.name && <span>This field is required</span>}
							<label className='pt-3'>Email</label>
							<input
								{...register('email')}
								className='border-b-2 border-b-white'
							/>
							{errors.email && <span>This field is required</span>}
							<label className='pt-3'>Message</label>
							<input
								{...register('message')}
								className='border-b-2 border-b-white'
							/>
							{errors.message && <span>This field is required</span>}
							<input
								type='submit'
								className='cursor-pointer rounded-none py-2 px-3 bg-orange-500 border-2 border-orange-500 text-black dark:text-white hover:bg-transparent md:self-start  mt-4 md:w-[]'
							/>
						</form>
					</div>
				</div>
			</section>
			<section
				id='footer'
				className=''
			>
				{/* <br />
				<br /> */}
				<div className='flex flex-col items-center justify-between dark:bg-[#17232d] py-8  '>
					<h2 className='font-[montserrat] text-lg py-1'>Fayokunmi Osho</h2>
					<p className='py-8'>Designed with love, all rights reserved.</p>
					<div className='flex justify-between items-center w-[45vw] md:w-[calc(100vw/7)] '>
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
		</>
	);
}
