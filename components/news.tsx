import { GridContainer } from "./grid";

export function News() {
    return (
        <GridContainer className="pb-12 md:pb-32">
            <div className="text-center text-title-card text-3xl pt-8 md:pt-16 pb-12 md:pb-28">
                Ultimas Notícias
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mx-4 md:mx-8 lg:mx-20 animate-pulse">
                <div className="shadow-lg border h-80 md:h-96"></div>
                <div className="shadow-lg border h-80 md:h-96"></div>
                <div className="shadow-lg border h-80 md:h-96"></div>
                <div className="shadow-lg border h-80 md:h-96"></div>
            </div>
        </GridContainer>
    );
}
