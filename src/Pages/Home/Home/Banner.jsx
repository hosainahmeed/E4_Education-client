import bannerImage from "../../../assets/BannerImage/bannerMain.png";
import home from "../../../assets/home-slider-img-01.webp";
import { IoArrowForward } from "react-icons/io5";

function Banner() {
  return (
    <div
      className="bg-cover bg-center pt-28 flex items-center justify-center"
    //   style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <img className="hidden md:block w-1/2" src={home} alt="" />
      <div className="md:w-4/12 flex items-center text-center md:text-start md:items-start gap-3 justify-around flex-col">
        <h3 className="text-orange-500">Greater Learning</h3>
        <h1 className="text-2xl md:text-5xl font-bold">
          Discover, Engage, Develop, and Enjoy!
        </h1>
        <p className=" text-base md:text-xl">
          Vitae elementum curabitur vitae nunc sed. Dictum varius duis at
          consectetur lorem donec. Nunc eget lorem dolor sed viverra ipsum nunc.
          Ac tortor vitae purus faucibus ornare.
        </p>
        <button className="bg-orange-500 px-8 py-2 btn rounded-3xl flex items-center gap-2">
          Get start
          <IoArrowForward></IoArrowForward>
        </button>
      </div>
    </div>
  );
}

export default Banner;
