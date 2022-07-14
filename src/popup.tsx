import React from 'react'
import { render } from 'react-dom'
import NumberButton from './components/NumberButton'
import Button from './components/Button'

function Popup() {
  return (
    <div>
      <h1>Hello, world</h1>
      <p>This is a simple popup.</p>
      <NumberButton />
      <Button text="text" />
    </div>
  )
}

render(<Popup />, document.getElementById('react-target'))