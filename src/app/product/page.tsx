import Image from 'next/image';
import { Grid3 } from "../../../components/grid-3";
import { MenuGeneric } from "../../../components/menu-generic";
import Escritorio1 from '/public/teste.jpg';
import Escritorio2 from '/public/teste2.jpg';
import Escritorio3 from '/public/teste3.jpg';
import { GridContainer } from '../../../components/grid';
import { Systems } from '../../../components/systems';

export default function ProductPage() {
    return (
        <main>
           <MenuGeneric Titulo="Produtos" >
            <Systems/>
           </MenuGeneric>
        </main>
    );
}
