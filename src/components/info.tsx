import { GridContainer } from "./grid";
import { Services } from "./services";

export function Info(){
    return(
        <GridContainer>
          <div className="grid grid-cols-1 grid-flow-row-dense pb-8 pt-8 mr-6 ml-6 sm:grid-cols-3 sm:gap-20 sm:grid-flow-row-dense sm:pb-16 sm:pl-20 sm:pt-12 sm:pr-20 " >
            <div className="text-center md:text-left mb-12"> 
                <div className="text-4xl text-blue-primary font-bold">Conheça os <p/>nossos serviços!</div>
                <div className="text-xl mt-4 md:pr-16">Com a Adaline, sua empresa estará preparada para alcançar um futuro próspero. Descubra nossas soluções inovadoras e transforme seus sonhos em realidade. <span className="text-blue-primary">Entre em contato conosco hoje mesmo!</span></div>
                <button className="bg-blue-primary rounded-full text-white mt-12 text-lg font-extralight pl-7 pr-7 pt-2 pb-2 hover:bg-blue-sencondary">Saiba Mais</button>
            </div> 
            <Services/>
          </div>
        </GridContainer>

        
    )
}