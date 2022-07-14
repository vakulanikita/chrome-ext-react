import React from 'react'

const NumberButton = () => {
  const [state, setState] = React.useState(0)
  return (
    <button onClick={() => {
      setState(prevState => prevState + 1)
    }}>NumberButton {state}</button>
  )
}

export default NumberButton