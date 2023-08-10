import { useState } from 'react'
import './App.css'

import Navbar from './navbar/navbar'
import List from './list/list'

function App() {
  const [lists,setLists] = useState([])

  const addList = (info) => {
    setLists([...lists,info])
  }

  const removeList = (pos) => {
    setLists(lists.filter((obj, posObj) => posObj !== pos))
  }

  return (
    <>
      <Navbar onAdd={() => addList('info')} />
      <div className='listcontainer'>

        {lists.map((info,pos) => 
          <List info={info}
          onRemove={() => removeList(pos)} 
          />
        )}
      
      </div>
    </>
  )
}

export default App
