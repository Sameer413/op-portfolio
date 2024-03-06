'use client'
import { motion } from 'framer-motion';
import React from 'react';
import { greeting } from '../data';

const Footer = () => {

    return (
        <div>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: .75, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.8 }}
            >
                <footer className='py-4'>
                    <p className="text-center font-bold font-SansRegular">
                        Made with <span>❤️</span> by {greeting.title2}.
                    </p>
                </footer>
            </motion.div>
        </div>
    )
}

export default Footer;