import { GridContainer } from "./grid";
import { MdArrowBackIos, MdArrowForwardIos  } from "react-icons/md";
import Image from 'next/image'
import Rapaz from '/public/rapaz.png'

export function Testimonial(){
    return(
        <GridContainer className="pb-16">
            <div className="grid grid-cols-12 md:grid-cols-6">
                <div className="md:col-start-1 flex justify-start items-center text-4xl ml-6 md:text-blue-primary"><MdArrowBackIos /></div>
                <div className="col-span-10 md:col-span-4 grid md:grid-cols-2">
                    <div><Image src={Rapaz} alt="rapaz" /></div>
                    <div className="pt-5 md:pt-36">
                        <div className="text-2xl md:text-4xl">Depoimento  ⭐⭐⭐⭐⭐</div>
                        <div className="font-light mt-1 md:font-extralight">Fulano de tal - Cargo da empresa tal</div>
                        <div className="mt-5 md:mt-9">Lorem ipsum nec taciti nec etiam torquent phasellus, aenean nec conubia justo litora interdum, netus cras ad dictum pretium vivamus. per primis commodo nibh ultricies habitasse augue ac, id ornare lacinia interdum et commodo condimentum, nulla consectetur rhoncus velit eget tincidunt. lacus pulvinar rutrum est primis pellentesque facilisis congue condimentum lobortis dolor, lacus habitasse aenean a mollis risus quis aptent id lacinia elementum, pretium aenean nisi sagittis diam porta gravida curabitur netus. vivamus tortor lectus sapien quis nullam aenean duis dolor, lorem gravida est pharetra in pellentesque at, augue lectus aliquam sapien venenatis accumsan tincidunt.</div>
                    </div>
                </div>
                <div className="md:col-start-6 flex justify-end items-center text-4xl mr-6 md:text-blue-primary"><MdArrowForwardIos /></div>
            </div>
        </GridContainer>
    )
}
