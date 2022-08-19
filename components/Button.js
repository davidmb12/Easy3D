import React from 'react'


function Button(props) {
  return (
    <button className={`transition ease-in-out delay-75 ${props.color} ${props.padding} text-white rounded-md hover:scale-110`}>{props.text}</button>
  )
}

export default Button
