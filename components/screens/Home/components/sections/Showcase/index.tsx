import CustomNextImage from '@components/common/CustomNextImage';
import { useSharedMainState } from '@components/layouts/Main/context';
import { CSSProperties, useEffect, useRef } from 'react';

const cardOptions = {
	// rootMargin: "-200px 0px 0px 0px"
	threshold: 0.95, // half of item height
};

const cardObserver =
	typeof window !== 'undefined' &&
	typeof window !== 'undefined' &&
	new IntersectionObserver(function (entries, cardObserver) {
		entries.forEach((entry) => {
			const mainHeader = document.getElementById('main-header');

			if (!mainHeader) return;

			const outerContainer = entry.target.querySelector('.io-container-outer');
			const innerContainer = entry.target.querySelector('.io-container-inner');
			// bg-black bg-opacity-60

			if (!outerContainer || !innerContainer) return;

			if (entry.isIntersecting) {
				// mainHeader.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
				// document.body.style.setProperty('--nav-height', '6rem');
				outerContainer.classList.add('bg-black', 'bg-opacity-60');
				innerContainer.classList.add('flex', 'bg-black', 'bg-opacity-75');
				innerContainer.classList.remove('hidden');
			} else {
				outerContainer.classList.remove('bg-black', 'bg-opacity-60');
				innerContainer.classList.remove('flex', 'bg-black', 'bg-opacity-75');
				innerContainer.classList.add('hidden');
				// mainHeader.style.backgroundColor = 'rgba(0, 0, 0)';
				// document.body.style.setProperty('--nav-height', '3rem');
			}

			// const headerBg = mainHeader.querySelector('.header-bg') as HTMLDivElement;

			// if (!headerBg) return;

			// if (entry.isIntersecting) {
			// 	headerBg.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
			// } else {
			// 	headerBg.style.backgroundColor = 'rgba(0, 0, 0)';
			// }
		});
	}, cardOptions);

const Card = ({
	item,
	size = 'sm',
}: {
	item: {
		img: { src: string; alt: string };
		a: { href: string; text: string };
		h3: { text: string };
	};
	size?: 'sm' | 'md' | 'bg';
}) => {
	const [{ isMobileOrTablet }] = useSharedMainState();
	const elemRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!elemRef.current || !cardObserver) return;

		const elem = elemRef.current;

		cardObserver.observe(elem);

		() => {
			cardObserver.unobserve(elem);
			// imgTextSectionObserver.disconnect();
		};
	}, []);

	return (
		<div
			ref={elemRef}
			className='rounded-3xl overflow-hidden relative w-full aspect-square max-w-full p-2 lg:p-4'
		>
			<a
				href={item.a.href}
				className='relative w-full h-full'
				target='_blank'
				rel='noopener noreferrer'
			>
				<CustomNextImage
					// src={`//images.weserv.nl/?url=${item.img.src}&w=${1000}`}
					src={item.img.src}
					alt={item.img.alt}
					width={400}
					height={400}
					className='rounded-2xl absolute top-0 left-0 w-full h-full -z-10 object-cover'
					priority
				/>
				<div
					className={`rounded-2xl io-container-outer transition-all duration-300 w-full h-full flex items-end justify-center group hover:bg-black hover:bg-opacity-60 ${
						isMobileOrTablet ? 'io-isMobileOrTablet' : ''
					}`}
				>
					<div
						className={`rounded-2xl io-container-inner transition-all duration-300 w-full p-8 md:p-4 ${
							size === 'bg' ? 'md:p-16' : 'md:p-8'
						} flex-col items-center justify-center text-center group-hover:flex group-hover:bg-black group-hover:bg-opacity-75 ${
							isMobileOrTablet ? 'io-isMobileOrTablet' : 'hidden'
						}`}
					>
						<h3
							className={`text-h3 ${
								size === 'bg' ? 'md:text-8xl' : 'md:text-4xl'
							} text-zinc-100`}
						>
							{item.h3.text}
						</h3>
						<span
							className={`font-medium text-xl ${
								size === 'bg' ? 'md:text-4xl' : 'md:text-1xl lg:md:text-2xl'
							} text-sky-700 hover:text-sky-500`}
						>
							{item.a.text}
						</span>
					</div>
				</div>
			</a>
		</div>
	);
};

const imgbaseUrl =
	'https://res.cloudinary.com/mazecode-image-video-usoc/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1661356443';

const ShowcaseSection = () => {
	return (
		<section
			className='main-content-section px-2 py-16 max-w-[1400px]'
			id='technologies'
		>
			<header className='flex flex-col items-center justify-center text-center p-4 max-w-[1400px] mx-auto'>
				<h2
					className='text-h2 capitalize font-bold'
					style={
						{
							'--linearGradient': 'linear-gradient(to right, rgb(0, 0, 0)',
							backgroundImage:
								'var(--linearGradient, linear-gradient(to right, rgb(0, 0, 0), rgba(0, 0, 0, 0.7)))',
							backgroundClip: 'text',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
						} as CSSProperties
					}
				>
					We employ technologies that top industry technologies use
				</h2>
				<p className='mx-auto max-w-[800px] sm:text-3xl md:text-4xl font-bold my-8 md:my-16'>
					Check some of the more successful global businesses, websites
					programmed in next.js.
				</p>
			</header>
			<div className='flex flex-col items-center md:flex-row lg:px-8'>
				<div className='w-11/12 sm:w-3/5 md:w-2/3'>
					{[
						{
							img: {
								src: 'https://techcult.com/wp-content/uploads/2022/08/go-to-hulu-website-on-a-browser.png', // '/images/showcase/hulu.png' /*`${imgbaseUrl}/hulu_swlpgt.jpg`*/,
								alt: 'hulu',
							},
							a: { href: 'https://www.hulu.com', text: 'https://www.hulu.com' },
							h3: { text: 'hulu' },
						},
						{
							img: {
								src: '/images/showcase/vice.png' /*`${imgbaseUrl}/vice_h2nx1b.jpg`*/,
								alt: 'vice',
							},
							a: { href: 'https://www.vice.com', text: 'https://www.vice.com' },
							h3: { text: 'vice' },
						},
					].map((item) => (
						<Card key={item.h3.text} item={item} size='md' />
					))}
				</div>
				<div className='w-11/12 sm:w-3/5 md:w-1/3'>
					{[
						{
							img: {
								src: '/images/showcase/twitch.png' /*`${imgbaseUrl}/twitch_absljp.jpg`*/,
								alt: 'twitch',
							},
							a: {
								href: 'https://www.twitch.com',
								text: 'https://www.twitch.com',
							},
							h3: { text: 'twitch' },
						},
						{
							img: {
								src: '/images/showcase/nike.png' /*`${imgbaseUrl}/nike_cqzoi8.jpg`*/,
								alt: 'nike',
							},
							a: { href: 'https://www.nike.com', text: 'https://www.nike.com' },
							h3: { text: 'nike' },
						},
						{
							img: {
								src: '/images/showcase/tiktok.png' /*`${imgbaseUrl}/tiktok_p9hyax.jpg`*/,
								alt: 'tiktok',
							}, // './images/showcase/tiktok.png'
							a: {
								href: 'https://www.tiktok.com',
								text: 'https://www.tiktok.com',
							},
							h3: { text: 'tiktok' },
						},
						{
							img: {
								src: '/images/showcase/hbomax.png' /*`${imgbaseUrl}/hbomax_uxwhez.jpg`*/,
								alt: 'hbomax',
							},
							a: {
								href: 'https://www.hbomax.com',
								text: 'https://www.hbomax.com',
							},
							h3: { text: 'hbomax' },
						},
					].map((item) => (
						<Card key={item.h3.text} item={item} />
					))}
				</div>
			</div>
			{/* <div className='w-4/5 md:w-full'>
				<Card
					item={{
						img: { src: `${imgbaseUrl}/tiktok_p9hyax.jpg`, alt: 'hbomax' },
						a: {
							href: 'https://www.hbomax.com',
							text: 'https://www.hbomax.com',
						},
						h3: { text: 'hbomax' },
					}}
					size='bg'
				/>
			</div> */}
		</section>
	);
};

export default ShowcaseSection;
