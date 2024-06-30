import React, { useState, useMemo, useEffect } from 'react'

const UseMemo = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    };

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    };

    const isEven = useMemo(() => {
        return counterOne % 2 === 0
    }, [counterOne])

    return (
    <div>
        <div>
            <button onClick={incrementOne}>Count one - {counterOne}</button>
            <span>{isEven ? 'Even' : 'odd'}</span>
        </div>
        <div>
            <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
        </div>
    </div>
    )
}

export default UseMemo