import Image from 'next/image'
import Link from 'next/link';
import LogoImg from '/public/logotop.png'
import IcoPtBr from '/public/pt-br.png'
import { GridContainer } from './grid';

const arrayMenu = [
    'Home',
    'A Empresa',
    'Soluções',
    'Sou Cliente'
]


export function Navbar(){

    const activedStyled= 'text-blue-primary'

    return(
        <nav><header className='w-full flex items-center fixed z-50 p-7 bg-white h-14 text-base shadow  top-0 left-0 right-0 '>
            <GridContainer className='flex items-center justify-between'>
                <Image
                    src={LogoImg}
                    alt="logo"   
                    className="ml-20"              
                />
                <div className='flex items-center'>
                    <nav className='flex mr-6'>
                        {
                            arrayMenu.map((item, index) => (
                                <Link key={index} href="#" className={`px-9 text-black-primary font-bold hover:underline underline-offset-8 hover:text-blue-primary 
                                ${index === 0 ? activedStyled: ''} `}>{item}</Link>                   
                            ))
                        }
                    </nav>
                    <div>
                        <button className='bg-blue-primary text-white pl-7 pr-7 rounded-full pt-1 pb-1 hover:bg-blue-sencondary'>
                            Fale Conosco
                        </button>
                    </div>
                    <div className=' bg-gray-secondary ml-5'>
                        <button className='flex items-center justify-end gap-1'>
                            <Image src={IcoPtBr} alt='icon pt br' className="" />
                            <span >PT</span>
                        </button>
                    </div>
                </div>
            </GridContainer>
        </header></nav>
    );
}