'use client'
import React, { useRef } from 'react'
import { greeting } from '../data'
import { motion, useInView } from 'framer-motion'

const Footer = () => {

    const ref = useRef<HTMLDivElement>(null);

    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref}>
            {/* <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.50 }}
            // className='sticky top-0'
            > */}
            <footer className='py-4'>
                <p className="text-center font-bold font-SansRegular">
                    Made with <span>❤️</span> by {greeting.title2}.
                </p>
            </footer>
            {/* </motion.div> */}
        </div>
    )
}

export default Footer