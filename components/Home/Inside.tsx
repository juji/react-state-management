import { useCounterStore } from './stores/zustand'
import { CounterContext } from './stores/CounterContext'
import { useContext } from 'react'

const ZustandValue = () => {
  return <span>{useCounterStore(state => state.count)}</span>
}

const ContextValue = () => {
  const { count } = useContext(CounterContext)
  return <span>{count}</span>
}

export default function Inside({ count }:{ count: number }){
  

  return <div style={{border: '1px solid white', padding: '21px'}}>
    <p>This is another component</p>
    <br />
    <p>hooks: {count}</p>
    <p>context: <ContextValue /></p>
    <p>Zustand: <ZustandValue /></p>
    <br />
    <p style={{color: 'grey'}}>
      So, zustand works like a context.
      but more efficient
    </p>
  </div>

}