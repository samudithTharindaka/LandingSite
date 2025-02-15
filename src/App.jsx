import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Aurora from './components/road';
import GradientText from './components/GradientText';
import RotatingText from './components/TextReveal';
import SplashCursor from './components/SplashCurser';
gsap.registerPlugin(ScrollTrigger);

function App() {
  const bgImgRef = useRef(null);  // First image (background)
  const hudImgRef = useRef(null); // Second image (HUD overlay)

  // First Image Animation (Background)
  useEffect(() => {
    const el = bgImgRef.current;
    gsap.fromTo(el, 
      { opacity: 0 }, 
      { 
        opacity: 1, 
        duration: 3, 
        delay: 1, 
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none reverse none",
          scrub: true,
        }
      }
    );
  }, []);

  // Second Image Animation (HUD Overlay)
  useEffect(() => {
    const el = hudImgRef.current;
    gsap.fromTo(el, 
      { x: 100, opacity: 0,rotate: 0 },  // Start position (off-screen to the right)
      { 
        x: 0, opacity: 1,rotate: 360,  
        duration: 2, 
        scrollTrigger: {
          trigger: el,
          start: "top 90%",  // Triggers earlier
          end: "top 20%",
          toggleActions: "play none reverse none",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <div className="App h-full object-center">
      <SplashCursor />
      <Aurora 
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        speed={0.5}
      />
      <div className='absolute mt-[-30%] pl-[10%]'>
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class text-7xl"
        >
          Samudith Tharindaka
        </GradientText>

        <div className="flex items-center pt-4">
          <p className="text-2xl mr-2 text-3xl text-white font-bold">I am a</p>
          <RotatingText
            texts={['Web Developer', 'Software Engineer', 'UI/Ux engineer', 'Game Developer']}
            mainClassName="px-2 text-3xl sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 500 }}
            rotationInterval={3000}
          />
        </div>
      </div>

      <div className="bottom-0 right-0 p-4 h-[100vh] text-white">
        {/* Background Image */}
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="background"
          className="object-cover h-full w-full relative"
          ref={bgImgRef}
        />

        {/* HUD Overlay Image */}
        <img
          src="https://static.vecteezy.com/system/resources/previews/010/286/345/original/hud-sci-fi-display-interface-design-elements-free-png.png"
          alt="hud"
          className="object-cover z-20 h-[40%] w-[20%] mt-[-20%] absolute"
          ref={hudImgRef}
        />
        
      </div>

      {/* <div className="absolute bottom-0 right-0 p-4 h-[100vh] text-white">

lorem ipsum dolor sit amet  consectetur adipisicing elit.
<br/>
<br/>
<br/>
</div> */}
    </div>
  );
}

export default App;
