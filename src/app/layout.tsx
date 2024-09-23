import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import 'normalize.css/normalize.css';
import '../../styles/global.scss';
import { Roboto } from 'next/font/google';
import { StoreProvider } from '@/redux/store/StoreProvider';
import NextTopLoader from 'nextjs-toploader';

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
    <StoreProvider>
      <html lang="ru">
        <body>
          {children}
          <NextTopLoader color="red" zIndex={100000000} height={1} />
        </body>
      </html>
    </StoreProvider>
  );
}
