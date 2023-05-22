import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export interface NestedState {
  count: { data: { nested: { value: number } } }
  text: { data: { nested: { value: string } } }
  setNum: (num: string|number) => void
  setText: (str: string) => void
}

export const nestedStore = create(
  immer<NestedState>(
    (set) => ({
      count: { data: { nested: { value: 0 } } },
      text: { data: { nested: { value: 'asdf' } } },
      setNum: (num: string|number) => set(state => {
        state.count.data.nested.value = Number(num)
      }),
      setText: (str: string) => set(state => {
        state.text.data.nested.value = str
      })
    })
  )
)


