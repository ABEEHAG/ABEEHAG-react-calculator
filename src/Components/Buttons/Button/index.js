import './index.css'
import React from 'react'

const Button = ({ id, className, value, text, onClick }) => {
  return (
    <button id={id} className={className} value={value} onClick={onClick}>{text}</button>
  )
}

export default Button
