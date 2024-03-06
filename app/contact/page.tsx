'use client'
import { motion } from 'framer-motion'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BlogImg from '../components/contactCompent/BlogImg'
import SocailMedia from '../components/home/SocailMedia'
import Image from 'next/image'
import Portrait from '../../public/avatar.png'


const page = () => {
    return (
        <div>
            <Header />

            <div className="w-full mt-8">
                <div className="mx-auto w-[90%] max-w-[1370px]">
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: .75, ease: "easeInOut" }}
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <div className="lg:flex mb-20">
                            {/* My Image */}
                            <div className="flex-1 flex items-center justify-center">
                                <Image
                                    className='shadow-3xl shadow-[#353535] rounded max-w-52 lg:max-w-72 h-auto'
                                    src={Portrait}
                                    alt='MyImage'
                                />
                            </div>

                            {/* contact texts */}
                            <div className="flex-1 text-center">
                                <h1 className="text-5xl lg:text-[56px] font-SansRegular font-semibold lg:font-bold mt-14 lg:mt-20 mb-9 leading-[1.1]">
                                    Contact Me
                                </h1>
                                <p className="text-base lg:text-lg leading-5 lg:leading-[30px] font-medium text-light-secondaryText dark:text-dark-secondaryText lg:mx-10">
                                    {"You can contact me at the places mentioned below. I will try to get back to you as fast as I can."}
                                </p>

                                <div className="flex items-center justify-center mt-6">
                                    <SocailMedia />
                                </div>

                                <button className='mt-6 p-4 rounded bg-light-accentColor dark:bg-dark-accentColor hover:shadow-3xl hover:shadow-light-accentColor dark:shadow-dark-accentColor transition-all duration-200 ease-in-out font-bold text-base cursor-pointer text-white'>
                                    See My Resume
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Blog Section */}
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: .75, ease: "easeInOut" }}
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <div className="lg:flex mb-12">

                            {/* Blog texts */}
                            <div className="flex-1 text-center mb-10">
                                <h1 className="text-4xl lg:text-[56px] font-SansRegular font-semibold lg:font-bold mt-14 lg:mt-20 mb-9 leading-[1.1]">
                                    My Medum Profile
                                </h1>
                                <p className="text-base lg:text-lg leading-5 lg:leading-[30px] font-medium text-light-secondaryText dark:text-dark-secondaryText lg:mx-10">
                                    {"I don't blog frequently but when I do something awesome, I do try my best to write a blog about it."}
                                </p>

                                <button className='mt-10 p-4 rounded bg-light-accentColor dark:bg-dark-accentColor hover:shadow-3xl hover:shadow-light-accentColor dark:shadow-dark-accentColor transition-all duration-200 ease-in-out font-bold text-base cursor-pointer text-white'>
                                    My Medum Profile
                                </button>
                            </div>

                            {/* Blog SVG */}
                            <div className="flex-1">
                                <BlogImg />
                            </div>


                        </div>
                    </motion.div>


                </div>

            </div>

            <Footer />
        </div>
    )
}

export default page