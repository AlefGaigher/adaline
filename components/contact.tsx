import { GridContainer } from "./grid";
import Image from 'next/image'
import contact from '/public/contact.png'

export function Contact() {
    return (
        <GridContainer className="bg-blue-primary">
            <div className="flex items-center justify-center md:justify-start">
                <div className="w-full md:w-auto relative">
                    <Image src={contact} alt='icon pt br' className="md:w-full md:h-auto h-48 w-auto" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center xl:items-end xl:p-4">
                        <div className="text-center xl:text-left lg:w-1/2 p-4 md:p-0 lg:pr-56 xl:pl-56 lg:pl-0">
                            <div className="text-white text-base md:text-4xl font-bold">Quer saber mais sobre nossos serviços?</div>
                            <div className="text-white text-xs md:text-lg pt-4 ">Nosso consultor está pronto para responder suas perguntas e ajudá-lo a encontrar a melhor estratégia para o seu sucesso.</div>
                            <button className="bg-gray-secondary text-xs md:text-base pt-1 pb-1 pr-3 pl-3 rounded-md mt-6 font-semibold text-title-card hover:bg-white">Entrar em Contato</button>
                        </div>
                    </div>
                </div>
            </div>
        </GridContainer>
    );
}
