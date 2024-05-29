import Card from '@/Components/Main/Card';
import S from '../main.module.scss';
import { film } from './data'

export default function Home() {

  return (
    <div className={S.wrapper}>
      <Card films={film}/>
    </div>
  );
}
