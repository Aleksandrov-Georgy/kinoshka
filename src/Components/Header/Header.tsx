'use client';

import S from './header.module.scss';
import Link from 'next/link';
import { linkCat } from '@/Components/Header/Components/linkCat';
import { usePathname } from 'next/navigation';
import Logo from './Components/Logo/logo';

export default function Header() {
  const path = usePathname();

  return (
    <div className={S.header}>
      <Link href={'/'}>
        <Logo/>
      </Link>
      <nav className={S.nav}>
        {linkCat.map((linkCut) => (
          <Link key={linkCut.id} href={linkCut.href}>
            <h2 className={path === linkCut.href ? `${S.active}` : ''}>{linkCut.title}</h2>
          </Link>
        ))}
      </nav>
    </div>
  );
}
