// install axios package - npm install axios
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseFetchData = () => {
    const [users, setUsers] = useState({});
    const [id, setId] = useState(1)
    const [idFromBtnClick, setidFromBtnClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.org/users/${id}`)
            .then(res => {
                console.log(res)
                setUsers(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [idFromBtnClick])

    const handleClick = () => {
        setidFromBtnClick(!idFromBtnClick)
    }
    
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={handleClick}>click</button>
            <ul>
                {users.firstname}
            </ul>
        </div>
    )
}

export default UseFetchData