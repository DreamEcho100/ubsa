import type { CSSProperties } from "react";
import CustomNextImage from "~//components/common/CustomNextImage";
import { useSharedMainState } from "~//components/layouts/Main/context";
import { useEffect, useRef } from "react";
import { cx } from "class-variance-authority";

const cardOptions = {
  threshold: 0.1,
};

const cardObserver =
  typeof window !== "undefined" &&
  typeof window !== "undefined" &&
  new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      const mainHeader = document.getElementById("main-header");

      if (!mainHeader) return;

      const outerContainer = entry.target.querySelector(".io-container-outer");
      const innerContainer = entry.target.querySelector(".io-container-inner");

      if (!outerContainer || !innerContainer) return;

      // className="bg-black/10"

      if (entry.isIntersecting) {
        outerContainer.classList.add("bg-black/10", "hover:bg-black/50");
        innerContainer.classList.add("flex", "bg-black/80");
        innerContainer.classList.remove("hidden");
      } else {
        outerContainer.classList.remove("bg-black/10", "hover:bg-black/50");
        innerContainer.classList.remove("flex", "bg-black/80");
        innerContainer.classList.add("hidden");
      }
    });
  }, cardOptions);

const Card = ({
  item,
}: {
  item: {
    img: { src: string; alt: string; className?: string };
    a: { href: string; text: string };
    h3: { text: string };
  };
}) => {
  const [{ isMobileOrTablet }] = useSharedMainState();
  const elemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elemRef.current || !cardObserver) return;

    const elem = elemRef.current;

    cardObserver.observe(elem);

    () => {
      cardObserver.unobserve(elem);
    };
  }, []);

  return (
    <div
      ref={elemRef}
      className="relative aspect-square w-96 max-w-full overflow-hidden rounded-lg"
    >
      <CustomNextImage
        src={item.img.src}
        alt={item.img.alt}
        width={400}
        height={400}
        className={cx(
          "absolute top-0 left-0 -z-10 h-full w-full object-cover",
          item.img.className
        )}
        priority
      />
      <a
        href={item.a.href}
        className="relative h-full w-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className={`io-container-outer group flex h-full w-full items-end justify-center transition-all duration-300 ${
            isMobileOrTablet ? "io-isMobileOrTablet" : ""
          }`}
        >
          <div
            className={`io-container-inner w-full flex-col items-center justify-center p-8 text-center transition-all duration-300 md:p-4 ${
              isMobileOrTablet ? "io-isMobileOrTablet" : "hidden"
            }`}
          >
            <h3 className={`text-h3 text-zinc-100`}>{item.h3.text}</h3>
            <span
              className={`text-xl font-medium text-sky-700 hover:text-sky-500`}
            >
              {item.a.text}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

const imgbaseUrl =
  "https://res.cloudinary.com/mazecode-image-video-usoc/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1661356443";

const ShowcaseSection = () => {
  return (
    <section
      className="main-content-section max-w-[1400px] px-2 py-16"
      id="technologies"
    >
      <header className="mx-auto flex max-w-[1400px] flex-col items-center justify-center p-4 text-center">
        <h2
          className="text-h2 font-bold capitalize"
          style={
            {
              "--linearGradient": "linear-gradient(to right, rgb(0, 0, 0)",
              backgroundImage:
                "var(--linearGradient, linear-gradient(to right, rgb(0, 0, 0), rgba(0, 0, 0, 0.7)))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            } as CSSProperties
          }
        >
          We employ technologies that top industry technologies use
        </h2>
        <p className="mx-auto my-8 max-w-[800px] font-bold sm:text-3xl md:my-16 md:text-4xl">
          Check some of the more successful global businesses, websites
          programmed using Next.js.
        </p>
      </header>
      <div className="flex flex-wrap items-center justify-center gap-8 md:flex-row lg:px-8">
        {[
          {
            img: {
              src: "https://techcult.com/wp-content/uploads/2022/08/go-to-hulu-website-on-a-browser.png",
              alt: "hulu",
            },
            a: { href: "https://www.hulu.com", text: "https://www.hulu.com" },
            h3: { text: "hulu" },
          },
          {
            img: {
              src: "/images/showcase/vice.png" /*`${imgbaseUrl}/vice_h2nx1b.jpg`*/,
              alt: "vice",
            },
            a: { href: "https://www.vice.com", text: "https://www.vice.com" },
            h3: { text: "vice" },
          },
          {
            img: {
              src: "/images/showcase/twitch.png" /*`${imgbaseUrl}/twitch_absljp.jpg`*/,
              alt: "twitch",
            },
            a: {
              href: "https://www.twitch.com",
              text: "https://www.twitch.com",
            },
            h3: { text: "twitch" },
          },
          {
            img: {
              src: "/images/showcase/nike.png" /*`${imgbaseUrl}/nike_cqzoi8.jpg`*/,
              alt: "nike",
            },
            a: { href: "https://www.nike.com", text: "https://www.nike.com" },
            h3: { text: "nike" },
          },
          {
            img: {
              src: "/images/showcase/tiktok.png" /*`${imgbaseUrl}/tiktok_p9hyax.jpg`*/,
              alt: "tiktok",
            },
            a: {
              href: "https://www.tiktok.com",
              text: "https://www.tiktok.com",
            },
            h3: { text: "tiktok" },
          },
          {
            img: {
              src: "/images/showcase/hbomax.png" /*`${imgbaseUrl}/hbomax_uxwhez.jpg`*/,
              alt: "hbomax",
              className: "object-top",
            },
            a: {
              href: "https://www.hbomax.com",
              text: "https://www.hbomax.com",
            },
            h3: { text: "hbomax" },
          },
        ].map((item) => (
          <Card key={item.h3.text} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ShowcaseSection;
