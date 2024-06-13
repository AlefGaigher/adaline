import { GridContainer } from "./grid";
import Image from 'next/image';
import suzano from '/public/suzano.png';
import petrobras from '/public/petrobras.png';
import agazeta from '/public/agazeta.png';
import incaper from '/public/incaper.png';

export function Brands() {
    return (
        <GridContainer className="bg-blue-primary pb-12 md:pb-16">
            <div className="text-center text-white text-3xl font-bold pt-8 md:pt-16 pb-12 md:pb-6">
                Marcas que confiam na gente
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-6 mx-4 md:mx-6">
                
                <div className="flex justify-center">
                    <Image src={suzano} alt='icon suzano'/>
                </div>
                <div className="flex justify-center">
                    <Image src={petrobras} alt='icon petrobras' />
                </div>
                <div className="flex justify-center">
                    <Image src={agazeta} alt='icon agazeta'/>
                </div>
                <div className="flex justify-center">
                    <Image src={incaper} alt='icon incaper'/>
                </div>
                
            </div>
        </GridContainer>
    );
}
