import CustomNextImage from '@components/common/CustomNextImage';
import {
	CSSProperties,
	// useEffect, useRef
} from 'react';

import classes from './index.module.css';

const uniqueBusinessSolutionsSectionOptions = {
	// rootMargin: "-200px 0px 0px 0px"
	threshold: 0.1, // half of item height
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
		alt: '',
	},
	{
		src: 'https://exerge.com/wp-content/uploads/2022/07/2blz-uai-258x116.png',
		alt: '',
	},
	{
		src: 'https://exerge.com/wp-content/uploads/2022/07/3cs-uai-258x116.png',
		alt: '',
	},
	{
		src: 'https://exerge.com/wp-content/uploads/2022/07/4csn-uai-258x116.png',
		alt: '',
	},
	{
		src: 'https://exerge.com/wp-content/uploads/2022/07/5chrg-uai-258x116.png',
		alt: '',
	},
	{
		src: 'https://exerge.com/wp-content/uploads/2022/07/8gq-uai-258x116.png',
		alt: '',
	},
	{
		src: 'https://exerge.com/wp-content/uploads/2022/07/9gm-uai-258x116.png',
		alt: '',
	},
	{
		src: 'https://exerge.com/wp-content/uploads/2022/07/10gsuk-uai-258x116.png',
		alt: '',
	},
	{
		src: 'https://exerge.com/wp-content/uploads/2022/07/11hn-uai-258x116.png',
		alt: '',
	},
	{
		src: 'https://exerge.com/wp-content/uploads/2022/07/13pi-uai-258x116.png',
		alt: '',
	},
	{
		src: 'https://exerge.com/wp-content/uploads/2022/07/14rg-uai-258x116.png',
		alt: '',
	},
	{
		src: 'https://exerge.com/wp-content/uploads/2022/07/15tw-uai-258x116.png',
		alt: '',
	},
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
		<div
			// ref={elemRef}
			style={{
				backgroundImage:
					'url("images/bg-demo-dots-bg-compressed-uai-2064x1433.webp")',
			}}
			className='bg-black bg-opacity-95 text-zinc-100 bg-contain bg-no-repeat'
		>
			<div className='py-8 md:py-12' />
			<div className='max-w-[1400px] mx-auto p-8'>
				<h2
					className={`text-8xl md:text-9xl flex flex-col leading-relaxed font-medium ${classes.h2}`}
				>
					<span className='md:my-2' style={{ '--index': '0' } as CSSProperties}>
						<p className='leading-tight lg:leading-snug'>Unique</p>
					</span>
					<span className='md:my-2' style={{ '--index': '1' } as CSSProperties}>
						<p className='leading-tight lg:leading-snug'>Business</p>
					</span>
					<span className='md:my-2' style={{ '--index': '3' } as CSSProperties}>
						<p className='leading-tight lg:leading-snug'>Solutions</p>
					</span>
				</h2>
				<div className='py-4 md:py-8 lg:py-12' />
				<p className='text-2xl sm:text-3xl md:text-4xl leading-relaxed'>
					We help online businesses increase website traffic and revenue by
					enhancing their website design, functionalities, user experience, and
					SEO using the next.js programming technologies.
				</p>
				<div className='py-4 md:py-8 lg:py-12' />
				<p className='text-2xl sm:text-3xl md:text-4xl leading-relaxed'>
					A website is a core part of an online business, and it&apos;s easy to
					build one nowadays, but the challenge is to win the competition over
					other businesses. We can help you with that.
				</p>
				<div className='py-8 md:py-12' />
				<div className='hidden lg:flex flex-wrap items-center justify-around'>
					{testimonialsImages.map((image) => (
						<div key={image.src} className='w-44 h-20'>
							<CustomNextImage
								src={image.src}
								alt={image.alt}
								width={175}
								height={80}
								className='w-full h-full m-4'
							/>
						</div>
					))}
				</div>
				<div className={`lg:hidden overflow-hidden ${classes.slider}`}>
					<div
						className={`flex items-center ${classes.sliderTrack}`}
						style={
							{ '--itemsLength': testimonialsImages.length } as CSSProperties
						}
						// justify-around
					>
						{testimonialsImages.map((image) => (
							<div key={image.src} className='w-44 h-20'>
								<CustomNextImage
									src={image.src}
									alt={image.alt}
									width={175}
									height={80}
									className='w-full h-full m-4'
								/>
							</div>
						))}
					</div>
				</div>
				<div className='py-12' />
			</div>
		</div>
	);
};

export default UniqueBusinessSolutionsSection;
