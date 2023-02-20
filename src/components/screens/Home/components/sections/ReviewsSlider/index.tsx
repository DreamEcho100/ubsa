import type { CSSProperties } from "react";
import { Fragment } from "react";
import { FaStar } from "react-icons/fa";

const ReviewsSlider = () => {
  const sliderItems = {
    length: 10,
    mult: 10,
  };
  return (
    <section className="main-content-section flex max-w-[1400px] flex-col p-8 md:py-16">
      <header className="my-4">
        <h2 className="text-7xl font-bold">
          Reviews that speak for themselves.
        </h2>
        <p className="mt-8 mb-12">
          We&apos;re not ones to brag, so we&apos;ll let our customer reviews do
          all the talking.
        </p>
      </header>
      <div className="mb-8">
        <div className="carousal-x min-w-full">
          <div
            style={
              {
                "--itemsLength": sliderItems.length * sliderItems.mult,
              } as CSSProperties
            }
            className="carousal-x-track flex w-fit"
          >
            {"break"
              .repeat(sliderItems.length * sliderItems.mult - 1)
              .split("break")
              .map(() => ({
                stars: 5,
                username: "John Doe",
                name: "Eng. John Doe",
                content:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio id illo sapiente est assumenda adipisci, amet tenetur nam accusantium mollitia deleniti.",
                url: "example.com",
              }))
              .map(({ stars, name, username, content, url }, itemIndex) => (
                <div
                  key={`${username}-${itemIndex}`}
                  className="m-4 flex w-80 flex-col p-8"
                  style={{
                    boxShadow: "0 0 1rem rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <span className="flex text-lg text-yellow-300">
                    {"break"
                      .repeat(stars - 1)
                      .split("break")
                      .map((item, index) => (
                        <Fragment key={index}>
                          <FaStar key={index} />
                          <span className="px-1" />
                        </Fragment>
                      ))}
                  </span>
                  <span className="p-1" />
                  <h4 className="text-h4 font-bold">{name}</h4>
                  <small className="text-lg font-light">{username}</small>
                  <p className="my-2 font-light">{content}</p>
                  <p>
                    <a
                      href={url}
                      className=" text-sky-600 transition-all duration-150 hover:text-sky-400 focus:border-spacing-2 focus:border-b focus:border-b-sky-500"
                    >
                      {url}
                    </a>
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSlider;
