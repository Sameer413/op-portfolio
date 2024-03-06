'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import DegreeIcon from '../../../public/readingImg.png'


const ExperienceAccordion = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className='hover:shadow-3xl hover:shadow-light-accentColor'>
            <div className="border-[0.1px] cursor-pointer rounded-[5px] border-[hsla(0,0%,83%,.397)] transition-all duration-1000 ease-in ">
                <div
                    onClick={() => setOpen(!open)}
                    className="flex justify-between items-center dark:bg-dark-projectCard py-4 px-5 ">
                    <div className="">work</div>
                    <span className='text-2xl text-light-text dark:text-dark-text'>{open ? '-' : '+'}</span>
                </div>

                <div className={`overflow-hidden transition-all duration-1000 ${open ? 'max-h-[1000px]' : 'max-h-0'}`}>
                    {/* Conditionally render content */}
                    {open && (
                        <div className="px-5 py-3 ">
                            {/* Content goes here */}
                            <div className="border-light-accentColor border p-2 rounded-[5px] flex lg:flex-row flex-col justify-center">
                                <div className="lg:w-[20%] p-3 flex justify-center">
                                    <Image
                                        className='h-20 w-auto rotate-180'
                                        src={DegreeIcon}
                                        alt={''}
                                    />
                                </div>

                                {/* Card Details */}
                                <div className="w-full">
                                    <div className="flex lg:justify-between justify-center flex-col lg:flex-row">
                                        {/* Card Heading */}
                                        <div className="flex lg:flex-row flex-col items-center">
                                            <div className='text-[17px] font-bold'>IT Developer</div>
                                            <div className='text-base lg:font-bold font dark:text-dark-secondaryText text-light-secondaryText'>IT Developer</div>
                                        </div>

                                        <div className="flex lg:flex-row flex-col items-center">
                                            <div className='text-base font-medium dark:text-dark-secondaryText text-light-secondaryText'>May 2023 - Ongoing</div>
                                            <div className='text-base font-medium dark:text-dark-secondaryText text-light-secondaryText'>Halifax, Nova Scotia</div>
                                        </div>
                                    </div>

                                    <p className="mt-1 text-justify text-base">
                                        Canada Revenue Agency (CRA) administers tax laws for the Government of Canada and for most provinces and territories, and administers various social and economic benefit and incentive programs delivered through the tax system.
                                    </p>
                                </div>

                            </div>


                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default ExperienceAccordion