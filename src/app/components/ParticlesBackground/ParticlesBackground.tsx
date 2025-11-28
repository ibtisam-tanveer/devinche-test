
'use client'
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      await loadFull(engine);
      //await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    }).catch((error) => {
      console.error("Error initializing particles:", error);
      setInit(true); // Still try to render even if there's an error
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            enable: false,
          },
          move: {
            direction: "bottom",
            enable: true,
            outModes: {
              default: "out",
              bottom: "out",
              top: "none",
            },
            random: true,
            speed: {
              min: 1,
              max: 3,
            },
            straight: false,
            gravity: {
              enable: true,
              acceleration: 0.5,
            },
          },
          number: {
            density: {
              enable: true,
            },
            value: 100,
          },
          opacity: {
            value: {
              min: 0.7,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 0.5,
              sync: false,
            },
          },
          shape: {
            type: "star",
          },
          size: {
            value: {
              min: 4,
              max: 10,
            },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },
          rotate: {
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};