import React from 'react'

function Button({text}) {
  return (
    <button
      style={{
        padding: "8px 15px",
        marginTop: "10px",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  )
}

export default Button