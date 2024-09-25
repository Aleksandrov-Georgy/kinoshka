import React, { Dispatch, SetStateAction } from 'react';
import S from './links.module.scss';
import { linkCat } from '../linkCat';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IProps {
  activeBurger: boolean;
  setActiveBurger: Dispatch<SetStateAction<boolean>>;
}
export const LinksMobile = ({ activeBurger, setActiveBurger }: IProps) => {
  const path = usePathname();

  return (
    <div className={!activeBurger ? S.links : S.links + ' ' + S.active}>
      <nav className={S.nav}>
        {linkCat.map((linkCut) => (
          <Link key={linkCut.id} href={linkCut.href} onClick={() => setActiveBurger(false)}>
            <h2 className={path === linkCut.href ? `${S.active}` : ''}>{linkCut.title}</h2>
          </Link>
        ))}
      </nav>
    </div>
  );
};
