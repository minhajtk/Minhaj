import React from 'react'

function User({name,age,role}) {
  return (
    <div>
        <h1>User Information</h1>
        <p>User Name : {name}</p>
        <p>User Age : {age}</p>
        <p>User Role : {role}</p>
        <h3>Code Examples</h3>
    </div>
  )
}

export default User