'use client';
import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ModeToggle() {
	const [mounted, setMounted] = React.useState(false);
	const { setTheme } = useTheme();

	// Wait for component to mount (client-side only)
	React.useEffect(() => {
		setMounted(true);
	}, []);

	// Render placeholder during SSR to prevent hydration mismatch
	if (!mounted) {
		return (
			<Button
				variant='outline'
				size='icon'
				className='cursor-pointer top-7 left-4 md:top-0 md:left-0 absolute md:relative'
				disabled
			>
				<Sun className='h-[1.2rem] w-[1.2rem]' />
				<span className='sr-only'>Toggle theme</span>
			</Button>
		);
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				asChild
				className='relative'
			>
				<Button
					variant='outline'
					size='icon'
					className='cursor-pointer top-7 left-4 md:top-0 md:left-0 absolute md:relative'
				>
					<Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
					<Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem
					className='cursor-pointer'
					onClick={() => setTheme('light')}
				>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem
					className='cursor-pointer'
					onClick={() => setTheme('dark')}
				>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem
					className='cursor-pointer'
					onClick={() => setTheme('system')}
				>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
