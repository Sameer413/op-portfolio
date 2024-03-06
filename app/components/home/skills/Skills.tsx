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


const Skills = () => {



    return (
        <div className='w-full my-8'>
            <div className='mx-auto w-[90%] max-w-[1370px]'>
                {/* Heading */}
                <div className='w-full flex text-center text-4xl lg:text-[60px] justify-center my-10'>
                    <h1 className='font-SansRegular font-bold'>{"Here's what I do"}</h1>
                </div>


                <div className="flex lg:mt-24 flex-col-reverse lg:flex-row">
                    {/* SVG Image */}
                    <div className="flex-1 mb-5">
                        <FullStackImg />
                    </div>

                    {/* Skills Icons and Title */}
                    <div className="flex-1 mb-10">

                        <div className="lg:ml-12">
                            <h1 className="lg:font-medium py-2 px-2 lg:px-0 text-4xl lg:text-5xl text-center">Full Stack Development</h1>

                            {/* Skills Icons */}
                            <div className="flex flex-wrap gap-4 content-center justify-center">
                                {skills?.softwareSkills?.map((item, index: number) => {
                                    const Icon = item.reactIcon;
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
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Skills;