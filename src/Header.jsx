import React from 'react'
import logo from './image/logo.png'
function Header() {
  return (
    <>
       <div className='header'>
<img src={logo} alt="logo" width="70" height="50" />
<h1>Keep Notes</h1>
       </div>
    </>
  )
}

export default Header