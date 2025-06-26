import React from 'react'

function Title({text})  {
  return (
     <h1>{text ? text : "Hello World" }</h1>
  )
}

export default Title