import { useState } from "react";
import roomBtn from "../assets/roomBtn.svg";
import starImg from "../assets/star.svg";
import { rooms } from "../data/roomsList";
import { Link } from "react-router-dom";

const Rooms = () => {
  const [currentRoom, setCurrentRoom] = useState(0);

  const handleScroll = () => {
    if (currentRoom === rooms.length - 1) {
      setCurrentRoom(0);
    } else {
      setCurrentRoom((prev) => prev + 1);
    }
  };

  return (
    <section
      id="rooms"
      className="rooms-section mt-[250px] pt-[200px] pb-[100px] w-full px-[60px] h-fit bg-[#FFFCF6] text-[#1B3B36] "
    >
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
          <div className="w-[217px] h-[259px] relative overflow-hidden">
            {rooms.map((room, index) => (
              <div
                key={index}
                className={`${
                  currentRoom == index
                    ? "right-0"
                    : "right-[100%] duration-1000 z-[1]"
                } absolute top-0 w-[217px] h-[259px]`}
              >
                <img
                  className="w-full h-full bg-cover"
                  src={room.img2}
                  alt="Hotel Room"
                />
              </div>
            ))}
          </div>

          <img
            onClick={handleScroll}
            className="w-fit h-fit"
            src={roomBtn}
            alt="Room Button"
          />
        </div>

        <div className="pt-[30px] w-[30%] flex flex-col justify-between">
          <div className="w-fit flex items-center gap-[10px] border border-[#313F38] border-opacity-[0.48] px-[25px] py-[10px] rounded-[50px]">
            <img src={starImg} alt="Star Icon" />
            <p className="text-[22px]">Since 1973</p>
          </div>
          <div className="mt-[90px]">
            <h1 className="relative text-4xl font-Miracle capitalize tracking-wide">
              {rooms.map((room, index) => (
                <Link
                  to={`room/${room.id}`}
                  className={`${
                    currentRoom == index
                      ? "opacity-100 duration-500 "
                      : "opacity-0 translate-y-[100%]"
                  } absolute top-0 left-0`}
                >
                  {room.name}
                </Link>
              ))}
            </h1>
            <div className="mt-[40px] h-[40px] w-[30px]"></div>
            <p className="relative text-lg leading-7">
              {rooms.map((room, index) => (
                <span
                  className={`${
                    currentRoom == index
                      ? "opacity-80 duration-500"
                      : "opacity-0"
                  } absolute top-0 left-0`}
                >
                  {room.desc}
                </span>
              ))}
            </p>
          </div>
          <div className="mt-[40px] h-[40px] w-[30px]"></div>
          <p className="text-[22px]">
            0{currentRoom + 1} <span className="opacity-30">/ 04</span>
          </p>
        </div>

        <div className="w-[40%] 2xl:w-fit relative bg-[red]">
          <div className="w-full h-[650px] relative overflow-x-hidden">
            {rooms.map((room, index) => (
              <div
                key={index}
                className={`${
                  currentRoom == index
                    ? "right-0"
                    : "right-[100%] duration-1000 z-[1]"
                } absolute top-0 w-full h-full`}
              >
                <img
                  className="w-full h-full bg-cover"
                  src={room.img1}
                  alt="Hotel Room"
                />
              </div>
            ))}
          </div>
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
