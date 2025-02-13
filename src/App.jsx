import React,{useRef,useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Aurora from './components/road';
import GradientText from './components/GradientText';
import RotatingText from './components/TextReveal';
import SplashCursor from './components/SplashCurser';
gsap.registerPlugin(ScrollTrigger);

function App() {
const imgRef = useRef(null);
useEffect(() => {
  const el = imgRef.current;
  gsap.fromTo(el, 
    { opacity: 0 }, 
    { 
      opacity: 1, 
      duration: 3, 
      delay: 0.1, 
      scrollTrigger: {
        trigger: el,
        start: "top 50%", // Triggers when 80% of the image is in view
        toggleActions: "play none none none",
      }
    }
  );
}, []);

useEffect(() => {
  const el = imgRef.current;

  gsap.fromTo(el, 
    { opacity: 0 }, 
    { 
      opacity: 1, 
      duration: 3, 
      delay: 1, 
      scrollTrigger: {
        trigger: el,
        start: "top 80%", // Trigger when 80% of image is in view
        end: "top 20%",   // End animation when image reaches 20% from top
        toggleActions: "play none reverse none", // Hide when scrolling up
        scrub: true, // Smooth transition
      }
    }
  );
}, []);


  return (
    <div className="App h-full object-center">
      <SplashCursor />
      <Aurora 
       colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
       speed={0.5}/>
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
                <p className="text-2xl mr-2 text-3xl text-white font-bold ">I am a</p>
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
       <div className=" bottom-0 right-0 p-4 h-[100vh] text-white">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="background"
            className="object-cover h-full w-full"
            ref={imgRef}
          />
        </div>
    </div>
  );
}

export default App;