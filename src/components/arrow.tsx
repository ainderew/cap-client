import * as React from 'react';

interface props {
	fill: string;
}
const SVG_Arrow: React.FC<props> = ({ fill }) => (
	<svg width='100%' height='100%' viewBox='0 0 38 64' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path
			d='M15.32 28L37.68 5.64L32 0L0 32L32 64L37.64 58.36L15.32 36L11.5 32L15.32 28Z'
			fill={fill}
		/>
	</svg>
);

export default SVG_Arrow;
