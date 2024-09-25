'use client';

import S from './header.module.scss';
import Link from 'next/link';
import { linkCat } from '@/Components/Header/Components/linkCat';
import { usePathname } from 'next/navigation';
import Logo from './Components/Logo/logo';
import Search from './Components/Search/Search';
import { BurgerIcon } from '../icons/burger';
import { useState } from 'react';
import { LinksMobile } from './Components/LinksMobile';

export default function Header() {
  const path = usePathname();
  const [activeBurger, setActiveBurger] = useState(false);
  return (
    <>
      <div className={S.header}>
        <Link href={'/'}>
          <Logo />
        </Link>
        <nav className={S.nav}>
          {linkCat.map((linkCut) => (
            <Link key={linkCut.id} href={linkCut.href}>
              <h2 className={path === linkCut.href ? `${S.active}` : ''}>{linkCut.title}</h2>
            </Link>
          ))}
        </nav>
        <div onClick={() => setActiveBurger(!activeBurger)}>
          <BurgerIcon className={S.burger} activeBurger={activeBurger} />
        </div>
        {/* <Search/> */}
      </div>
      <div className={S.line} />
      <LinksMobile activeBurger={activeBurger} setActiveBurger={setActiveBurger} />
    </>
  );
}
