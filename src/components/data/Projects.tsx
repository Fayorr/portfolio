import React from 'react';
import { projects, Project } from './project';
import Image from 'next/image';

const ProjectsSection: React.FC = () => {
	return (
		<section className='min-h-screen bg-slate-900 py-20 px-6'>
			<div className='max-w-6xl mx-auto'>
				{/* Section Header */}
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-white mb-4'>Projects</h2>
					<div className='w-px h-8 bg-orange-500 mx-auto'></div>
				</div>

				{/* Projects Grid */}
				<div className='space-y-20'>
					{projects.map((project: Project, index: number) => (
						<div
							key={project.id}
							className={`flex flex-col lg:flex-row gap-8 items-center ${
								index % 2 === 1 ? 'lg:flex-row-reverse' : ''
							}`}
						>
							{/* Project Info */}
							<div className='flex-1 space-y-6'>
								<div>
									<h3 className='text-2xl font-bold text-white mb-4'>
										{project.name}
									</h3>

									{/* Skills Tags */}
									<div className='flex flex-wrap gap-2 mb-4'>
										{project.skills.map((skill, skillIndex) => (
											<span
												key={skillIndex}
												className='px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700'
											>
												{skill}
											</span>
										))}
									</div>

									{/* Description */}
									<p className='text-slate-300 leading-relaxed text-lg'>
										{project.description}
									</p>
								</div>

								{/* Action Buttons */}
								<div className='flex gap-4'>
									<a
										href={project.githubLink}
										target='_blank'
										rel='noopener noreferrer'
										className='px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200'
									>
										View Github
									</a>
									<a
										href={project.liveLink}
										target='_blank'
										rel='noopener noreferrer'
										className='px-6 py-3 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2'
									>
										View project
										<svg
											className='w-4 h-4'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
											/>
										</svg>
									</a>
								</div>
							</div>

							{/* Project Image */}
							<div className='flex-1 max-w-lg'>
								<div className='bg-slate-800 rounded-lg p-4 border border-slate-700'>
									<Image
										src={project.image}
										alt={project.name}
										width={500}
										height={300}
										className='w-full h-64 object-cover rounded-lg'
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
