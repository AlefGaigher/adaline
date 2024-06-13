import { GridContainer } from "./grid";
import Image from 'next/image'
import logo from '/public/ICONE_BRANCO.png'
import { PiMapPinFill } from "react-icons/pi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

export const Footer = () => {
    return (
   
        <footer className="bg-gray-secondary">
            <div className="grid grid-cols-1 md:grid-cols-2 pt-8 md:pt-16 pb-6 md:pb-0 gap-6 md:gap-0">
                <div className="flex flex-col justify-center items-center md:items-start ml-4 md:ml-8 xl:ml-36">
                    <Image src={logo} alt='icon pt br' className="w-24 h-24 md:w-28 md:h-28" />
                    <p className="text-blue-primary font-bold mt-4 md:mt-6">Receba nossos insights!</p>
                    <p className="text-subtitle-card">Preencha o campo abaixo e receba</p>
                    <p className="text-subtitle-card">esse presente no seu e-mail.</p>
                    <div className="flex mt-4 md:mb-6">
                        <input placeholder="Cadastre seu email aqui" type="text" name="name" className="border h-8 rounded-l-md px-2 mr-2 w-36 md:w-48 lg:w-60" /> 
                        <button id="alb" aria-labelledby="labeldiv" title="Cadastrar" className="bg-blue-primary text-white px-3 py-1 rounded-r-md"><TbArrowBadgeRightFilled /></button>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-end md:mr-8 lg:mr-14 xl:mr-36">
                    <div className="text-center md:text-left">
                        <p className="font-extrabold flex items-center pb-2 text-title-card"><PiMapPinFill className="mr-2"/>MATRIZ - ESPÍRITO SANTO</p>
                        <p className="text-subtitle-card">R. Inácio Higino, 185</p>
                        <p className="text-subtitle-card">Praia da Costa - Vila Velha/ES</p>
                        <p className="text-subtitle-card">Ed. Blue Office, Sala 318</p>
                        <p className="pb-4 text-subtitle-card">CEP: 29101-435 - Ver mapa</p>

                        <p className="font-extrabold flex items-center pb-2 text-title-card"><BsFillTelephoneFill className="mr-2"/> CENTRAL DE ATENDIMENTO</p>
                        <p className="text-subtitle-card">+55 (27) 3535-3968</p>
                    </div>
                </div>
            </div>
            <div className="border-b border-gray-300"></div>
            <p className="text-center pb-6 pt-6 text-title-card">© 2024 Adaline. Todos os direitos reservados.</p>
        </footer>
    )
}
