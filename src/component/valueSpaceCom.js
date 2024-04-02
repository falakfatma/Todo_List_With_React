import React, { useContext, useState } from 'react'
import { createContextAPI } from "../App"

function ValueSpaceCom() {
    const [textValue, setTextValue] = useContext(createContextAPI)
  return (
    <div className='containerBox'>
      {textValue}
    </div>
  )
}

export default ValueSpaceCom
