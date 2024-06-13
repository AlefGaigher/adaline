import Image from 'next/image';
import { Grid3 } from "../../../components/grid-3";
import { MenuGeneric } from "../../../components/menu-generic";
import Escritorio1 from '/public/teste.jpg';
import Escritorio2 from '/public/teste2.jpg';
import Escritorio3 from '/public/teste3.jpg';
import { GridContainer } from '../../../components/grid';

export default function TeamPage() {
    return (
        <main>
           <MenuGeneric Titulo="Equipe" 
           
           Description={
            <div>
                <h2 className='font-semibold'>PROFISSIONAIS ALTAMENTE QUALIFICADOS</h2>
                <p className='mt-3 font-light'>Contamos com profissionais altamente qualificados e especializados em Engenharia de software, Design gráfico, Publicidade, Gerência de projetos e Programação. Nossa infra-estrutura proporciona maior criatividade alavancando a implementação de projetos únicos.</p>
                <h2 className='font-semibold mt-5'>EXPERIÊNCIA EM GRANDES INDUSTRIAS</h2>
                <p className='mt-3 font-light'>Equipe com grande expertise no desenvolvimento de soluções para industrias, tais como: FIBRIA, CMPC, VALE, ARCELOR MITTAL...</p>
            </div>
           }>           
           </MenuGeneric>
        </main>
    );
}
