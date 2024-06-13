import Image from 'next/image';
import { Grid3 } from "../../../components/grid-3";
import { MenuGeneric } from "../../../components/menu-generic";
import Escritorio1 from '/public/teste.jpg';
import Escritorio2 from '/public/teste2.jpg';
import Escritorio3 from '/public/teste3.jpg';
import { Grid2 } from '../../../components/grid-2';

export default function AboutPage() {
    return (
        <main>
           <MenuGeneric Titulo="Quem Somos" 
           
           Description={
           <div>
                <p>Somos uma empresa especializada em aliar tecnologia, inovação, criatividade e interatividade, com soluções completas sob medida para o seu negócio. Descubra conosco como sua empresa pode ir mais longe e conquistar um mundo de soluções e realizações. O seu tempo é limitado, então não o desperdice com empresas erradas, a ADALINE é a melhor opção para o desenvolvimento do seu projeto!</p>
            </div>
           }>           
            <Grid2/>
           </MenuGeneric>
        </main>
    );
}
