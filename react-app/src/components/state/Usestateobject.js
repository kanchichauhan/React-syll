import React, { useState } from 'react'

const Usestateobject = () => {
  const [name, setName] = useState({firstName: '', lastName: ''})

  return (
    <form>
      <input type="text" value={name.firstName} onChange={(e) => setName({ ...name, firstName: e.target.value})}/>
      <input type="text" value={name.lastName} onChange={(e) => setName({ ...name, lastName: e.target.value })}/>
      <p>first name is: {name.firstName}</p>
      <p>last name is: {name.lastName}</p>
    </form>
  )
}

export default Usestateobject