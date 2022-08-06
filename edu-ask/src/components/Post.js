import { Avatar } from '@mui/material'
import React from 'react'
import './css/Post.css'

const Post = () => {
  return (
    <div className='post'>
        <div className="post-info">
            <Avatar></Avatar>
            <h4>UserName</h4>
            <small>TimeStamp</small>
        </div>
    </div>
  )
}

export default Post