import Link from 'next/link';
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
import { ModeToggle } from '../ModeToggler';
export function Header() {
	return (
		<header className='flex justify-between items-center p-4 bg-[#ffffff] dark:bg-[#0f172a]'>
			<div>
				<Link href='/'>
					<h1 className='text-2xl font-bold cursor-pointer'>Fayo</h1>
				</Link>
			</div>
			<NavigationMenu className=''>
				<ModeToggle />
				<NavigationMenuList className='ml-3'>
					<NavigationMenuItem>
						<NavigationMenuLink asChild>
							<Link href='/about'>About</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink asChild>
							<Link href='/projects'>Projects</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink asChild>
							<Link href='/contact'>Contact</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
}
