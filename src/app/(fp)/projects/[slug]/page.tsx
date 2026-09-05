import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Check, Github } from 'lucide-react';
import { notFound } from 'next/navigation';
import { MotionReveal } from '@/components/MotionReveal';
import { projects } from '@/components/data/project';

export function generateStaticParams() {
	return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const project = projects.find((item) => item.slug === slug);
	if (!project) return {};
	return { title: project.name, description: project.summary };
}

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const project = projects.find((item) => item.slug === slug);
	if (!project) notFound();
	const currentIndex = projects.findIndex((item) => item.slug === slug);
	const nextProject = projects[(currentIndex + 1) % projects.length];

	return (
		<main className='case-study'>
			<div className='site-shell case-top'>
				<Link href='/projects' className='back-link'><ArrowLeft size={17} /> All projects</Link>
				<div className='case-title-grid'>
					<div>
						<p className='section-index'>{project.kicker} / {project.year}</p>
						<h1>{project.name}</h1>
					</div>
					<p>{project.summary}</p>
				</div>
				<div className='case-meta'>
					<div><span>Role</span><strong>{project.role}</strong></div>
					<div><span>Stack</span><strong>{project.skills.slice(0, 4).join(', ')}</strong></div>
					<div><span>Year</span><strong>{project.year}</strong></div>
					<div className='case-links'>
						<a href={project.githubLink} target='_blank' rel='noreferrer'><Github size={16} /> Source</a>
						{project.liveLink && <a href={project.liveLink} target='_blank' rel='noreferrer'>Live site <ArrowUpRight size={16} /></a>}
					</div>
				</div>
			</div>

			<MotionReveal className='site-shell case-visual'>
				<span>CASE STUDY / {String(project.id).padStart(2, '0')}</span>
				<Image src={project.image} alt={`${project.name} project preview`} width={1100} height={680} priority className={project.slug === 'eventful' ? 'eventful-art' : ''} />
			</MotionReveal>

			<div className='site-shell case-content'>
				<MotionReveal className='case-intro'><p className='section-index'>OVERVIEW</p><p>{project.description}</p></MotionReveal>
				<MotionReveal className='case-chapter'>
					<div><span>01</span><h2>The challenge</h2></div><p>{project.challenge}</p>
				</MotionReveal>
				<MotionReveal className='case-chapter'>
					<div><span>02</span><h2>The solution</h2></div><p>{project.solution}</p>
				</MotionReveal>
				<MotionReveal className='case-chapter'>
					<div><span>03</span><h2>What shipped</h2></div>
					<ul>{project.highlights.map((item) => <li key={item}><Check size={17} />{item}</li>)}</ul>
				</MotionReveal>
				<MotionReveal className='case-outcome'><p className='section-index'>OUTCOME</p><blockquote>{project.outcome}</blockquote></MotionReveal>
			</div>

			<Link href={`/projects/${nextProject.slug}`} className='next-project'>
				<span>Next case study</span><strong>{nextProject.name} <ArrowUpRight size={30} /></strong>
			</Link>
		</main>
	);
}
