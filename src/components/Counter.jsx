import { count } from 'console'
import React from 'react'

const Counter = () => {

    const incrementHandler = ()=>{
console.log("incremented")
    }
    const decrementHandler =()=>{
        console.log("decremented")

    }
  return (
    <div>
        <div>
            <button onClick={incrementHandler} >Increment</button>
        <span>Count: {count}</span>
        <button onClick={decrementHandler} >Decrement</button>
        </div>
    </div>
  )
}

export default Counter