'use client'

import { nestedStore, NestedState } from './nestedStore'
import type { ChangeEvent } from 'react'
import styles from './nested.module.scss'

function NumberInput(){
  const number = nestedStore((state => state.count.data.nested.value))
  const setNum = nestedStore((state => state.setNum))
  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    setNum(e.target.value)
  }

  return <input 
    type="number" 
    value={number} 
    onChange={onChange} 
    step="1"
    min="-10"
    max="10"
  />
}

function TextInput(){
  const str = nestedStore((state => state.text.data.nested.value))
  const setText = nestedStore((state => state.setText))
  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return <input 
    type="text" 
    value={str} 
    onChange={onChange} 
  />
}

function ViewValue({ fn }:{ fn: any }){
  const val = nestedStore(fn)
  return <>{JSON.stringify(val,null,2)}</>
}


export default function Nested(){

  return <div className={styles.nested}>
    <div className={styles.container}>
      <p>Number</p>
      <NumberInput />
    </div>
    <div className={styles.container}>
      <p>Text</p>
      <TextInput />
    </div>
    <div className={styles.container}>
      <div className={styles.code}>
        <p>Count</p>
        <pre><ViewValue fn={(state:NestedState) => state.count} /></pre>
        <br /><br />
        <p>Text</p>
        <pre><ViewValue fn={(state:NestedState) => state.text} /></pre>
      </div>
    </div>
  </div>

}