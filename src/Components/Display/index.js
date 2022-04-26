import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'

const Display = (props) => {

  return (
    <div className='display'>{props.input}</div>
  )
}

export default Display
