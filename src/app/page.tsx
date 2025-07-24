import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import './globals.css';
import { Header } from '@/components/Header';

export default function Home() {
	return (
		<>
			<Header />
			<div className='flex flex-col md:flex-row items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[Montserrat] dark:bg-[#0f172a]'>
				{/* <div className='flex flex-col  items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[Montserrat] dark:bg-[#0f172a]'>
					<h2>
						Hello <span>.</span>
					</h2>
					<div>
						<p>I&apos;m Fayo</p>
						<p>____________</p>
					</div>
					<h2>Software Developer</h2>
					<div>
						<Button>Got a project? </Button>
						<Button>My resume</Button>
					</div>
				</div> */}
				<div className='flex justify-center items-center'>
					{/* Light mode image */}
					{/* <Image
						src='/images/porfolioPicLight.png'
						alt='Fayo'
						width={400}
						height={400}
						className='block dark:hidden'
					/> */}
					{/* Dark mode image */}
					{/* <Image
						src='/images/porfolioPicDark.png'
						alt='Fayo'
						width={400}
						height={400}
						className='hidden dark:block'
					/> */}
				</div>
			</div>
			<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] dark:bg-[#0f172a]'>
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
			</div>
		</>
	);
}
