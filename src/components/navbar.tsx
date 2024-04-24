"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoImg from '/public/logotop.png';
import IcoPtBr from '/public/pt-br.png';
import { GridContainer } from './grid';

const arrayMenu = ['Home', 'A Empresa', 'Soluções', 'Sou Cliente'];

export const MenuMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuOpenMobile] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    
    return (
        <nav>
            <header className='w-full flex items-center fixed z-50 p-7 bg-white h-14 text-base shadow top-0 left-0 right-0 '>
                <GridContainer className='flex items-center justify-between'>
                    <Image src={LogoImg} alt="logo" className="ml-20" />
                    <div className='flex items-center'>
                        <nav className={`flex mr-6 ${menuOpenMobile ? 'block' : 'hidden'} md:block`}>
                            {arrayMenu.map((item, index) => (
                                <Link key={index} href="#" className={`px-9 text-black-primary font-bold hover:underline underline-offset-8 hover:text-blue-primary ${index === 0 ? 'md:mx-6' : 'md:mx-0 mx-2'} `}>
                                    {item}
                                </Link>
                            ))}
                        </nav>
                        <div className={`${menuOpenMobile ? 'block' : 'hidden'} md:block`}>
                            <button className='bg-blue-primary text-white pl-7 pr-7 rounded-full pt-1 pb-1 hover:bg-blue-sencondary' id="bb" aria-label="Aria Name" aria-labelledby="labeldiv" title="Title">
                                Fale Conosco
                            </button>
                        </div>
                        <div className={` bg-gray-secondary ml-5 ${menuOpenMobile ? 'block' : 'hidden'} md:block`}>
                            <button className='flex items-center justify-end gap-1'  id="aa" aria-label="Aria Name" aria-labelledby="labeldiv" title="Title">
                                <Image src={IcoPtBr} alt='icon pt br' className="" />
                                <span >PT</span>
                            </button>
                        </div>
                        <button onClick={toggleMenu} className='md:hidden'  id="aa" aria-label="Aria Name" aria-labelledby="labeldiv" title="Title">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </GridContainer>
            </header>

            <div className={`md:hidden bg-white fixed right-0 top-14 w-56 h-full z-40 ${menuOpen ? 'block' : 'hidden'} shadow-3xl`}>
                {arrayMenu.map((item, index) => (
                    <div className='grid ml-8 mt-5 font-semibold'>
                        <Link key={index} href="#">
                            {item}
                        </Link>
                    </div>      
                ))}
                <button className='bg-blue-primary text-white pl-7 pr-7 rounded-full pt-1 pb-1 ml-5 mt-5 hover:bg-blue-sencondary'  id="aa" aria-label="Aria Name" aria-labelledby="labeldiv" title="Title">
                    Fale Conosco
                </button>
            </div>
        </nav>
    );
    
};

