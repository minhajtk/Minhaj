import React from 'react'

function Layout({heading,children}) {
  return (
    <div style={{ background: "#f5f5f5", padding: "15px" }}>
      <h2>{heading}</h2>
      <div>{children}</div>
    </div>
  )
}

export default Layout