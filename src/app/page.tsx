import Link from 'next/link';
import { Button } from '@/components/ui/button';
import './globals.css';
export default function Home() {
	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col gap-[32px] row-start-2 justify-center items-center sm:items-center'>
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
	);
}
