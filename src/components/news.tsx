import { GridContainer } from "./grid";

export function News() {
    return (
        <GridContainer className="pb-12 md:pb-32">
            <div className="text-center text-gray-primary text-3xl pt-8 md:pt-16 pb-12 md:pb-28">
                Últimas Notícias
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mx-14 md:mx-48">
                <div className="shadow-3xl border h-80 md:h-96"></div>
                <div className="shadow-3xl border h-80 md:h-96"></div>
                <div className="shadow-3xl border h-80 md:h-96"></div>
                <div className="shadow-3xl border h-80 md:h-96"></div>
            </div>
        </GridContainer>
    );
}
