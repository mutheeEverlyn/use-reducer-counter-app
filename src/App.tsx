import { useEffect } from 'react'
import './App.css'
import {useReducer}from 'react'
const initialState=0;
const reducer =(state:number,action:string) =>{
switch(action){
    case 'increment':
        return state+1;
    case 'decrement':
        return state-1;
    case 'reset':
        return initialState;
    default:
        return state;
}

}
const App=() => {
  const [counter,dispatch]=  useReducer(reducer,initialState);
  useEffect(() =>{
    document.title=`current counter is:${counter}`;
  })
  return (
    <div className='counter'>
        <div>{counter}</div>
      <button onClick={()=>dispatch('increment')}>+</button>
      <button onClick={()=>dispatch('decrement')}>-</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}
export default App;
