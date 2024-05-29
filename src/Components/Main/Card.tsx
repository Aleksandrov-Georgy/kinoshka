import Image from 'next/image';
import { FilmType } from '../../../types/filmType';
import S from './card.module.scss';

interface TProps {
  films: FilmType;
}

export default function Card(props: TProps) {
  const { films } = props;

  return (
    <div className={S.card}>
      <Image className={S.image}  src={films.poster?.url} alt={films.name} width={300} height={420}/>
      <div className={S.info}>
      <h2 className={S.title}>{films.name}</h2>
    <p className={S.description}>{films.description}</p>
    <div className={S.button}>Информация</div>
    </div>
    </div>
  );
}
