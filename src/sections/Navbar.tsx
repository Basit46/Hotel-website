import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="w-full px-[60px] py-[30px] flex justify-between items-center">
      <Link to="/" className="text-xl font-medium">
        BankHotel
      </Link>

      <ul className="flex gap-[40px] items-center">
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <ScrollLink to="about" duration={500} smooth={true}>
            ABOUT
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="rooms" duration={500} smooth={true} offset={200}>
            ROOMS
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="restaurant"
            duration={1000}
            smooth={true}
            offset={200}
          >
            RESTAURANT
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="conference-hall" duration={1000} smooth={true}>
            CONFERENCE HALL
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" duration={1000} smooth={true}>
            CONTACT
          </ScrollLink>
        </li>
      </ul>

      <p className="text-base uppercase leading-tight">+38 032 297 50 20</p>
    </nav>
  );
};

export default Navbar;
