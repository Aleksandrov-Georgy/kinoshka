'use client';

import S from './header.module.scss';
import Link from 'next/link';
import { linkCat } from '@/Components/Header/Components/linkCat';
import { usePathname } from 'next/navigation';
import Logo from './Components/Logo/logo';
import { BurgerIcon } from '../icons/burger';
import { useState } from 'react';
import { LinksMobile } from './Components/LinksMobile';

export default function Header() {
    const path = usePathname();
    const [activeBurger, setActiveBurger] = useState(false);

    const toggleBurger = () => {
        setActiveBurger(prev => !prev);
    };

    return (
        <header className={S.headerWrapper}>
            <div className={S.header}>
                <Link href={'/'} className={S.logoLink}>
                    <Logo />
                </Link>
                <nav className={S.nav}>
                    {linkCat.map((link) => (
                        <Link
                            key={link.id}
                            href={link.href}
                            className={`${S.navLink} ${path === link.href ? S.active : ''}`}
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>
                <button
                    className={S.burgerButton}
                    onClick={toggleBurger}
                    aria-label="Toggle menu"
                    aria-expanded={activeBurger}
                >
                    <BurgerIcon activeBurger={activeBurger} />
                </button>
            </div>
            <div className={S.line} />
            <LinksMobile activeBurger={activeBurger} setActiveBurger={setActiveBurger} />
        </header>
    );
}