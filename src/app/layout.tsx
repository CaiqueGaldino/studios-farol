import type { Metadata } from "next";
import { Rationale } from "next/font/google";
import "./globals.css";

const rationale = Rationale({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rationale",
});

export const metadata: Metadata = {
  title: "Studios Farol",
  description: "Produção audiovisual profissional - Casamentos, eventos corporativos e projetos criativos",
  icons: {
    icon: '/images/simbolo-preto.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${rationale.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
