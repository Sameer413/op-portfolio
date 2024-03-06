'use client'
import { motion } from 'framer-motion'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ExperienceImg from '../components/experienceComponent/ExperienceImg'
import ExperienceAccordion from '../components/experienceComponent/ExperienceAccordion'


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
                        <div className="lg:flex mb-12">
                            {/* Experience SVG */}
                            <div className="flex-1">
                                <ExperienceImg />
                            </div>

                            {/* Experience texts */}
                            <div className="flex-1 text-center">
                                <h1 className="text-5xl lg:text-[56px] font-SansRegular font-semibold lg:font-bold mt-14 lg:mt-20 mb-9 leading-[1.1]">
                                    Experience
                                </h1>
                                <h3 className="text-2xl lg:text-3xl font-SansRegular my-4 font-medium text-light-text dark:text-dark-text">
                                    Work, Internship and Volunteership
                                </h3>
                                <p className="text-base lg:text-lg leading-5 lg:leading-[30px] font-medium text-light-secondaryText dark:text-dark-secondaryText">
                                    {"I've completed two internships. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others."}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    {/* Experience accordion */}

                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: .75, ease: "easeInOut" }}
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <ExperienceAccordion />
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default page