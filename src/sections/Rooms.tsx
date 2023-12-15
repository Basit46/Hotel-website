import room11 from "../assets/room1-1.png";
import room12 from "../assets/room1-2.png";
import roomBtn from "../assets/roomBtn.svg";
import starImg from "../assets/star.svg";

const Rooms = () => {
  return (
    <section className="rooms-section mt-[250px] pt-[200px] pb-[100px] w-full px-[60px] h-fit bg-[#FFFCF6] text-[#1B3B36] ">
      <div className="flex justify-between">
        <h1 className=" text-[100px] font-Miracle uppercase leading-[105px]">
          Rooms
          <br />& apartments
        </h1>
        <p className="w-[27%]  text-lg uppercase">
          All room decoration was made with ecological certified and safe
          materials.
        </p>
      </div>

      <div className="w-full mt-[100px] flex justify-between">
        <div className="pt-[30px] flex flex-col justify-between">
          <img src={room12} alt="Hotel Room" />
          <img className="w-fit h-fit" src={roomBtn} alt="Room Button" />
        </div>

        <div className="pt-[30px] w-[30%] flex flex-col justify-between">
          <div className="w-fit flex items-center gap-[10px] border border-[#313F38] border-opacity-[0.48] px-[25px] py-[10px] rounded-[50px]">
            <img src={starImg} alt="Star Icon" />
            <p className="text-[22px]">Since 1973</p>
          </div>
          <div className="mt-[90px]">
            <h1 className="mb-[30px] text-4xl font-Miracle capitalize tracking-wide">
              Superior twin
            </h1>
            <p className="opacity-80  text-lg leading-7">
              The Superior twin is perfect for those who plan to stay long. The
              spacious and bright room is equipped with deluxe Italian furniture
              and has a beautiful view to the historical part of the city.
              Stylish interior design and comfortable beds will make your stay
              cozy and pleasant.
            </p>
          </div>
          <p className="text-[22px]">
            01 <span className="opacity-30">/ 04</span>
          </p>
        </div>

        <div className="w-[40%] 2xl:w-fit relative">
          <img className="w-full h-fit" src={room11} alt="Hotel Room" />
          <div className="absolute bottom-[50px] right-[50px]">
            <div className="relative flex justify-center items-center">
              <svg
                className="btnBg"
                width="167"
                height="175"
                viewBox="0 0 167 175"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M83.5 0L134.931 16.711L166.717 60.461V114.539L134.931 158.289L83.5 175L32.0688 158.289L0.282555 114.539V60.461L32.0688 16.711L83.5 0Z"
                  fill=""
                />
              </svg>
              <p className="w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center italic">
                Book Room
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
