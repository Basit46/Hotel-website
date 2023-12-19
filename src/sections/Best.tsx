import bg from "../assets/space-copenhagen-the-stratford-architonic-2-ed-reeve-24-arcit18 1.png";
import line from "../assets/lineVector.png";

const Best = () => {
  return (
    <section className="relative w-full h-full">
      <div className="h-[900px] sm:h-fit">
        <img
          className="h-full w-full sm:h-fit sm:w-fit object-cover sm:object-contain"
          src={bg}
          alt="Apartment"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full px-[20px] xl:px-[60px] pt-[30px] xl:pt-[100px] flex flex-col justify-between sm:block">
        <div className="md:mb-[100px] text-yellow text-[55px] sm:text-[70px] xmd:text-[100px] xl:text-[125px] font-Miracle uppercase leading-[1] xl:leading-[105px]">
          Best
          <br />
          apartments
        </div>
        <div className="pb-[40px] sm:pb-0 self-end w-[231px] xl:w-[330px] text-yellow text-lg uppercase">
          All room decoration was made with ecological certified and safe
          materials.
        </div>
      </div>
      <img
        className="absolute bottom-[70px] xl:bottom-[94px] left-0"
        src={line}
        alt="wavy line"
      />
    </section>
  );
};

export default Best;
