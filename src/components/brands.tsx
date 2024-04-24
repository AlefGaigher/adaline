import { GridContainer } from "./grid";
import Image from 'next/image'

import suzano from '/public/suzano.svg'
import petrobras from '/public/petrobras.svg'
import agazeta from '/public/agazeta.svg'
import incaper from '/public/incaper.svg'

export function Brands() {
    return (
        <GridContainer className="bg-blue-primary pb-12 md:pb-32">
            <div className="text-center text-white text-3xl font-bold pt-8 md:pt-16 pb-12 md:pb-28">
                Marcas que Confiam na Gente
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-2 mx-4 md:mx-28">
                <div className="flex justify-center">
                    <Image src={suzano} alt='icon suzano' width={300} height={300} />
                </div>
                <div className="flex justify-center">
                    <Image src={petrobras} alt='icon petrobras' width={300} height={300} />
                </div>
                <div className="flex justify-center">
                    <Image src={agazeta} alt='icon agazeta' width={300} height={300} />
                </div>
                <div className="flex justify-center pt-4">
                    <Image src={incaper} alt='icon incaper' width={250} height={250} />
                </div>
            </div>
        </GridContainer>
    );
}
