'use client';

import Image from 'next/image';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';

const slides = [
	{ src: '/images/hero/fayokunmi-01.webp', position: '50% 52%' },
	{ src: '/images/hero/fayokunmi-02.webp', position: '50% 48%' },
	{ src: '/images/hero/fayokunmi-03.webp', position: '50% 46%' },
	{ src: '/images/hero/fayokunmi-04.webp', position: '50% 48%' },
];

const AUTOPLAY_DELAY = 6000;

export function HeroCarousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);
	const [isHovered, setIsHovered] = useState(false);
	const reduceMotion = useReducedMotion();

	const changeSlide = useCallback((step: number) => {
		setActiveIndex((current) => (current + step + slides.length) % slides.length);
	}, []);

	useEffect(() => {
		if (reduceMotion || !isPlaying || isHovered) return;

		const timer = window.setInterval(() => changeSlide(1), AUTOPLAY_DELAY);
		return () => window.clearInterval(timer);
	}, [activeIndex, changeSlide, isHovered, isPlaying, reduceMotion]);

	return (
		<div
			className='portrait-frame portrait-carousel'
			role='region'
			aria-roledescription='carousel'
			aria-label='Portraits of Fayokunmi Osho'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className='portrait-index' aria-live='polite'>
				{String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
			</div>

			<div className='portrait-slides'>
				{slides.map((slide, index) => {
					const isActive = index === activeIndex;

					return (
						<motion.div
							key={slide.src}
							className='portrait-slide'
							aria-hidden={!isActive}
							initial={false}
							animate={reduceMotion ? { opacity: isActive ? 1 : 0 } : {
								opacity: isActive ? 1 : 0,
								scale: isActive ? 1 : 1.045,
								y: isActive ? 0 : 14,
							}}
							transition={{ duration: .75, ease: [0.22, 1, 0.36, 1] }}
							style={{ zIndex: isActive ? 1 : 0 }}
						>
							<Image
								src={slide.src}
								alt={isActive ? `Fayokunmi Osho, portrait ${index + 1} of ${slides.length}` : ''}
								fill
								priority={index === 0}
								sizes='(max-width: 600px) 88vw, (max-width: 960px) 480px, 35vw'
								style={{ objectPosition: slide.position }}
							/>
						</motion.div>
					);
				})}
			</div>

			<div className='carousel-controls'>
				<button type='button' onClick={() => changeSlide(-1)} aria-label='Show previous portrait'>
					<ArrowLeft size={18} />
				</button>
				<button
					type='button'
					onClick={() => setIsPlaying((playing) => !playing)}
					aria-label={isPlaying ? 'Pause portrait slideshow' : 'Play portrait slideshow'}
					aria-pressed={!isPlaying}
				>
					{isPlaying ? <Pause size={16} /> : <Play size={16} />}
				</button>
				<button type='button' onClick={() => changeSlide(1)} aria-label='Show next portrait'>
					<ArrowRight size={18} />
				</button>
			</div>
		</div>
	);
}
