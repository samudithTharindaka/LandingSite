import React from 'react';
import Aurora from './components/road';
import GradientText from './components/GradientText';
import RotatingText from './components/TextReveal';

function App() {
  return (
    <div className="App h-full object-center">
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
              
              <div className="flex items-center">
                <p className="text-2xl mr-2 text-3xl text-white font-bold ">I Am A</p>
                <RotatingText
                  texts={['Web Developer', 'Software Engineer', 'UI/Ux engineer', 'Game Developer']}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                />
              </div>

       </div>
    
    </div>
  );
}

export default App;