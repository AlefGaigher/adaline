
import { MenuGeneric } from "../../../components/menu-generic";
import "../globals.css";
import { CardService } from "../../../components/cards-services";
import { services } from '../../../components/services-list';

export default function CompanyPage() {
    return (
        <main>
           <MenuGeneric Titulo="Soluções" 
           Description={
            <div className="col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {services.map((service, index) => (
                        <CardService 
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
           } >
           </MenuGeneric>
        </main>
    );
}
