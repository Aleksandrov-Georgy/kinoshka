import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import 'normalize.css/normalize.css';
import '../../styles/global.scss';
import { Roboto } from 'next/font/google';

const roboto = Montserrat({
  weight: '300',
  subsets: ['latin'],
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Фильмы',
  description: 'Киношка',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
      {children}
      </body>
    </html>
  );
}
