"use client"
import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const CardReveal = ({ i, title, description, src, link, color, range, targetScale, progress }: any) => {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })
    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
    const scale = useTransform(progress, range, [1, targetScale])

    return (
        <div ref={container} className='cardContainer h-screen flex items-center justify-center sticky top-0 px-4 sm:px-6 md:px-8'>
            <motion.div 
                className='card flex flex-col relative h-[700px] sm:h-[600px] md:h-[500px] w-full max-w-[1100px] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg' 
                style={{ scale, background: color, top: `calc(-5vh + ${i * 25}px)`, opacity: 1 }}
            >
                <h2 className='text-center m-0 text-lg sm:text-xl font-semibold text-white'>{title}</h2>
                <div className='flex flex-col md:flex-row h-full mt-6 sm:mt-8 md:mt-12 gap-6 sm:gap-8 md:gap-12'>
                    <div className='desc w-full md:w-[40%] relative top-0 md:top-[10%]'>
                        <p className='text-sm sm:text-base text-white/90 leading-relaxed first-letter:text-xl sm:first-letter:text-2xl first-letter:font-bold first-letter:mr-2'>{description}</p>
                        <motion.div 
                            className='flex items-center gap-2 group cursor-pointer mt-4'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link 
                                href={link} 
                                target='_blank' 
                                rel="noopener noreferrer"
                                className='text-sm font-medium text-white hover:text-white/80 transition-colors duration-200 group-hover:text-white bg-white/20 px-3 py-1 rounded-full'
                            >
                                See more
                            </Link>
                            <motion.svg 
                                width="20" 
                                height="12" 
                                viewBox="0 0 22 12" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                                className='text-white group-hover:text-white/80 transition-colors duration-200'
                                animate={{ x: [0, 4, 0] }}
                                transition={{ 
                                    duration: 1.5, 
                                    repeat: Infinity, 
                                    ease: "easeInOut" 
                                }}
                            >
                                <path 
                                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" 
                                    fill="currentColor" 
                                />
                            </motion.svg>
                        </motion.div>
                    </div>
                    <div className="imgContainer relative w-full md:w-[50%] h-48 sm:h-56 md:h-full rounded-2xl sm:rounded-3xl overflow-hidden">
                        <motion.div style={{ scale: imageScale }} className='w-full h-full'>
                            <Image 
                                fill 
                                src={`/images/${src}`} 
                                alt={`${title} profile image`}
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default CardReveal