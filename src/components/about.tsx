import { GridContainer } from "./grid";
import Image from 'next/image'
import garota from '/public/garota.png'
import IcoAdaline from '/public/ICONE_AZUL.png'

export function About() {
    return (
        <GridContainer className="bg-blue-primary text-white">
            <div className="grid grid-cols-1 gap-6 pl-4 pr-4 pt-8 pb-8 2xl:grid-cols-2 2xl:gap-32 2xl:pl-72 2xl:pr-72 2xl:pt-12 2xl:pb-0">
                <div className="xl:pr-6 xl:pb-12 xl:pt-12">
                    <div className="text-4xl 2xl:text-5xl font-semibold ">Quem Somos?</div>

                    <div className="text-lg 2xl:text-xl mt-5 font-light">Somos uma empresa especializada em aliar tecnologia, inovação, criatividade e interatividade, com soluções completas sob medida para o seu negócio. Descubra conosco como sua empresa pode ir mais longe e conquistar um mundo de soluções e realizações. O seu tempo é limitado, então não o desperdice com empresas erradas, a ADALINE é a melhor opção para o desenvolvimento do seu projeto!</div>

                    <div className="text-lg 2xl:text-xl mt-5 font-light">Nossa missão: Combinamos as melhores práticas de Engenharia de Software, Programação Paralela e Poderosos Algoritmos de uso geral, para construir soluções adaptadas, otimizadas e inteligentes, objetivando extrapolar as expectativas de nossos clientes.</div>
                
                    <button className="bg-white rounded-full text-gray-primary mt-8 2xl:mt-12 text-lg 2xl:text-xl font-semibold pl-6 pr-6 pt-2 pb-2 hover:bg-white-smoke">Saiba Mais</button>
                </div>
                <div className="hidden 2xl:block content-end">
                    <Image src={garota} alt="icon pt br" className="" />
                </div>
            </div>
        </GridContainer>
    );
}
