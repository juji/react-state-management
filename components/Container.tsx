'use client';

import ZustandCounter from './Counter/ZustandCounter'
import Counter from './Counter'
import Inside from './Inside'
import { useCounter } from '@/stores/useCounter'
import { CounterContextProvider } from '@/stores/CounterContext'
import ContextCounter from './Counter/ContextCounter'

export default function Container(){

  const {
    count,
    increaseCount,
    decreaseCount
  } = useCounter()

  return <CounterContextProvider><div style={{padding: '21px'}}>
    <h1>hooks vs Context vs zustand</h1>
    <br />
    
    <p>- <a
      style={{textDecoration: 'underline'}}
      target="_blank"
      href="https://react.dev/learn/react-developer-tools"
    >Install React Developer Tools?</a></p><br />

    <p>- <a 
      style={{textDecoration: 'underline'}}
      target="_blank"
      href="https://giphy.com/embed/jnaxOeY9l75Yzf4HT6">
      How to highlight updates when components render?</a></p><br />
      
    <p>- Highlight not working? try refreshing the page.</p>
    
    <br />
    <br /><br />

    <p>Using hooks</p>
    <Counter val={count} increase={increaseCount} decrease={decreaseCount} />
    <br />
    
    <p>Using Context</p>
    <ContextCounter />
    <br />
    
    <p>Using zustand</p>
    <ZustandCounter />
    <br /><br />
    
    <Inside count={count} />
  </div>
  </CounterContextProvider>

}