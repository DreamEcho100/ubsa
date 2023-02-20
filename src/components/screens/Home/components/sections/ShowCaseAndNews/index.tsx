import type { CSSProperties } from "react";

import CustomNextImage from "~//components/common/CustomNextImage";
import ContactUsModal from "~//components/core/ContactUsMoadal";
import twClasses from "~//utils/tailwind";
import { useEffect, useRef, useState } from "react";
import classes from "./index.module.css";
import { z } from "zod";

const syntitizedClasses = z
  .object({
    imgContainer: z.string(),
    detailsContainer: z.string(),
    appear: z.string(),
    scaleImg: z.string(),
    colorfulHeader: z.string(),
    imgAndDetailsContainer: z.string(),
    wrapper: z.string(),
    newsCard: z.string(),
  })
  .parse(classes);

const imgTextSectionOptions = {
  // rootMargin: "-200px 0px 0px 0px"
  threshold: 0.25, // half of item height
};

const imgTextSectionObserver =
  typeof window !== "undefined" &&
  typeof window !== "undefined" &&
  new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      // if (window.innerWidth > 1024) {
      // entry.target
      const imgContainer = entry.target.querySelector(
        `.${syntitizedClasses.imgContainer}`
      );
      const detailsContainer = entry.target.querySelector(
        `.${syntitizedClasses.detailsContainer}`
      );

      if (!imgContainer || !detailsContainer) return;

      if (entry.isIntersecting) {
        if (!entry.target.classList.contains(syntitizedClasses.appear)) {
          entry.target.classList.add(syntitizedClasses.appear);
          imgContainer.classList.add(syntitizedClasses.appear);
          detailsContainer.classList.add(syntitizedClasses.appear);
        }

        if (!imgContainer.classList.contains(syntitizedClasses.scaleImg)) {
          imgContainer.classList.add(syntitizedClasses.scaleImg);
        }
        if (
          !detailsContainer.classList.contains(syntitizedClasses.colorfulHeader)
        ) {
          detailsContainer.classList.add(syntitizedClasses.colorfulHeader);
        }
      }
      // else {
      // 	if (imgContainer.classList.contains(syntitizedClasses.scaleImg)) {
      // 		imgContainer.classList.remove(syntitizedClasses.scaleImg);
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
      onClick: () => void;
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
      className={`relative mx-auto flex max-w-[1400px] p-8 ${
        itemIndex % 2 !== 0 ? "lg:flex-row-reverse" : ""
      }
						my-8 md:items-center
						md:justify-center
						${syntitizedClasses.imgAndDetailsContainer}
					`}
      style={
        {
          "--itemIndex": itemIndex,
          "--itemsLength": itemsLength,
        } as CSSProperties
      }
    >
      <div
        className={`relative hidden w-1/2 overflow-hidden rounded-xl p-4 lg:block ${syntitizedClasses.imgContainer}`}
      >
        <div
          className={`absolute top-0 left-0 h-full w-full bg-black bg-opacity-70 bg-gradient-to-b transition-all duration-300 hover:bg-opacity-50 ${syntitizedClasses.wrapper}`}
        />
        <CustomNextImage
          src={item.image.src}
          alt={item.image.alt}
          width={800}
          height={1000}
          className="w-full transition-all duration-300"
        />
      </div>
      <div className="hidden p-2 lg:block" />
      <div
        className={`relative mx-auto w-full max-w-[40rem] p-4 sm:max-w-[30rem] md:max-w-[80%] lg:max-w-[50%] ${syntitizedClasses.detailsContainer}`}
      >
        <div className="absolute top-0 left-0 z-[1] h-full w-full lg:hidden lg:p-4">
          <CustomNextImage
            src={item.image.src}
            alt={item.image.alt}
            width={800}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 z-[1] h-full w-full bg-black opacity-75 lg:hidden" />
        <div className="relative z-[2] flex flex-col items-center justify-center p-4 text-center lg:block lg:p-0 lg:text-left">
          <h2 className="text-h2 py-2 font-medium">
            {/* max-w-[75%] */}
            {item.header.text}
          </h2>
          <p className="drop-shadow- my-8 max-w-[400px]">{item.description}</p>
          <button
            className={`${twClasses.button} px-8 py-4 text-2xl font-medium`}
            onClick={item.button.onClick}
          >
            {item.button.text}
          </button>
        </div>
      </div>
    </div>
  );
};

const newsCardSectionObserver =
  typeof window !== "undefined" &&
  typeof window !== "undefined" &&
  new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!entry.target.classList.contains(syntitizedClasses.appear)) {
          entry.target.classList.add(syntitizedClasses.appear);
        }
      }
      // if (window.innerWidth > 1024) {
      // 	// entry.target
      // 	const imgContainer = entry.target.querySelector(
      // 		`.${syntitizedClasses.imgContainer}`
      // 	);
      // 	const detailsContainer = entry.target.querySelector(
      // 		`.${syntitizedClasses.detailsContainer}`
      // 	);

      // 	if (!imgContainer || !detailsContainer) return;

      // 	if (entry.isIntersecting) {
      // 		if (!imgContainer.classList.contains(syntitizedClasses.appear))
      // 			imgContainer.classList.add(syntitizedClasses.appear);

      // 		if (!detailsContainer.classList.contains(syntitizedClasses.appear))
      // 			detailsContainer.classList.add(syntitizedClasses.appear);
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
      className={`my-4 w-full md:w-5/12 lg:w-72 ${syntitizedClasses.newsCard}`}
      style={{ "--index": itemIndex } as CSSProperties}
    >
      <small>
        <time dateTime={new Date(item.date).toISOString()}>{item.date}</time>
        <h3 className="text-h3 md:text-3xl">
          <a href={item.header.href}>{item.header.text}</a>
        </h3>
      </small>
    </div>
  );
};

const ShowCaseAndNewsSections = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <section
        className="main-content-section bg-black bg-opacity-90 text-slate-100"
        id="services"
      >
        <div className="mx-auto max-w-[1400px] overflow-hidden py-8">
          {[
            {
              button: {
                text: "Get in Touch",
                onClick: () => setIsModalVisible(true),
              },
              header: { text: "Super Fast & Smooth Loading Speed" },
              description:
                "We use our programming skills and techniques to create websites that run over 20X faster than the average. Don't worry about the loading time of your product or portfolio images for your customers anymore. We make the highest-resolution images and animations load up quickly for your website visitors.",
              image: {
                src: "/images/services/1.png", // https://exerge.com/wp-content/uploads/2022/07/Positive-Impact-School-Website-uai-1467x1174.jpg
                alt: "",
              },
            },
            {
              button: {
                text: "Get in Touch",
                onClick: () => setIsModalVisible(true),
              },
              header: {
                text: "Optimized for High Conversation Rate & Better SEO Scores",
              },
              description:
                "We consider every detailed aspect when it comes to user experience and SEO optimization. The way we put the design elements and custom animations, together, or enhance web performance speed and functionalities, can immediately show you direct increase in web traffic, leads, conversion rates, and SEO scores.",
              image: {
                src: "/images/services/2.png", // https://exerge.com/wp-content/uploads/2022/07/AgicoCRM-uai-1467x1174.jpg
                alt: "",
              },
            },
            {
              button: {
                text: "Get in Touch",
                onClick: () => setIsModalVisible(true),
              },
              header: { text: "Extra Web Security and Functionalities" },
              description:
                "Our team is confident in bringing your custom web ideas to life. Whether you want to implement a whole new custom functionality or feature on your website or A/B different possibilities, we assure to make it happen.",
              image: {
                src: "/images/services/3.png", // https://exerge.com/wp-content/uploads/2022/07/renergent-uai-1467x1174.jpg
                alt: "",
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
          {/* <News /> */}
        </div>
      </section>

      <ContactUsModal
        handleIsVisible={() => setIsModalVisible(false)}
        isVisible={isModalVisible}
      />
    </>
  );
};

export default ShowCaseAndNewsSections;

const News = () => {
  return (
    <div className="mx-auto mt-16 max-w-[1400px] p-8 font-medium">
      <header>
        <h2 className="text-h2">News</h2>
      </header>
      <div className="mt-8 flex flex-wrap items-center md:justify-between">
        {[
          {
            date: "April 11, 2022",
            header: {
              text: "Top 4 Reasons Why Golf Courses or Country Clubs Need a Website",
              href: "#",
            },
          },
          {
            date: "September 27, 2019",
            header: {
              text: "5 Advantages of a good real estate management software",
              href: "#",
            },
          },
          {
            date: "September 24, 2019",
            header: {
              text: "How to Manage Clients In A Better Way | 5 Professional Tips",
              href: "#",
            },
          },
          {
            date: "September 5, 2019",
            header: {
              text: "Clutch Announces Exerge as The Top B2B Company in The Middle East",
              href: "#",
            },
          },
        ].map((item, itemIndex) => (
          <NewsCard key={itemIndex} item={item} itemIndex={itemIndex} />
        ))}
      </div>
    </div>
  );
};
