import { GridContainer } from "./grid";
import Banner from '/public/header-bg-1 2.svg';
import Image from 'next/image';

export function SectionHero() {
    return (
        <section className="w-full relative mt-14 md:mt-0 ">
            <GridContainer className="flex items-center justify-center">
                    <Image src={Banner} alt="headerbg"  objectFit="cover h-full" />
                    <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                    <div className="w-full md:w-1/3">
                            <div className="text-2xl md:text-5xl">ADALINE!</div>
                            <div className="text-sm md:text-xl mt-4">Uma empresa focada em resultados, simplicidade inovação e comprometimento.</div>
                        </div>
                    </div>
            </GridContainer>
        </section>
    );
}
