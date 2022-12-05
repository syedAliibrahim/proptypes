import React, { useContext } from 'react'
import { NameContext } from '../App'

function Compo3() {
  const myName = useContext(NameContext)
  return (
    <div>i am Compo3
      <h1>{myName}</h1>
    </div>
  )
}

export default Compo3