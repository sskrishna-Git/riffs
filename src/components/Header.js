import React from 'react'
import headerImage from '../assets/Head1.webp'
import './header.css'
const Header = () => {
  return (
    <div>
        <header className="header" style={{ backgroundImage: `url(${headerImage})` }}>
            <h1 className='h1'>WELCOME <br></br> to Music App</h1>
            <p className='h1'>Your journey to musical excellence <br></br> begins here</p>
        </header>
    </div>
  )
}

export default Header