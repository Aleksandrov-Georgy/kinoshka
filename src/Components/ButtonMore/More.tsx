'use client';

import S from './more.module.scss';
import Preloader from '@/Components/Preloader/preloader';

interface PropsType {
  loading: boolean;
  moreFilmsClick: () => void;
  scalePreloader: number
}

export default function MoreButton(props: PropsType) {
  const {loading, moreFilmsClick, scalePreloader} = props;

  return (
    <div className={S.wrapper}>
      {
        loading ?<Preloader scale={scalePreloader}/> : <button className={S.neon_button} onClick={() => moreFilmsClick()}>ЕЩЁ!</button>
      }
    </div>
  );
}
