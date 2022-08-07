import { useRef, useState } from "react";
import heroVideo from "../assets/heroVideo.mp4";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import GradientBtn from "./GradientBtn";

function HeroSection({ isMenuShown }) {
  const [isVIdeoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef();

  const handleVideoPause = () => {
    videoRef.current.pause();
    setIsVideoPlaying(false);
  };

  const handleVidoePlay = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
  };

  return (
    <div className="flex items-end justify-center w-full h-screen text-center">
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        loop
        muted
        className="object-cover h-full w-full absolute -z-10"
      />

      <div
        className={`p-8 flex-col items-center justify-center duration-500 w-full ${
          isVIdeoPlaying ? "" : "bg-black/80 "
        } ${isMenuShown ? "opacity-20" : "opacity-100"}`}
      >
        <h1 className="text-5xl lg:text-7xl">Web 3.0</h1>
        <h1 className="text-5xl lg:text-7xl capitalize mb-12">
          the <span className="text-thBlue font-bold">future</span> is here
        </h1>

        <div className="flex items-center justify-center">
          <GradientBtn className="capitalize px-3 md:px-6" title="get anton" />
          <GradientBtn
            className="capitalize px-3 md:px-6 mx-5 md:mx-12 "
            title="products"
          />

          {isVIdeoPlaying ? (
            <FaPauseCircle
              // size={35}
              onClick={handleVideoPause}
              className="cursor-pointer hover:scale-110 duration-200 text-thBlue text-4xl md:text-4xl"
            />
          ) : (
            <FaPlayCircle
              // size={35}
              onClick={handleVidoePlay}
              className="cursor-pointer hover:scale-110 duration-200 text-thBlue text-4xl md:text-4xl"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
