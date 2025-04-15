import { CiMenuFries } from "react-icons/ci";
import { navbarLinks } from "../data/navbarLinks";

interface NavbarProps {
  setIsSideBarOpen: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setIsSideBarOpen }) => {
  return (
    <nav className="bg-white sticky top-0 left-0 z-10 shadow-xs">
      <div className="flex justify-between custom-container py-5  ">
        <img src="logo.svg" alt="" />
        <ul className="hidden md:flex gap-8">
          {navbarLinks.map((navbarlink, index) => {
            return (
              <li key={index}>
                <a
                  href={navbarlink.url}
                  className="text-gray-500 text-lg hover:text-primary transition-all ease-in-out duration-800"
                >
                  {navbarlink.title}
                </a>
              </li>
            );
          })}
        </ul>
        <button
          className="md:hidden cursor-pointer bg-transparent text-2xl"
          onClick={() => setIsSideBarOpen(true)}
        >
          <CiMenuFries />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
