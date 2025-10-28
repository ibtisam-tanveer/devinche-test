'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ParticlesBackground } from '../components/ParticlesBackground/ParticlesBackground';

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('vision');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const coreValues = [
    {
      title: "Innovation",
      description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, ensuring quality and reliability.",
      icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices in all our interactions.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong partnerships with our clients.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Growth",
      description: "We are committed to continuous learning and helping our clients achieve sustainable growth.",
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "Impact",
      description: "We strive to create meaningful solutions that make a positive difference in the world.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      color: "from-pink-500 to-rose-600"
    }
  ];

  const purposeData = {
    title: "Our Purpose",
    description: "We exist to bridge the gap between complex technology and human needs, creating solutions that empower businesses and individuals to thrive in the digital age.",
    highlights: [
      "Democratizing technology access",
      "Fostering digital transformation",
      "Building sustainable futures",
      "Empowering human potential"
    ]
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticlesBackground />
      
      {/* Main Content */}
      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={sectionRef}
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Hero Section */}
            <motion.div variants={itemVariants} className="text-center mb-20">
              <motion.div 
                className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-sm font-medium mb-8 text-white/80"
                whileHover={{ scale: 1.05 }}
              >
                About Devinche
              </motion.div>
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6"
                whileHover={{ scale: 1.02 }}
              >
                Building the Future
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
                whileHover={{ scale: 1.01 }}
              >
                We are passionate innovators dedicated to creating transformative digital solutions that drive success and empower growth in an ever-evolving technological landscape.
              </motion.p>
            </motion.div>

            {/* Vision & Mission Section */}
            <motion.div variants={itemVariants} className="mb-20">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Vision Card */}
                <motion.div 
                  className="group relative"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10 h-full hover:bg-white/8 transition-all duration-300">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">Our Vision</h3>
                    <p className="text-white/70 leading-relaxed text-lg mb-6">
                      To revolutionize the digital landscape by creating innovative solutions that empower businesses and individuals to achieve their full potential in an ever-evolving technological world.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        <span className="text-white/60 text-sm">Innovation-driven approach</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span className="text-white/60 text-sm">Global impact focus</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-white/60 text-sm">Sustainable growth</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Mission Card */}
                <motion.div 
                  className="group relative"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10 h-full hover:bg-white/8 transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">Our Mission</h3>
                    <p className="text-white/70 leading-relaxed text-lg mb-6">
                      To deliver cutting-edge digital solutions with uncompromising quality, exceptional user experiences, and unwavering commitment to our clients' success through innovative technology and dedicated service.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span className="text-white/60 text-sm">Quality-first development</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-white/60 text-sm">Client-centric approach</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        <span className="text-white/60 text-sm">Continuous innovation</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Purpose Section */}
            <motion.div variants={itemVariants} className="mb-20">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
                <div className="text-center mb-12">
                  <motion.h2 
                    className="text-3xl lg:text-4xl font-bold text-white mb-6"
                    whileHover={{ scale: 1.02 }}
                  >
                    {purposeData.title}
                  </motion.h2>
                  <motion.p 
                    className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
                    whileHover={{ scale: 1.01 }}
                  >
                    {purposeData.description}
                  </motion.p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {purposeData.highlights.map((highlight, index) => (
                    <motion.div 
                      key={index}
                      className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-white font-semibold mb-2">{highlight}</h3>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Core Values Section */}
            <motion.div variants={itemVariants} className="mb-20">
              <div className="text-center mb-16">
                <motion.h2 
                  className="text-3xl lg:text-4xl font-bold text-white mb-6"
                  whileHover={{ scale: 1.02 }}
                >
                  Our Core Values
                </motion.h2>
                <motion.p 
                  className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
                  whileHover={{ scale: 1.01 }}
                >
                  The principles that guide everything we do and shape our culture
                </motion.p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coreValues.map((value, index) => (
                  <motion.div 
                    key={index}
                    className="group relative"
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/8 transition-all duration-300">
                      <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                      <p className="text-white/70 leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div variants={itemVariants} className="mb-20">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
                <div className="text-center mb-12">
                  <motion.h2 
                    className="text-3xl lg:text-4xl font-bold text-white mb-6"
                    whileHover={{ scale: 1.02 }}
                  >
                    Our Impact
                  </motion.h2>
                  <motion.p 
                    className="text-xl text-gray-300 leading-relaxed"
                    whileHover={{ scale: 1.01 }}
                  >
                    Numbers that reflect our commitment to excellence
                  </motion.p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { number: "100%", label: "Client Satisfaction", color: "text-cyan-400" },
                    { number: "24/7", label: "Support Available", color: "text-blue-400" },
                    { number: "5+", label: "Years Experience", color: "text-purple-400" },
                    { number: "50+", label: "Happy Clients", color: "text-cyan-400" }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="text-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className={`text-3xl lg:text-4xl font-semibold ${stat.color} mb-2`}>
                        {stat.number}
                      </div>
                      <div className="text-white/60 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8 lg:p-12">
                <motion.h2 
                  className="text-3xl lg:text-4xl font-bold text-white mb-6"
                  whileHover={{ scale: 1.02 }}
                >
                  Ready to Work Together?
                </motion.h2>
                <motion.p 
                  className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                  whileHover={{ scale: 1.01 }}
                >
                  Let's discuss how we can help you achieve your goals and bring your vision to life.
                </motion.p>
                <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get in Touch
                  </motion.a>
                  {/* <motion.a
                    href="/portfolio"
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 border border-white/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Our Work
                  </motion.a> */}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
