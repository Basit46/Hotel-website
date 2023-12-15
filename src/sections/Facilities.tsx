import starImg from "../assets/star.svg";
import img1 from "../assets/facilityImg1.png";
import img2 from "../assets/facilityImg2.png";
import Facility from "../components/Facility";
import { facilities } from "../data/facilitiesList";
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

        <div className="mt-[100px] w-full h-fit">
          {facilities.map((facility, index) => (
            <Facility key={index} facility={facility} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
