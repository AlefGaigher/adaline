import { GridContainer } from "./grid";
import Image from 'next/image'
import Container from '/public/container.svg'
import Estudo from '/public/estudo.svg'

export function Systems() {
    return (
        <GridContainer className="mb-8 md:mb-16">
            <div className="grid grid-cols-1 gap-6 mx-4 md:mx-12 md:grid-cols-2 md:ml-64 md:mr-64 md:gap-6">
                <div className="text-center mt-8 md:mt-16 mb-4 text-gray-primary text-3xl md:text-4xl md:col-span-2">Nossos Sistemas</div>
                <div className="bg-blue-primary rounded-3xl text-white p-8 md:pt-12 md:pl-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:pb-12">
                    <div>
                        <div className="text-3xl md:text-4xl">SYSContainer</div>
                        <div className="text-xl md:text-2xl font-light pt-4 md:pt-5">O SYSContainer é um sistema de gestão de locações que funciona 100% online, com todas as funcionalidades para facilitar os processos do seu negócio.</div>
                        <button className="bg-white rounded-full text-gray-primary mt-8 md:mt-14 px-6 py-2 text-base md:text-lg font-semibold hover:bg-white-smoke">Saiba Mais</button>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image src={Container} alt="icon pt br" width={500} height={500} />
                    </div>     
                </div>
                <div className="border border-blue-primary rounded-3xl p-8 md:pt-12 md:pl-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <div className="text-blue-primary text-3xl md:text-4xl">Studying Online</div>
                        <div className="text-xl md:text-2xl font-light pt-4 md:pt-5">O Studying Online é um sistema de gestão escolar e acadêmica que funciona 100% online, com todas as funcionalidades para facilitar os processos da sua instituição.</div>
                        <button className="bg-blue-primary rounded-full text-white mt-8 md:mt-14 px-6 py-2 text-base md:text-lg font-semibold hover:bg-blue-secondary">Saiba Mais</button>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image src={Estudo} alt="icon pt br" width={500} height={500} />
                    </div>                    
                </div>
            </div>
        </GridContainer>
    );
}
