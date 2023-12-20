import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import star from "../assets/star.svg";
import { useGlobalContext } from "../context/globalContext";

const MobileMenu = () => {
  const { isOpen, setIsOpen } = useGlobalContext();
  return (
    <div
      className={`mobile-menu ${
        !isOpen && "hidden"
      } fixed left-0 bg-green top-[10vh] vsm:top-[12vh] bottom-0 h-[100vh] w-[100vw] pt-[30px]`}
    >
      <ul className="flex flex-col gap-[40px] px-[20px]">
        <li
          onClick={() => setIsOpen(false)}
          className="flex gap-[5px] items-center"
        >
          <NavLink className="" to="/">
            HOME
          </NavLink>
          <img className="h-[30px] w-fit mt-[-7px]" src={star} alt="star" />
        </li>

        <li>
          <ScrollLink
            onClick={() => setIsOpen(false)}
            to="about"
            duration={500}
            smooth={true}
          >
            ABOUT
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            onClick={() => setIsOpen(false)}
            to="rooms"
            duration={500}
            smooth={true}
            offset={0}
          >
            ROOMS
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            onClick={() => setIsOpen(false)}
            to="restaurant"
            duration={1000}
            smooth={true}
          >
            RESTAURANT
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            onClick={() => setIsOpen(false)}
            to="conference-hall"
            duration={1000}
            smooth={true}
          >
            CONFERENCE HALL
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            onClick={() => setIsOpen(false)}
            to="contact"
            duration={1000}
            smooth={true}
          >
            CONTACT
          </ScrollLink>
        </li>
      </ul>

      <p className="mt-[50px] mb-[20px] text-xl font-normal uppercase leading-tight text-center">
        +38 032 297 50 20
      </p>
      <p className="mb-[60px] text-center text-lg font-normal uppercase">
        8 Lystopadovoho Chynu,Lviv
      </p>

      <div className="w-fit mx-auto flex gap-[20px]">
        <a
          href="#"
          className="text-xs font-medium uppercase leading-tight underline underline-offset-4"
        >
          Facebook
        </a>
        <a
          href="#"
          className="text-xs font-medium uppercase leading-tight underline underline-offset-4"
        >
          instagram
        </a>
        <a
          href="#"
          className="text-xs font-medium uppercase leading-tight underline underline-offset-4"
        >
          twitter
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
