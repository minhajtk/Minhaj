import React from 'react'

function Card({title,children}) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "15px",
        borderRadius: "5px",
      }}
    >
      <h2>{title}</h2>
      {children}
    </div>
  )
}

export default Card