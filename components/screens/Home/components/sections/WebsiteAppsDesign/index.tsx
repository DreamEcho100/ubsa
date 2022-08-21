import CustomNextImage from '@components/common/CustomNextImage';
import { CSSProperties } from 'react';

import classes from './index.module.css';

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

const WebsiteAppsDesignSection = () => {
	return (
		<div
			style={{
				backgroundImage:
					'url("images/bg-demo-dots-bg-compressed-uai-2064x1433.webp")',
			}}
			className='bg-black bg-opacity-95 text-zinc-100 bg-contain bg-no-repeat'
		>
			<div className='max-w-[1400px] mx-auto p-8'>
				<h2
					className={`text-7xl sm:text-7xl md:text-9xl flex flex-col leading-relaxed font-medium ${classes.h2}`}
				>
					<span className='md:my-2' style={{ '--index': '0' } as CSSProperties}>
						<p className='md:py-2'>Websites.</p>
					</span>
					<span className='md:my-2' style={{ '--index': '1' } as CSSProperties}>
						<p className='md:py-2'>Apps.</p>
					</span>
					<span className='md:my-2' style={{ '--index': '3' } as CSSProperties}>
						<p className='md:py-2'>Design.</p>
					</span>
				</h2>
				<div className='py-12 md:py-16' />
				<p className='text-2xl sm:text-3xl md:text-4xl leading-relaxed'>
					While very diverse, our aesthetic and advance approach often involves
					distinct sense of play and global vision, aiming to put the fun in
					functional. Strategically, our work aims to elevate brands offerings
					by distilling core messaging down to its clearest and fresh visual
					values.
				</p>
				<div className='py-12 md:py-16' />
				<p className='text-2xl sm:text-3xl md:text-4xl leading-relaxed'>
					Our aim is to develop and deliver web applications that bring your
					brand/app closer to your customer — and to yourself. We understand web
					&amp; app design &amp; development like the back of our hands. We
					deliver on time and without any financial or technical surprises.
				</p>
				<div className='py-12 md:py-16' />
				<div className='hidden lg:flex flex-wrap items-center justify-around'>
					{testimonialsImages.map((image) => (
						<div key={image.src} className='w-44 h-20 item-shine'>
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
							<div key={image.src} className='w-44 h-20 item-shine'>
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
				<div className='py-16 md:py-16' />
			</div>
		</div>
	);
};

export default WebsiteAppsDesignSection;
