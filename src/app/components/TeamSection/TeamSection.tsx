"use client"

import { useScroll } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import { projects } from '@/app/data/visionMission'
import CardReveal from '../CardReveal/CardReveal'

const TeamSection = () => {
  const container = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  const { scrollYProgress } = useScroll({
    target: isMounted && container.current ? container : undefined,
    offset: ['start start', 'end end']
  })

  // useEffect(() => {
  //   setIsMounted(true)
  // }, [])

  useEffect(() => {
    if (!isMounted) return

    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  // if (!isMounted) {
  //   return null
  // }

  return (
    <main ref={container} className='relative mt-[5vh] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 mb-5'>
      <div className="max-w-7xl mx-auto">
        {/* Clean Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${'opacity-100 translate-y-0'}`}
        >
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-sm font-medium mb-8 text-white/80">
            Our Minds
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white mb-6">
            Meet The Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Driving innovation through clear purpose and unwavering commitment to excellence
          </p>
        </div>
      </div>

      {
        projects.map((project, index) => {
          const targetScale = 1 - ((projects.length - index) * 0.05)
          return <CardReveal key={index} i={index} {...project} progress={scrollYProgress} range={[index * 0.25, 1]} targetScale={targetScale} />
        })
      }
    </main>
  )
}
export default TeamSection