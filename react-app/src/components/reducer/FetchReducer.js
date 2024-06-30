import React, {useReducer, useEffect} from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    error: '',
    post: {}
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_FAILURE':
            return {
                loading: false,
                post: {},
                error: 'something went wrong'
            }
        default: 
            return state
    }
}
const FetchReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('https://jsonplaceholder.org/users/1')
        .then((response) => {
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        })
        .catch(() => {
            dispatch({type: 'FETCH_FAILURE'})
        })
    }, [])

    return (
        <div>
            {state.loading ? 'Loading': state.post.firstname}
            {state.error ? state.error : null}
        </div>
    )
}

export default FetchReducer