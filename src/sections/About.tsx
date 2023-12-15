import img1 from "../assets/aboutImg1.png";
import img2 from "../assets/aboutImg2.png";
import label from "../assets/aboutStamp.svg";
import btn from "../assets/aboutBtn.svg";

const About = () => {
  return (
    <section className="w-full relative my-[70px]  h-[100vh] min-h-[100vh] ">
      {/* Background designs */}
      <div className="relative w-full h-full">
        <div className="absolute top-0 right-0 w-[58%] border-t border-[#3F5148]"></div>
        <div className="absolute top-0 right-0 w-[25%] h-full border-l border-[#3F5148]"></div>
        <div className="absolute top-0 right-[25%] w-[66vw] h-[66vw] rounded-full border border-[#3F5148]">
          <div className="relative w-full h-full">
            <div className="absolute bottom-0 right-0 w-full h-[50%] bg-green"></div>
          </div>
        </div>
      </div>

      <div className="absolute z-[1] top-[150px] left-[35%]">
        <h1 className="text-right text-[125px] font-Miracle leading-[105px] text-yellow">
          ABOUT <br /> <span className="text-[#fffcf6]">US</span>
        </h1>
      </div>

      <div className="absolute left-0 top-0 w-full h-full mt-[100px] px-[60px] flex justify-between">
        <img src={img1} alt="High quality room" />

        <div className="w-[30%] self-end">
          <h1 className="text-4xl font-Miracle capitalize tracking-wide">
            High quality
          </h1>
          <p className="opacity-60  leading-7">
            The five-star Bank Hotel was reopened to visitors in 2016. The
            building was renovated and modernized to meet the expectations of
            the most demanding guests. We offer luxurious rooms, numerous
            facilities, and exceptional service.{" "}
          </p>
        </div>

        <div className="relative flex flex-col justify-between">
          <img
            className="absolute top-[-70px] left-[-80px]"
            src={label}
            alt="Stamp"
          />
          <img src={img2} alt="High quality room" />
          <img className="w-fit h-fit" src={btn} alt="About Section Button" />
        </div>
      </div>
    </section>
  );
};

export default About;
