
import style from './counter.module.scss'


export default function Counter({
  val,
  increase, 
  decrease
}:{
  val: number
  increase: () => void
  decrease: () => void
}){

  return <div className={style.counter}>
    <button onClick={decrease}>-</button>
    <span>{val}</span>
    <button onClick={increase}>+</button>
  </div>


}