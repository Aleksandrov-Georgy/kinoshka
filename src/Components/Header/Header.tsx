'use client';

import S from './header.module.scss';
import Link from 'next/link';
import { linkCat } from '@/Components/Header/Components/linkCat';
import { usePathname } from 'next/navigation';
import Search from '@/Components/Header/Components/Search/Search';

export default function Header() {
  const path = usePathname();

  return (
    <div className={S.header}>
      <Link href={'/'}>
        <h1 className={S.logo}>LOGO</h1>
      </Link>
      <nav className={S.nav}>
        {linkCat.map((linkCut) => (
          <Link key={linkCut.id} href={linkCut.href}>
            <h2 className={path === linkCut.href ? `${S.active}` : ''}>{linkCut.title}</h2>
          </Link>
        ))}
      </nav>
      <Search />
    </div>
  );
}
