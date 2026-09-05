'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useMemo, useState } from 'react';
import { projects } from './data/project';

const filters = ['All', 'Full stack', 'Frontend', 'Backend', 'React', 'TypeScript', 'Node.js', 'Go', 'MongoDB'];

export function ProjectsGrid() {
	const [active, setActive] = useState('All');
	const reduceMotion = useReducedMotion();
	const visible = useMemo(() => active === 'All' ? projects : projects.filter((project) => project.filters.includes(active)), [active]);

	return (
		<>
			<div className='filter-row' role='group' aria-label='Filter projects by technology'>
				{filters.map((filter) => (
					<button key={filter} className={active === filter ? 'filter-chip is-active' : 'filter-chip'} onClick={() => setActive(filter)} aria-pressed={active === filter}>
						{filter}<span>{filter === 'All' ? projects.length : projects.filter((project) => project.filters.includes(filter)).length}</span>
					</button>
				))}
			</div>

			<motion.div layout={!reduceMotion} className='projects-grid'>
				<AnimatePresence mode='popLayout'>
					{visible.map((project, index) => (
						<motion.article
							layout={!reduceMotion}
							key={project.slug}
							className='project-card'
							initial={reduceMotion ? false : { opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							exit={reduceMotion ? undefined : { opacity: 0, scale: .97 }}
							transition={{ duration: .35, delay: Math.min(index * .04, .2) }}
						>
							<Link href={`/projects/${project.slug}`} className='project-image-wrap' aria-label={`Read ${project.name} case study`}>
								<div className='project-number'>{String(project.id).padStart(2, '0')}</div>
								<Image src={project.image} alt='' width={720} height={460} className={project.slug === 'eventful' ? 'eventful-art' : ''} />
							</Link>
							<div className='project-card-body'>
								<div className='project-card-meta'><span>{project.kicker}</span><span>{project.year}</span></div>
								<h2><Link href={`/projects/${project.slug}`}>{project.name}</Link></h2>
								<p>{project.summary}</p>
								<div className='project-tags'>{project.skills.slice(0, 5).map((skill) => <span key={skill}>{skill}</span>)}</div>
								<Link href={`/projects/${project.slug}`} className='text-link'>Read case study <ArrowUpRight size={17} /></Link>
							</div>
						</motion.article>
					))}
				</AnimatePresence>
			</motion.div>
		</>
	);
}
