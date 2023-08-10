import './navbar.css'

export default function Navbar( {onAdd} ) {
    return(
        <div className='navbar'>
            <logo>Logo</logo>
            <input placeholder='search' className='searchbar' />
            <button className='addlist' onClick={onAdd}>ADD LIST</button>
        </div>
    )
}