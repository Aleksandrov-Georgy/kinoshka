import Header from '@/Components/Header/Header';
import Footer from '@/Components/Footer/Footer';

import S from '../main.module.scss';

interface AppLayoutProps {
  children: React.ReactNode;
}

// лейаут основного приложения
export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <header className={S.header}>
        <Header />
      </header>
      <main>{children}</main>
      <footer className={S.footer}>
        <Footer />
      </footer>
    </>
  );
}
