'use client';
import Link from 'next/link';
import { AlignRight, X } from 'lucide-react';
import {
	NavigationMenu,
	// NavigationMenuContent,
	// NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	// NavigationMenuTrigger,
	// NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import { ModeToggle } from '@/components/modeToggler';
import { useState } from 'react';
export function Header() {
	const [toggle, setToggle] = useState(false);
	return (
		<header className='flex justify-between items-center py-7 px-10 md:px-20 bg-[#ffffff] dark:bg-[#0f172a]  border-b-2 border-orange-500 fixed top-0 left-0 right-0 z-50'>
			<div>
				<Link href='/'>
					<h1 className='text-2xl font-bold uppercase cursor-pointer'>Fayo</h1>
				</Link>
			</div>
			{toggle ? (
				<X
					size={24}
					strokeWidth={2}
					className='block md:hidden cursor-pointer absolute top-7 right-4 z-50 text-white-500 dark:text-white'
					onClick={() => setToggle(!toggle)}
				/>
			) : (
				<AlignRight
					className='block md:hidden cursor-pointer'
					onClick={() => setToggle(!toggle)}
				/>
			)}
			<div
				className={` absolute md:relative top-0 right-0 w-[50%] sm:w-[40%]  md:w-auto items-center gap-4 ${
					toggle ? 'flex' : 'hidden'
				} md:flex  flex-col md:flex-row h-screen md:h-auto bg-orange-500 md:bg-transparent`}
			>
				<ModeToggle />
				<NavigationMenu className=''>
					<NavigationMenuList className='md:ml-12 flex flex-col md:flex-row gap-4  dark:text-white'>
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link href='about'>About</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link href='projects'>Projects</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link href='contact'>Contact</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</header>
	);
}
