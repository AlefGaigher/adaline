"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoImg from '/public/logotop.png';
import IcoPtBr from '/public/pt-br.png';
import { usePathname } from 'next/navigation';
import { menuItems } from './menu-items';
import { IoIosArrowDown } from "react-icons/io";




export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuOpenMobile] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleAccordion = (index: any) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const handleMouseEnter = (index: any) => {
        setActiveMenu(index);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    const pathname = usePathname();
    const whatsappNumber = '+552735353968';

    return (
        <div>
            {/* Navbar Desktop */}
            <nav className="w-full flex items-center fixed z-50 p-7 bg-white h-14 text-base shadow top-0 left-0 right-0" onMouseLeave={() => { handleMouseLeave(); handleAccordion(activeAccordion);}}>
                <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
                    <div className="flex-shrink-0">
                        <Image src={LogoImg} alt="logo" className="lg:ml-16" height={30}/>
                    </div>
                    {/* Items do Menu */}
                    <div className="flex items-center justify-end w-full">
                        <div className="hidden md:flex lg:ml-auto lg:mr-6">
                            <div className="flex items-baseline space-x-14">
                                {menuItems.map((item, index) => (
                                    <div key={index} className="relative">
                                        <Link href={item.href}>
                                            <div className="flex justify-between items-center text-title-card font-semibold hover:underline underline-offset-8 hover:text-blue-primary" onMouseEnter={() => handleMouseEnter(index)}>
                                                <span className='' onMouseEnter={() => handleAccordion(index)}>{item.title}</span>
                                                {item.submenu && (
                                                    <IoIosArrowDown className={`transition-transform transform ${activeAccordion === index ? 'rotate-180' : 'rotate-0'}`} />
                                                )}
                                            </div>
                                        </Link>
                                        {activeMenu === index && item.submenu && (
                                            <div className="absolute z-10 bg-white pt-4 w-32 rounded-md shadow-lg">
                                                {item.submenu.map((submenuItem, submenuIndex) => (
                                                    <Link key={submenuIndex} href={submenuItem.href}>
                                                        <span className="block px-4 py-2 text-sm text-title-card hover:bg-blue-primary hover:text-white hover:rounded-b-md">
                                                            {submenuItem.title}
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`${menuOpenMobile ? 'block' : 'hidden'} md:block`}>
                            <button className='bg-blue-primary text-white lg:pl-7 lg:pr-7 rounded-full lg:pt-1 lg:pb-1 md:pl-2 md:pr-2 hover:bg-blue-sencondary ml-4' onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}>
                                Fale Conosco
                            </button>
                        </div>
                    </div>
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
            </nav>



            {/* Navbar Mobile */}
            <div className={`md:hidden bg-white fixed right-0 top-14 w-56 h-full z-40 ${menuOpen ? 'block' : 'hidden'} shadow-3xl`}>
                {menuItems.map((item, index) => (
                    <div key={index} className="font-semibold">
                        <Link href={item.href}>
                            <div className="flex justify-between items-center px-8 py-4">
                                <span>{item.title}</span>
                                {item.submenu && (
                                    <IoIosArrowDown className={`transition-transform transform ${activeAccordion === index ? 'rotate-180' : 'rotate-0'}`} onClick={() => handleAccordion(index)}/>
                                )}
                            </div>
                        </Link>
                        {item.submenu && index === activeAccordion && (
                            <div className="pl-8">
                                {item.submenu.map((submenuItem, submenuIndex) => (
                                    <Link key={submenuIndex} href={submenuItem.href}>
                                        <div className="px-8 py-4 text-sm hover:bg-blue-100">{submenuItem.title}</div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                <button className="bg-blue-primary text-white pl-7 pr-7 rounded-full pt-1 pb-1 ml-5 mt-5 hover:bg-blue-sencondary" onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}>
                    Fale Conosco
                </button>
            </div>
        </div>
    );
};


