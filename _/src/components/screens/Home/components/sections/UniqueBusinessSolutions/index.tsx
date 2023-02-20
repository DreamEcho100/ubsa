import CustomNextImage from '@components/common/CustomNextImage';
import SquigglyLine from '@components/core/Sssquiggly';
import {
	CSSProperties,
	Fragment
	// useEffect, useRef
} from 'react';

import classes from './index.module.css';

const uniqueBusinessSolutionsSectionOptions = {
	// rootMargin: "-200px 0px 0px 0px"
	threshold: 0.1 // half of item height
};

const uniqueBusinessSolutionsSectionObserver =
	typeof window !== 'undefined' &&
	typeof window !== 'undefined' &&
	new IntersectionObserver(function (
		entries,
		uniqueBusinessSolutionsSectionObserver
	) {
		entries.forEach((entry) => {
			const mainHeader = document.getElementById('main-header');

			if (!mainHeader) return;

			if (entry.isIntersecting) {
				// mainHeader.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
				document.body.style.setProperty('--nav-height', '6rem');
			} else {
				// mainHeader.style.backgroundColor = 'rgba(0, 0, 0)';
				document.body.style.setProperty('--nav-height', '3rem');
			}

			// const headerBg = mainHeader.querySelector('.header-bg') as HTMLDivElement;

			// if (!headerBg) return;

			// if (entry.isIntersecting) {
			// 	headerBg.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
			// } else {
			// 	headerBg.style.backgroundColor = 'rgba(0, 0, 0)';
			// }
		});
	},
	uniqueBusinessSolutionsSectionOptions);

const testimonialsImages = [
	{
		src: 'https://exerge.com/wp-content/uploads/2022/07/1ag-uai-258x116.png',
		alt: ''
	},
	{
		src: 'https://exerge.com/wp-content/uploads/2022/07/2blz-uai-258x116.png',
		alt: ''
	},
	{
		src: 'https://exerge.com/wp-content/uploads/2022/07/3cs-uai-258x116.png',
		alt: ''
	},
	{
		src: 'https://exerge.com/wp-content/uploads/2022/07/4csn-uai-258x116.png',
		alt: ''
	},
	{
		src: 'https://exerge.com/wp-content/uploads/2022/07/5chrg-uai-258x116.png',
		alt: ''
	},
	{
		src: 'https://exerge.com/wp-content/uploads/2022/07/8gq-uai-258x116.png',
		alt: ''
	},
	{
		src: 'https://exerge.com/wp-content/uploads/2022/07/9gm-uai-258x116.png',
		alt: ''
	},
	{
		src: 'https://exerge.com/wp-content/uploads/2022/07/10gsuk-uai-258x116.png',
		alt: ''
	},
	{
		src: 'https://exerge.com/wp-content/uploads/2022/07/11hn-uai-258x116.png',
		alt: ''
	},
	{
		src: 'https://exerge.com/wp-content/uploads/2022/07/13pi-uai-258x116.png',
		alt: ''
	},
	{
		src: 'https://exerge.com/wp-content/uploads/2022/07/14rg-uai-258x116.png',
		alt: ''
	},
	{
		src: 'https://exerge.com/wp-content/uploads/2022/07/15tw-uai-258x116.png',
		alt: ''
	}
];

const UniqueBusinessSolutionsSection = () => {
	// const elemRef = useRef<HTMLDivElement>(null);

	// useEffect(() => {
	// 	if (!elemRef.current || !uniqueBusinessSolutionsSectionObserver) return;

	// 	const elem = elemRef.current;

	// 	uniqueBusinessSolutionsSectionObserver.observe(elem);

	// 	() => {
	// 		uniqueBusinessSolutionsSectionObserver.unobserve(elem);
	// 		// imgTextSectionObserver.disconnect();
	// 	};
	// }, []);

	return (
		<section
			// ref={elemRef}
			style={{
				// backgroundImage:
				// 	'url("images/bg-demo-dots-bg-compressed-uai-2064x1433.webp")',
				backgroundColor: 'rgb(13 13 13)'
			}}
			className='relative main-content-section bg-black bg-opacity-95 text-zinc-100 bg-contain bg-no-repeat'
		>
			<div
				className={`${classes.rightCircle} opacity-0 absolute  top-[15%] right-[7.5%] rounded-full aspect-square w-[35%]`}
				style={{ background: 'hsl(0, 0%, 11%)' }}
			/>
			<div
				className={`${classes.leftCircle} opacity-0 absolute top-[-10%] left-0 -translate-x-1/2 rounded-full aspect-square w-[35%] min-w-[15rem]`}
				style={{ background: 'hsl(0, 0%, 11%)' }}
			/>
			<SquigglyLine
				className={`${classes.rightCircle} opacity-0 absolute top-[12.5%] right-[5%] w-[15%] fill-gray-100 h-fit bg-no-repeat`}
			/>
			<div className='py-8 md:py-12' />
			<div className='relative z-10 max-w-[1400px] mx-auto px-8 py-4'>
				<h2
					className={`text-5xl sm:text-7xl md:text-[6rem] lg:text-[8rem] flex flex-col leading-relaxed font-medium ${classes.h2}`}
				>
					<span className='py-2' style={{ '--index': '0' } as CSSProperties}>
						<p className='leading-none'>Unique</p>
					</span>
					<span className='py-2' style={{ '--index': '1' } as CSSProperties}>
						<p className='leading-none'>Business</p>
					</span>
					<span className='py-2' style={{ '--index': '3' } as CSSProperties}>
						<p className='leading-none'>Solutions</p>
					</span>
				</h2>
				<div className='py-6 md:py-10' />
				<p className='text-2xl sm:text-3xl md:text-4xl leading-relaxed'>
					We help online businesses increase website traffic and revenue by
					enhancing their website design, functionalities, user experience, and
					SEO using the next.js programming technologies.
				</p>
				<div className='py-6 md:py-10' />
				<p className='text-2xl sm:text-3xl md:text-4xl leading-relaxed'>
					A website is a core part of an online business, and it&apos;s easy to
					build one nowadays, but the challenge is to win the competition over
					other businesses. We can help you with that.
				</p>
				{/* <div className='py-6 md:py-10' />
				<div className='flex items-center justify-center'>
					<button
						className='transition-all duration-300 font-bold bg-zinc-100 text-zinc-900 border-2 border-zinc-900 px-6 py-4 
					hover:bg-zinc-900 hover:text-zinc-100 hover:border-zinc-100
					focus:bg-zinc-900 focus:text-zinc-100 focus:border-zinc-100'
					>
						<a href='#'>Contact us</a>
					</button>
				</div> */}
				<div className='py-6 md:py-10' />
				<div className='w-full hidden lg:block'>
					<Technologies />
				</div>
				<div className='w-full lg:hidden overflow-hidden'>
					<div
						className={`w-full flex carousal-x-track`}
						// ${classes.sliderTrack}
						style={
							{
								'--itemsLength': testimonialsImages.length * 8 // testimonialsImages.length * 15,
							} as CSSProperties
						}
						// justify-around
					>
						<Technologies isRepeated />
					</div>
				</div>
				<div className='py-4 md:py-8' />
			</div>
		</section>
	);
};

export default UniqueBusinessSolutionsSection;

const technologies = [
	{
		src: '/svgs/next-js-rounded-dark-seeklogo.com.svg',
		alt: 'Next JS',
		title: 'Next JS'
		// className: 'rounded-full',
		// style: {
		// 	backgroundImage: 'radial-gradient(white, white, black, black)',
		// },
	},
	{
		src: '/svgs/react-seeklogo.com.svg',
		alt: 'React JS',
		title: 'React JS'
	},
	{
		src: '/svgs/typescript-seeklogo.com.svg',
		alt: 'TypeScript',
		title: 'TypeScript'
	},
	{
		src: '/svgs/javascript-js-seeklogo.com.svg',
		alt: 'JavaScript',
		title: 'JavaScript'
	},
	{
		src: '/svgs/threejs.svg',
		alt: 'Three JS',
		title: 'Three JS'
	},
	{
		src: '/svgs/tailwind-css-icon.svg',
		alt: 'Tail Wind',
		title: 'Tail Wind'
	},
	{
		src: '/svgs/sass-icon.svg',
		alt: 'SASS',
		title: 'SASS'
	},
	{
		src: '/svgs/css3-icon.svg',
		alt: 'CSS3',
		title: 'CSS3'
	},
	{
		src: '/svgs/html5-line-icon.svg',
		alt: 'HTML5',
		title: 'HTML5'
	},
	{
		src: '/svgs/figma-icon.svg',
		alt: 'Figma',
		title: 'Figma'
	},
	{
		src: '/svgs/node-js-icon.svg',
		alt: 'Node JS',
		title: 'Node JS'
	},
	{
		src: '/svgs/jest-js-icon.svg',
		alt: 'Jest',
		title: 'Jest'
	},
	{
		src: '/svgs/cypress.svg',
		alt: 'Cypress',
		title: 'Cypress'
	}
	// { src: '/svgs/css3-seeklogo.com.svg', alt: 'css3-seeklogo' },
	// { src: '/svgs/html5-with-wordmark-color.svg', alt: 'html5-with' },
];

const Technologies = ({ isRepeated }: { isRepeated?: boolean }) => {
	const techs = isRepeated
		? [
				...technologies,
				...technologies,
				...technologies,
				...technologies,
				...technologies,
				...technologies,
				...technologies,
				...technologies
		  ]
		: technologies;

	return (
		<div className='w-full flex flex-wrap justify-center items-center'>
			{techs.map(({ src, alt, ...props }, index, arr) => (
				<Fragment key={src}>
					<span
						className='w-[4rem] my-2 aspect-square flex items-center justify-center bg-transparent'
						{...props}
					>
						<CustomNextImage
							src={src}
							alt={alt}
							width={50}
							height={50}
							className='object-center object-contain w-full h-full max-w-full max-h-full'
						/>
					</span>
					{index !== arr.length - 1 && <span className='px-2' />}
				</Fragment>
			))}
		</div>
	);
};
