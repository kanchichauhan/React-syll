import React, { useState } from 'react'

const UsestateArray = () => {
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([...items, (Math.random()*100).toFixed(2)])
    };

    return (
        <><button onClick={addItem}>Add a number</button><ul>
            {items.map((eachItem) => (<li>{eachItem}</li>))}
        </ul></>
    )
}

export default UsestateArray