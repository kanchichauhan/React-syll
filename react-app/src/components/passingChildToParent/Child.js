import React, {useState} from 'react'

const Child = ({change}) => {
    const [value, setNewValue] = useState("");
    function handleChange(event) {
        let value = event.target.value;
        setNewValue(value);
        change(value);
    }
    return (
        <div>
            <input
                placeholder = "Enter some texts."
                value = {value}
                onChange = {handleChange}
            />
        </div>
    );
}

export default Child