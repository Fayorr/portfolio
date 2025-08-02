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
			className={`bg-transparent hover:bg-transparent ${
				year === currentYear
					? 'bg-orange-500 hover:bg-orange-500 text-white '
					: ' border border-slate-600 hover:border-slate-500  font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2 '
			} cursor-pointer px-7 py-5 text-[#0f127a] dark:text-white `}
		>
			{year}
		</Button>
	);
}
