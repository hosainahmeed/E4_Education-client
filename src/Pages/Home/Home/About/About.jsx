import Untitled from "../../../../assets/Untitled-11.webp";
import Untitled1 from "../../../../assets/Untitled-10.webp";

function About() {
  return (
    <div className="p-6 md:p-10 lg:p-16">
      <div className="flex flex-col lg:flex-row items-center text-center md:text-left gap-8 md:gap-12 lg:gap-16 justify-around">
        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start gap-4 max-w-lg">
          <h3 className="text-orange-500 text-lg md:text-xl">About Us</h3>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
            Globally Recognized Interactive Preschool Education
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700">
            Gravida rutrum quisque non tellus orci ac auctor. Aenean imperdiet
            sodales felis, ultricies ultricies metus faucibus non. Integer
            consequat ex lacus, in mattis nulla posuere in. Nam posuere feugiat
            lacus. Morbi suscipit erat felis, ac aliquam nibh.
          </p>
          <button className="bg-orange-500 px-6 py-2 rounded-full text-white font-medium shadow-md transition duration-200 hover:bg-orange-600">
            More About Us
          </button>
        </div>

        {/* Media Section */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-2 w-full max-w-3xl ">
          <div className="w-full h-96 border-2 border-dotted border-black rounded-lg overflow-hidden">
            <img
              src={Untitled}
              alt="Education"
              className="shadow-lg w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block w-full h-96 border-2 border-dotted border-black rounded-lg overflow-hidden">
            <video
              src="https://videos.pexels.com/video-files/4487956/4487956-hd_1920_1080_25fps.mp4"
              autoPlay
              muted
              loop
              className="rounded-lg shadow-lg w-full h-full object-cover"
            ></video>
          </div>
          <div className="w-full h-96 border-2 border-dotted border-black rounded-lg overflow-hidden">
            <video
              src="https://videos.pexels.com/video-files/5183278/5183278-hd_1920_1080_30fps.mp4"
              autoPlay
              muted
              loop
              className="rounded-lg shadow-lg w-full h-full object-cover"
            ></video>
          </div>
          <div className="hidden md:block w-full h-96">
            <img
              src={Untitled1}
              alt="Children Learning"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
