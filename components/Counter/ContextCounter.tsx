import style from './counter.module.css'
import { CounterContext } from '@/stores/CounterContext'
import { useContext } from 'react'

// using multiple child like this will be bad
// because three elements will re render instead of one element

// const ContextValue = () => {
//   const { count } = useContext(CounterContext)
//   return <>{count}</>
// }

// const DecreaseButton = () => {
//   const { decrease } = useContext(CounterContext)
//   return <button onClick={decrease}>-</button>
// }

// const IncreaseButton = () => {
//   const { increase } = useContext(CounterContext)
//   return <button onClick={increase}>+</button>
// }


// so we setup the components to receive updates from context
export default function ContextCounter(){

  const {
    count, decrease, increase
  } = useContext(CounterContext)

  return <div className={style.counter}>
    <button onClick={decrease}>-</button>
    <span>{count}</span>
    <button onClick={increase}>+</button>
  </div>


}