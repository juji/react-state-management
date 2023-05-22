import { create } from 'zustand'

interface CounterState {
  count: number
  randomVal: string
  increase: () => void
  decrease: () => void
  setRandomVal: ( str: string ) => void
}

export const useCounterStore = create<CounterState>()((set) => ({
  count: 0,
  randomVal: 'this is random val',
  increase: () => set((state) => ({ count: state.count+1 })),
  decrease: () => set((state) => ({ count: state.count-1 })),
  setRandomVal: ( str: string ) => set(() => ({ randomVal: str }))
}))

