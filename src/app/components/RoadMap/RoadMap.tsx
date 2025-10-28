'use client'
import React, { useEffect, useRef, useState } from "react";
// import { fireConfetti } from "./confetti";

type Step = {
  id: string;
  label: string;
  message: string;
  date: string; // <-- Add this
};

const steps: Step[] = [
  {
    id: "1",
    label: "1",
    message: "Team Formation",
    date: "OCT 2025",
  },
  { id: "2", label: "2", message: "Team Website",  date: "OCT 2025",},
  { id: "3", label: "3", message: "First Report",  date: "OCT 2025", },
  {
    id: "4",
    label: "4",
    message: "First Pitch",
    date: "OCT 2025",
  },
  // {
  //   id: "5",
  //   label: "5",
  //   message: "Enterprise Solutions Rollout",
  //   date: "Q3 2025",
  // },
  // { id: "6", label: "6", message: "Global Market Expansion", date: "Q4 2025" },
  // {
  //   id: "7",
  //   label: "7",
  //   message: "Next-Gen Innovation Hub",
  //   date: "Q1 2026",
  // },
];

const RoadMap = ({ setObserver, callback }: any) => {
  const [messages, setMessages] = useState<string[]>(
    Array(steps.length).fill("")
  );

  const timelinesRef = useRef<HTMLDivElement[]>([]);
  const circlesRef = useRef<HTMLDivElement[]>([]);

  // const handleStepCallback = (index: number) => {
  //   setMessages((prev) =>
  //     prev.map((msg, i) => (i === index ? steps[index].message : msg))
  //   );

  //   if (index === 0) {
  //     callback(); // Custom callback for first step
  //   }

  //   if (index === steps.length - 1) {
  //     //fireConfetti();
  //     // fireConfetti(); // Last step, fire confetti
  //   }
  // };
  const handleStepCallback = (index: number) => {
    setMessages((prev) =>
      prev.map((msg, i) =>
        i === index && msg === "" ? steps[index].message : msg
      )
    );

    if (index === 0) {
      callback();
    }

    if (index === steps.length - 1) {
      // fireConfetti();
    }
  };

  // const handleStepExit = (index: number) => {
  //   setMessages((prev) => prev.map((msg, i) => (i === index ? "" : msg)));
  // };

  useEffect(() => {
    steps.forEach((_, index) => {
      const timeline = timelinesRef.current[index];
      const circle = circlesRef.current[index];
      if (timeline) setObserver(timeline);
      if (circle) setObserver(circle, () => handleStepCallback(index));
    });
  }, [setObserver]);

  return (
    <>
      <div className="text-center mb-20 xs:mt-10 md:mt-0" id="roadmap">
        <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-sm font-medium mb-8 text-white/80">
          Our Journey
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-white mb-6">
          Development Roadmap
        </h2>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          Discover our strategic milestones and innovative solutions shaping the future of digital technology
        </p>
      </div>

      <div className="wrapper">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div
              id={`timeline${step.id}`}
              ref={(el) => {
                timelinesRef.current[index] = el!;
              }}
              className="timeline"
            />
            <div className="circleWrapper">
              <div
                id={`circle${step.id}`}
                ref={(el) => {
                  circlesRef.current[index] = el!;
                }}
                // ref={(el) => (circlesRef.current[index] = el!)}
                className="circle"
              >
                {step.label}
              </div>
              <div
                className={`${
                  index % 2 == 0 ? "message_left" : "message_right"
                }`}
              >
                {messages[index] && (
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-md shadow-lg transition-all duration-500 hover:bg-white/8 hover:scale-[1.02] hover:shadow-cyan-500/10">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <h2 className="text-sm text-cyan-300 font-semibold uppercase tracking-wide">
                        {step.date}
                      </h2>
                    </div>
                    <h1 className="text-lg font-semibold text-white leading-relaxed">
                      {messages[index]}
                    </h1>
                  </div>
                )}
              </div>
              {/* <div className={index === steps.length - 1 ? "" : "message_left"}>
              {messages[index]}
            </div> */}
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default RoadMap;