import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { MotionReveal } from '@/components/MotionReveal';

export const metadata: Metadata = { title: 'About', description: 'About Fayokunmi Osho and his approach to software engineering.' };

const timeline = [
	{
		year: 'Today',
		title: 'Full-stack product engineering',
		text: 'Building end-to-end web products across React interfaces, Node.js services, data systems, payments, queues, and production deployment.',
	},
	{
		year: '2026',
		title: 'Deeper backend systems',
		text: 'Expanded into Go, modular API design, middleware, authentication, testing, and the operational details behind dependable software.',
	},
	{
		year: '2025',
		title: 'Intro to backend systems',
		text: 'Joined ALTSchool Africa and enrolled for the Backend Engineering Diploma track, where i learned NodeJS, Express, TypeScript and NestJS. Coming from a Frontend Perspective, i got a great intro to backend systems.',
	},
	{
		year: '2024',
		title: 'Developed Solid Foundation in React',
		text: 'I built more products with ReactJS, honing my understanding of both fundamantals and advanced ReactJS concepts',
	},
	{
		year: '2023',
		title: 'Further in Frontend Development',
		text: 'I picked up codewell challenges and mastered building static webpages, then went over to ReactJS',
	},
	{
		year: '2022',
		title: 'Design became code',
		text: 'Started in graphic design, then carried that instinct for hierarchy, composition, and detail into frontend engineering.',
	},
];

export default function AboutPage() {
	return (
		<main className='site-shell page-main about-page'>
			<header className='page-hero about-hero'>
				<div>
					<p className='section-index'>01 / ABOUT</p>
					<h1>
						Curious by nature. <span>Deliberate by practice.</span>
					</h1>
				</div>
				<p>
					I&apos;m Fayokunmi, a software engineer in Lagos who enjoys turning
					complex requirements into calm, understandable products. My path began
					in graphic design, where I learned to care about what people
					notice—and what they should never have to notice.
				</p>
			</header>

			<MotionReveal className='about-portrait'>
				<Image
					src='/images/Fayo_on_laptop.JPG'
					alt='Fayokunmi Osho'
					width={700}
					height={560}
					className='portrait-light'
				/>
				<p>
					Based in Lagos, Nigeria <span>Available worldwide</span>
				</p>
			</MotionReveal>

			<section className='about-story'>
				<MotionReveal>
					<p className='section-index'>THE THROUGH-LINE</p>
					<h2>
						I like the point where design decisions become engineering systems.
					</h2>
				</MotionReveal>
				<MotionReveal
					delay={0.08}
					className='prose-large'
				>
					<p>
						That means asking why before deciding how. It means building the
						smallest clear abstraction, thinking through failure states, and
						making sure the experience still makes sense on a slow connection or
						a small screen.
					</p>
					<p>
						I work comfortably across my stack, but the goal is never technology
						for its own sake. The goal is software that earns your trust: fast
						enough to feel immediate, structured enough to evolve, and polished
						enough that the complexity stays behind the interface.
					</p>
					<Link
						href='/contact'
						className='text-link'
					>
						Tell me what you&apos;re building <ArrowUpRight size={17} />
					</Link>
				</MotionReveal>
			</section>

			<section className='timeline-section'>
				<p className='section-index'>A WORK IN PROGRESS</p>
				{timeline.map((item, index) => (
					<MotionReveal
						className='timeline-row'
						key={item.title}
						delay={index * 0.06}
					>
						<span>{item.year}</span>
						<h3>{item.title}</h3>
						<p>{item.text}</p>
					</MotionReveal>
				))}
			</section>
		</main>
	);
}
