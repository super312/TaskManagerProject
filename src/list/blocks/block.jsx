import './block.css'

export default function Block( {text, onRemove} ) {
    return(
        <div className='block'>
            <h1 className='text'>{text}</h1>
            <p className='remove' onClick={onRemove}>X</p>
        </div>
    )
}