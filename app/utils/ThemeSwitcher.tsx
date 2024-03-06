'use client'
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { HiMoon } from 'react-icons/hi';
import { CgSun } from 'react-icons/cg';

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState<boolean>(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className='h-full w-auto flex justify-center items-center'>
            {
                theme === "light" ? (
                    <CgSun
                        className='cursor-pointer object-contain h-full '
                        color='#F9D784'
                        stroke='20'
                        strokeWidth={1}
                        onClick={() => setTheme("dark")}
                    />
                ) : (
                    <HiMoon
                        className='cursor-pointer h-full object-contain'
                        color='#A7A7A7'
                        stroke='20'
                        strokeWidth={1}
                        onClick={() => setTheme("light")}
                    />
                )
            }
        </div>
    )
}

export default ThemeSwitcher