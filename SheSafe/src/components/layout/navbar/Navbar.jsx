import { IoNotificationsSharp } from "react-icons/io5";
import { CgMenuLeft } from "react-icons/cg";
import logo from "../../../assets/logo.png";
export const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-start">
          <a href="#">
            <CgMenuLeft />
          </a>
        </div>
        <div className="nav-center">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="nav-end">
          <a href="#">
            <IoNotificationsSharp />
          </a>
        </div>
      </nav>
    </header>
  );
};
