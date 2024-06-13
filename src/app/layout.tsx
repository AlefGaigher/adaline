
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../../components/navbar";
import { Footer }  from "../../components/footer";
import { WhatsAppButton } from "../../components/whatsapp";
import { SocialMediaButtons } from "../../components/social-media";


export const metadata: Metadata = {
  title: "Adaline",
  description: "Nossos Serviços: Criação de sites, sistemas, aplicativos,[Android, IOS, Windows], sistemas Web, consultoria, terceirização... Atuamos em Vila Velha ES. Somos uma Equipe com ampla experiência no desenvolvimento e implantação de soluções eficazes. De engenheiros de software para especialistas em negócios, ADALINE tem uma Coleção Única de Talentos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`bg-white mt-3 relative`}>
          <Navbar/>
          <WhatsAppButton />
          <SocialMediaButtons />
          {children}
          <Footer/>
        </body>
    </html>
  );
}
