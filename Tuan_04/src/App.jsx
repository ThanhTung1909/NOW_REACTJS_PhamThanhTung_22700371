import { useState } from 'react'

import './App.css'
import Calculator from './components/Reducer/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calculator/>
    </>
  )
}

export default App
