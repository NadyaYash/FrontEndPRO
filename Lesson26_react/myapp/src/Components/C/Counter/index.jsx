import React, { useState } from 'react'

export default function Counter() {

  let [ count, setCount ] = useState(0);
  // [ состояние, функция, отслеживающая изменение состояния ]

  // let count = 0;

  const decrement = () => {
    setCount(--count);
    console.log(count)
  }

  const increment = () => {
    setCount(++count);
    console.log(count)
  }

  return (
    <div>
      <p>{ count }</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )
}