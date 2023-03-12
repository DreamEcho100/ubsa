import Modal from "~//components/common/Modal";
import { Fragment } from "react";

const formClasses = {
  input:
    "shadow-lg border-b-[0.1rem] border-b-gray-300 px-2 py-1 rounded-[0.2rem] font-medium w-full",
  label: "flex flex-col my-2 cursor-pointer",
};

const ContactUsModal = ({
  handleIsVisible,
  isVisible,
}: Pick<Parameters<typeof Modal>["0"], "handleIsVisible" | "isVisible">) => {
  return (
    <Modal
      handleIsVisible={handleIsVisible}
      isVisible={isVisible}
      containerElem={{
        className:
          "w-[40rem] max-w-[98%] text-black bg-zinc-900 text-zinc-100 pt-8 pb-4 px-5",
        style: {
          colorScheme: "dark",
        },
      }}
    >
      <Fragment key="header">
        <header
          className="flex flex-col items-start gap-1 px-2"
          style={{
            textAlign: "initial",
          }}
        >
          <h3 className="text-h3 font-bold">Contact Us</h3>
          <p>
            UBSA transforms recurring revenue into up-front capital for growth
            without restrictive debt or dilution.
          </p>
        </header>
      </Fragment>
      <Fragment key="body">
        <form
          className="flex flex-col gap-1 py-2 px-4 text-[1.2rem] font-medium"
          target="_blank"
          action="https://formsubmit.co/info@ubsa.io"
          method="POST"
        >
          <label htmlFor="name" className={`${formClasses.label} flex-1`}>
            <span>
              <small>First Name</small>
            </span>
            <input
              className={formClasses.input}
              type="text"
              name="name"
              id="name"
              required
            />
          </label>
          <label htmlFor="email" className={formClasses.label}>
            <span>
              <small>Email</small>
            </span>
            <input
              className={formClasses.input}
              type="email"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="message" className={formClasses.label}>
            <span>
              <small>Tell us more about your project:</small>
            </span>
            <textarea
              className={formClasses.input}
              name="message"
              id="message"
              cols={30}
              rows={5}
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="mt-2 w-fit rounded-sm bg-zinc-700 px-4 py-3 transition-all duration-300 hover:brightness-90 focus:rounded-none"
          >
            Submit
          </button>
        </form>
      </Fragment>
    </Modal>
  );
};

export default ContactUsModal;
