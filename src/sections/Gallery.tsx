import stamp from "../assets/gallerylabel.svg";
import img1 from "../assets/galleryImg1.png";
import img2 from "../assets/galleryImg2.png";
import img3 from "../assets/galleryImg3.png";
import img4 from "../assets/galleryImg4.png";
import img5 from "../assets/galleryImg5.png";

const Gallery = () => {
  return (
    <section className="galllery-section w-full min-h-[100vh] pt-[200px] pb-[100px]">
      <img className="mx-auto mb-[20px]" src={stamp} alt="stamp" />

      <div className="text-center text-amber-300 text-[100px] 2xl:text-[125px] font-Miracle uppercase leading-[105px]">
        our Gallery
      </div>

      <div className="w-full mt-[60px] flex justify-between">
        <img src={img1} alt="hotel" />
        <div className="w-[36%] opacity-80 text-center leading-7">
          Explore our spacious rooms with the gorgeous view to the historical
          part of the city. Each room has an exclusive interior design decorated
          with modern art pieces that will make your stay unforgettable.
        </div>
        <img src={img2} alt="hotel" />
      </div>

      <div className="w-full px-[40px] flex justify-between items-end">
        <img className="w-fit h-fit" src={img3} alt="hotel" />
        <div className="w-[45%] flex flex-col justify-start gap-[70px]">
          <img className="w-full h-fit" src={img4} alt="hotel" />
          <div className="flex gap-[30px] items-center ">
            <svg
              className="w-[50px] h-[50px]"
              width="167"
              height="175"
              viewBox="0 0 167 175"
              fill="#FCD043"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M83.5 0L134.931 16.711L166.717 60.461V114.539L134.931 158.289L83.5 175L32.0688 158.289L0.282555 114.539V60.461L32.0688 16.711L83.5 0Z"
                fill="#FCD043"
              />
            </svg>

            <p className="w-[50%] opacity-80 text-[18px] italic">
              It is our pleasure to meet your most unrealistic expectations.
            </p>
          </div>
        </div>
        <img className="mb-[-190px] z-[1] w-fit h-fit" src={img5} alt="hotel" />
      </div>

      <div className="mt-[100px]">
        <div className="slide w-full overflow-x-hidden">
          <div className="w-fit flex gap-[40px]">
            <h1 className="ml-[40px]">Bank hotel</h1>
            <h1>Bank hotel</h1>
            <h1>Bank__hotel©</h1>
            <h1>Bank hotel</h1>
            <h1>Bank hotel</h1>
            <h1>Bank hotel</h1>
            <h1>Bank__hotel©</h1>
            <h1>Bank hotel</h1>
          </div>
        </div>
        <div className="slide2 w-full overflow-x-hidden">
          <div className="w-fit flex gap-[40px] translate-x-[-50%]">
            <h1 className="ml-[40px]">Bank hotel</h1>
            <h1>Bank hotel</h1>
            <h1>Bank__hotel©</h1>
            <h1>Bank hotel</h1>
            <h1>Bank hotel</h1>
            <h1>Bank hotel</h1>
            <h1>Bank__hotel©</h1>
            <h1>Bank hotel</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
