import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full px-[60px] py-[30px] flex justify-between items-center">
      <h1 className="text-xl font-medium">BankHotel</h1>

      <ul className="flex gap-[40px] items-center">
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <NavLink to="/room">ROOMS</NavLink>
        </li>
        <li>
          <a href="#">RESTAURANT</a>
        </li>
        <li>
          <a href="#">CONFERENCE HALL</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>

      <p className="text-base uppercase leading-tight">+38 032 297 50 20</p>
    </nav>
  );
};

export default Navbar;
