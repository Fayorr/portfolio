'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

export function SiteEffects() {
	const [loading, setLoading] = useState(true);
	const x = useMotionValue(-40);
	const y = useMotionValue(-40);
	const smoothX = useSpring(x, { stiffness: 700, damping: 42, mass: 0.18 });
	const smoothY = useSpring(y, { stiffness: 700, damping: 42, mass: 0.18 });

	useEffect(() => {
		const timer = window.setTimeout(() => setLoading(false), 2100);
		return () => window.clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (!window.matchMedia('(pointer: fine)').matches) return;
		const move = (event: MouseEvent) => { x.set(event.clientX - 11); y.set(event.clientY - 11); };
		window.addEventListener('mousemove', move);
		return () => window.removeEventListener('mousemove', move);
	}, [x, y]);

	return (
		<>
			<AnimatePresence>
				{loading && (
					<motion.div className='loading-screen' initial={{ opacity: 1 }} exit={{ opacity: 0, y: '-12%' }} transition={{ duration: .65, ease: [0.76, 0, 0.24, 1] }}>
						<div className='loader-orbit'>
							<motion.div animate={{ rotate: 360 }} transition={{ duration: 1.6, ease: 'linear', repeat: Infinity }} className='loader-ring' />
							<motion.div initial={{ scale: .5, rotate: -30 }} animate={{ scale: [1, 1.16, 1], rotate: 0 }} transition={{ duration: 1.25, repeat: Infinity }}>
								<Image src='/icon.png' alt='' width={54} height={54} priority />
							</motion.div>
						</div>
						<p>Compiling a thoughtful experience</p>
						<div className='loader-track'><motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.85, ease: [0.65, 0, 0.35, 1] }} /></div>
						<button onClick={() => setLoading(false)}>Skip intro</button>
					</motion.div>
				)}
			</AnimatePresence>
			<motion.div className='fancy-cursor' style={{ x: smoothX, y: smoothY }} aria-hidden='true'>✦</motion.div>
		</>
	);
}
