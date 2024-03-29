import React from 'react';
import "./styles.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Typewriter from "typewriter-effect";
const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            top: "25vh",
            background:"transparent"
          }}
        >
          
            <Typewriter style={{backgroundColor:"yellow"}}
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("EA & HAM CLUB  |")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("WE DESIGN  |")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("WE INNOVATE  |")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          
        </div>

        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: {
              enable: false,
              zIndex: -1,
              mode: "screen" | "canvas",
            },
            particles: {
              number: {
                value: 10,
                density: {
                  enable: false,
                  value_area: 800,
                },
              },
              color: {
                value: "#fff",
              },
              shape: {
                type: "circle",
                options: {
                  sides: 5,
                },
              },
              opacity: {
                value: 0.8,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 2,
                random: false,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              rotate: {
                value: 0,
                random: true,
                direction: "clockwise",
                animation: {
                  enable: true,
                  speed: 5,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 600,
                color: "#ffffff",
                opacity: 0.4,
                width: 2,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: ["grab"],
                },
                onclick: {
                  enable: true,
                  mode: "bubble",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
            background: {
              color: "black",
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
            },
          }}
        />
      </div>
    </div>
  );
}

export default ParticlesBackground;
