import { Link, NavLink } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const mobileMenu = () => {
    document.querySelector("#mobile-menu").classList.toggle("hidden");
  };
  const mobileMenuClose = () => {
    document.querySelector("#mobile-menu").classList.add("hidden");
  };

  return (
    <header
      className={`flex justify-betwee items-center p-5 px-4 md:px-40`}
      style={{background: "#010409"}}
    >
      <div className="logo text-2xl flex items-center">
          <BsGithub className="text-2xl md:text-3xl" />
        <h1 className="mx-3 text-sm md:text-2xl">
          <Link to={"/"}>Github Users</Link>
        </h1>
      </div>

      <nav className="hidden md:flex md:items-center ">
        <ul className="flex text-sm md:text-xl">
          <li className="mx-3 border-b-2 border-white/[0] hover:border-white/[100] ">
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive ? "text-orange-400" : ""
              }
            >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="md:hidden flex mr-2">
        <button onClick={mobileMenu} className=" md:hidden">
          <AiOutlineMenu className="text-3xl" />
        </button>
      </div>

      <ul
        id="mobile-menu"
        className={`hidden md:hidden absolute z-10 top-16 left-0 bg-slate-800" w-full flex flex-col items-center`}
      >
        <li onClick={mobileMenuClose} className="p-3">
          <NavLink
            to="/"
            className={(navData) => (navData.isActive ? "text-orange-400" : "")}
          >
            Home
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
