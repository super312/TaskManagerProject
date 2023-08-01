import { useState } from 'react'
import './App.css'

import Navbar from './navbar/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1>Hello World</h1>
    </>
  )
}

export default App
