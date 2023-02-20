// import {
// 	discordWhiteIconUrl,
// 	dribbleWhiteIconUrl,
// 	instagramWhiteIconUrl,
// 	pageWhiteIconUrl,
// 	twitterWhiteIconUrl,
// 	youtubeWhiteIconUrl,
// } from '~//data/index';

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import { Fragment } from "react";
import CustomNextImage from "~//components/common/CustomNextImage";
import Link from "next/link";

const mainFooterData = {
  generalLinks: [
    {
      __type: "NAV_LINKS",
      header: { text: "Navigation" },
      list: [
        { href: "#", text: "Navigation" },
        { href: "#", text: "Our Works" },
        { href: "#", text: "About" },
        { href: "#", text: "Services" },
        { href: "#", text: "Careers" },
        { href: "#", text: "Latest News" },
        { href: "#", text: "Contact" },
      ],
    },
    {
      __type: "ADDRESS_LIST_MANY_SECTION",
      sections: [
        {
          header: { text: "UK" },
          list: ["20, Chines Gardens,", "West Bridgford,", "NG27TT", "UK"],
        },
        {
          header: { text: "PK" },
          list: ["2121,", "Phase 7, Bahria Town,", "Islamabad, 46000", "PK"],
        },
      ],
    },
    {
      __type: "CONTACT_LIST_AND_NECESSARY_LINKS",
      header: { text: "Conversation" },
      list: [
        { __type: "LINK_MAIL", text: "hello@exerge.com" },
        { __type: "LINK_TEL", text: "UK: 07934 554778" },
        { __type: "LINK_TEL", text: "Pakistan: 0334 5002990" },
        { __type: "LINK_TEL", text: "Americas: 646 932 3253" },
        {
          __type: "LINKS",
          list: [
            { href: "#", text: "Sitemap" },
            { href: "#", text: "Privacy Policy" },
          ],
        },
      ],
    },
  ],
  socialLinks: [
    { href: "", icon: <FaFacebook /> },
    { href: "", icon: <FaTwitter /> },
    { href: "", icon: <FaInstagram /> },
  ],
} as const;

const GeneralLinks = ({
  generalLinks,
}: {
  generalLinks: (typeof mainFooterData)["generalLinks"];
}) => {
  return (
    <div className="mx-auto flex max-w-[1400px] flex-wrap items-start justify-between pt-12 md:flex-nowrap">
      {generalLinks.map((item, itemIndex) => {
        if (item.__type === "NAV_LINKS")
          return (
            <div key={item.header.text} className="m-2">
              <h3 className="text-h3 mb-12 font-bold text-white">
                {item.header.text}
              </h3>
              <nav>
                <ul className="text-lg">
                  {item.list.map((listItem) => (
                    <li key={listItem.text} className="my-2">
                      <a href={listItem.href}>{listItem.text}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          );

        if (item.__type === "ADDRESS_LIST_MANY_SECTION")
          return (
            <div key={itemIndex} className="m-2">
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
                <address key={subItem.header.text} className="mb-16">
                  <h3 className="mb-12 font-bold text-white">
                    {subItem.header.text}
                  </h3>
                  <ul className="text-lg">
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

        if (item.__type === "CONTACT_LIST_AND_NECESSARY_LINKS")
          return (
            <div key={itemIndex} className="m-2">
              <h3 className="text-h3 mb-12 font-bold text-white">
                {item.header.text}
              </h3>
              <ul className="text-lg">
                {item.list.map((subItem, subItemIndex) => {
                  if (subItem.__type === "LINK_MAIL")
                    return (
                      <li key={subItemIndex} className="mb-8">
                        <a href={`mailto:${subItem.text}`}>{subItem.text}</a>
                      </li>
                    );
                  if (subItem.__type === "LINK_TEL")
                    return (
                      <li key={subItemIndex}>
                        <a href={`tel:${subItem.text}`}>{subItem.text}</a>
                      </li>
                    );
                  return (
                    <li key={subItemIndex} className="mt-8">
                      {subItem.list.map((link, linkIndex, linksArr) => (
                        <Fragment key={linkIndex}>
                          <a href={link.href}>{link.text}</a>
                          {linkIndex !== linksArr.length - 1 && (
                            <span className="mx-2">|</span>
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
  );
};

const MainFooter = () => {
  const { generalLinks, socialLinks } = mainFooterData;
  return (
    <footer className="flex w-full flex-col bg-black px-8 py-8 text-lg font-bold text-zinc-200">
      <hr className="border-0 bg-zinc-800 p-[0.075rem]" />
      <div className="my-6 flex flex-col">
        <CustomNextImage
          src="/images/AKArtboard-light.png"
          alt=""
          width={50}
          height={50}
        />
        <div className="py-1" />
        <p>Unique Business Solutions Agency</p>
      </div>
      <div className="flex flex-col">
        <div className="flex w-full justify-between lg:flex-row">
          <div className="my-2 flex flex-wrap gap-2">
            <small>
              &copy;2022 Ubsa Technologies, Inc. All rights reserved
            </small>
            <small>
              <Link href="/policies/privacy">Privacy Policy</Link>
            </small>
            <small>
              <Link href="/policies/terms-of-use">Terms of use</Link>
            </small>
            <small>
              <Link href="/policies/cookie">Cookie Policy</Link>
            </small>
          </div>
          <div className="my-2 flex w-full items-center justify-center lg:w-fit lg:flex-row">
            <nav>
              <ul className="flex">
                {socialLinks.map((listItem, listItemIndex) => (
                  <li key={listItemIndex} className="m-2">
                    <a href={listItem.href}>{listItem.icon}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="">
          <p>
            <small className="text-[60%] font-black">
              All product and company names are trademarks or registered
              trademarks of their respective holders. Use of them does not imply
              any affiliation with or endorsement by them.
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
