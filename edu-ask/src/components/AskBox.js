import { Avatar } from '@mui/material'
import React from 'react'
import './css/AskBox.css'

const AskBox = () => {
  return (
    <div className='askBox'>
        <div className="box_info">
            <Avatar></Avatar>
            <h5>UserName</h5>
        </div>
    <div className="box">
        <p>What's on your mind?</p>
    </div>
    </div>
  )
}

export default AskBox