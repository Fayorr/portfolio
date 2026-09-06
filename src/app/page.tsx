import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MotionReveal } from '@/components/MotionReveal';
import { HeroCarousel } from '@/components/HeroCarousel';
import GithubCalender from '@/components/GithubCalender';
import { projects } from '@/components/data/project';

const socials = [
	{ label: 'GitHub', href: 'https://github.com/Fayorr', icon: Github },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/fayokunmi-osho', icon: Linkedin },
	{ label: 'Email', href: 'mailto:fayokunmiosho@gmail.com', icon: Mail },
];

const capabilities = ['TypeScript', 'React', 'Next.js', 'Node.js', 'Go', 'PostgreSQL'];

export default function Home() {
	return (
		<main>
			<Header />
			<section className='site-shell hero' aria-labelledby='hero-title'>
				<div className='hero-copy'>
					<p className='eyebrow'><span className='status-dot' /> Available for thoughtful collaborations</p>
					<h1 id='hero-title'>
						Software engineer building <span>useful digital products.</span>
					</h1>
					<p className='hero-intro'>
						I&apos;m Fayokunmi Osho, a full-stack developer focused on dependable web experiences—from precise interfaces to APIs, data systems, and the infrastructure behind them.
					</p>
					<div className='hero-actions'>
						<Link href='/projects' className='button button-primary'>View selected work <ArrowDownRight size={18} /></Link>
						<a href='https://drive.google.com/file/d/10nv7-3_Owb-CUjzqgpbZb8ediQiNubfA/view?usp=sharing' target='_blank' rel='noreferrer' className='button button-ghost'>Résumé <ArrowUpRight size={17} /></a>
					</div>
					<ul className='social-list' aria-label='Social links'>
						{socials.map(({ label, href, icon: Icon }) => (
							<li key={label}><a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel='noreferrer'><Icon size={16} />{label}</a></li>
						))}
					</ul>
				</div>

				<div className='hero-visual' aria-label='Portrait carousel and core technologies'>
					<HeroCarousel />
					<div className='capability-card'>
						<p>Core toolkit</p>
						<div>{capabilities.map((item) => <span key={item}>{item}</span>)}</div>
					</div>
				</div>
			</section>

			<div className='ticker' aria-hidden='true'>
				<div>DESIGN WITH INTENT <span>✦</span> BUILD FOR PEOPLE <span>✦</span> SHIP WITH CARE <span>✦</span> DESIGN WITH INTENT <span>✦</span> BUILD FOR PEOPLE <span>✦</span></div>
			</div>

			<section className='site-shell home-section' aria-labelledby='selected-work'>
				<MotionReveal className='section-heading'>
					<div><p className='section-index'>02 / SELECTED WORK</p><h2 id='selected-work'>A few things I&apos;ve built.</h2></div>
					<p>Product-minded engineering across frontend systems, backend services, and the space where they meet.</p>
				</MotionReveal>
				<div className='featured-grid'>
					{projects.filter((project) => project.featured).map((project, index) => (
						<MotionReveal className='featured-project' key={project.slug} delay={index * .08}>
							<Link href={`/projects/${project.slug}`} className='featured-image'>
								<Image src={project.image} width={720} height={460} alt='' className={project.slug === 'eventful' ? 'eventful-art' : ''} />
								<span>0{index + 1}</span>
							</Link>
							<div className='featured-body'>
								<p className='project-card-meta'><span>{project.kicker}</span><span>{project.year}</span></p>
								<h3><Link href={`/projects/${project.slug}`}>{project.name} <ArrowUpRight size={21} /></Link></h3>
								<p>{project.summary}</p>
								<div className='project-tags'>{project.skills.slice(0, 4).map((skill) => <span key={skill}>{skill}</span>)}</div>
							</div>
						</MotionReveal>
					))}
				</div>
				<MotionReveal className='section-action'><Link href='/projects' className='button button-ghost'>Explore all projects <ArrowUpRight size={17} /></Link></MotionReveal>
			</section>

			<section className='about-strip'>
				<div className='site-shell about-strip-grid'>
					<MotionReveal><p className='section-index'>03 / APPROACH</p><h2>Good software is cooked not baked.</h2></MotionReveal>
					<MotionReveal delay={.1} className='about-strip-copy'>
						<p>I care about the entire journey: understanding the real problem, reducing it to a clear system, and sweating the small implementation details that earns your trust.</p>
						<div className='principles'>
							<div><span>01</span><strong>Clarity first</strong><p>Interfaces and APIs should explain themselves.</p></div>
							<div><span>02</span><strong>Built to last</strong><p>Simple foundations make change less expensive.</p></div>
							<div><span>03</span><strong>Human details</strong><p>Speed, feedback, and accessibility are product features.</p></div>
						</div>
						<Link href='/about' className='text-link'>More about how I work <ArrowUpRight size={17} /></Link>
					</MotionReveal>
				</div>
			</section>

			<GithubCalender />
			<Footer />
		</main>
	);
}
