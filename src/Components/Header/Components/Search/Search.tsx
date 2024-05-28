'use client';

import S from './search.module.scss';
import { CiSearch } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

export default function Search() {
  const [searchText, setSearchText] = useState<string | number>('');
  return (
    <div className={S.wrapper}>
      <div className={S.container}>
      <input
        value={searchText}
        className={S.input}
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
        required
      />
      <div className={S.label}>Поиск</div>
      {searchText && <IoMdClose className={S.icon_close} onClick={() => setSearchText('')} />}
      </div>
    </div>
  );
}
