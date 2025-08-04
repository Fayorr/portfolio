import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { Mail, Github, Linkedin } from 'lucide-react';

export const Footer = () => {
	return (
		<footer
			id='footer'
			className='relative z-10'
		>
			{/* <br />
				<br /> */}
			<div className='flex flex-col items-center justify-between bg-[#fcddca] dark:bg-[#17232d] py-8  '>
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
		</footer>
	);
};
