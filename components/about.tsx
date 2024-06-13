import { GridContainer } from "./grid";
import Image from 'next/image';
import garota from '/public/garota.png';

export function About() {
    return (
        <GridContainer className="bg-blue-primary text-white">
            <div className="grid grid-cols-1 gap-6 pl-4 pr-4 pt-8 pb-8 xl:grid-cols-2 xl:gap-12 xl:pl-16 xl:pr-16 xl:pt-12 xl:pb-0">
                <div className="order-2 xl:order-1">
                    <Image src={garota} alt="icon pt br" className="w-full md:w-96 xl:w-auto" width={500} height={500} />
                </div>
                <div className="order-1 xl:order-2 xl:pr-6 xl:pb-12 xl:pt-12 md:pl-10 md:pr-10">
                    <div className="text-4xl xl:text-5xl font-semibold">Quem Somos?</div>
                    <div className="text-lg xl:text-xl mt-5 font-light">Somos uma empresa especializada em aliar tecnologia, inovação, criatividade e interatividade, com soluções completas sob medida para o seu negócio. Descubra conosco como sua empresa pode ir mais longe e conquistar um mundo de soluções e realizações. O seu tempo é limitado, então não o desperdice com empresas erradas, a ADALINE é a melhor opção para o desenvolvimento do seu projeto!</div>
                    <div className="text-lg xl:text-xl mt-5 font-light">Nossa missão: Combinamos as melhores práticas de Engenharia de Software, Programação Paralela e Poderosos Algoritmos de uso geral, para construir soluções adaptadas, otimizadas e inteligentes, objetivando extrapolar as expectativas de nossos clientes.</div>
                    <button className="bg-white rounded-full  text-title-card mt-8 xl:mt-12 text-lg xl:text-xl font-semibold pl-6 pr-6 pt-2 pb-2 hover:bg-white-smoke">Saiba Mais</button>
                </div>
            </div>
        </GridContainer>
    );
}
