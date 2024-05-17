import S from '../main.module.scss'
import Header from "@/Components/Header/Header";

export default function Home() {
  return (
   <div className={S.wrapper}>
     <Header />
   </div>
  );
}
