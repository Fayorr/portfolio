import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
	return (
		<footer className='site-footer'>
			<div className='site-shell footer-grid'>
				<div className='footer-lead'>
					<Image src='/icon.png' width={34} height={34} alt='' />
					<p>Have an ambitious product in mind?</p>
					<Link href='/contact'>Let&apos;s build it well. <ArrowUpRight size={22} /></Link>
				</div>
				<div>
					<p className='footer-label'>Explore</p>
					<Link href='/about'>About</Link>
					<Link href='/projects'>Projects</Link>
					<Link href='/blog'>Blog</Link>
				</div>
				<div>
					<p className='footer-label'>Connect</p>
					<a href='mailto:fayokunmiosho@gmail.com'><Mail size={15} /> Email</a>
					<a href='https://github.com/Fayorr' target='_blank' rel='noreferrer'><Github size={15} /> GitHub</a>
					<a href='https://www.linkedin.com/in/fayokunmi-osho' target='_blank' rel='noreferrer'><Linkedin size={15} /> LinkedIn</a>
				</div>
			</div>
			<div className='site-shell footer-bottom'>
				<span>© {new Date().getFullYear()} Fayokunmi Osho</span>
				<span>Designed and engineered with care.</span>
			</div>
		</footer>
	);
}
