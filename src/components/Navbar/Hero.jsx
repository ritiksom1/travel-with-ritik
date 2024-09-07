import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <>
      <section className="relative min-h-[530px] flex justify-center items-center overflow-hidden">
        {/* Video element */}
        {isPlaying && (
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{
              background:
                "radial-gradient(circle, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.5) 90%)",
            }}
          >
            <source src="path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div
          className={`absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/50 z-10 ${
            isPlaying ? "hidden" : ""
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.5) 90%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="relative z-10 text-center space-y-5 mt-[150px]"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-merriweather">
            The Great Outdoors
          </h1>
          <p>wonder often, wonder always.</p>
          <div
            className="inline-flex justify-center items-center border-2 h-14 w-14 rounded-full cursor-pointer mt-14 md:mt-20"
            onClick={handlePlayClick}
          >
            <FaPlay />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
