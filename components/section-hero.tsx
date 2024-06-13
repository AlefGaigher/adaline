import { GridContainer } from "./grid";
import Banner from '/public/header-bg-1 2.svg';
import Image from 'next/image';

export function SectionHero() {
    return (
        <section className="w-full relative mt-14 md:mt-0 ">
            <GridContainer className="flex items-center justify-center ">
                    <Image src={Banner} alt="headerbg" className="h-full md:h-72 xl:h-full bg-cover"/>
                    <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                    <div className="w-full xl:w-1/2">
                            <div className="text-2xl md:text-5xl font-bold font-oswald tracking-widest leading-loose">BEM VINDO A <span className="text-blue-primary">ADALINE</span></div>
                            <div className="text-sm md:text-3xl md:mt-4 font-open-sans">Uma empresa focada em resultados, simplicidade inovação e comprometimento.</div>
                        </div>
                    </div>
            </GridContainer>
        </section>
    );
}
