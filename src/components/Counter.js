import './Counter.css';
import React, {useState} from 'react';

export default function Counter() {
const [counter, setCounter] = useState(0);

function decrement(){
    setCounter(prevState => prevState-1)
}
function increment(){
    setCounter(prevState => prevState+1)
}

    return (
        <div id='counter-container'>
            <h2>Functional Counter Component</h2>
            <div id='decrement' onClick={decrement}>-</div>
            <div id='counter'>{counter}</div>
            <div id='increment' onClick={increment}>+</div>
        </div>
    );
}