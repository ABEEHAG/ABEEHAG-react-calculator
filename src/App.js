import React, {useState, useEffect} from 'react'
import './App.css'
import Display from './Components/Display'
import Buttons from './Components/Buttons'

const App = () => {

  const [input, setInput] = useState('')
  const [currentState, setCurrentState] = useState('0')
  const [operator, setOperator] = useState('')
  const [prevState, setPrevState] = useState('0')
  const [memory, setMemory] = useState(null)

  useEffect(() => {
    setInput(currentState)
  },[currentState])

  useEffect(() => {
    setInput('0')
  },[currentState])

  const handleClear = () => {
    currentState !== '0' && currentState.length > 1
      ? setCurrentState(previousState => previousState.slice(0, -1))
      : setCurrentState('0')
  }

  const handleAllClear = () => {
    setCurrentState('0')
    setOperator('')
    setPrevState('0')
  }

  const handleOperators = (event) => {

    setOperator(event.target.value)

    if (prevState !== '0') {
      handleEquals(event)
    } else {
      setCurrentState('0')
      setPrevState(currentState)
    }
  }

  const handleMemory = (event) => {
    switch (event.target.value) {
      case 'mr':
        if (memory) setCurrentState(memory)
      break
      case 'mc':
        setMemory(null)
      break
      case 'm+':
        setMemory(previousState => previousState ? (parseFloat(previousState) + parseFloat(currentState)).toString() : currentState)
      break
      case 'm-':
        setMemory(previousState => previousState ? (parseFloat(previousState) - parseFloat(currentState)).toString() : null)
      break
      default:
        return
    }
  }

  const handleOperands = (event) => {
    setCurrentState(previousState => previousState.replace(/^0+/,'') + event.target.value)
  }

  const handleDecimal = (event) => {
    if (currentState.includes('.')) return

    setCurrentState(previousState => previousState + event.target.value)
  }

  const handlePlusMinus = () => {
    if (currentState.charAt(0) === '-') {
      setCurrentState(previousState => previousState.substring(1))
    } else {
      setCurrentState(previousState =>'-' + previousState)
    }
  }

  const handlePercent = () => {
    prevState === '0'
      ? setCurrentState(previousState => (parseFloat(previousState) / 100).toString())
      : setCurrentState(previousState => (parseFloat(previousState) / 100 * previousState).toString())
  }

  const handleSqrt = () => {
    setCurrentState(previousState => Math.sqrt(previousState))
  }

  const handleEquals = (event) => {

    if (currentState === '0') return

    let total = 0
    
    switch (operator) {
      case '*':
        total = (parseFloat(prevState) * parseFloat(currentState)).toString()
        break
      case '/':
        if (prevState === '0' && currentState === '0') return
          total = (parseFloat(prevState) / parseFloat(currentState)).toString()
        break
      case '+':
        total = (parseFloat(prevState) + parseFloat(currentState)).toString()
        break
      case '-':
        total = (parseFloat(prevState) - parseFloat(currentState)).toString()
        break
      default:
        return
    }
    setPrevState(total)
    setOperator(event.target.value)
    setCurrentState('0')
  }

  return (
    <div className="container">
      <Display
        input={currentState === '0' ? prevState : currentState}
      />
      <Buttons
        memoryState={memory}
        operatorState={operator}
        memory={handleMemory}
        clear={handleClear}
        allClear={handleAllClear}
        sqrt={handleSqrt}
        operators={handleOperators}
        operands={handleOperands}
        decimal={handleDecimal}
        plusMinus={handlePlusMinus}
        percent={handlePercent}
        equals={handleEquals}
      />
    </div>
  )
}

export default App
