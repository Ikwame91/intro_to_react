import React from 'react'

export default function Message() {
    function handleClick(){
        console.log("Button Clicked")
    }
  return (
    <div>
        <button onClick={handleClick}> Click Here to get a message</button>
    </div>
  )
}
