import React, { useState } from 'react';

export default function CounterProps (props) {

    const [count,setCount] = useState(props.defaultNumber);

        return (
            <div>
                <p>Contador: {count}</p>
                <button onClick={() => setCount(count +1)}>+</button>
                <button onClick={() => setCount(count -1)}>-</button>
                <button onClick={() => setCount(count *2)}>*2</button>
                <button onClick={() => setCount(count /2)}>/2</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        )
}