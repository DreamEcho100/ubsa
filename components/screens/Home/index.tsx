import CustomNextImage from '@components/common/CustomNextImage';
import CommonLayout from '@components/layouts/Common';
import {
	RiCompasses2Fill,
	RiDeviceLine,
	RiGlobeLine,
	RiPieChart2Line,
	RiLineChartLine,
} from 'react-icons/ri';
import { IoIosPerson } from 'react-icons/io';

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
				<h2 className='text-7xl sm:text-7xl md:text-9xl flex flex-col leading-relaxed font-medium'>
					<span className='my-2'>Websites.</span>
					<span className='my-2'>Apps.</span>
					<span className='my-2'>Design.</span>
				</h2>
				<div className='py-16 md:py-16' />
				<p className='text-2xl sm:text-3xl md:text-4xl leading-relaxed'>
					While very diverse, our aesthetic and advance approach often involves
					distinct sense of play and global vision, aiming to put the fun in
					functional. Strategically, our work aims to elevate brands offerings
					by distilling core messaging down to its clearest and fresh visual
					values.
				</p>
				<div className='py-16' />
				<p className='text-2xl sm:text-3xl md:text-4xl leading-relaxed'>
					Our aim is to develop and deliver web applications that bring your
					brand/app closer to your customer — and to yourself. We understand web
					&amp; app design &amp; development like the back of our hands. We
					deliver on time and without any financial or technical surprises.
				</p>
				<div className='py-16' />
				<div className='flex flex-wrap items-center justify-around'>
					{[
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
					].map((image) => (
						<CustomNextImage
							key={image.src}
							src={image.src}
							alt={image.alt}
							width={175}
							height={80}
							className='w-44 h-20 m-4'
						/>
					))}
				</div>
				<div className='py-16' />
			</div>
		</div>
	);
};

const AllServices = () => {
	return (
		<div className='bg-zinc-100 text-black bg-opacity-95 bg-contain bg-no-repeat'>
			<div className='max-w-[1400px] mx-auto px-8 translate-y-[-8rem]'>
				<div className='px-12 py-16 md:px-16 md:py-20 text-zinc-100 bg-blue-600 text-center md:text-justify flex flex-col items-center md:flex-row md:justify-around rounded-md md:rounded-xl'>
					<div className='text-2xl md:text-3xl font-light'>
						<p className='max-w-[800px]'>
							&quot;Exerge IT took the time to become well-versed in the
							intricacies of our business, and instead of reveals at set
							milestones, we were in constant communication throughout the
							process.&quot;
						</p>
					</div>
					<div className='py-4 md:py-0 md:px-4' />
					<div className=''>
						<CustomNextImage
							src='https://exerge.com/wp-content/uploads/2022/07/rp-uai-258x258.png'
							alt=''
							width={120}
							height={120}
							className='rounded-full shadow-2xl'
						/>
						<div className='py-2' />
						<p className='text-xl font-medium'>Ron Peterson</p>
						<p>Mad Marketing</p>
					</div>
				</div>
				<div className='py-16' />
				<div className='text-2xl font-medium flex flex-wrap items-center justify-center'>
					{[
						{
							title: 'Title',
							description:
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reprehenderit quae tempora veniam a dolore eum autem ab nesciunt sit.',
							icon: <RiCompasses2Fill />,
						},
						{
							title: 'Title',
							description:
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reprehenderit quae tempora veniam a dolore eum autem ab nesciunt sit.',
							icon: <RiDeviceLine />,
						},
						{
							title: 'Title',
							description:
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reprehenderit quae tempora veniam a dolore eum autem ab nesciunt sit.',
							icon: <RiGlobeLine />,
						},
						{
							title: 'Title',
							description:
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reprehenderit quae tempora veniam a dolore eum autem ab nesciunt sit.',
							icon: <RiPieChart2Line />,
						},
						{
							title: 'Title',
							description:
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reprehenderit quae tempora veniam a dolore eum autem ab nesciunt sit.',
							icon: <RiLineChartLine />,
						},
						{
							title: 'Title',
							description:
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reprehenderit quae tempora veniam a dolore eum autem ab nesciunt sit.',
							icon: <IoIosPerson />,
						},
					].map((item, itemIndex) => (
						<div
							key={itemIndex}
							className='flex my-4 w-full sm:w-1/2 lg:w-1/3 items-start justify-center'
						>
							<div className='my-1 text-4xl text-sky-600'>{item.icon}</div>
							<div className='px-4' />
							<div className='flex flex-col'>
								<h3 className=''>{item.title}</h3>
								<p className='text-base text-gray-500 md:max-w-[15rem]'>
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
				<div className='py-16' />
				<div className='flex items-center justify-center'>
					<button className='transition-all duration-300 bg-neutral-800 text-white text-2xl font-medium px-8 py-4 border border-neutral-800 hover:bg-white hover:text-neutral-800 focus:bg-white focus:text-neutral-800 select-none'>
						All Services
					</button>
				</div>
			</div>
		</div>
	);
};

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
						<div className='relative p-4 lg:p-0 z-[2] flex flex-col items-center justify-center text-center lg:block lg:text-justify'>
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

const HomeScreen = () => {
	return (
		<CommonLayout>
			<main className='leading-relaxed'>
				<WebsiteAppsDesignSection />
				<AllServices />
				<ShowCaseAndNewsSections />
			</main>
		</CommonLayout>
	);
};

export default HomeScreen;
