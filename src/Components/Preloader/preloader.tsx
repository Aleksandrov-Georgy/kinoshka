import S from './preloader.module.scss'

interface Props {
  scale: number, 
}
export default function Preloader(props: Props) {
  const {scale} = props
  return (
    <div style={{scale}}>
      <div className={S.preloader}></div>
    </div>
  )
}