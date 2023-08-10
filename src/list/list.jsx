import './list.css'

import Block from './blocks/block'
import {useState} from 'react'

export default function List( {info,onRemove} ) {

    const [note,setNote] = useState([])
    const [text,setText] = useState('')
    
    const addNote = (text) => {
        if (text.text == '') {
            return
        }
        setNote([...note, text])
        setText('')
    }

    const removeNote = (pos) => {
        setNote(note.filter((obj, posObj) => posObj !== pos))
    }

    return(
        <div className='list'>
            <button className='closebutton' onClick={onRemove}>close</button>

            {note.map((info,pos) =>
                <Block text={info.text} 
                    onRemove={() => removeNote(pos)}
                />
            )}
            
            <input className='textfield' value={text} onChange={(e) => setText(e.target.value)} />
            <button className='addbutton' onClick={() => addNote({text: text})} >add note</button>
        </div>
    )
}