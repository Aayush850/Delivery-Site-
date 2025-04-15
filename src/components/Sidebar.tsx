import { navbarLinks } from "../data/navbarLinks";
import { IoMdClose } from "react-icons/io";

interface SideBarProps {
  isSideBarOpen: boolean;
  setIsSideBarOpen: (value: boolean) => void;
}

const Sidebar: React.FC<SideBarProps> = ({
  setIsSideBarOpen,
  isSideBarOpen,
}) => {
  return (
    <aside
      className={`bg-white fixed top-0 left-0 z-20 h-full w-full transform transition-transform ease-in-out duration-300 ${
        isSideBarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="custom-container h-full flex flex-col justify-between">
        <div className="flex justify-between items-center py-5">
          <img src="logo.svg" alt="" />
          <button
            className="cursor-pointer bg-transparent text-3xl"
            onClick={() => setIsSideBarOpen(false)}
          >
            <IoMdClose />
          </button>
        </div>

        <div>
          <ul className="space-y-8">
            {navbarLinks.map((navbarlink, index) => {
              return (
                <li key={index} onClick={() => setIsSideBarOpen(false)}>
                  <a href={navbarlink.url} className="text-gray-500 text-2xl">
                    {navbarlink.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="py-5">
          <button className="btn-primary">Download App</button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
