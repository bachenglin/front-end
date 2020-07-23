import React, {useState} from 'react'

function HookCounter() {
   
    const initialValue = 0
    const[count, setCount] = useState(initialValue)
    
    const IncrementFive = () =>{
        for(let i = 0; i < 5; i++){
            // setCount(count + 1)
            setCount(prevState => prevState + 1)
        }
    }

    return (
        <div>
            Count : {count}
            <button onClick = {() => setCount(initialValue )}> Reset</button>
            <button onClick = {() => setCount(count + 1)}> Increment </button>
            <button onClick = {() => setCount(count - 1)}> Decrement </button>
            <button onClick = {IncrementFive}>Increment 5</button>
        </div>
    )
}

export default HookCounter
