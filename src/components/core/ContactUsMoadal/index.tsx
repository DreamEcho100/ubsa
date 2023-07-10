import { Fragment, useId, useState } from "react";

import { api } from "~/utils/api";
import Modal from "~//components/common/Modal";
import { toast } from "react-toastify";

const formClasses = {
  input:
    "shadow-lg border-b-[0.1rem] border-b-gray-300 px-2 py-1 rounded-[0.2rem] font-medium w-full",
  label: "flex flex-col my-2 cursor-pointer",
};

const ContactUsModal = ({
  handleIsVisible,
  isVisible,
}: Pick<Parameters<typeof Modal>["0"], "handleIsVisible" | "isVisible">) => {
  const baseId = useId();
  const [formValues, setFormValues] = useState({
    email: "",
    name: "",
    // subject: '',
    message: "",
  });
  const sendEmailMutation = api.general.sendEmail.useMutation({
    onSuccess: () => {
      handleIsVisible({ isVisible: false });
      toast.success(
        "Your message has been successfully sent! We will get back to you ASAP!"
      );

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
      (window as any)?.twq("contact", "tw-ofcb0-ofesn", {
        email_address: formValues.email,
      });
    },
  });

  const handleChange = (name: string, value: string) =>
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

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
          className="flex flex-col gap-1 px-4 py-2 text-[1.2rem] font-medium"
          onSubmit={(event) => {
            event.preventDefault();

            sendEmailMutation.mutate(formValues);
          }}
        >
          <label
            htmlFor={`${baseId}-name`}
            className={`${formClasses.label} flex-1`}
          >
            <span>
              <small>Name</small>
            </span>
            <input
              className={formClasses.input}
              type="text"
              name="name"
              value={formValues.name}
              onChange={(event) =>
                handleChange(event.target.name, event.target.value)
              }
              id={`${baseId}-name`}
              required
            />
          </label>
          <label htmlFor={`${baseId}-email`} className={formClasses.label}>
            <span>
              <small>Email</small>
            </span>
            <input
              className={formClasses.input}
              type="email"
              name="email"
              value={formValues.email}
              onChange={(event) =>
                handleChange(event.target.name, event.target.value)
              }
              id={`${baseId}-email`}
              required
            />
          </label>
          <label htmlFor={`${baseId}-text`} className={formClasses.label}>
            <span>
              <small>Tell us more about your project:</small>
            </span>
            <textarea
              className={formClasses.input}
              name="message"
              value={formValues.message}
              onChange={(event) =>
                handleChange(event.target.name, event.target.value)
              }
              id={`${baseId}-text`}
              cols={30}
              rows={5}
              required
            ></textarea>
          </label>
          <button
            disabled={sendEmailMutation.isLoading}
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
