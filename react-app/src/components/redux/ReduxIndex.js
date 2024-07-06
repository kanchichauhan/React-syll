/* Three Core Concepts for react
    - Store => holds state of app
    - Action => described what happened
    - reducer => ties store and actions together
*/
/* Three Principles for react
    - the global state of our application is stored as an object inside a single store
    - the only way to change the state is to dispatch an action, an object that describs what happened
    - to specify how the state tree is updated based on actions, you write pure reducers(take prev state and action as inputs, and return new state)
    Reducer - (previousState, action) => newState
*/
// import React from 'react'
const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';


const orderCake = () => {
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}
const restockCake = (qty = 1) => {
    return {
        type: CAKE_RESTOCKED,
        quantity: qty
    }
}
const orderIcecream = () => {
    return {
        type: ICECREAM_ORDERED,
        quantity: 1
    }
}
const restockIcecream = (qty = 1) => {
    return {
        type: ICECREAM_RESTOCKED,
        quantity: qty
    }
}
const initialState = {
    numOfCakes: 10,
    numOfIcecreams: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload,
            }
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIcecreams: state.numOfIcecreams - 1,
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIcecreams: state.numOfIcecreams + action.payload,
            }
        default:
            return state
    }
}

const store = createStore(reducer);
console.log(initialState, store.getState());

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(orderCake())
store.dispatch(orderIcecream())
store.dispatch(restockCake(3))
store.dispatch(restockIcecream(2))

// const actions = bindActionCreators(({orderCake, restockCake}, store.dispatch))
// actions.orderCake()
// actions.orderCake()
// actions.orderCake()
// actions.restockCake()


unsubscribe();
// const ReduxIndex = () => {
//     return (
//         <div>ReduxIndex</div>
//     )
// }

// export default ReduxIndex