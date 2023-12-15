import img2 from "../assets/roomp2.png";
import img3 from "../assets/roomp3.png";
import img4 from "../assets/roomp4.png";
import starImg from "../assets/star.svg";
import curve from "../assets/curve2.svg";
import Footer from "../sections/Footer";
import stamp from "../assets/stamp2.svg";

const Room = () => {
  return (
    <div>
      <section className="w-full h-[100vh] relative px-[60px] bg-room-page-bg bg-cover ">
        <div className="w-full h-full py-[70px] flex flex-col justify-between">
          <h1 className="text-yellow text-[125px] font-Miracle leading-[150px]">
            Superior
            <br />
            twin
          </h1>
          <p className="text-yellow text-lg uppercase">
            All room decoration was made
            <br /> with ecological certified and
            <br /> safe materials.
          </p>
        </div>
        <div className="absolute bottom-[60px] right-[60px] flex justify-center items-center">
          <svg
            className="fill-yellow"
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
          <p className="w-full text-[#1B3B36] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center italic">
            Book room
          </p>
        </div>
      </section>

      <section className="relative mt-[150px] w-full px-[60px]">
        <div className="w-fit flex items-center gap-[10px] border border-[#FFFCF6] border-opacity-[0.32] px-[25px] py-[10px] rounded-[50px]">
          <img src={starImg} alt="Star Icon" />
          <p className="text-[22px]">Since 1973</p>
        </div>
        <div className="mt-[70px] flex justify-between">
          <p className="w-[60%] text-[50px] font-Miracle leading-[60px] tracking-wider">
            All suites have a unique design because we want our every guest to
            feel special.
          </p>
          <div className="w-[335px] opacity-80 text-stone-50 text-lg leading-7">
            The Superior twin would perfectly match the needs of those who plan
            to stay long. The bright and airy room is equipped with superior
            soft Italian furniture. Large windows open a beautiful view to the
            historical part of the city. Contemporary interior design and
            comfortable beds will make your stay cozy and delightful.
          </div>
        </div>

        <img
          className="absolute top-[430px] left-0 w-full"
          src={curve}
          alt="curve"
        />

        <h1 className="mt-[150px] text-yellow text-[40px] capitalize">
          Premier Standard
        </h1>
        <img
          className="relative mx-auto mt-[80px] w-full h-fit"
          src={img2}
          alt="room"
        />
      </section>

      <section className="px-[60px] bg-white text-[#1B3B36] pt-[200px]">
        <div className="flex justify-between">
          <div className="relative">
            <img src={img3} alt="room" />
            <img
              className="absolute top-[-140px] right-[-140px]"
              src={stamp}
              alt="stamp"
            />
            <h1 className="mt-[60px] text-4xl font-Miracle capitalize tracking-wide">
              Superior twin
            </h1>
            <div className="mt-[40px] w-[350px] opacity-80 text-lg leading-7">
              All rooms in Bank Hotel have a special charm achieved through a
              combination of modern functional design and original 20th century
              layout.
            </div>
          </div>
          <div>
            <img src={img4} alt="room" />
            <div className="mt-[40px] w-[350px] opacity-80 text-lg leading-7">
              The Superior twin includes two functional zones: a living room
              with the best Italian furniture, and an isolated cozy bedroom with
              a large bed. Here, you will find space both for work and
              comfortable rest. Hotel offers supreme comfort and outstanding
              24-hour room service to make sure that the time you spend here is
              enjoyable and pleasant.
            </div>
          </div>
        </div>

        <div className="mt-[30px] w-fit border border-[#313F38] border-opacity-[0.32] px-[25px] py-[10px] rounded-[50px]">
          /BOOK ROOM
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Room;
