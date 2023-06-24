/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Link from "next/link";
import classes from "./index.module.css";
import { Fragment, useState } from "react";
import CustomNextImage from "~//components/common/CustomNextImage";
import Modal from "~//components/common/Modal";
import ContactUsModal from "~//components/core/ContactUsMoadal";
import twClasses from "~//utils/tailwind";

const navDropDownCard1 = {
  __type: "DROP_DOWN_LIST_CARD",
  entry: "Company",
  list: [
    { href: "#", text: "Team" },
    { href: "#", text: "Technologies" },
  ],
} as const;

const navDropDownSection1 = {
  __type: "DROP_DOWN_LIST_SECTION",
  entry: "Services",
  list: [
    {
      header: {
        h2: { text: "Web Design & Development" },
      },
      list: [
        { href: "#", text: "WordPress" },
        { href: "#", text: "Website Development" },
        { href: "#", text: "Web Applications" },
        { href: "#", text: "E-Commerce" },
        { href: "#", text: "Mobile Apps" },
        { href: "#", text: "Hosting Services" },
      ],
    },
    {
      header: {
        h2: { text: "Design" },
      },
      list: [
        { href: "#", text: "Branding & Design" },
        { href: "#", text: "Web Design" },
      ],
    },
    {
      header: {
        h2: { text: "Technical" },
      },
      list: [
        { href: "#", text: "IT Consultancy" },
        { href: "#", text: "IT Outsourcing" },
      ],
    },
    {
      header: {
        h2: { text: "Marketing" },
      },
      list: [
        { href: "#", text: "Digital Marketing" },
        { href: "#", text: "Search Engine Optimization Services" },
      ],
    },
  ],
} as const;

const mainHeaderData = {
  logo: {
    href: "/",
    text: "ubsa",
    iconUrl: "/images/AKArtboard-light.png",
  },
  nav: [
    // navDropDownCard1,
    // navDropDownSection1,
    {
      __type: "NORMAL_NAV_ITEM",
      href: "/#technologies",
      text: "Technologies", // 'Our Work',
    },
    {
      __type: "NORMAL_NAV_ITEM",
      href: "/#services",
      text: "Services", // 'Latest',
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
        className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 hover:bg-zinc-700"
        onClick={() => setIsSubMenuVisible((prev) => !prev)}
        title={`show ${item.entry} dropdown on hover or focus`}
      >
        {item.entry} <span className="px-1" />
        <span
          style={{
            borderLeft: "0.25rem solid transparent",
            borderRight: "0.25rem solid transparent",
            borderTop: "0.25rem solid #fff",
            fontSize: 0,
            lineHeight: 0,
          }}
        />
      </button>
      <nav className={isSubMenuVisible ? "" : "hidden"}>
        <ul className="mx-4 flex min-w-[12rem] flex-col items-center justify-between">
          {item.__type === "DROP_DOWN_LIST_CARD" &&
            item.list.map((subItem) => (
              <li
                className="w-full cursor-pointer rounded-lg px-3 py-2 hover:bg-zinc-700"
                key={subItem.text}
              >
                <Link href={subItem.href}>{subItem.text}</Link>
              </li>
            ))}
          {item.__type === "DROP_DOWN_LIST_SECTION" &&
            item.list.map((item) => (
              <li key={item.header.h2.text} className="flex w-full p-4 px-0">
                <div key={item.header.h2.text} className="flex w-full flex-col">
                  <h2 className="text-h5 font-semibold">
                    <span className="px-2" />
                    {item.header.h2.text}
                  </h2>
                  <ul className="flex w-full flex-col">
                    {item.list.map((listItem) => (
                      <li
                        key={listItem.text}
                        className="my-2 transition-all duration-150 hover:text-zinc-600"
                      >
                        <span className="px-4" />
                        <Link
                          href={listItem.href}
                          className="ring-zinc-400 transition-all duration-150 focus:ring"
                        >
                          {listItem.text}
                        </Link>
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

const defaultButtonClassName = `${twClasses.button} font-bold px-4 py-2`;

const ContactUsButton = ({
  className,
}: {
  className?:
    | string
    | ((defaultClassName: typeof defaultButtonClassName) => string);
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <button
        className={
          typeof className === "string"
            ? className
            : typeof className === "function"
            ? className(defaultButtonClassName)
            : defaultButtonClassName
        }
        onClick={() => setIsModalVisible(true)}
      >
        Contact us
      </button>
      <ContactUsModal
        handleIsVisible={() => setIsModalVisible(false)}
        isVisible={isModalVisible}
      />
    </>
  );
};

const MainHeader = () => {
  const [isNavOnHoverContainerVisible, setIsNavOnHoverContainerVisible] =
    useState(false);

  return (
    <header
      id="main-header"
      className={`text-md fixed left-0 top-0 z-30 mx-auto h-main-nav-page w-full font-medium transition-all duration-300 ${classes.mainHeader}`}
    >
      <div className="relative h-full w-full bg-black bg-opacity-70 text-white">
        {/* <div className='absolute top-0 left-0 w-full h-full filter blur-sm header-bg' /> */}
        <div className="mx-auto flex h-full w-full max-w-[1400px] items-center justify-between px-4 backdrop-blur-md">
          <div className="rounded-lg px-4 py-1">
            {/* bg-zinc-700 bg-transparent */}
            <h1>
              <a
                href={mainHeaderData.logo.href}
                className=" flex items-center justify-between"
              >
                <CustomNextImage
                  width={16}
                  height={16}
                  className="h-8 w-8"
                  src={mainHeaderData.logo.iconUrl}
                  alt=""
                  priority
                />
                <span className="px-1" />
                {mainHeaderData.logo.text}
              </a>
            </h1>
          </div>
          <nav className="hidden h-full lg:flex">
            <ul className="flex h-full items-center justify-between">
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
                    className={`border-l-1 flex h-full cursor-pointer items-center justify-center rounded-lg px-2 py-1 ${
                      navItemIndex === itemsArr.length - 1 ? "border-l-1" : ""
                    }`}
                    key={item.text}
                  >
                    <a href={item.href}>{item.text}</a>
                  </li>
                );
              })}
              <li className="px-4" role="note" />
              <li>
                <ContactUsButton />
              </li>
            </ul>
          </nav>

          <button
            className="flex h-6 w-6 flex-col justify-around lg:hidden"
            onClick={() => setIsNavOnHoverContainerVisible((prev) => !prev)}
          >
            <span className="h-1 w-full bg-white"></span>
            <span className="h-1 w-full bg-white"></span>
            <span className="h-1 w-full bg-white"></span>
          </button>
        </div>
        <div
          className={`${classes.dropdownOnSmallScreens} ${
            isNavOnHoverContainerVisible ? "" : "hidden"
          } absolute left-0 top-full z-20 flex w-full bg-black lg:hidden`}
        >
          <nav className="w-full">
            <ul className="flex w-full flex-col justify-between">
              {mainHeaderData.nav.map((item) => {
                // if (
                // 	item.__type === 'DROP_DOWN_LIST_CARD' ||
                // 	item.__type === 'DROP_DOWN_LIST_SECTION'
                // )
                // 	return (
                // 		<SubMenuOnSmallerScreens item={item} key={item.entry} />
                // 	);

                return (
                  <li className="rounded-lg p-4" key={item.text}>
                    <a href={item.href}>{item.text}</a>
                  </li>
                );
              })}
              <li className="w-full rounded-lg px-4 pb-4">
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
