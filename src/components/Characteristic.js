import React from 'react'
import jsonData from '../dummyData.json'

export default function Characteristic({ onData }) {

    const handleClick =() => {
        onData(jsonData)
    }
  return (
    <div onClick={handleClick}>
    Characteristic Component
    </div>
  )
}
