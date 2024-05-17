'use client';

import S from './search.module.scss';
import { CiSearch } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

export default function Search() {
  const [searchText, setSearchText] = useState<string | number>('');
  return (
    <div className={S.wrapper}>
      <CiSearch className={S.icon_search} />
      <input
        value={searchText}
        className={S.input}
        type="text"
        placeholder={'Поиск'}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {searchText && <IoMdClose className={S.icon_close} onClick={() => setSearchText('')} />}
    </div>
  );
}
