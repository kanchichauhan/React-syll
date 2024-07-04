import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [parentState, setParentState] = useState(0)

    function handleState(newValue) {
        setParentState(newValue);
    }
    return (
    <>
        <div>Parent value - {parentState}</div>
        <Child change={handleState}/>
    </>
    )
}

export default Parent