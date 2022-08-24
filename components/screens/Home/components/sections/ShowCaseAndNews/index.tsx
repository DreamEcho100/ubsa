import CustomNextImage from '@components/common/CustomNextImage';
import { CSSProperties, useEffect, useRef } from 'react';
import classes from './index.module.css';

const imgTextSectionOptions = {
	// rootMargin: "-200px 0px 0px 0px"
	threshold: 0.25, // half of item height
};

const imgTextSectionObserver =
	typeof window !== 'undefined' &&
	typeof window !== 'undefined' &&
	new IntersectionObserver(function (entries, imgTextSectionObserver) {
		entries.forEach((entry) => {
			// if (window.innerWidth > 1024) {
			// entry.target
			const imgContainer = entry.target.querySelector(
				`.${classes.imgContainer}`
			);
			const detailsContainer = entry.target.querySelector(
				`.${classes.detailsContainer}`
			);

			if (!imgContainer || !detailsContainer) return;

			if (entry.isIntersecting) {
				if (!entry.target.classList.contains(classes.appear)) {
					entry.target.classList.add(classes.appear);
					imgContainer.classList.add(classes.appear);
					detailsContainer.classList.add(classes.appear);
				}

				if (!imgContainer.classList.contains(classes.scaleImg)) {
					imgContainer.classList.add(classes.scaleImg);
				}
				if (!detailsContainer.classList.contains(classes.colorfulHeader)) {
					detailsContainer.classList.add(classes.colorfulHeader);
				}
			}
			// else {
			// 	if (imgContainer.classList.contains(classes.scaleImg)) {
			// 		imgContainer.classList.remove(classes.scaleImg);
			// 	}
			// }
			// }
		});
	}, imgTextSectionOptions);

const ImgTextSection = ({
	item,
	itemIndex,
	itemsLength,
}: {
	item: {
		button: {
			text: string;
			href: string;
		};
		header: {
			text: string;
		};
		description: string;
		image: {
			src: string;
			alt: string;
		};
	};
	itemIndex: number;
	itemsLength: number;
}) => {
	const elemRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!elemRef.current || !imgTextSectionObserver) return;

		const elem = elemRef.current;

		imgTextSectionObserver.observe(elem);

		() => {
			imgTextSectionObserver.unobserve(elem);
			// imgTextSectionObserver.disconnect();
		};
	}, []);

	return (
		<div
			ref={elemRef}
			key={itemIndex}
			className={`relative flex max-w-[1400px] mx-auto p-8 ${
				itemIndex % 2 !== 0 ? 'lg:flex-row-reverse' : ''
			}
						md:justify-center md:items-center
						my-8
						${classes.imgAndDetailsContainer}
					`}
			style={
				{
					'--itemIndex': itemIndex,
					'--itemsLength': itemsLength,
				} as CSSProperties
			}
		>
			<div
				className={`overflow-hidden relative w-1/2 p-4 hidden lg:block ${classes.imgContainer}`}
			>
				<div
					className={`transition-all duration-300 bg-gradient-to-b absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 hover:bg-opacity-50 ${classes.wrapper}`}
				/>
				<CustomNextImage
					src={item.image.src}
					alt={item.image.alt}
					width={800}
					height={1000}
					className='w-full transition-all duration-300'
				/>
			</div>
			<div
				className={`w-full mx-auto max-w-[40rem] sm:max-w-[30rem] md:max-w-[80%] lg:max-w-[50%] p-4 relative ${classes.detailsContainer}`}
			>
				<div className='lg:p-4 lg:hidden absolute top-0 left-0 w-full h-full z-[1]'>
					<CustomNextImage
						src={item.image.src}
						alt={item.image.alt}
						width={800}
						height={1000}
						className='w-full h-full'
					/>
				</div>
				<div className='lg:hidden absolute top-0 left-0 w-full h-full z-[1] bg-black opacity-75' />
				<div className='relative p-4 lg:p-0 z-[2] flex flex-col items-center justify-center text-center lg:block lg:text-left'>
					<h3 className='text-4xl lg:text-8xl font-medium py-2'>
						{/* max-w-[75%] */}
						{item.header.text}
					</h3>
					<p className='my-8 max-w-[400px] drop-shadow-'>{item.description}</p>
					<button className='transition-all duration-300 bg-zinc-100 text-zinc-900 text-2xl font-medium px-8 py-4 border border-transparent hover:bg-transparent hover:border-zinc-100 hover:text-zinc-100 focus:bg-transparent focus:border-zinc-100 focus:text-zinc-100 select-none'>
						<a href={item.button.href}>{item.button.text}</a>
					</button>
				</div>
			</div>
		</div>
	);
};

const newsCardSectionOptions = {
	// rootMargin: "-200px 0px 0px 0px"
	threshold: 0.25, // half of item height
};

const newsCardSectionObserver =
	typeof window !== 'undefined' &&
	typeof window !== 'undefined' &&
	new IntersectionObserver(function (entries, newsCardSectionObserver) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (!entry.target.classList.contains(classes.appear)) {
					entry.target.classList.add(classes.appear);
				}
			}
			// if (window.innerWidth > 1024) {
			// 	// entry.target
			// 	const imgContainer = entry.target.querySelector(
			// 		`.${classes.imgContainer}`
			// 	);
			// 	const detailsContainer = entry.target.querySelector(
			// 		`.${classes.detailsContainer}`
			// 	);

			// 	if (!imgContainer || !detailsContainer) return;

			// 	if (entry.isIntersecting) {
			// 		if (!imgContainer.classList.contains(classes.appear))
			// 			imgContainer.classList.add(classes.appear);

			// 		if (!detailsContainer.classList.contains(classes.appear))
			// 			detailsContainer.classList.add(classes.appear);
			// 	}
			// }
		});
	}, imgTextSectionOptions);
const NewsCard = ({
	item,
	itemIndex,
}: {
	item: {
		date: string;
		header: {
			text: string;
			href: string;
		};
	};
	itemIndex: number;
}) => {
	const elemRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!elemRef.current || !newsCardSectionObserver) return;

		const elem = elemRef.current;

		newsCardSectionObserver.observe(elem);

		() => {
			newsCardSectionObserver.unobserve(elem);
			// imgTextSectionObserver.disconnect();
		};
	}, []);

	return (
		<div
			ref={elemRef}
			className={`w-full md:w-5/12 lg:w-72 my-4 ${classes.newsCard}`}
			style={{ '--index': itemIndex } as CSSProperties}
		>
			<small>
				<time dateTime={new Date(item.date).toISOString()}>{item.date}</time>
				<h3 className='text-2xl md:text-3xl'>
					<a href={item.header.href}>{item.header.text}</a>
				</h3>
			</small>
		</div>
	);
};

const ShowCaseAndNewsSections = () => {
	return (
		<section className='bg-black bg-opacity-90 text-slate-100 overflow-hidden py-8 max-w-[1400px] mx-auto'>
			{[
				{
					button: { text: 'Read More', href: '#' },
					header: { text: 'Branding & Design PISES' },
					description:
						'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dignissimos iste ab ea, consequatur exercitationem? Cupiditate repudiandae, maxime facilis molestias explicabo, perferendis eaque doloremque nostrum asperiores quis, ducimus expedita fugit?',
					image: {
						src: 'https://exerge.com/wp-content/uploads/2022/07/Positive-Impact-School-Website-uai-1467x1174.jpg',
						alt: '',
					},
				},
				{
					button: { text: 'Read More', href: '#' },
					header: { text: 'AGICO CRM & Call Center' },
					description:
						'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dignissimos iste ab ea, consequatur exercitationem? Cupiditate repudiandae, maxime facilis molestias explicabo, perferendis eaque doloremque nostrum asperiores quis, ducimus expedita fugit?',
					image: {
						src: 'https://exerge.com/wp-content/uploads/2022/07/AgicoCRM-uai-1467x1174.jpg',
						alt: '',
					},
				},
				{
					button: { text: 'Read More', href: '#' },
					header: { text: 'Renergent Energy' },
					description:
						'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dignissimos iste ab ea, consequatur exercitationem? Cupiditate repudiandae, maxime facilis molestias explicabo, perferendis eaque doloremque nostrum asperiores quis, ducimus expedita fugit?',
					image: {
						src: 'https://exerge.com/wp-content/uploads/2022/07/renergent-uai-1467x1174.jpg',
						alt: '',
					},
				},
			].map((item, itemIndex, itemsArr) => (
				<ImgTextSection
					key={itemIndex}
					item={item}
					itemIndex={itemIndex}
					itemsLength={itemsArr.length}
				/>
			))}
			<div className='max-w-[1400px] mx-auto font-medium mt-16 p-8'>
				<header>
					<h2 className='text-7xl'>News</h2>
				</header>
				<div className='flex flex-wrap mt-8 md:justify-between items-center'>
					{[
						{
							date: 'April 11, 2022',
							header: {
								text: 'Top 4 Reasons Why Golf Courses or Country Clubs Need a Website',
								href: '#',
							},
						},
						{
							date: 'September 27, 2019',
							header: {
								text: '5 Advantages of a good real estate management software',
								href: '#',
							},
						},
						{
							date: 'September 24, 2019',
							header: {
								text: 'How to Manage Clients In A Better Way | 5 Professional Tips',
								href: '#',
							},
						},
						{
							date: 'September 5, 2019',
							header: {
								text: 'Clutch Announces Exerge as The Top B2B Company in The Middle East',
								href: '#',
							},
						},
					].map((item, itemIndex) => (
						<NewsCard key={itemIndex} item={item} itemIndex={itemIndex} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ShowCaseAndNewsSections;
