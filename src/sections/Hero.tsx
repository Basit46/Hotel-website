import starImg from "../assets/star.svg";
import heroBtn from "../assets/heroBtn.svg";
import heroImg from "../assets/heroImage.png";
import arrowDown from "../assets/arrow.svg";

const Hero = () => {
  return (
    <section className="hero w-full mt-[40px] px-[60px]">
      <div className="w-full flex justify-between">
        <div>
          <h1 className="text-[140px] 2xl:text-[170px] font-Miracle leading-[1.2]">
            Bank<span className="text-yellow">Hotel</span>
          </h1>
          <p className="mt-[19px] text-lg text-yellow uppercase">
            rooms // restaurant // congress hall // wine bar
          </p>
        </div>

        <div className="w-[28%]">
          <div className="w-fit flex items-center gap-[10px] border border-[#FFFCF6] border-opacity-[0.32] px-[25px] py-[10px] rounded-[50px]">
            <img src={starImg} alt="Star Icon" />
            <p className="text-[22px]">Since 1973</p>
          </div>
          <p className="mt-[96px] text-base leading-relaxed opacity-80">
            The luxurious hotel in the most beautiful European city with an
            exclusive restaurant, conference-hall, and art-bar.
          </p>
        </div>

        <div>
          <img src={heroBtn} alt="Down Button Icon" />
        </div>
      </div>

      <div className="w-full mt-[60px]">
        <div className="relative">
          <img src={heroImg} alt="Hero Main Image" />

          <div className="absolute top-0 right-0 flex">
            <div className="button blurbg flex gap-[90px] items-center justify-between">
              <p className="text-base font-medium leading-tight">CHECK IN</p>
              <img src={arrowDown} alt="arrow" />
            </div>
            <div className="button blurbg flex gap-[90px] items-center justify-between">
              <p className="text-base font-medium leading-tight">CHECK OUT</p>
              <img src={arrowDown} alt="arrow" />
            </div>
            <div className="button bg-yellow">
              <p className="text-black text-lg font-medium uppercase leading-tight">
                book room
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[30px] flex justify-between">
          <div>
            <p className="text-yellow text-[16.5px] 2xl:text-[26px] underline uppercase">
              +38 032 297 50 20
            </p>
            <p className="text-[16.5px] 2xl:text-[26px] underline uppercase">
              8 Lystopadovoho Chynu,Lviv
            </p>
          </div>

          <div>
            <p className="text-[16.5px] 2xl:text-[26px] uppercase">
              Art & Congress
            </p>
            <p className="text-right italic text-[16.5px] 2xl:text-[26px] uppercase">
              Hall
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
