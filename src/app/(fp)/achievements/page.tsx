import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { MotionReveal } from '@/components/MotionReveal';

export const metadata: Metadata = { title: 'Achievements', description: 'Selected engineering milestones from Fayokunmi Osho.' };

// const milestones = [
// 	{ year: '2026', title: 'Shipped Eventful as a backend engineering capstone', text: 'Designed and built a full-stack ticketing platform spanning payments, QR admission, creator analytics, queues, and automated email.' },
// 	{ year: '2026', title: 'Moved deeper into Go systems', text: 'Completed hands-on projects across HTTP services, algorithms, concurrency exercises, and idiomatic Go project structure.' },
// 	{ year: 'Ongoing', title: 'Building a broad product engineering practice', text: 'Continuing to connect interface craft with backend reliability through independently shipped, documented projects.' },
// ];

export default function AchievementsPage() {
	return <main className='site-shell page-main archive-page'>
		<header className='page-hero'><p className='section-index'>03 / ACHIEVEMENTS</p><h1>Milestones, not <span>trophy shelves.</span></h1><p>A living record of meaningful technical leaps and projects that expanded how I think about building software.</p></header>
		{/* <section className='milestone-list'>{milestones.map((item, index) => <MotionReveal className='milestone-row' key={item.title} delay={index * .06}><span>{item.year}</span><div><h2>{item.title}</h2><p>{item.text}</p></div><span className='milestone-number'>0{index + 1}</span></MotionReveal>)}</section> */}
		<div className='archive-note'><p>Certifications, talks, and recognitions will be added as the archive grows.</p><Link href='/contact' className='text-link'>Ask me about my work <ArrowUpRight size={17} /></Link></div>
	</main>;
}
