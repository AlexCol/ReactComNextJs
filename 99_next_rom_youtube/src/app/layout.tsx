import { Header } from "@/components/header";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Aula Next JS do Zero.',
  description: 'Aprenda Next JS do Zero.',
  openGraph: {
    title: 'Home - Aula Next JS do Zero.',
    description: 'Aprenda Next JS do Zero.',
    //images: []
  },
  //robots: 'index,follow',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
