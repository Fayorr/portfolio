import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = { title: 'Blog', description: 'Engineering notes and essays by Fayokunmi Osho.' };

export default function BlogPage() {
	return <main className='site-shell page-main archive-page'>
		<header className='page-hero'><p className='section-index'>05 / BLOG</p><h1>Notes from <span>the build.</span></h1><p>Practical writing on frontend craft, backend systems, debugging, and the lessons that only show up after shipping.</p></header>
		<section className='empty-editorial'><BookOpen size={30} /><p className='section-index'>THE FIRST DRAFT IS IN PROGRESS</p><h2>Writing desk opening soon.</h2><p>I&apos;m shaping the first set of useful, experience-backed articles. Until then, the project case studies contain the clearest notes on my work.</p><Link href='/projects' className='button button-primary'>Read the case studies <ArrowUpRight size={17} /></Link></section>
	</main>;
}
