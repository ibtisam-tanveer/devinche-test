'use client'
import React, { useState, useEffect, useRef } from 'react'

const VisionMissionSection = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [scrollY, setScrollY] = useState(0)
    const sectionRef = useRef<HTMLDivElement>(null)
    const visionCardRef = useRef<HTMLDivElement>(null)
    const missionCardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Check if we're in the browser environment
        if (typeof window === 'undefined') return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section 
            ref={sectionRef}
            className="min-h-screen py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 relative"
        >
            {/* Minimal Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-violet-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Clean Section Header */}
                <div 
                    className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-sm font-medium mb-8 text-white/80">
                        Our Foundation
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-white mb-6">
                        Vision & Mission
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                        Driving innovation through clear purpose and unwavering commitment to excellence
                    </p>
                </div>

                {/* Cards Container */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Vision Card */}
                    <div 
                        ref={visionCardRef}
                        className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                        <div className="group relative h-full">
                            {/* Card Content */}
                            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 lg:p-10 h-full hover:bg-white/8 transition-all duration-300">
                                {/* Icon */}
                                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                                    Our Vision
                                </h3>

                                {/* Description */}
                                <p className="text-white/70 leading-relaxed text-lg mb-6">
                                    To revolutionize the digital landscape by creating innovative solutions that empower businesses and individuals to achieve their full potential in an ever-evolving technological world.
                                </p>

                                {/* Features */}
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
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div 
                        ref={missionCardRef}
                        className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                        <div className="group relative h-full">
                            {/* Card Content */}
                            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 lg:p-10 h-full hover:bg-white/8 transition-all duration-300">
                                {/* Icon */}
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                                    Our Mission
                                </h3>

                                {/* Description */}
                                <p className="text-white/70 leading-relaxed text-lg mb-6">
                                    To deliver cutting-edge digital solutions with uncompromising quality, exceptional user experiences, and unwavering commitment to our clients' success through innovative technology and dedicated service.
                                </p>

                                {/* Features */}
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
                        </div>
                    </div>
                </div>

                {/* Bottom Stats */}
                <div 
                    className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <div className="text-center">
                        <div className="text-3xl lg:text-4xl font-semibold text-cyan-400 mb-2">100%</div>
                        <div className="text-white/60 text-sm">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl lg:text-4xl font-semibold text-blue-400 mb-2">24/7</div>
                        <div className="text-white/60 text-sm">Support Available</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl lg:text-4xl font-semibold text-purple-400 mb-2">5+</div>
                        <div className="text-white/60 text-sm">Years Experience</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl lg:text-4xl font-semibold text-cyan-400 mb-2">50+</div>
                        <div className="text-white/60 text-sm">Happy Clients</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VisionMissionSection
