import React from 'react'
import './css/Navbar.css'
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='navbar_logo'>
        <h2>Edu-Ask</h2>
    </div>
    
    <div className='navbar_icons'>

        <div className="navbar-icon">

            <div className="avatar">

            <Avatar></Avatar>
            </div>

            <div className="btn"><Button >Add Question</Button></div>
        </div>


    </div>
    </div>
  )
}

export default Navbar