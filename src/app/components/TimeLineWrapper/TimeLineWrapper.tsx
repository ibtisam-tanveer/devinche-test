'use client'
import React, { useEffect, useRef } from "react";
// import Section from "../Section/Section";
import TimelineObserver from "react-timeline-animation";
import RoadMap from "../RoadMap/RoadMap";


const TimeLineWrapper = () => {
  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div id="timeline">
          <TimelineObserver
            hasReverse
            initialColor="rgba(255, 255, 255, 0.1)"
            fillColor="rgba(6, 182, 212, 0.8)"
            handleObserve={(setObserver:any) => (
              <RoadMap
                callback={onCallback}
                className="timeline"
                setObserver={setObserver}
              />
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default TimeLineWrapper;