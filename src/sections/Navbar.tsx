import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-[20] bg-green w-full px-[20px] xl:px-[60px] py-[18px] vsm:py-[30px] flex justify-between items-center">
      <Link to="/" className="text-xl font-medium">
        BankHotel
      </Link>

      <ul className="hidden xl:flex gap-[40px] items-center">
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
          <ScrollLink to="restaurant" duration={1000} smooth={true}>
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

      <p className="hidden xl:block text-base uppercase leading-tight">
        +38 032 297 50 20
      </p>

      <FaBars className="block xl:hidden" />
    </nav>
  );
};

export default Navbar;
