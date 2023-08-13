import { useState } from "react";

const ContactForm = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = () => {
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };
  return (
    <div className="w-full lgl:w-[60%] h-full py-10 dark:bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowTwo dark:shadow-shadowOne">
      <form
        onSubmit={handleSend}
        action="https://getform.io/f/ac1c54e0-841a-4cca-9e7e-41cc830bbd77"
        method="POST"
        className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
      >
        {errMsg && (
          <p className="py-3 dark:bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowTwo dark:shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
            {errMsg}
          </p>
        )}
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
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              name="name"
              className={`${
                errMsg === "Username is required!" && "outline-designColor"
              } contactInput`}
              type="text"
            />
          </div>
          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Phone Number
            </p>
            <input
              name="phone"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              className={`${
                errMsg === "Phone number is required!" && "outline-designColor"
              } contactInput`}
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
          <input
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={`${
              errMsg === "Please give your Email!" && "outline-designColor"
            } contactInput`}
            type="email"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Subject
          </p>
          <input
            name="subject"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            className={`${
              errMsg === "Plese give your Subject!" && "outline-designColor"
            } contactInput`}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Message
          </p>
          <textarea
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className={`${
              errMsg === "Message is required!" && "outline-designColor"
            } contactTextArea`}
            cols="30"
            rows="8"
          ></textarea>
        </div>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="mx-auto w-1/2 h-12 bg-designColor rounded-lg text-base text-gray-200 font-semibold tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
