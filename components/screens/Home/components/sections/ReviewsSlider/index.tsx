import Slider from '@components/common/Slider';
import { Fragment } from 'react';
import { FaStar } from 'react-icons/fa';

type Props = {};

const ReviewsSlider = (props: Props) => {
	return (
		<section className='flex flex-col p-8 md:py-16 max-w-[1400px] mx-auto'>
			<header className='my-4'>
				<h2 className='text-7xl'>Reviews that speak for themselves.</h2>
				<p className='mt-8 mb-12 text-2xl'>
					We&apos;re not ones to brag, so we&apos;ll let our customer reviews do
					all the talking.
				</p>
				<button className='transition-all duration-300 mu-16 px-8 py-4 bg-black text-white border border-black hover:bg-zinc-50 hover:text-zinc-900 focus:bg-zinc-50 focus:text-zinc-900'>
					MORE REVIEWS THIS WAY
				</button>
			</header>
			<div className='mt-16 mb-8'>
				<Slider
					outerSliderClassName='min-w-full overflow-hidden'
					innerSliderClassName='flex w-fit'
				>
					{'break'
						.repeat(10 - 1)
						.split('break')
						.map(() => ({
							stars: 5,
							username: 'John Doe',
							name: 'Eng. John Doe',
							content:
								'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio id illo sapiente est assumenda adipisci, amet tenetur nam accusantium mollitia deleniti.',
							url: 'example.com',
						}))
						.map(({ stars, name, username, content, url }, itemIndex) => (
							<div
								key={`${username}-${itemIndex}`}
								className='w-80 m-4 p-8 flex flex-col'
								style={{
									boxShadow: '0 0 1rem rgba(0, 0, 0, 0.5)',
								}}
							>
								<span className='flex text-yellow-300 text-lg'>
									{'break'
										.repeat(stars - 1)
										.split('break')
										.map((item, index) => (
											<Fragment key={index}>
												<FaStar key={index} />
												<span className='px-1' />
											</Fragment>
										))}
								</span>
								<span className='p-1' />
								<h4 className='text-2xl font-bold'>{name}</h4>
								<small className='font-light text-lg'>{username}</small>
								<p className='font-light my-2'>{content}</p>
								<p>
									<a
										href={url}
										className=' transition-all duration-150 text-sky-600 hover:text-sky-400 focus:border-b focus:border-spacing-2 focus:border-b-sky-500'
									>
										{url}
									</a>
								</p>
							</div>
						))}
				</Slider>
			</div>
		</section>
	);
};

export default ReviewsSlider;
