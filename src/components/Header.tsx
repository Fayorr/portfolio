'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ModeToggle } from './modeToggler';

const links = [
	{ label: 'About', href: '/about' },
	{ label: 'Projects', href: '/projects' },
	{ label: 'Achievements', href: '/achievements' },
	{ label: 'Media', href: '/media' },
	{ label: 'Blog', href: '/blog' },
];

export function Header() {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	return (
		<header className='site-header'>
			<div className='site-shell header-inner'>
				<Link href='/' className='brand' aria-label='Fayokunmi Osho, home'>
					<span className='brand-name'>Fayokunmi Osho</span>
					<span className='brand-initials' aria-hidden='true'>FO</span>
				</Link>

				<nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label='Main navigation'>
					{links.map((link) => (
						<Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={pathname === link.href ? 'nav-link is-active' : 'nav-link'}>
							{link.label}
						</Link>
					))}
					<Link href='/contact' onClick={() => setOpen(false)} className='nav-contact'>Let&apos;s talk</Link>
				</nav>

				<div className='header-actions'>
					<ModeToggle />
					<button type='button' className='menu-button' onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'}>
						{open ? <X size={21} /> : <Menu size={21} />}
					</button>
				</div>
			</div>
		</header>
	);
}
