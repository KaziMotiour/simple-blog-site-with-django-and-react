import React, {useState} from 'react'
import './navbar.css'

function Navbar() {

    const [permission, setPermission] =useState(true)

    return (
        <div className="navbar">
          <div className='nav'>
            <p className="nav-item">Home</p>
           {permission ? <p className="nav-item">Logout</p>:
            <p className="nav-item">Login</p>}
            </div>
        </div>
    )
}

export default Navbar
