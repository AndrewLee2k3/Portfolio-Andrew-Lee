import useInput from "../../hooks/use-input";
import { useState } from "react";

const isNotEmpty = (value) => value.trim() !== "";

const isEmail = (value) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
};

const isVietnamesePhoneNumber = (value) => {
  const phonePattern = /^(03|05|07|09)[0-9]{8}$/;
  return phonePattern.test(value);
};
const ContactForm = () => {
  const [successMsg, setSuccessMsg] = useState("");

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: phoneNumberValue,
    isValid: phoneNumberIsValid,
    hasError: phoneNumberHasError,
    valueChangeHandler: phoneNumberChangeHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    reset: resetPhoneNumber,
  } = useInput(isVietnamesePhoneNumber);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: subjectValue,
    isValid: subjectIsValid,
    hasError: subjectHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubject,
  } = useInput(isNotEmpty);

  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (
    phoneNumberIsValid &&
    emailIsValid &&
    subjectIsValid &&
    nameIsValid &&
    messageIsValid
  ) {
    formIsValid = true;
  }

  const handleSend = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    setSuccessMsg(
      `Thank you dear ${nameValue}, Your Messages has been sent Successfully!`
    );
    setTimeout(() => {
      setSuccessMsg("");
    }, 5000);

    const formData = new FormData(e.target);

    fetch("https://getform.io/f/ac1c54e0-841a-4cca-9e7e-41cc830bbd77", {
      method: "POST",
      body: formData,
    });

    resetName("");
    resetPhoneNumber("");
    resetEmail("");
    resetSubject("");
    resetMessage("");
  };
  const nameClassesInput = nameHasError
    ? "contactInput bg-designColor"
    : "contactInput";

  const phoneNumberClassesInput = phoneNumberHasError
    ? "contactInput bg-designColor"
    : "contactInput";

  const emailClassesInput = emailHasError
    ? "contactInput bg-designColor"
    : "contactInput";

  const subjectClassesInput = subjectHasError
    ? "contactInput bg-designColor"
    : "contactInput";

  const messageClassesInput = messageHasError
    ? "contactTextArea bg-designColor"
    : "contactTextArea";
  return (
    <div className="w-full lgl:w-[60%] h-full py-10 dark:bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowTwo dark:shadow-shadowOne">
      <form
        onSubmit={handleSend}
        className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
      >
        {successMsg && (
          <p className="py-3 dark:bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowTwo dark:shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
            {successMsg}
          </p>
        )}
        <div className="w-full flex flex-col lgl:flex-row gap-10">
          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Your name
            </p>
            <input
              value={nameValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              name="name"
              className={nameClassesInput}
              type="text"
            />
            {nameHasError && (
              <p className="text-designColor font-bold">
                Your name is not empty ❌
              </p>
            )}
          </div>
          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Phone Number
            </p>
            <input
              name="phone"
              value={phoneNumberValue}
              onChange={phoneNumberChangeHandler}
              onBlur={phoneNumberBlurHandler}
              className={phoneNumberClassesInput}
              type="text"
            />
            {phoneNumberHasError && (
              <p className="text-designColor font-bold">
                Phone number invalidate ❌
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
          <input
            name="email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            className={emailClassesInput}
            type="email"
          />
          {emailHasError && (
            <p className="text-designColor font-bold">Email invalidate ❌</p>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Subject
          </p>
          <input
            name="subject"
            value={subjectValue}
            onChange={subjectChangeHandler}
            onBlur={subjectBlurHandler}
            className={subjectClassesInput}
            type="text"
          />
          {subjectHasError && (
            <p className="text-designColor font-bold">
              Subject is not empty ❌
            </p>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Message
          </p>
          <textarea
            name="message"
            value={messageValue}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
            className={messageClassesInput}
            cols="30"
            rows="8"
          ></textarea>
          {messageHasError && (
            <p className="text-designColor font-bold">
              Message is not empty ❌
            </p>
          )}
        </div>
        <div className="w-full flex justify-center">
          <button
            disabled={!formIsValid}
            type="submit"
            className="mx-auto w-1/2 h-12 bg-designColor rounded-lg text-base text-gray-200 font-semibold tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
          >
            Send Message
          </button>
        </div>
        <div className="mt-5">
          {successMsg && (
            <p className="py-3 dark:bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowTwo dark:shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
              {successMsg}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
