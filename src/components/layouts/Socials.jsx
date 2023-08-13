import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Socials = () => {
  return (
    <>
      <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
      <div className="flex gap-4">
        <a
          href="https://www.facebook.com/profile.php?id=100026143561343"
          target="_blank"
          rel="noreferrer"
        >
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
        </a>
        <a
          href="https://github.com/AndrewLee2k3"
          target="_blank"
          rel="noreferrer"
        >
          <span className="bannerIcon">
            <FaGithub />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/andrew-lee-957531288/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </a>
      </div>
    </>
  );
};

export default Socials;
