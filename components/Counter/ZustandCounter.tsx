import style from './counter.module.scss'
import { useCounterStore } from '@/stores/zustand'
// import Counter from './index'

const ZustandValue = () => {
  return <>{useCounterStore(state => state.count)}</>
}

export default function ZustandCounter(){

  const increase = useCounterStore(state => state.increase)
  const decrease = useCounterStore(state => state.decrease)

  return <div className={style.counter}>
    <button onClick={decrease}>-</button>
    <span><ZustandValue /></span>
    <button onClick={increase}>+</button>
  </div>


}