import starImg from "../assets/star.svg";
import img1 from "../assets/facilityImg1.png";
import img2 from "../assets/facilityImg2.png";
import roomBtn from "../assets/roomBtn.svg";
import facility1 from "../assets/facility1.png";
import facility2 from "../assets/facility2.png";
import facility3 from "../assets/facility3.png";
import arrow from "../assets/fArrow.svg";
const Facilities = () => {
  return (
    <section className="facilities-section pb-[200px] py-[80px] px-[60px] bg-[#FFFCF6] text-[#1B3B36]">
      <div className="pt-[80px] border-t border-t-[#313F38]">
        <div className="flex justify-between">
          <p className="text-lg uppercase">
            Art & <br /> Congress hall
          </p>

          <h1 className=" text-[100px] font-Miracle leading-[105px]">
            OUR <br /> FACI <br />
            <span className="pl-[80px] flex items-center gap-[65px]">
              <img src={starImg} alt="star" /> LITIES
            </span>
          </h1>

          <img className="h-fit" src={img1} alt="Hotel facility" />
        </div>
        <div className="mt-[70px] flex gap-[60px] items-end">
          <img className="h-fit" src={img2} alt="Hotel facility" />
          <p className="w-[300px] opacity-80 leading-7">
            Bank Hotel offers you a wide range of additional services and
            facilities. Visit our restaurant to try exclusive meals, book a
            conference hall to organize a business meeting, or relax in the
            art-bar.
          </p>
        </div>

        <div className="mt-[300px] w-full h-fit">
          <div className="w-full mt-[100px] mb-[100px] flex justify-between">
            <div className="pt-[30px] flex flex-col justify-end">
              <img
                className="w-fit h-fit rotate-[90deg] mb-[120px]"
                src={roomBtn}
                alt="Room Button"
              />
            </div>

            <div className="pt-[60px] w-[30%] flex flex-col justify-between">
              <p className="text-[50px] font-normal font-Miracle uppercase">
                01
              </p>
              <div className="">
                <h1 className="mb-[30px] text-4xl font-Miracle capitalize tracking-wide">
                  Ice <br /> restaurant
                </h1>
                <p className="opacity-80  text-lg leading-7">
                  The hotel’s exclusive infrastructure is complemented by the
                  unique atmosphere of the Safe Restaurant. Author’s menu,
                  extensive wine card, and live music will set you for the
                  correct mood.
                </p>
              </div>
            </div>

            <img
              className="w-[35%] 2xl:w-fit"
              src={facility1}
              alt="Hotel Facility"
            />
          </div>

          <div className="facility">
            <img src={facility2} alt="Hotel Facility" />
            <h1>
              <span>02</span>
              <span>conference hall</span>
            </h1>
            <img src={arrow} alt="arrow" />
          </div>

          <div className="facility">
            <img src={facility3} alt="Hotel Facility" />
            <h1>
              <span>03</span>
              <span>Wine bar “reserve”</span>
            </h1>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
