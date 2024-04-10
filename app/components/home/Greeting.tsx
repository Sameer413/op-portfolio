'use client'
import { motion } from "framer-motion";
import React from 'react'
import FeelingProud from './FeelingProud';
import { greeting } from '@/app/data';
import SocailMedia from './SocailMedia';

const Greeting: React.FC = () => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            // whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .75, ease: "easeInOut" }}
        >
            <div className='w-full mt-8'>

                <div className="mx-auto lg:flex w-[90%] max-w-[1370px]">
                    <div className="flex-1 text-center lg:text-start">
                        <div className="mt-12 lg:mt-[100px]">
                            <h1 className='text-5xl mb-4 lg:text-[70px] font-bold'>{greeting.title}</h1>

                            <p className="text-lg lg:text-3xl lg:leading-10 font-SansRegular font-semibold text-light-secondaryText dark:text-dark-secondaryText mb-4">
                                <span>{"I'm"} </span>
                                <span className="text-light-accentColor dark:text-dark-accentColor ">
                                    {greeting.full_name}.{" "}
                                </span>
                                {greeting.subTitle}
                            </p>

                            {/* Social Media */}
                            <SocailMedia />

                            <button className="bg-light-accentBright hover:shadow-3xl hover:shadow-light-accentBright text-white px-4 py-3 my-5 rounded w-[200px] h-12 font-bold text-[17px] transition-all duration-200 ease-in-out">
                                Contact Me
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center h-full w-auto">
                        <FeelingProud />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Greeting;