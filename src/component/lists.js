import React, { useContext, useState } from 'react'
import { createContextAPI } from "../App"

function Lists() {
    const [textValue, setTextValue] = useContext(createContextAPI)
  return (
    <div className='containerBox'>
      {textValue}
    </div>
  )
}

export default Lists
