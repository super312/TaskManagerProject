import { useState } from 'react'
import './App.css'

import Navbar from './navbar/navbar'
import List from './list/list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='listcontainer'>
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>
    </>
  )
}

export default App
