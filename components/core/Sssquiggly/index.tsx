import { SVGProps } from 'react';

interface IProps extends SVGProps<SVGSVGElement> {}

const SquigglyLine = ({ ...svgProps }: IProps) => {
	const SVGProps = {
		'xmlns:svgjs': 'http://svgjs.dev/svgjs',
		...svgProps,
	};
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			version='1.1'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			viewBox='0 0 800 800'
			opacity='1'
			{...SVGProps}
		>
			<g
				strokeWidth='15'
				stroke='hsl(0, 0%, 15%)'
				fill='none'
				strokeLinecap='round'
				transform='matrix(1,0,0,1,-5,188.02733612060547)'
			>
				<path d='M10,10C31.726190476190478,13.541666666666668,68.75,32.208333333333336,114.28571428571429,27C159.82142857142858,21.791666666666664,180.95238095238096,-17.083333333333332,228.57142857142858,-15C276.1904761904762,-12.916666666666666,295.2380952380953,35.75,342.8571428571429,37C390.4761904761905,38.25,409.5238095238095,-5.875,457.14285714285717,-9C504.7619047619048,-12.125,523.8095238095239,22,571.4285714285714,22C619.047619047619,22,638.0952380952382,-10.458333333333334,685.7142857142858,-9C733.3333333333334,-7.541666666666666,776.1904761904761,21.083333333333336,800,29'></path>
				<path
					d='M10,10C31.726190476190478,13.541666666666668,68.75,32.208333333333336,114.28571428571429,27C159.82142857142858,21.791666666666664,180.95238095238096,-17.083333333333332,228.57142857142858,-15C276.1904761904762,-12.916666666666666,295.2380952380953,35.75,342.8571428571429,37C390.4761904761905,38.25,409.5238095238095,-5.875,457.14285714285717,-9C504.7619047619048,-12.125,523.8095238095239,22,571.4285714285714,22C619.047619047619,22,638.0952380952382,-10.458333333333334,685.7142857142858,-9C733.3333333333334,-7.541666666666666,776.1904761904761,21.083333333333336,800,29'
					transform='matrix(1,0,0,1,1,402)'
				></path>
				<path
					d='M10,10C31.726190476190478,13.541666666666668,68.75,32.208333333333336,114.28571428571429,27C159.82142857142858,21.791666666666664,180.95238095238096,-17.083333333333332,228.57142857142858,-15C276.1904761904762,-12.916666666666666,295.2380952380953,35.75,342.8571428571429,37C390.4761904761905,38.25,409.5238095238095,-5.875,457.14285714285717,-9C504.7619047619048,-12.125,523.8095238095239,22,571.4285714285714,22C619.047619047619,22,638.0952380952382,-10.458333333333334,685.7142857142858,-9C733.3333333333334,-7.541666666666666,776.1904761904761,21.083333333333336,800,29'
					transform='matrix(1,0,0,1,1,335)'
				></path>
				<path
					d='M10,10C31.726190476190478,13.541666666666668,68.75,32.208333333333336,114.28571428571429,27C159.82142857142858,21.791666666666664,180.95238095238096,-17.083333333333332,228.57142857142858,-15C276.1904761904762,-12.916666666666666,295.2380952380953,35.75,342.8571428571429,37C390.4761904761905,38.25,409.5238095238095,-5.875,457.14285714285717,-9C504.7619047619048,-12.125,523.8095238095239,22,571.4285714285714,22C619.047619047619,22,638.0952380952382,-10.458333333333334,685.7142857142858,-9C733.3333333333334,-7.541666666666666,776.1904761904761,21.083333333333336,800,29'
					transform='matrix(1,0,0,1,1,268)'
				></path>
				<path
					d='M10,10C31.726190476190478,13.541666666666668,68.75,32.208333333333336,114.28571428571429,27C159.82142857142858,21.791666666666664,180.95238095238096,-17.083333333333332,228.57142857142858,-15C276.1904761904762,-12.916666666666666,295.2380952380953,35.75,342.8571428571429,37C390.4761904761905,38.25,409.5238095238095,-5.875,457.14285714285717,-9C504.7619047619048,-12.125,523.8095238095239,22,571.4285714285714,22C619.047619047619,22,638.0952380952382,-10.458333333333334,685.7142857142858,-9C733.3333333333334,-7.541666666666666,776.1904761904761,21.083333333333336,800,29'
					transform='matrix(1,0,0,1,1,201)'
				></path>
				<path
					d='M10,10C31.726190476190478,13.541666666666668,68.75,32.208333333333336,114.28571428571429,27C159.82142857142858,21.791666666666664,180.95238095238096,-17.083333333333332,228.57142857142858,-15C276.1904761904762,-12.916666666666666,295.2380952380953,35.75,342.8571428571429,37C390.4761904761905,38.25,409.5238095238095,-5.875,457.14285714285717,-9C504.7619047619048,-12.125,523.8095238095239,22,571.4285714285714,22C619.047619047619,22,638.0952380952382,-10.458333333333334,685.7142857142858,-9C733.3333333333334,-7.541666666666666,776.1904761904761,21.083333333333336,800,29'
					transform='matrix(1,0,0,1,1,134)'
				></path>
				<path
					d='M10,10C31.726190476190478,13.541666666666668,68.75,32.208333333333336,114.28571428571429,27C159.82142857142858,21.791666666666664,180.95238095238096,-17.083333333333332,228.57142857142858,-15C276.1904761904762,-12.916666666666666,295.2380952380953,35.75,342.8571428571429,37C390.4761904761905,38.25,409.5238095238095,-5.875,457.14285714285717,-9C504.7619047619048,-12.125,523.8095238095239,22,571.4285714285714,22C619.047619047619,22,638.0952380952382,-10.458333333333334,685.7142857142858,-9C733.3333333333334,-7.541666666666666,776.1904761904761,21.083333333333336,800,29'
					transform='matrix(1,0,0,1,1,67)'
				></path>
			</g>
		</svg>
	);
};

export default SquigglyLine;

{
	/* <svg
	xmlns='http://www.w3.org/2000/svg'
	version='1.1'
	xmlns:xlink='http://www.w3.org/1999/xlink'
	xmlns:svgjs='http://svgjs.dev/svgjs'
	viewBox='0 0 800 800'
	opacity='1'
>
	<g
		stroke-width='11'
		stroke='hsl(0, 0%, 8%)'
		fill='none'
		stroke-linecap='round'
		transform='matrix(1,0,0,1,-5,188.02733612060547)'
	>
		<path d='M10,10C31.726190476190478,13.541666666666668,68.75,32.208333333333336,114.28571428571429,27C159.82142857142858,21.791666666666664,180.95238095238096,-17.083333333333332,228.57142857142858,-15C276.1904761904762,-12.916666666666666,295.2380952380953,35.75,342.8571428571429,37C390.4761904761905,38.25,409.5238095238095,-5.875,457.14285714285717,-9C504.7619047619048,-12.125,523.8095238095239,22,571.4285714285714,22C619.047619047619,22,638.0952380952382,-10.458333333333334,685.7142857142858,-9C733.3333333333334,-7.541666666666666,776.1904761904761,21.083333333333336,800,29'></path>
		<path
			d='M10,10C31.726190476190478,13.541666666666668,68.75,32.208333333333336,114.28571428571429,27C159.82142857142858,21.791666666666664,180.95238095238096,-17.083333333333332,228.57142857142858,-15C276.1904761904762,-12.916666666666666,295.2380952380953,35.75,342.8571428571429,37C390.4761904761905,38.25,409.5238095238095,-5.875,457.14285714285717,-9C504.7619047619048,-12.125,523.8095238095239,22,571.4285714285714,22C619.047619047619,22,638.0952380952382,-10.458333333333334,685.7142857142858,-9C733.3333333333334,-7.541666666666666,776.1904761904761,21.083333333333336,800,29'
			transform='matrix(1,0,0,1,0,402)'
		></path>
		<path
			d='M10,10C31.726190476190478,13.541666666666668,68.75,32.208333333333336,114.28571428571429,27C159.82142857142858,21.791666666666664,180.95238095238096,-17.083333333333332,228.57142857142858,-15C276.1904761904762,-12.916666666666666,295.2380952380953,35.75,342.8571428571429,37C390.4761904761905,38.25,409.5238095238095,-5.875,457.14285714285717,-9C504.7619047619048,-12.125,523.8095238095239,22,571.4285714285714,22C619.047619047619,22,638.0952380952382,-10.458333333333334,685.7142857142858,-9C733.3333333333334,-7.541666666666666,776.1904761904761,21.083333333333336,800,29'
			transform='matrix(1,0,0,1,0,335)'
		></path>
		<path
			d='M10,10C31.726190476190478,13.541666666666668,68.75,32.208333333333336,114.28571428571429,27C159.82142857142858,21.791666666666664,180.95238095238096,-17.083333333333332,228.57142857142858,-15C276.1904761904762,-12.916666666666666,295.2380952380953,35.75,342.8571428571429,37C390.4761904761905,38.25,409.5238095238095,-5.875,457.14285714285717,-9C504.7619047619048,-12.125,523.8095238095239,22,571.4285714285714,22C619.047619047619,22,638.0952380952382,-10.458333333333334,685.7142857142858,-9C733.3333333333334,-7.541666666666666,776.1904761904761,21.083333333333336,800,29'
			transform='matrix(1,0,0,1,0,268)'
		></path>
		<path
			d='M10,10C31.726190476190478,13.541666666666668,68.75,32.208333333333336,114.28571428571429,27C159.82142857142858,21.791666666666664,180.95238095238096,-17.083333333333332,228.57142857142858,-15C276.1904761904762,-12.916666666666666,295.2380952380953,35.75,342.8571428571429,37C390.4761904761905,38.25,409.5238095238095,-5.875,457.14285714285717,-9C504.7619047619048,-12.125,523.8095238095239,22,571.4285714285714,22C619.047619047619,22,638.0952380952382,-10.458333333333334,685.7142857142858,-9C733.3333333333334,-7.541666666666666,776.1904761904761,21.083333333333336,800,29'
			transform='matrix(1,0,0,1,0,201)'
		></path>
		<path
			d='M10,10C31.726190476190478,13.541666666666668,68.75,32.208333333333336,114.28571428571429,27C159.82142857142858,21.791666666666664,180.95238095238096,-17.083333333333332,228.57142857142858,-15C276.1904761904762,-12.916666666666666,295.2380952380953,35.75,342.8571428571429,37C390.4761904761905,38.25,409.5238095238095,-5.875,457.14285714285717,-9C504.7619047619048,-12.125,523.8095238095239,22,571.4285714285714,22C619.047619047619,22,638.0952380952382,-10.458333333333334,685.7142857142858,-9C733.3333333333334,-7.541666666666666,776.1904761904761,21.083333333333336,800,29'
			transform='matrix(1,0,0,1,0,134)'
		></path>
		<path
			d='M10,10C31.726190476190478,13.541666666666668,68.75,32.208333333333336,114.28571428571429,27C159.82142857142858,21.791666666666664,180.95238095238096,-17.083333333333332,228.57142857142858,-15C276.1904761904762,-12.916666666666666,295.2380952380953,35.75,342.8571428571429,37C390.4761904761905,38.25,409.5238095238095,-5.875,457.14285714285717,-9C504.7619047619048,-12.125,523.8095238095239,22,571.4285714285714,22C619.047619047619,22,638.0952380952382,-10.458333333333334,685.7142857142858,-9C733.3333333333334,-7.541666666666666,776.1904761904761,21.083333333333336,800,29'
			transform='matrix(1,0,0,1,0,67)'
		></path>
	</g>
</svg>; */
}