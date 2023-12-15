import { useEffect, useState } from "react";
import stamp from "../assets/stamp3.png";
import img1 from "../assets/f1.png";
import img2 from "../assets/f2.png";
import img3 from "../assets/f3.png";
import img4 from "../assets/f4.png";
import Footer from "../sections/Footer";
import { facilityType } from "../data/types";
import { facilities } from "../data/facilitiesList";
import { useParams } from "react-router-dom";

const Facility = () => {
  const params = useParams();

  //Local states
  const [facilityDetails, setFacilityDetails] = useState<
    facilityType | undefined
  >();

  useEffect(() => {
    setFacilityDetails(
      facilities.find((facility) => facility.id == params.facilityId)
    );
  }, []);
  return (
    <div className="w-full overflow-hidden">
      <section className="relative w-full h-fit">
        {/* Background designs */}
        <div className="relative w-full h-[125vh]">
          <div className="absolute top-0 right-0 w-full border-t border-[#3F5148]"></div>
          <div className="absolute top-0 left-0 w-[40%] h-full border-r border-[#3F5148]"></div>
          <div className="absolute top-0 left-[40%] w-[60vw] h-[60vw] rounded-full border border-[#3F5148]">
            <div className="relative w-full h-full">
              <div className="absolute bottom-[-2px] right-0 w-full h-[50%] bg-green"></div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 h-full w-full py-[49px] px-[60px]">
          <h1 className="text-yellow text-[125px] font-Miracle leading-[105px]">
            {facilityDetails?.name}
          </h1>
          <div className="mt-[300px] flex justify-between">
            <h1 className="text-[50px] font-Miracle capitalize">
              One of a Kind
            </h1>
            <div className="relative">
              <img
                className="absolute left-[-140px] top-[-140px]"
                src={stamp}
                alt="stamp"
              />
              <p className="w-[350px] opacity-80 text-lg leading-7">
                {facilityDetails?.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-[60px] mt-[20px]">
        <div className="flex justify-between">
          <div className="w-[60%]">
            <img src={img1} alt="facility" />
            <h1 className="mt-[60px] mb-[40px] text-4xl font-Miracle tracking-wide">
              At your service
            </h1>
            <p className="w-[55%] opacity-80 text-lg leading-7">
              The team of the Safe Restaurant aims to exceed all expectations of
              our guests. Our chef worked hard to develop a unique menu that
              features the best meals of the European cuisine that will match
              the tastes of the most demanding clients. Friendly and attentive
              waiters will ensure that you will enjoy your time in our
              restaurant.
            </p>
          </div>
          <img className="w-[30%] h-fit" src={img2} alt="facility" />
        </div>

        <h1 className="mt-[150px] mb-[100px] w-[58%] ml-auto text-[50px] font-Miracle leading-[50px] tracking-wider">
          Once you try our cuisine and service, you shall never want to visit
          another restaurant.
        </h1>

        <div className="flex justify-between">
          <div className="">
            <img src={img3} alt="facility" />
            <p className="w-[70%] text-yellow text-lg uppercase">
              All room decoration was made with ecological certified and safe
              materials.
            </p>
          </div>

          <div className="w-fit">
            <img src={img4} alt="facility" />
            <h1 className="mt-[60px] mb-[40px] text-4xl font-Miracle tracking-wide">
              Spend Your Time
              <br />
              With Us
            </h1>
            <p className="w-[68%] opacity-80 text-lg leading-7">
              If you are looking for an exclusive place to have a romantic
              dinner, organize a business meeting, or spend an enjoyable evening
              with friends, visit Safe Restaurant in Bank Hotel. With our
              delicious meals, unique interior design, and atmosphere of comfort
              and exquisiteness you shall never want to go to a different
              restaurant.
            </p>
          </div>
        </div>
      </section>

      <Footer whiteBg={false} />
    </div>
  );
};

export default Facility;
