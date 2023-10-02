import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer
      className={`p-2.5 flex justify-center items-center text-2xl `}
      style={{ background: "#010409" }}
    >
      <BsGithub className="md:text-3xl" />
    </footer>
  );
};

export default Footer;
