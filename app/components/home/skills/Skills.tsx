'use client'
import React from 'react'
import FullStackImg from './FullStackImg';
import { skills } from '@/app/data';
import {
    BiLogoCPlusPlus,
    FaHtml5,
    FaCss3,
    FaJava,
    FaReact,
    FaNodeJs,
    FaAndroid,
    FaBootstrap,
    FaGithub,
    FaGitAlt,
    IoLogoJavascript,
    IoLogoFirebase,
    SiPhp,
    SiSupabase,
    SiTypescript,
    SiRazorpay,
    SiTailwindcss,
    SiReactquery,
    SiChakraui,
    TbBrandNextjs,
    TbBrandReactNative,
    TbBrandMysql,
    TbBrandRedux,
    DiMongodb,
    BiLogoPostgresql,
} from './SkillIcons';
import { motion } from "framer-motion";
import { IconType } from 'react-icons';


const Skills = () => {

    return (
        <div className='w-full my-8'>
            <div className='mx-auto w-[90%] max-w-[1370px]'>
                {/* Heading */}
                {/* Animation for the heading text */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: .75, ease: "easeInOut" }}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <div className='w-full flex text-center text-4xl lg:text-[60px] justify-center my-10'>
                        <h1 className='font-SansRegular font-bold'>{"Here's what I do"}</h1>
                    </div>
                </motion.div>

                <div className="flex lg:mt-24 flex-col-reverse lg:flex-row">
                    {/* SVG Image */}

                    <div className="flex-1 mb-5">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -70 }}
                            transition={{ duration: .70, ease: "easeInOut" }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <FullStackImg />
                        </motion.div>
                    </div>



                    {/* Skills Icons and Title */}
                    <div className="flex-1 mb-10">

                        <div className="lg:ml-12">
                            {/* Heading Animate */}
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 20 }}
                                transition={{ duration: .35, ease: "easeInOut" }}
                                viewport={{ once: true, amount: 0.8 }}
                            >
                                <h1 className="lg:font-medium py-2 px-2 lg:px-0 text-4xl lg:text-5xl text-center">Full Stack Development</h1>
                            </motion.div>



                            {/* Skills Icons */}
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: .50, ease: "easeInOut" }}
                                viewport={{ once: true, amount: 0.8 }}
                            >
                                <div className="flex flex-wrap gap-4 content-center justify-center">
                                    {skills?.softwareSkills?.map((item, index: number) => {
                                        const Icon: IconType = item.reactIcon;
                                        return (
                                            <div key={index} className='cursor-pointer h-5 w-auto my-5'>
                                                <Icon
                                                    color={item.style.color}
                                                    className={`text-5xl bg-[${item.style.backgroundColor}] rounded-[${item.style.borderRadius}]`}
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                            </motion.div>
                        </div>

                        {/* Texts */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: .75, ease: "easeInOut" }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <div className="mt-10 lg:ml-14 w-full">
                                {skills?.skillsDescription.map((skillSentence, index) => (
                                    <p key={index} className='text-light-secondaryText dark:text-dark-secondaryText text-base lg:text-lg my-2'>
                                        {skillSentence}
                                    </p>
                                ))}
                            </div>
                        </motion.div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Skills;