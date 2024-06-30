import { useReducer } from "react"
import React from 'react'
import CompoentA from "./CompoentA"
import ComponentB from "./ComponentB"

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

const ContextReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <CountContext.Provider value={{ countState: count, countDispatch: dispatch}}>
                Count = {count}
                <CompoentA />
                <ComponentB />
            </CountContext.Provider>
        </div>
    )
}

export default ContextReducer