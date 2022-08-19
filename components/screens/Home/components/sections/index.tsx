import CustomNextImage from '@components/common/CustomNextImage';

const ShowCaseAndNewsSections = () => {
	return (
		<div className='bg-slate-800 text-slate-100'>
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
			].map((item, itemIndex) => (
				<div
					key={itemIndex}
					className={`flex max-w-[1400px] mx-auto p-8 ${
						itemIndex % 2 !== 0 ? 'lg:flex-row-reverse' : ''
					}
						md:justify-center md:items-center
						my-8
					`}
				>
					<div className='w-1/2 p-4 hidden lg:block'>
						<CustomNextImage
							src={item.image.src}
							alt={item.image.alt}
							width={800}
							height={1000}
							className='w-full'
						/>
					</div>
					<div className='w-full md:w-4/5 p-4 relative'>
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
							<h3 className='text-4xl lg:text-8xl font-medium max-w-[75%]'>
								{item.header.text}
							</h3>
							<p className='my-8 max-w-[400px] drop-shadow-'>
								{item.description}
							</p>
							<button className='transition-all rounded-3xl duration-300 bg-zinc-100 text-zinc-900 text-2xl font-medium px-8 py-4 border border-transparent hover:bg-transparent hover:border-zinc-100 hover:text-zinc-100 focus:bg-transparent focus:border-zinc-100 focus:text-zinc-100 select-none'>
								<a href={item.button.href}>{item.button.text}</a>
							</button>
						</div>
					</div>
				</div>
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
						<div key={itemIndex} className='w-full md:w-5/12 lg:w-72 my-4'>
							<small>
								<time dateTime={new Date(item.date).toISOString()}>
									{item.date}
								</time>
								<h3 className='text-2xl md:text-3xl'>
									<a href={item.header.href}>{item.header.text}</a>
								</h3>
							</small>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ShowCaseAndNewsSections;
