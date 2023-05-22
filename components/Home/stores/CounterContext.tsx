import { createContext } from 'react';
import { useState } from 'react'
import type { ReactNode } from 'react'

const init = {
  count: 0,
  increase: () => {},
  decrease: () => {}
}

export const CounterContext = createContext({ ...init })

const useCounterContext = () => {

  const [ count, setCount ] = useState(init.count)
  
  const increase = () => {
    setCount(count+1)
  }

  const decrease = () => {
    setCount(count-1)
  }

  return {
    count,
    increase,
    decrease
  }

}

export function CounterContextProvider({ children }:{ children: ReactNode }) {

  const value = useCounterContext()

  return <CounterContext.Provider value={value}>
    {children}
  </CounterContext.Provider>

}


