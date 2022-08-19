import classes from './index.module.css';
import { useState } from 'react';
import CustomNextImage from '@components/common/CustomNextImage';

const navDropDownCard1 = {
	__type: 'DROP_DOWN_LIST_CARD',
	entry: 'Company',
	list: [
		{ href: '#', text: 'Team' },
		{ href: '#', text: 'Technologies' },
	],
} as const;

const navDropDownSection1 = {
	__type: 'DROP_DOWN_LIST_SECTION',
	entry: 'Services',
	list: [
		{
			header: {
				h2: { text: 'Web Design & Development' },
			},
			list: [
				{ href: '#', text: 'WordPress' },
				{ href: '#', text: 'Website Development' },
				{ href: '#', text: 'Web Applications' },
				{ href: '#', text: 'E-Commerce' },
				{ href: '#', text: 'Mobile Apps' },
				{ href: '#', text: 'Hosting Services' },
			],
		},
		{
			header: {
				h2: { text: 'Design' },
			},
			list: [
				{ href: '#', text: 'Branding & Design' },
				{ href: '#', text: 'Web Design' },
			],
		},
		{
			header: {
				h2: { text: 'Technical' },
			},
			list: [
				{ href: '#', text: 'IT Consultancy' },
				{ href: '#', text: 'IT Outsourcing' },
			],
		},
		{
			header: {
				h2: { text: 'Marketing' },
			},
			list: [
				{ href: '#', text: 'Digital Marketing' },
				{ href: '#', text: 'Search Engine Optimization Services' },
			],
		},
	],
} as const;

const mainHeaderData = {
	logo: {
		href: '/',
		text: 'ubsa',
		iconUrl: 'images/AKArtboard-light.png',
	},
	nav: [
		navDropDownCard1,
		navDropDownSection1,
		{
			__type: 'NORMAL_NAV_ITEM',
			href: '#',
			text: 'Our Work',
		},
		{
			__type: 'NORMAL_NAV_ITEM',
			href: '#',
			text: 'Latest',
		},
		{
			__type: 'NORMAL_NAV_ITEM',
			href: '#',
			text: 'Contact Us',
		},
		{
			__type: 'NORMAL_NAV_ITEM',
			href: '#',
			text: 'Get a Quote',
		},
	],
} as const;

const SubMenuOnSmallerScreens = ({
	item,
}: {
	item: typeof navDropDownCard1 | typeof navDropDownSection1;
}) => {
	const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

	return (
		<li className={`mx-1 my-1 ${classes.navOnHoverContainer}`} key={item.entry}>
			<button
				className='px-3 py-2 flex justify-between items-center hover:bg-zinc-700 rounded-lg cursor-pointer'
				onClick={() => setIsSubMenuVisible((prev) => !prev)}
				title={`show ${item.entry} dropdown on hover or focus`}
			>
				{item.entry} <span className='px-1' />
				<span
					style={{
						borderLeft: '0.25rem solid transparent',
						borderRight: '0.25rem solid transparent',
						borderTop: '0.25rem solid #fff',
						fontSize: 0,
						lineHeight: 0,
					}}
				/>
			</button>
			<nav className={isSubMenuVisible ? '' : 'hidden'}>
				<ul className='mx-4 flex flex-col justify-between items-center min-w-[12rem]'>
					{item.__type === 'DROP_DOWN_LIST_CARD' &&
						item.list.map((subItem) => (
							<li
								className='w-full hover:bg-zinc-700 px-3 py-2 rounded-lg cursor-pointer'
								key={subItem.text}
							>
								<a href={subItem.href}>{subItem.text}</a>
							</li>
						))}
					{item.__type === 'DROP_DOWN_LIST_SECTION' &&
						item.list.map((item) => (
							<div key={item.header.h2.text} className='p-4 px-0 flex w-full'>
								<div key={item.header.h2.text} className='flex flex-col w-full'>
									<h2 className='text-xl font-semibold'>
										<span className='px-2' />
										{item.header.h2.text}
									</h2>
									<ul className='flex flex-col w-full'>
										{item.list.map((listItem) => (
											<li
												key={listItem.text}
												className='my-2 hover:text-zinc-600 transition-all duration-150'
											>
												<span className='px-4' />
												<a
													href={listItem.href}
													className='focus:ring ring-zinc-400 transition-all duration-150'
												>
													{listItem.text}
												</a>
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
				</ul>
			</nav>
		</li>
	);
};

const MainHeader = () => {
	const [isNavOnHoverContainerVisible, setIsNavOnHoverContainerVisible] =
		useState(false);

	return (
		<header
			className={`z-10 fixed top-0 left-0 h-main-nav-page w-full mx-auto bg-black text-white  text-md font-medium ${classes.mainHeader}`}
		>
			<div className='w-full h-full max-w-[1400px] mx-auto flex justify-between items-center px-4'>
				<div className='bg-zinc-700 px-4 py-1 rounded-lg'>
					<h1>
						<a
							href={mainHeaderData.logo.href}
							className=' flex justify-between items-center'
						>
							<CustomNextImage
								width={16}
								height={16}
								className='w-8 h-8'
								src={mainHeaderData.logo.iconUrl}
								alt=''
								priority
							/>
							<span className='px-1' />
							{mainHeaderData.logo.text}
						</a>
					</h1>
				</div>
				<nav className='hidden h-full lg:flex'>
					<ul className='flex justify-between items-center h-full'>
						{mainHeaderData.nav.map((item, navItemIndex, itemsArr) => {
							// if (item.__type === 'DROP_DOWN_LIST_SECTION') return <></>;

							if (
								item.__type === 'DROP_DOWN_LIST_CARD' ||
								item.__type === 'DROP_DOWN_LIST_SECTION'
							)
								return (
									<li
										className={`px-2 py-1 rounded-lg cursor-pointer h-full flex justify-center items-center ${
											classes.navOnHoverContainer
										} ${
											item.__type === 'DROP_DOWN_LIST_CARD'
												? classes.cardContainer
												: classes.sectionContainer
										}`}
										key={item.entry}
									>
										<button className='flex justify-between items-center'>
											{item.entry} <span className='px-1' />
											<span
												style={{
													borderLeft: '0.25rem solid transparent',
													borderRight: '0.25rem solid transparent',
													borderTop: '0.25rem solid #fff',
													fontSize: 0,
													lineHeight: 0,
												}}
											/>
										</button>
										{item.__type === 'DROP_DOWN_LIST_CARD' && (
											<nav
												className={`bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 ${classes.navOnHover}`}
											>
												<ul
													className={`${classes.container} flex flex-col justify-between items-center min-w-[12rem]`}
												>
													{item.list.map((subItem) => (
														<li
															className='w-full hover:text-zinc-600 px-4 py-2 rounded-lg cursor-pointer'
															key={subItem.text}
														>
															<a
																href={subItem.href}
																className='focus:ring ring-zinc-400'
															>
																{subItem.text}
															</a>
														</li>
													))}
												</ul>
											</nav>
										)}
										{item.__type === 'DROP_DOWN_LIST_SECTION' && (
											<nav
												className={`bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 ${classes.navOnHover} ${classes.section}`}
											>
												<div className='p-4 flex justify-between'>
													{item.list.map((item) => (
														<div
															key={item.header.h2.text}
															className={classes.container}
														>
															<h2 className='text-xl font-semibold'>
																{item.header.h2.text}
															</h2>
															<ul>
																{item.list.map((listItem) => (
																	<li
																		key={listItem.text}
																		className='my-2 hover:text-zinc-600 transition-all duration-150'
																	>
																		<span className='px-2'></span>
																		<a
																			href={listItem.href}
																			className='focus:ring ring-zinc-400 transition-all duration-150'
																		>
																			{listItem.text}
																		</a>
																	</li>
																))}
															</ul>
														</div>
													))}
												</div>
											</nav>
										)}
									</li>
								);

							return (
								<li
									className={`px-2 py-1 rounded-lg cursor-pointer h-full flex justify-center items-center border-l-1 ${
										navItemIndex === itemsArr.length - 1 ? 'border-l-1' : ''
									}`}
									key={item.text}
								>
									<a href={item.href}>{item.text}</a>
								</li>
							);
						})}
					</ul>
				</nav>

				<button
					className='flex flex-col justify-around lg:hidden w-6 h-6'
					onClick={() => setIsNavOnHoverContainerVisible((prev) => !prev)}
				>
					<span className='w-full h-1 bg-white'></span>
					<span className='w-full h-1 bg-white'></span>
					<span className='w-full h-1 bg-white'></span>
				</button>
			</div>
			<div
				className={`${classes.dropdownOnSmallScreens} ${
					isNavOnHoverContainerVisible ? '' : 'hidden'
				} bg-black flex lg:hidden absolute top-full left-0 w-full`}
			>
				<nav>
					<ul className='flex flex-col justify-between'>
						{mainHeaderData.nav.map((item) => {
							if (
								item.__type === 'DROP_DOWN_LIST_CARD' ||
								item.__type === 'DROP_DOWN_LIST_SECTION'
							)
								return <SubMenuOnSmallerScreens item={item} key={item.entry} />;

							return (
								<li
									className={`px-4 py-4 rounded-lg cursor-pointer`}
									key={item.text}
								>
									<a href={item.href}>{item.text}</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default MainHeader;
