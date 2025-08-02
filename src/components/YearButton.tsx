import React from 'react';
import { Button } from './ui/button';


export default function YearButton({
	year,
	currentYear,
}: {
	year: number;
	currentYear: number;
}) {
	return (
		<Button
			className={`${year === currentYear ? 'bg-orange-500 text-white' : ''}`}
		>
			{year}
		</Button>
	);
}
