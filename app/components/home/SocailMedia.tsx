import { socialMediaLinks } from '@/app/data'
import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaGithub, FaGooglePlusG, FaInstagram } from 'react-icons/fa'
import { TiSocialLinkedin } from 'react-icons/ti'

const SocailMedia: React.FC = () => {
    return (
        <div className='text-[2em] text-center lg:text-start'>
            <a
                className=''
                target='_blank'
                href={socialMediaLinks.github}
            >
                <FaGithub className='rounded-[2.6rem] text-white inline-block h-[2.6rem] leading-10 mx-1 relative text-center w-10 mb-3 bg-[#333] transition-all duration-200 ease-in-out hover:text-white hover:shadow-3xl hover:shadow-[#333] p-[6px]' />
            </a>

            <a
                className=''
                target='_blank'
                href={socialMediaLinks.linkedin}
            >
                <TiSocialLinkedin className='rounded-[2.6rem] text-white inline-block h-[2.6rem] leading-10 mx-1 relative text-center w-10 mb-3 bg-[#0e76a8] transition-all duration-200 ease-in-out hover:text-white hover:shadow-3xl hover:shadow-[#0e76a8] p-[6px]' />
            </a>

            <a
                className=''
                target='_blank'
                href={socialMediaLinks.gmail}
            >
                <FaGooglePlusG className='rounded-[2.6rem] text-white inline-block h-[2.6rem] leading-10 mx-1 relative text-center w-10 mb-3 bg-[#ea4335] transition-all duration-200 ease-in-out hover:text-white hover:shadow-3xl hover:shadow-[#ea4335] p-[6px]' />
            </a>

            <a
                className=''
                target='_blank'
                href={socialMediaLinks.instagram}
            >
                <FaInstagram className='rounded-[2.6rem] text-white inline-block h-[2.6rem] leading-10 mx-1 relative text-center w-10 mb-3 bg-[#e4405f] transition-all duration-200 ease-in-out hover:text-white hover:shadow-3xl hover:shadow-[#e4405f] p-[6px]' />
            </a>
        </div>
    )
}

export default SocailMedia;