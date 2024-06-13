import Image from 'next/image';
import { Grid3 } from "../../../components/grid-3";
import { MenuGeneric } from "../../../components/menu-generic";
import Escritorio1 from '/public/teste.jpg';
import Escritorio2 from '/public/teste2.jpg';
import Escritorio3 from '/public/teste3.jpg';
import { GridContainer } from '../../../components/grid';

export default function CompanyPage() {
    return (
        <main>
           <MenuGeneric Titulo="A Empresa" 
           
           Description={
           <div>
                <p>Fundada em 2015 no estado do Espirito Santo - BR, a ADALINE surgiu com o objetivo de suprir a necessidade de softwares de qualidade para pequenas e médias empresas no âmbito nacional. Oferecendo soluções inovadoras e uma equipe de profissionais qualificados e competentes, amparados pelo forte investimento em tecnologias de ponta e treinamentos.</p>
                <p className='pt-5'>Em 2016, com foco em inovação, a empresa constantemente lançou novos produtos e serviços no mercado, ganhando expressividade nas áreas de locações, gestão e pesquisa, com os sistemas: Syscontainer para locação de contêineres, banheiros ecológicos e outros produtos, Lionnote para administração de condomínios, Adaline Search com um avançado sistema de inteligência artificial combinando Crawler e Scraping para entender e exibir conteúdo relevante nos motores de busca, GoLine para gestão de construções, Studying Online para gestão de aulas e ensino a distância.</p>
                <p className='pt-5'>No final de 2016 até o final de 2017, parte da equipe foi alocada para desenvolvimento de soluções PIMs na FIBRIA MS [empresa brasileira com forte presença no mercado global de produtos florestais]. Neste perído a ADALINE teve a oportunidade de conhecer e propor soluções para o mercado de celulose. Entregamos mais de 159 telas processbook, 62 relatórios, 1.116 KPIs, aproximadamente 20.757 tags no PI System, 10 drivers de comunicação e a oportunidade de participar do primeiro viveiro automatizado de mudas de eucalipto do mundo integrado ao PIMs.</p>
            </div>
           }>           
        
            <Grid3 title='Imagens'>
                <Image alt="Banner" src={Escritorio1}></Image>
                <Image alt="Banner" src={Escritorio2}></Image>
                <Image alt="Banner" src={Escritorio3}></Image>
            </Grid3>
           </MenuGeneric>
        </main>
    );
}
