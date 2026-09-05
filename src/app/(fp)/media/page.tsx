import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Camera, Mic2, Play } from 'lucide-react';

export const metadata: Metadata = { title: 'Media', description: 'Media appearances, demos, and talks by Fayokunmi Osho.' };

export default function MediaPage() {
	return <main className='site-shell page-main archive-page'>
		<header className='page-hero'><p className='section-index'>04 / MEDIA</p><h1>Ideas in <span>motion.</span></h1><p>This will become a home for demos, talks, interviews, and behind-the-scenes engineering notes.</p></header>
		<section className='coming-grid'>
			<div><Play size={24} /><span>Project walkthroughs</span><p>Short, focused tours through shipped products and technical decisions.</p></div>
			<div><Mic2 size={24} /><span>Talks & conversations</span><p>Recordings and appearances will live here when they are ready.</p></div>
			<div><Camera size={24} /><span>Build notes</span><p>Visual snapshots from the process behind new work.</p></div>
		</section>
		<div className='archive-note'><p>The media archive is currently being curated.</p><Link href='/projects' className='text-link'>Explore the work now <ArrowUpRight size={17} /></Link></div>
	</main>;
}
