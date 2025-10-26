"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const events = [
  { date: "Oct 2024", title: "Launch of SEP Coin", icon: "rocket_launch" },
  { date: "14-Oct-2024", title: "SEP Listing on Exchanges", icon: "list_alt" },
  { date: "Nov 2024", title: "Crypto Wallet App Release", icon: "smartphone" },
  { date: "Dec 2024", title: "NFT Platform Launch", icon: "palette" },
  {
    date: "Q1 2025",
    title: "Carbon Certificate Trading",
    icon: "card_membership",
  },
  { date: "Q1 2025", title: "AI Integration Begins", icon: "robot_2" },
  { date: "Q3 2025", title: "KYC Implementation", icon: "description" },
];

const TimeLine = () => {
  const [isClient, setIsClient] = useState(false);
  const { ref, inView } = useInView({ 
    triggerOnce: false, 
    threshold: 0.2,
    skip: typeof window === 'undefined' // Skip during SSR
  });
  const controls = useAnimation();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ width: "60%" });
    } else {
      controls.start({ width: "0%" });
    }
  }, [inView, controls]);

  return (
    <div className="relative w-full px-6" id="roadmap">
      <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center text-gray-900">
        <span className="bg-clip-text text-transparent bg-black">
          {/*  bg-gradient-to-r from-green-600 to-green-400 */}
          Roadmap
        </span>
      </h2>

      <div className="mt-10 flex flex-col xl:flex-row  flex-wrap justify-center items-center gap-[16px] xl:gap-1">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            {...(isClient && { whileInView: { opacity: 1, y: 0 }, transition: { delay: index * 0.2, duration: 0.5 }, viewport: { once: false } })}
            className={`flex xl:flex-col flex-row  items-center max-w-xs text-center gap-6 ${
              index % 2 === 0
                ? "xl:order-first xl:flex-col-reverse xl:mb-3 "
                : "xl:order-last xl:mt-3"
            }`}
          >
            {/* Icon */}
            <div className="relative">
              <div
                className={
                  index % 2 === 0
                    ? "hidden xl:block line_timeLine_bottom"
                    : " hidden xl:block line_timeLine"
                }
              ></div>
              <div className={"line_timeLine_mobile"}></div>
              <div className="w-15 h-15 xl:w-16 xl:h-16 flex items-center justify-center text-xl xl:text-2xl g-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 text-white rounded-full shadow-lg ">
                <span className="material-symbols-outlined text-black">
                  {event.icon}
                </span>
              </div>
            </div>
            {/* Event Details */}
            <div
              className={`${
                index % 2 === 0 ? "xl:mb-4" : "xl:mt-4"
              }  p-4 bg-white shadow-md rounded-lg w-full border border-gray-200 min-w-[250px]`}
            >
              <p className="text-sm text-gray-500">{event.date}</p>
              <h3 className=" font-semibold text-gray-800">{event.title}</h3>
            </div>
          </motion.div>
        ))}
        <div ref={ref} className=" xl:block hidden relative w-full h-2 bg-gray-300 rounded-full">
          <motion.div
            className=" absolute top-0 left-0 h-2 g-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 rounded-full"
            initial={{ width: "0%" }}
            animate={controls}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TimeLine;