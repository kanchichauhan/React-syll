import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 0,
}
const reduce = (currState, action) => {
    switch(action.type) {
        case 'increment':
            return { ...currState, firstCounter: currState.firstCounter + action.value}
        case 'decrement':
            return { ...currState, firstCounter: currState.firstCounter - action.value}
        case 'increment2':
            return { ...currState, secondCounter: currState.secondCounter + action.value}
        case 'decrement2':
            return { ...currState, secondCounter: currState.secondCounter - action.value}
        case 'reset': 
            return initialState
        default:
            return currState
    }
}

const ComplexCounter = () => {
    const [currentState, dispatch] = useReducer(reduce, initialState)

    return (
        <div>
            <div>{currentState.firstCounter}</div>
            <div>{currentState.secondCounter}</div>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment2</button>
            <button onClick={() => dispatch({type: 'decrement2', value: 5})}>Decrement2</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default ComplexCounter