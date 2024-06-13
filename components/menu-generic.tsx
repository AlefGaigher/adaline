// MenuGeneric.tsx
import Image from 'next/image';
import Banner from '/public/banner.png';
import Empresa_func from '/public/empresa_func.png';
import { ReactNode } from 'react';

interface PageProps {
    children?: ReactNode;
    Titulo?: string;
    Description?: ReactNode;
}

export function MenuGeneric({ children, Titulo, Description }: PageProps) {
    return (
        <div className="relative">
            {/* Banner */}
            <div className="relative">
                <Image alt="Banner" src={Banner} />
            </div>
            {/* Linha azul */}
            <div className="border-b-8 border-blue-primary col-span-2"></div>
            {/* Empresa */}
            <div className="md:absolute top-16 lg:top-80 lg:left-1/4 md:top-1/4 md:left-1/4 transform lg:-translate-x-1/4 lg:-translate-y-1/2 md:-translate-x-1/4 md:-translate-y-60 z-10 grid grid-cols-2 gap-4">
                <div className="md:relative md:col-span-1 flex md:justify-end col-span-2 ">
                    <Image alt="empresa" src={Empresa_func} height={400} />
                </div>
                <div className="col-span-2 md:col-span-1 flex flex-col text-center lg:pl-5 md:items-start md:text-white text-title-card lg:justify-center">
                    <h2 className="text-4xl md:text-5xl font-bold">{Titulo}</h2>                    
                </div>              
            </div>
            
            <div className='grid grid-cols-1 mx-16 md:mx-0 md:grid-cols-8 gap-4 lg:pt-9 md:pt-10'>
                <div className='lg:col-span-3'></div>
                <div className=' lg:col-span-4 lg:ml-9 lg:text-xl md:ml-12'>{Description}</div>
            </div>
            {/* Children */}
            <div className="lg:mb-24 lg:mt-36 mt-40">
                {children}
            </div>
        </div>
    );
}
