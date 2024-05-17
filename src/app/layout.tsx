import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "@/provider";
import 'normalize.css/normalize.css';
import '../../styles/global.scss';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: '300',
    subsets: ['latin'],
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Фильмы",
  description: "Киношка",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
