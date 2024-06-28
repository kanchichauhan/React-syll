import React, { useState } from 'react'

const UseStatePrev = () => {
    const initialCount = 0
    const [count, setCount] = useState(initialCount);

    return (
        <div className='count-wrapper'>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>
        </div>
    )
}

export default UseStatePrev
