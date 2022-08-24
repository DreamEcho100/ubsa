import CustomNextImage from '@components/common/CustomNextImage';
import { IoIosPerson } from 'react-icons/io';
import {
	RiCompasses2Fill,
	RiDeviceLine,
	RiGlobeLine,
	RiPieChart2Line,
	RiLineChartLine,
} from 'react-icons/ri';

const AllServicesSections = () => {
	return (
		<div className='bg-zinc-100 text-black bg-opacity-95 bg-contain bg-no-repeat'>
			<div className='max-w-[1400px] mx-auto px-8 translate-y-[-8rem]'>
				<div className='px-12 py-16 md:px-16 md:py-20 text-zinc-100 bg-blue-600 text-center md:text-left flex flex-col items-center md:flex-row md:justify-around rounded-md md:rounded-xl'>
					<div className='font-light'>
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
						<p className='font-medium'>Ron Peterson</p>
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
								<h3 className='text-h3'>{item.title}</h3>
								<p className='text-gray-500 md:max-w-[15rem]'>
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

export default AllServicesSections;
