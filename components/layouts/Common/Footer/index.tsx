// import {
// 	discordWhiteIconUrl,
// 	dribbleWhiteIconUrl,
// 	instagramWhiteIconUrl,
// 	pageWhiteIconUrl,
// 	twitterWhiteIconUrl,
// 	youtubeWhiteIconUrl,
// } from '@data/index';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import { Fragment } from 'react';

const mainFooterData = {
	generalLinks: [
		{
			__type: 'NAV_LINKS',
			header: { text: 'Navigation' },
			list: [
				{ href: '#', text: 'Navigation' },
				{ href: '#', text: 'Our Works' },
				{ href: '#', text: 'About' },
				{ href: '#', text: 'Services' },
				{ href: '#', text: 'Careers' },
				{ href: '#', text: 'Latest News' },
				{ href: '#', text: 'Contact' },
			],
		},
		{
			__type: 'ADDRESS_LIST_MANY_SECTION',
			sections: [
				{
					header: { text: 'UK' },
					list: ['20, Chines Gardens,', 'West Bridgford,', 'NG27TT', 'UK'],
				},
				{
					header: { text: 'PK' },
					list: ['2121,', 'Phase 7, Bahria Town,', 'Islamabad, 46000', 'PK'],
				},
			],
		},
		{
			__type: 'CONTACT_LIST_AND_NECESSARY_LINKS',
			header: { text: 'Conversation' },
			list: [
				{ __type: 'LINK_MAIL', text: 'hello@exerge.com' },
				{ __type: 'LINK_TEL', text: 'UK: 07934 554778' },
				{ __type: 'LINK_TEL', text: 'Pakistan: 0334 5002990' },
				{ __type: 'LINK_TEL', text: 'Americas: 646 932 3253' },
				{
					__type: 'LINKS',
					list: [
						{ href: '#', text: 'Sitemap' },
						{ href: '#', text: 'Privacy Policy' },
					],
				},
			],
		},
	],
	socialLinks: [
		{ href: '', icon: <FaFacebook /> },
		{ href: '', icon: <FaTwitter /> },
		{ href: '', icon: <FaInstagram /> },
	],
} as const;

const MainFooter = () => {
	const { generalLinks, socialLinks } = mainFooterData;
	return (
		<footer className='w-full bg-black text-zinc-500 font-bold text-lg px-8 py-8'>
			<div className='flex items-start justify-between max-w-[1400px] mx-auto flex-wrap md:flex-nowrap pt-12'>
				{generalLinks.map((item, itemIndex) => {
					if (item.__type === 'NAV_LINKS')
						return (
							<div key={item.header.text} className='m-2'>
								<h3 className='font-bold text-white text-h3 mb-12'>
									{item.header.text}
								</h3>
								<nav>
									<ul className='text-lg'>
										{item.list.map((listItem) => (
											<li key={listItem.text} className='my-2'>
												<a href={listItem.href}>{listItem.text}</a>
											</li>
										))}
									</ul>
								</nav>
							</div>
						);

					if (item.__type === 'ADDRESS_LIST_MANY_SECTION')
						return (
							<div key={itemIndex} className='m-2'>
								{/* <h3 className='font-bold text-white text-2xl mb-12'>
										{item.header.text}
									</h3>
									<nav>
										<ul className='text-lg'>
											{item.list.map((listItem) => (
												<li key={listItem.text} className='my-2'>
													<a href={listItem.href}>{listItem.text}</a>
												</li>
											))}
										</ul>
									</nav> */}
								{item.sections.map((subItem) => (
									<address key={subItem.header.text} className='mb-16'>
										<h3 className='font-bold text-white mb-12'>
											{subItem.header.text}
										</h3>
										<ul className='text-lg'>
											{subItem.list.map((subItemLi, subItemLiIndex) => (
												<li key={subItemLiIndex}>
													<p>{subItemLi}</p>
												</li>
											))}
										</ul>
									</address>
								))}
							</div>
						);

					if (item.__type === 'CONTACT_LIST_AND_NECESSARY_LINKS')
						return (
							<div key={itemIndex} className='m-2'>
								<h3 className='font-bold text-white text-h3 mb-12'>
									{item.header.text}
								</h3>
								<ul className='text-lg'>
									{item.list.map((subItem, subItemIndex) => {
										if (subItem.__type === 'LINK_MAIL')
											return (
												<li key={subItemIndex} className='mb-8'>
													<a href={`mailto:${subItem.text}`}>{subItem.text}</a>
												</li>
											);
										if (subItem.__type === 'LINK_TEL')
											return (
												<li key={subItemIndex}>
													<a href={`tel:${subItem.text}`}>{subItem.text}</a>
												</li>
											);
										return (
											<li key={subItemIndex} className='mt-8'>
												{subItem.list.map((link, linkIndex, linksArr) => (
													<Fragment key={linkIndex}>
														<a href={link.href}>{link.text}</a>
														{linkIndex !== linksArr.length - 1 && (
															<span className='mx-2'>|</span>
														)}
													</Fragment>
												))}
											</li>
										);
									})}
								</ul>
							</div>
						);

					return <></>;
				})}
			</div>
			<div className='w-full flex justify-between lg:flex-row'>
				<div className='my-2 flex '>
					<small>&copy; 2022 Exerge. All rights reserved</small>
				</div>
				<div className='my-2 flex w-full justify-center items-center lg:flex-row lg:w-fit'>
					<nav>
						<ul className='flex'>
							{socialLinks.map((listItem, listItemIndex) => (
								<li key={listItemIndex} className='m-2'>
									<a href={listItem.href}>{listItem.icon}</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default MainFooter;
