import './navbar.css'

export default function Navbar() {
    return(
        <div className='navbar'>
            <logo>Logo</logo>
            <input placeholder='search' className='searchbar' />
            <profile>Profile</profile>
        </div>
    )
}