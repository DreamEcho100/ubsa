import CustomNextImage from '@components/common/CustomNextImage';
import { useSharedMainState } from '@components/layouts/Main/context';
import React, { CSSProperties } from 'react';

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
	return (
		<div className='relative w-full aspect-square max-w-full p-4'>
			<a
				href={item.a.href}
				className='relative w-full h-full'
				target='_blank'
				rel='noopener noreferrer'
			>
				<CustomNextImage
					src={item.img.src}
					alt={item.img.alt}
					width={400}
					height={400}
					className='absolute top-0 left-0 w-full h-full -z-10'
				/>
				<div
					className={`transition-all duration-300 w-full h-full flex items-end justify-center group hover:bg-black hover:bg-opacity-60 ${
						isMobileOrTablet ? 'bg-black bg-opacity-60' : ''
					}`}
				>
					<div
						className={`transition-all duration-300 w-full p-4 ${
							size === 'bg' ? 'md:p-16' : 'md:p-8'
						} flex-col items-center justify-center text-center group-hover:flex group-hover:bg-black group-hover:bg-opacity-75 ${
							isMobileOrTablet ? 'flex bg-black bg-opacity-75' : 'hidden'
						}`}
					>
						<h3
							className={`text-2xl ${
								size === 'bg' ? 'md:text-8xl' : 'md:text-4xl'
							} text-zinc-100`}
						>
							{item.h3.text}
						</h3>
						<span
							className={`font-medium text-lg ${
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

const ShowcaseSection = () => {
	return (
		<section className='px-2 py-8 md:py-16'>
			<header className='flex flex-col items-center justify-center text-center p-4'>
				<h2
					className='text-5xl sm:text-6xl md:text-8xl capitalize font-bold'
					style={
						{
							'--linearGradient': '',
							backgroundImage:
								'var(--linearGradient, linear-gradient(to right, rgb(0, 0, 0), rgba(0, 0, 0, 0.7)))',
							backgroundClip: 'text',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
						} as CSSProperties
					}
				>
					We employ technologies that top industry companies use
				</h2>
				<p className='mx-auto max-w-[800px] text-lg sm:text-xl md:text-3xl font-bold my-8 md:my-16'>
					Check some of the more successful global businesses, websites
					programmed in next.js.
				</p>
			</header>
			<div className='flex flex-col items-center md:flex-row'>
				<div className='aspect-square w-11/12 md:w-2/3'>
					{[
						{
							img: { src: './images/showcase/hulu.avif', alt: 'hulu' },
							a: { href: 'https://www.hulu.com', text: 'https://www.hulu.com' },
							h3: { text: 'hulu' },
						},
						{
							img: { src: './images/showcase/vice.avif', alt: 'vice' },
							a: { href: 'https://www.vice.com', text: 'https://www.vice.com' },
							h3: { text: 'vice' },
						},
					].map((item) => (
						<Card key={item.h3.text} item={item} size='md' />
					))}
				</div>
				<div className='aspect-square w-11/12 md:w-1/3'>
					{[
						{
							img: { src: './images/showcase/twitch.avif', alt: 'twitch' },
							a: {
								href: 'https://www.twitch.com',
								text: 'https://www.twitch.com',
							},
							h3: { text: 'twitch' },
						},
						{
							img: { src: './images/showcase/nike.avif', alt: 'nike' },
							a: { href: 'https://www.nike.com', text: 'https://www.nike.com' },
							h3: { text: 'nike' },
						},
						{
							img: { src: './images/showcase/tiktok.avif', alt: 'tiktok' },
							a: {
								href: 'https://www.tiktok.com',
								text: 'https://www.tiktok.com',
							},
							h3: { text: 'tiktok' },
						},
						{
							img: { src: './images/showcase/hbomax.avif', alt: 'hbomax' },
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
						img: { src: './images/showcase/hbomax.avif', alt: 'hbomax' },
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
