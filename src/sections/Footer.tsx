import star from "../assets/star.svg";
import hotelImg from "../assets/jean-philippe-delberghe-T5BF4OyQLwU-unsplash 1.png";
import curve from "../assets/Curve.png";
import arrow1 from "../assets/footerarrow1.svg";
import arrow2 from "../assets/footerarrow2.svg";

type FooterPropType = {
  whiteBg: boolean;
};

const Footer = ({ whiteBg }: FooterPropType) => {
  return (
    <footer
      className={`${
        whiteBg ? "bg-white text-green" : "bg-green text-white"
      } relative w-full h-fit px-[60px] pt-[200px]`}
    >
      <p className={`${!whiteBg && "text-right"} text-[40px]  leading-[50px]`}>
        +38 032 297 50 20
      </p>
      <p
        className={`${
          whiteBg && "ml-auto mr-[200px]"
        } mt-[80px] w-60 text-lg uppercase`}
      >
        8 Lystopadovoho Chynu,Lviv
      </p>

      <div className="mt-[150px] flex gap-[70px]">
        <div className="h-fit flex  gap-[40px]">
          <h1 className="relative z-[1] h-fit text-[200px] font-Miracle uppercase leading-[200px]">
            Get in
          </h1>
          <img
            className="w-[100px] h-[100px] self-center"
            src={star}
            alt="star"
          />
        </div>
        <img src={hotelImg} alt="hotel room" />
      </div>
      <h1 className="h-fit mt-[-60px] text-end text-[200px] text-yellow font-Miracle uppercase leading-[200px]">
        TOUCH
      </h1>

      <img className="absolute top-[23%] left-0" src={curve} alt="curve" />

      <div className="pb-[150px]">
        <h1 className="text-[26px] uppercase">Find a room</h1>

        <div className="flex">
          <div className="w-fit border border-[#313F38] flex py-[15px]">
            <button className="px-[20px] py-[10px] flex items-center gap-[90px] border-r border-r-[#313F38] border-opacity-[0.24]">
              <p className="text-base font-medium">CHECK IN</p>
              <img src={arrow1} alt="arrow" />
            </button>
            <button className="px-[20px] py-[10px] flex items-center gap-[90px]">
              <p className="text-base font-medium">CHECK OUT</p>
              <img src={arrow1} alt="arrow" />
            </button>
          </div>
          <button className="py-[25px] bg-green text-white px-[25px] text-[18px] font-medium">
            BOOK ROOM
          </button>
        </div>
      </div>

      <div className="py-[100px] border-t border-t-[#313F38] border-opacity-[0.24] flex justify-between">
        <div>
          <h1 className="text-[26px] uppercase">
            <span className="text-amber-300 text-[26px] uppercase">/</span>
            About us
          </h1>
          <p className="mt-[40px] mb-[70px] w-[285px] opacity-80 text-base leading-7">
            The five-star hotel in a beautiful European city with a modern
            restaurant, conference-hall, and art-bar.
          </p>
          <div className="opacity-25 text-sm">
            ©2023 All rights reserved. BankHotel
          </div>
        </div>

        <div>
          <h1 className="text-[26px] uppercase">
            <span className="text-amber-300 text-[26px] uppercase">/</span>
            news
          </h1>
          <p className="mt-[40px] mb-[70px] w-[285px] opacity-80 text-base leading-7">
            Sign up to our newsletter not to miss exclusive offers and
            information about the upcoming events.
          </p>
          <div className="w-fit h-fit flex border border-[#313F38] border-opacity-[0.24] px-[20px] py-[15px]">
            <input
              type="text"
              className="border-none outline-none"
              placeholder="EMAIL"
            />
            <img src={arrow2} alt="arrow" />
          </div>
        </div>

        <div>
          <h1 className="text-[26px] uppercase">
            <span className="text-amber-300 text-[26px] uppercase">/</span>
            social
          </h1>
          <p className="mt-[40px] flex gap-[30px]">
            <a
              href="#"
              target="blank"
              className="text-base font-medium hover:font-bold uppercase leading-tight"
            >
              facebook
            </a>
            <a
              href="#"
              target="blank"
              className="text-base font-medium hover:font-bold uppercase leading-tight"
            >
              instagram
            </a>
            <a
              href="#"
              target="blank"
              className="text-base font-medium hover:font-bold uppercase leading-tight"
            >
              twitter
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
