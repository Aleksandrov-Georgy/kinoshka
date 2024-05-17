import Header from '@/Components/Header/Header';
import Home from '@/app/(main)/page';
import Footer from '@/Components/Footer/Footer';

interface AppLayoutProps {
  children: React.ReactNode;
}

// лейаут основного приложения
export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
