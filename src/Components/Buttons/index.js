import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'
import Button from './Button'

class Buttons extends Component {

  render() {
    return (
      <div className="buttons">
        <Button
          id='mr'
          className={this.props.memoryState ? 'btn-purple btn-purple-active btn' : 'btn-purple btn'}
          value='mr'
          onClick={this.props.memory}
          text='mr'
        />
        <Button
          id='mc'
          className='btn-purple btn'
          value='mc'
          onClick={this.props.memory}
          text='mc'
        />
        <Button
          id='mc'
          className='btn-purple btn'
          value='m-'
          onClick={this.props.memory}
          text='m-'
        />
        <Button
          id='m+'
          className='btn-purple btn'
          value='m+'
          onClick={this.props.memory}
          text='m+'
        />
        <Button
          id='divide'
          className={this.props.operatorState === '/' ? 'btn-clay btn-clay-active btn' : 'btn-clay btn'}
          value='/'
          onClick={this.props.operators}
          text='&#247;'
        />
        <Button
          id='percent'
          className='btn-green btn'
          value='%'
          onClick={this.props.percent}
          text='&#37;'
        />
        <Button
          id='seven'
          className='btn-grey btn'
          value='7'
          onClick={this.props.operands}
          text='7'
        />
        <Button
          id='eight'
          className='btn-grey btn'
          value='8'
          onClick={this.props.operands}
          text='8'
        />
        <Button
          id='nine'
          className='btn-grey btn'
          value='9'
          onClick={this.props.operands}
          text='9'
        />
        <Button
          id='multiply'
          className={this.props.operatorState === '*' ? 'btn-clay btn-clay-active btn' : 'btn-clay btn'}
          value='*'
          onClick={this.props.operators}
          text='&#215;'
        />
        <Button
          id='sqrt'
          className='btn-green btn'
          value='sqrt'
          onClick={this.props.sqrt}
          text="&#8730;"
        />
        <Button
          id='four'
          className='btn-grey btn'
          value='4'
          onClick={this.props.operands}
          text='4'
        />
        <Button
          id='five'
          className='btn-grey btn'
          value='5'
          onClick={this.props.operands}
          text='5'
        />
        <Button
          id='six'
          className='btn-grey btn'
          value='6'
          onClick={this.props.operands}
          text='6'
        />
        <Button
          id='subtract'
          className={this.props.operatorState === '-' ? 'btn-clay btn-clay-active btn' : 'btn-clay btn'}
          value='-'
          onClick={this.props.operators}
          text='&#8722;'
        />
        <Button
          id='clear'
          className='btn-blue btn'
          value='ce'
          onClick={this.props.clear}
          text='ce'
        />
        <Button
          id='one'
          className='btn-grey btn'
          value='1'
          onClick={this.props.operands}
          text='1'
        />
        <Button
          id='two'
          className='btn-grey btn'
          value='2'
          onClick={this.props.operands}
          text='2'
        />
        <Button
          id='three'
          className='btn-grey btn'
          value='3'
          onClick={this.props.operands}
          text='3'
        />
        <Button
          id='add'
          className={this.props.operatorState === '+' ? 'btn-clay btn-clay-active btn' : 'btn-clay btn'}
          value='+'
          onClick={this.props.operators}
          text='&#43;'
        />
        <Button
          id='allClear'
          className='btn-blue btn'
          value='ac'
          onClick={this.props.allClear}
          text='ac'
        />
        <Button
          id='plusMinus'
          className='btn-grey btn'
          value='+/-'
          onClick={this.props.plusMinus}
          text='&#177;'
        />
        <Button
          id='zero'
          className='btn-grey btn'
          value='0'
          onClick={this.props.operands}
          text='0'
        />
        <Button
          id='decimal'
          className='btn-grey btn'
          value='.'
          onClick={this.props.decimal}
          text='.'
        />
        <Button
          id='equals'
          className='btn-clay btn'
          value='='
          onClick={this.props.equals}
          text='&#61;'
        />
      </div>
  )}
}

export default Buttons
