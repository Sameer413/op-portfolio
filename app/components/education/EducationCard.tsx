import { degrees } from '@/app/data'
import Image from 'next/image'
import React from 'react'
import DegreeIcon from '../../../public/readingImg.png'
import { motion } from "framer-motion";

type DegreeCardProps = {
    title: string,
    subtitle: string,
    logo_path?: string,
    alt_name?: string,
    duration?: string,
    descriptions?: string[],
    website_link?: string,
}

const DegreeCard: React.FC<DegreeCardProps> = ({
    subtitle,
    title,
    alt_name,
    descriptions,
    duration,
    logo_path,
    website_link
}) => {
    return (
        <div className='w-full flex lg:flex-row flex-col justify-center items-center mb-5'>
            <div className="">
                <motion.div
                    whileInView={{ opacity: 1, rotateY: 0 }}
                    initial={{ opacity: 0, rotateY: 180 }}
                    transition={{ duration: .75, ease: "easeInOut", }}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <Image
                        className='mb-4 lg:mb-0 rotate-180 max-w-full max-h-full w-[175px] lg:w-[220px] h-auto rounded-[50%] p-3 border-light-accentColor dark:border-dark-accentColor border lg:mr-12 shadow-sm hover:shadow-light-accentColor hover:text-[rgba(255, 255, 255, 1)]'
                        src={DegreeIcon}
                        alt={alt_name || ''}
                    />
                </motion.div>
            </div>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: .50, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.8 }}
            >
                <div className="border-b border-l border-r rounded-[7px] border-light-accentColor dark:border-dark-accentColor w-full lg:w-[90%] m-2 shadow-sm shadow-light-accentColor dark:shadow-dark-accentColor transition-all duration-200 ease-in-out hover:shadow-md hover:text-white">

                    <div className="lg:flex rounded-t-[7px] p-2 bg-light-accentColor dark:bg-dark-accentColor justify-between">
                        <div className="">
                            <h2 className="text-white text-2xl ml-2 font-semibold">
                                {title}
                            </h2>
                            <h3 className="text-white text-xl ml-2 lg:my-2 font-semibold">
                                {subtitle}
                            </h3>
                        </div>

                        <div className="text-white text-xl lg:text-2xl mr-2 font-semibold">
                            <h3 className="ml-2">
                                {duration}
                            </h3>
                        </div>
                    </div>


                    <div className="rounded-b-[7px] rounded-l-[7px] p-3">
                        {descriptions?.map((sentence, index) => (
                            <p key={index} className="px-3 py-2 text-[17px] font-medium text-light-text dark:text-dark-text">
                                {sentence}
                            </p>
                        ))}

                        {/* <a href="">
                        <button className="text-white bg-light-accentColor dark:bg-dark-accentColor p-4 my-6 w-[200px] h-12 font-bold text-[17px] transition-all duration-200 ease-in-out hover:shadow-light-accentColor hover:shadow-sm float-right mr-6 flex items-center justify-center rounded-md">
                            Visit Website
                        </button>
                    </a> */}
                    </div>

                </div>
            </motion.div>
        </div>
    )
}

const EducationCard = () => {
    return (
        <div className='my-3'>
            <div>
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: .75, ease: "easeInOut" }}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <h1 className='text-4xl lg:text-[40px] leading-[1.1] font-medium lg:font-bold text-center mt-8 mb-6'>
                        Degrees Received
                    </h1>
                </motion.div>
            </div>

            <div className="">
                {degrees?.map((degree, index) => (
                    <DegreeCard
                        key={index}
                        subtitle={degree.subtitle}
                        title={degree.title}
                        alt_name={degree.alt_name}
                        descriptions={degree.descriptions}
                        duration={degree.duration}
                        logo_path={degree.logo_path}
                        website_link={degree.website_link}
                    />
                ))}
            </div>
        </div>
    )
}

export default EducationCard