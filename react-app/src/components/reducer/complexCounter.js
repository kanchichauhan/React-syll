import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0
}
const reduce = (currState, action) => {
    switch(action.type) {
        case 'increment':
            return {firstCounter: currState.firstCounter + 1}
        case 'decrement':
            return {firstCounter: currState.firstCounter - 1}
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
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default ComplexCounter