import { GridContainer } from "./grid";
import Image from 'next/image';
import Container from '/public/container.svg';
import Estudo from '/public/estudo.svg';

export function Systems() {
    return (
        <GridContainer className="mb-8 lg:mb-16">
            <div className="grid grid-cols-1 gap-6 mx-4 lg:mx-12 lg:grid-cols-2 md:grid-cols-1 lg:ml-28 lg:mr-28 lg:gap-2">
                <div className="text-center mt-8 lg:mt-16 mb-4 text-title-card text-3xl lg:text-4xl lg:col-span-2">Nossos Sistemas</div>
                <div className="bg-blue-primary rounded-lg text-white p-8 lg:pt-12 lg:pl-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:pb-12">
                    <div>
                        <div className="text-3xl lg:text-4xl">SYSContainer</div>
                        <div className="text-lg lg:text-xl font-light pt-4 lg:pt-5">O SYSContainer é um sistema de gestão de locações que funciona 100% online, com todas as funcionalidades para facilitar os processos do seu negócio.</div>
                        <button className="bg-white rounded-full text-gray-primary mt-8 lg:mt-14 px-6 py-2 text-base lg:text-lg font-semibold hover:bg-white-smoke">Saiba Mais</button>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image src={Container} alt="icon pt br" width={400} height={400} />
                    </div>     
                </div>
                <div className="border border-blue-primary rounded-lg p-8 lg:pt-12 lg:pl-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <div className="text-blue-primary text-3xl lg:text-4xl">Studying Online</div>
                        <div className="text-lg lg:text-xl font-light pt-4 lg:pt-5  text-subtitle-card">O Studying Online é um sistema de gestão escolar e acadêmica que funciona 100% online, com todas as funcionalidades para facilitar os processos da sua instituição.</div>
                        <button className="bg-blue-primary rounded-full text-white mt-8 lg:mt-14 px-6 py-2 text-base lg:text-lg font-semibold hover:bg-blue-secondary">Saiba Mais</button>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image src={Estudo} alt="icon pt br" width={400} height={400} />
                    </div>                    
                </div>
            </div>
        </GridContainer>
    );
}
