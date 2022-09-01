import classes from './index.module.css';
import { Fragment, useState } from 'react';
import CustomNextImage from '@components/common/CustomNextImage';
import Modal from '@components/common/Modal';

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
		// navDropDownCard1,
		// navDropDownSection1,
		{
			__type: 'NORMAL_NAV_ITEM',
			href: '/#technologies',
			text: 'Technologies', // 'Our Work',
		},
		{
			__type: 'NORMAL_NAV_ITEM',
			href: '/#services',
			text: 'Services', // 'Latest',
		},
		// {
		// 	__type: 'NORMAL_NAV_ITEM',
		// 	href: '#',
		// 	text: 'Contact Us',
		// },
		// {
		// 	__type: 'NORMAL_NAV_ITEM',
		// 	href: '#',
		// 	text: 'Get a Quote',
		// },
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
							<li key={item.header.h2.text} className='p-4 px-0 flex w-full'>
								<div key={item.header.h2.text} className='flex flex-col w-full'>
									<h2 className='text-h5 font-semibold'>
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
							</li>
						))}
				</ul>
			</nav>
		</li>
	);
};

const defaultButtonClassName = `transition-all duration-300 font-bold bg-zinc-100 text-zinc-900 border-2 border-zinc-900 px-4 py-2 
hover:bg-zinc-900 hover:text-zinc-100 hover:border-zinc-100
focus:bg-zinc-900 focus:text-zinc-100 focus:border-zinc-100`;
const ContactUsButton = ({
	className,
}: {
	className?:
		| string
		| ((defaultClassName: typeof defaultButtonClassName) => string);
}) => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const formClasses = {
		input:
			'shadow-lg border-b-[0.1rem] border-b-gray-300 px-2 py-1 rounded-[0.2rem] font-medium w-full',
		label: 'flex flex-col my-2 cursor-pointer',
	};

	return (
		<>
			<button
				className={
					typeof className === 'string'
						? className
						: typeof className === 'function'
						? className(defaultButtonClassName)
						: defaultButtonClassName
				}
				onClick={() => setIsModalVisible(true)}
			>
				<a href='#'>Contact us</a>
			</button>
			<Modal
				handleIsVisible={() => setIsModalVisible(false)}
				isVisible={isModalVisible}
				containerElem={{
					className:
						'w-[40rem] max-w-[98%] text-black bg-zinc-900 text-zinc-100 pt-6 px-2',
					style: {
						colorScheme: 'dark',
					},
				}}
			>
				<Fragment key='header'>
					<header
						className='flex flex-col items-start px-2'
						style={{
							textAlign: 'initial',
						}}
					>
						<h3 className='font-bold text-h3'>Contact Us</h3>
						<div className='py-1' />
						<p>
							UBSA transforms recurring revenue into up-front capital for growth
							without restrictive debt or dilution.
						</p>
					</header>
				</Fragment>
				<Fragment key='body'>
					<form className='font-medium py-2 px-4 text-[1.2rem]'>
						<div className='flex flex-col sm:flex-row'>
							<label
								htmlFor='firstName'
								className={`${formClasses.label} flex-1`}
							>
								<span>
									<small>First Name</small>
								</span>
								<input
									className={formClasses.input}
									type='text'
									name='firstName'
									id='firstName'
									required
								/>
							</label>
							<div className='px-1' />
							<label
								htmlFor='lastName'
								className={`${formClasses.label} flex-1`}
							>
								<span>
									<small>Last Name</small>
								</span>
								<input
									className={formClasses.input}
									type='text'
									name='lastName'
									id='lastName'
									required
								/>
							</label>
						</div>
						<label htmlFor='email' className={formClasses.label}>
							<span>
								<small>Email</small>
							</span>
							<input
								className={formClasses.input}
								type='email'
								name='email'
								id='email'
								required
							/>
						</label>
						<label htmlFor='message' className={formClasses.label}>
							<span>
								<small>Tell us more about your project:</small>
							</span>
							<textarea
								className={formClasses.input}
								name='message'
								id='message'
								cols={30}
								rows={5}
								required
							></textarea>
						</label>
						<div className='py-1' />
						<button
							onClick={(event) => event.preventDefault()}
							className='transition-all duration-300 rounded-sm px-4 py-3 bg-zinc-700 hover:brightness-90 focus:rounded-none'
						>
							Submit
						</button>
					</form>
				</Fragment>
			</Modal>
		</>
	);
};

const MainHeader = () => {
	const [isNavOnHoverContainerVisible, setIsNavOnHoverContainerVisible] =
		useState(false);

	return (
		<header
			id='main-header'
			className={`transition-all duration-300 z-30 fixed top-0 left-0 h-main-nav-page w-full mx-auto text-md font-medium ${classes.mainHeader}`}
		>
			<div className='w-full h-full relative bg-black bg-opacity-70 text-white'>
				{/* <div className='absolute top-0 left-0 w-full h-full filter blur-sm header-bg' /> */}
				<div className='w-full h-full max-w-[1400px] mx-auto flex justify-between items-center px-4 backdrop-blur-md'>
					<div className='px-4 py-1 rounded-lg'>
						{/* bg-zinc-700 bg-transparent */}
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

								// if (
								// 	item.__type === 'DROP_DOWN_LIST_CARD' ||
								// 	item.__type === 'DROP_DOWN_LIST_SECTION'
								// )
								// 	return (
								// 		<li
								// 			className={`px-2 py-1 rounded-lg cursor-pointer h-full flex justify-center items-center ${
								// 				classes.navOnHoverContainer
								// 			} ${
								// 				item.__type === 'DROP_DOWN_LIST_CARD'
								// 					? classes.cardContainer
								// 					: classes.sectionContainer
								// 			}`}
								// 			key={item.entry}
								// 		>
								// 			<button
								// 				className='flex justify-between items-center'
								// 				title='click/press enter or space on this to show side menu'
								// 			>
								// 				{item.entry} <span className='px-1' />
								// 				<span
								// 					style={{
								// 						borderLeft: '0.25rem solid transparent',
								// 						borderRight: '0.25rem solid transparent',
								// 						borderTop: '0.25rem solid #fff',
								// 						fontSize: 0,
								// 						lineHeight: 0,
								// 					}}
								// 				/>
								// 			</button>
								// 			{item.__type === 'DROP_DOWN_LIST_CARD' && (
								// 				<nav
								// 					className={`bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 ${classes.navOnHover}`}
								// 				>
								// 					<ul
								// 						className={`${classes.container} flex flex-col justify-between items-center min-w-[12rem]`}
								// 					>
								// 						{item.list.map((subItem) => (
								// 							<li
								// 								className='w-full hover:text-zinc-600 px-4 py-2 rounded-lg cursor-pointer'
								// 								key={subItem.text}
								// 							>
								// 								<a
								// 									href={subItem.href}
								// 									className='focus:ring ring-zinc-400'
								// 								>
								// 									{subItem.text}
								// 								</a>
								// 							</li>
								// 						))}
								// 					</ul>
								// 				</nav>
								// 			)}
								// 			{item.__type === 'DROP_DOWN_LIST_SECTION' && (
								// 				<nav
								// 					className={`bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 ${classes.navOnHover} ${classes.section}`}
								// 				>
								// 					<div className='p-4 flex justify-between'>
								// 						{item.list.map((item) => (
								// 							<div
								// 								key={item.header.h2.text}
								// 								className={classes.container}
								// 							>
								// 								<h2 className='text-h5 font-semibold'>
								// 									{item.header.h2.text}
								// 								</h2>
								// 								<ul>
								// 									{item.list.map((listItem) => (
								// 										<li
								// 											key={listItem.text}
								// 											className='my-2 hover:text-zinc-600 transition-all duration-150'
								// 										>
								// 											<span className='px-2'></span>
								// 											<a
								// 												href={listItem.href}
								// 												className='focus:ring ring-zinc-400 transition-all duration-150'
								// 											>
								// 												{listItem.text}
								// 											</a>
								// 										</li>
								// 									))}
								// 								</ul>
								// 							</div>
								// 						))}
								// 					</div>
								// 				</nav>
								// 			)}
								// 		</li>
								// 	);

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
							<li>
								<ContactUsButton />
							</li>
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
					} z-20 bg-black flex lg:hidden absolute top-full left-0 w-full`}
				>
					<nav className='w-full'>
						<ul className='flex flex-col justify-between w-full'>
							{mainHeaderData.nav.map((item) => {
								// if (
								// 	item.__type === 'DROP_DOWN_LIST_CARD' ||
								// 	item.__type === 'DROP_DOWN_LIST_SECTION'
								// )
								// 	return (
								// 		<SubMenuOnSmallerScreens item={item} key={item.entry} />
								// 	);

								return (
									<li className='p-4 rounded-lg' key={item.text}>
										<a href={item.href}>{item.text}</a>
									</li>
								);
							})}
							<li className='px-4 pb-4 rounded-lg w-full'>
								<ContactUsButton
									className={(defaultClassName) => `${defaultClassName} w-full`}
								/>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default MainHeader;
