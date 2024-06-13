import Image from 'next/image';
import missao from '/public/missao.png';
import visao from '/public/visao.png';

export function Grid2() {
  return (
    <div className="lg:mx-12 lg:mt-10 my-12">
      <div className="grid grid-cols-1 mx-12 gap-3 lg:grid-cols-2">
        <div className="grid grid-cols-1 text-center">
          <div className="flex items-center justify-center h-full">
            <Image alt="Banner" src={missao} className="h-72 w-auto" />
          </div>
          <p className='text-2xl'>Missão</p>
          <p>
            Combinamos as melhores práticas de Engenharia de Software,
            Programação Paralela e Poderosos Algoritmos de uso geral, para
            construir soluções adaptadas, otimizadas e inteligentes, objetivando
            extrapolar as expectativas de nossos clientes.
          </p>
        </div>
        <div className="grid grid-cols-1 text-center">
          <div className="flex items-center justify-center h-full">
            <Image alt="Banner" src={visao} className="h-72 w-auto" />
          </div>
          <p className='text-2xl'>Visão</p>
          <p>
            Ser uma empresa de Referência no mercado nacional, reconhecida pela
            capacidade Técnica, de Inovação, Qualidade e Satisfação dos clientes.
          </p>
        </div>
      </div>
    </div>
  );
}
