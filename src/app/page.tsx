import { Button } from "@/components/Button";
import Image from "next/image";
import { MissionIcon } from "@/components/MissionIcon";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full bg-[#fcfcfc]">
      {/* Hero Section */}
      <section id="home" className="relative bg-[url('/images/hero-bg.png')] no-repeat bg-cover bg-center h-screen flex flex-col items-center justify-center pb-[322px] px-[124px] overflow-hidden">

        <div className="relative z-10 flex flex-col gap-8 items-center justify-center w-[648px]">
          <div className="h-20 w-[88px] relative">
            <Image
              src="/images/logo-ubuntukids.png"
              alt="Ubuntu Kids Logo"
              fill
              className="object-cover"
            />
          </div>

          <h1 className="font-bebas-neue text-5xl leading-[1.1] text-[#eee] text-center whitespace-pre-wrap">
            Football Kids from Africa. Eu sou porque nós somos
          </h1>

          <div className="flex gap-2 items-end justify-center w-full">
            <Button>
              Comprar agora
            </Button>
            <Button className="bg-[#eee] border-[3px] border-[#eee] border-b-[3px] border-r-[3px] rounded-[24px] h-[52px] px-9 py-5 flex items-center justify-center gap-2 font-bebas-neue text-2xl text-[#111]">
              Visualizar gráfico
            </Button>
          </div>
        </div>
      </section>

      <div className="flex flex-col relative">
        <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-evenly opacity-10">
          <div className="w-px h-full bg-[#202020]" />
          <div className="w-px h-full bg-[#202020]" />
          <div className="w-px h-full bg-[#202020]" />
          <div className="w-px h-full bg-[#202020]" />
          <div className="w-px h-full bg-[#202020]" />
          <div className="w-px h-full bg-[#202020]" />
        </div>

        <section id="about" className="relative bg-white flex flex-col gap-[44px] items-start justify-center overflow-hidden p-[124px]">
          {/* About Movement */}
          <div className="flex gap-8 items-center justify-end w-full z-20">
            <div className="bg-[#f9f9f9] border-4 border-[#202020] border-b-4 border-l border-r-4 border-t rounded-xl flex flex-col gap-8 items-center justify-center leading-[1.1] px-8 py-11 text-[#202020] text-center w-[607px] shrink-0">
              <h2 className="font-bebas-neue text-5xl leading-[1.1]">
                Sobre o movimento
              </h2>
              <p className="font-montserrat font-medium text-xl whitespace-pre-wrap min-w-full w-[min-content]">
                Ubuntu é sobre comunidade. Um projeto que transforma união em impacto real — dentro e fora do campo.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center min-h-px min-w-px px-8 py-11 rounded-xl">
              <div className="h-[213px] w-[222px] relative shrink-0">
                <Image
                  src="/images/bola-africana.png"
                  alt="Bola Africana"
                  fill
                  className="object-cover pointer-events-none"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-8 items-center justify-end w-full z-20">
            <div className="flex-1 flex flex-col items-center justify-center min-h-px min-w-px px-8 py-11 rounded-xl">
              <div className="h-[213px] w-[222px] relative shrink-0">
                <Image
                  src="/images/bola-africana.png"
                  alt="Bola Africana"
                  fill
                  className="object-cover pointer-events-none"
                />
              </div>
            </div>
            <div className="bg-[#f9f9f9] border-4 border-[#202020] border-b-4 border-l-4 border-r border-t rounded-xl flex flex-col gap-8 items-center justify-center px-8 py-11 w-1/2 shrink-0">
              <h2 className="font-bebas-neue text-5xl leading-[1.1] text-[#202020] text-center">
                Missão
              </h2>

              <div className="flex flex-col gap-[12px] items-center justify-center w-full shrink-0">
                <div className="flex gap-2 items-center shrink-0">
                  <MissionIcon />
                  <p className="font-montserrat font-bold text-xl text-[#202020] text-center leading-[1.1]">
                    Doações:
                  </p>
                </div>
                <p className="font-montserrat font-medium text-xl text-[#202020] text-center whitespace-pre-wrap min-w-full w-[min-content] leading-[1.1]">
                  Parte do movimento vira suporte direto e mensurável
                </p>
              </div>

              <div className="flex flex-col gap-[12px] items-center justify-center w-full shrink-0">
                <div className="flex gap-2 items-center justify-center shrink-0">
                  <MissionIcon />
                  <p className="font-montserrat font-bold text-xl text-[#202020] text-center leading-[1.1]">
                    Transmissões
                  </p>
                </div>
                <p className="font-montserrat font-medium text-xl text-[#202020] text-center whitespace-pre-wrap min-w-full w-[min-content] leading-[1.1]">
                  Visibilidade para histórias, projetos e conquistas
                </p>
              </div>

              <div className="flex flex-col gap-[12px] items-center justify-center w-full shrink-0">
                <div className="flex gap-2 items-center justify-center shrink-0">
                  <MissionIcon />
                  <p className="font-montserrat font-bold text-xl text-[#202020] text-center leading-[1.1]">
                    Visibilidade
                  </p>
                </div>
                <p className="font-montserrat font-medium text-xl text-[#202020] text-center whitespace-pre-wrap min-w-full w-[min-content] leading-[1.1]">
                  Mais alcance, mais apoio, mais oportunidades
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenomics Section */}
        <section id="tokenomics" className="relative flex flex-col gap-[44px] items-center justify-center p-[124px]">

          <div className="absolute h-full z-5 -left-20 -top-20 w-[200%] pointer-events-none border-4 border-[#202020] bg-[#EEF6D6] -rotate-6" />

          <div className="relative z-10 flex items-center justify-center w-full">
            <h2 className="font-bebas-neue text-5xl leading-[1.1] text-[#202020]">
              Tokenomics
            </h2>
          </div>

          <div className="relative z-10 flex gap-11 items-center justify-center">
            <div className="flex flex-col gap-5 items-center justify-center rounded-xl w-[594px]">
              <div className="bg-[#f9f9f9] border-4 border-[#202020] border-b-4 border-l-4 border-r border-t rounded-xl flex flex-col items-start justify-center p-6 w-full">
                <div className="flex gap-2 items-center">
                  <div className="w-5 h-5 relative">
                    <div className="w-5 h-5 rounded-full bg-[#8347B9] border-2 border-[#202020]" />
                  </div>
                  <p className="font-montserrat font-bold text-xl text-[#202020] text-center">
                    Taxas (Dev Fees) - 20%
                  </p>
                </div>
                <p className="font-montserrat font-medium text-xl text-[#202020] text-center">
                  Doações e Transmissões
                </p>
              </div>

              <div className="bg-[#f9f9f9] border-4 border-[#202020] border-b-4 border-l-4 border-r border-t rounded-xl flex flex-col items-start justify-center p-6 w-full">
                <div className="flex gap-2 items-center justify-center">
                  <div className="w-5 h-5 relative">
                    <div className="w-5 h-5 rounded-full bg-[#DD4425] border-2 border-[#202020]" />
                  </div>
                  <p className="font-montserrat font-bold text-xl text-[#202020] text-center">
                    Supply Lockado - 40%
                  </p>
                </div>
                <p className="font-montserrat font-medium text-xl text-[#202020] text-center">
                  10% em Multisig
                </p>
              </div>

              <div className="bg-[#f9f9f9] border-4 border-[#202020] border-b-4 border-l-4 border-r border-t rounded-xl flex flex-col items-start justify-center p-6 w-full">
                <div className="flex gap-2 items-center justify-center">
                  <div className="w-5 h-5 relative">
                    <div className="w-5 h-5 rounded-full bg-[#7DE0CB] border-2 border-[#202020]" />
                  </div>
                  <p className="font-montserrat font-bold text-xl text-[#202020] text-center">
                    Sustentabilidade - 40%
                  </p>
                </div>
                <p className="font-montserrat font-medium text-xl text-[#202020] text-center">
                  Fundo Longo Prazo & Doxed.
                </p>
              </div>

              <div className="bg-[#f9f9f9] border-4 border-[#202020] border-b-4 border-l-4 border-r border-t rounded-xl flex flex-col items-start justify-center p-6 w-full">
                <div className="flex gap-2 items-center justify-center">
                  <div className="w-5 h-5 relative">
                    <div className="w-5 h-5 rounded-full bg-[#0588F0] border-2 border-[#202020]" />
                  </div>
                  <p className="font-montserrat font-bold text-xl text-[#202020] text-center">
                    Taxa 0%
                  </p>
                </div>
                <p className="font-montserrat font-medium text-xl text-[#202020] text-center">
                  Compra e Venda Livre
                </p>
              </div>
            </div>

            {/* Chart */}
            <div className="relative w-[456px] h-[456px]">
              {/* Central circle */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[255px] h-[255px]">
                <img
                  src="/images/ellipse1.svg"
                  alt=""
                  className="block max-w-none w-full h-full"
                />
              </div>

              {/* Central text */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas-neue leading-[1.1] text-[#202020] text-center">
                <p className="text-[32px]">
                  Total Suply
                </p>
                <p className="text-[48px]">
                  $100,000.00
                </p>
              </div>

              {/* Segment 2 - Top right (no rotation) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[385px] h-[385px]">
                <div className="absolute bottom-1/2 left-[39.09%] right-0 top-0">
                  <img
                    src="/images/ellipse2.svg"
                    alt=""
                    className="block max-w-none w-full h-full"
                  />
                </div>
              </div>

              {/* Segment 3 - Rotated -108.12deg */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[485.647px] h-[485.647px]">
                <div className="flex-none rotate-[-108.12deg]">
                  <div className="relative w-[385px] h-[385px]">
                    <div className="absolute bottom-1/2 left-[51.48%] right-0 top-[0.04%]">
                      <img
                        src="/images/ellipse3.svg"
                        alt=""
                        className="block max-w-none w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Segment 4 - Rotated 159.97deg */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[493.575px] h-[493.575px]">
                <div className="flex-none rotate-[159.97deg]">
                  <div className="relative w-[385px] h-[385px]">
                    <div className="absolute bottom-1/2 left-[65.15%] right-0 top-[3.87%]">
                      <img
                        src="/images/ellipse4.svg"
                        alt=""
                        className="block max-w-none w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Segment 5 - Rotated 86.43deg */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[408.208px] h-[408.208px]">
                <div className="flex-none rotate-[86.43deg]">
                  <div className="relative w-[385px] h-[385px]">
                    <div className="absolute bottom-1/2 left-[55.9%] right-0 top-[0.57%]">
                      <img
                        src="/images/ellipse5.svg"
                        alt=""
                        className="block max-w-none w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="relative flex flex-col gap-11 items-center justify-center px-[174px] py-[124px] z-20">

          <div className="absolute h-full z-5 -left-20 -top-20 w-[200%] pointer-events-none border-4 border-[#202020] bg-[#E6F4FE] -rotate-6" />


          <div className="flex items-center justify-center w-full z-20">
            <h2 className="font-bebas-neue text-5xl leading-[1.1] text-[#202020]">
              Roadmap
            </h2>
          </div>

          <div className="flex gap-6 items-start w-full z-20">
            <div className="flex-1 flex flex-col gap-[10px] items-start self-stretch">
              <div className="flex items-center justify-end overflow-hidden px-6 w-full">
                <h3 className="font-bebas-neue text-4xl leading-[1.1] text-black">
                  Fase 1: Kick-off
                </h3>
              </div>
              <div className="h-[452px] overflow-hidden relative w-full">
                <div className="absolute h-[124px] right-[0.5px] top-[269px] w-[163px]">
                  <Image
                    src="/images/apito1.png"
                    alt="Apito 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end overflow-hidden px-6 w-full">
                <h3 className="font-bebas-neue text-4xl leading-[1.1] text-black">
                  Fase 3: O Grande Jogo
                </h3>
              </div>
              <div className="h-[243px] w-[503px]" />
            </div>

            <div className="bg-gradient-to-b from-[#ffba18] to-[#ab6400] border-[3px] border-[#202020] border-b-[3px] border-l border-r-[3px] border-t rounded-[32px] self-stretch w-[37px]" />

            <div className="flex-1 flex flex-col gap-[10px] items-start">
              <div className="h-[243px] overflow-hidden relative w-[503px]">
                <div className="absolute h-[124px] left-[0.5px] top-1/2 -translate-y-1/2 w-[163px]">
                  <Image
                    src="/images/apito2.png"
                    alt="Apito 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex items-start overflow-hidden px-6 w-full">
                <h3 className="font-bebas-neue text-4xl leading-[1.1] text-black">
                  Fase 2: Ganhando Campo
                </h3>
              </div>
              <div className="h-[452px] overflow-hidden relative w-full">
                <div className="absolute h-[159px] left-[0.5px] top-[calc(50%+87.5px)] -translate-y-1/2 w-[163px]">
                  <Image
                    src="/images/apito3.png"
                    alt="Apito 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex items-start overflow-hidden px-6 w-full">
                <h3 className="font-bebas-neue text-4xl leading-[1.1] text-black">
                  Fase 4: buntu Dream Academy
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="relative flex flex-col gap-11 items-center justify-center overflow-hidden p-[124px] z-20">
          <div className="flex items-center justify-between w-full">
            <h2 className="font-bebas-neue text-5xl leading-[1.1] text-[#202020]">
              A Galeria Real
            </h2>
            <div className="flex gap-2 items-center">
              <button className="bg-[#f9f9f9] border-[3px] border-[#202020] border-b-[3px] border-l border-r border-t rounded-xl w-11 h-11 flex items-center justify-center rotate-180">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#202020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="bg-[#f9f9f9] border-[3px] border-[#202020] border-b-[3px] border-l border-r border-t rounded-xl w-11 h-11 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#202020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex gap-3 items-center w-full">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="border-4 border-[#202020] border-b-4 border-l border-r-4 border-t h-[325px] relative rounded-xl w-[260px] shrink-0">
                <Image
                  src={`/images/gallery-${i}.png`}
                  alt={`Gallery ${i}`}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            ))}
          </div>

          <div className="flex gap-8 items-center justify-center w-full">
            <div className="bg-[#f9f9f9] border-4 border-[#202020] border-b-4 border-l-4 border-r border-t flex-1 flex flex-col items-start justify-center p-6 rounded-xl">
              <p className="font-montserrat font-bold text-xl text-[#202020] text-center">
                Total doado:
              </p>
              <p className="font-montserrat font-medium text-xl text-[#202020] text-center">
                R$00,00
              </p>
            </div>
            <div className="bg-[#f9f9f9] border-4 border-[#202020] border-b-4 border-l-4 border-r border-t flex-1 flex items-start justify-center p-6 rounded-xl">
              <div className="flex gap-2 items-center justify-center">
                <div className="w-5 h-5 relative">
                  <div className="w-5 h-5 rounded-full bg-[#B0E64C] border-2 border-[#202020]" />
                </div>
                <p className="font-montserrat font-bold text-xl text-[#202020] text-center">
                  Atualizado em tempo real
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="px-[124px] py-[124px] z-20 ">
          <div className="bg-white border-4 border-[#202020] border-b-4 border-l-4 border-r border-t rounded-xl p-6 flex flex-col gap-[52px]">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <div className="h-20 w-[89px] relative">
                  <Image
                    src="/images/logo-ubuntukids.png"
                    alt="Ubuntu Kids Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-bebas-neue text-2xl text-[#202020]">
                  Eu sou porque nós somos
                </p>
              </div>

              <div className="flex items-center gap-5">
                <Link href="#whitepaper" className="px-3 py-2 text-sm font-medium text-[#202020] font-montserrat">
                  Whitepaper
                </Link>
                <div className="flex gap-2 items-end">
                  <Button className="bg-[#218358] border-[#193B2D] border-b-[3px] border-r-[3px] text-[#FCFCFC]">
                    Comprar agora
                  </Button>
                  <Button className="bg-[#202020] border-none rounded-[24px] h-[52px] px-9 py-5 flex items-center justify-center gap-2 font-bebas-neue text-2xl text-[#FCFCFC]">
                    Visualizar gráfico
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex h-[52px] items-center justify-between w-full">
              <p className="text-sm font-medium text-black font-montserrat">
                © 2026. All Rights Reserved
              </p>

              <div className="flex gap-2 items-center">
                <button className="bg-[#f9f9f9] border-[3px] border-[#202020] border-b-[3px] border-l border-r border-t rounded-xl w-12 h-12 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#202020" />
                  </svg>
                </button>
                <button className="bg-[#f9f9f9] border-[3px] border-[#202020] border-b-[3px] border-l border-r border-t rounded-xl w-12 h-12 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#202020" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="3" fill="#202020" />
                  </svg>
                </button>
                <button className="bg-[#f9f9f9] border-[3px] border-[#202020] border-b-[3px] border-l border-r border-t rounded-xl w-12 h-12 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.9-.42 1.2-.69 1.23-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.13-.31-1.09-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" fill="#202020" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>


    </div>
  );
}
