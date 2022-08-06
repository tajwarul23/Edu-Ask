import React from 'react'
import AskBox from './AskBox'
import './css/Feed.css'
import Post from './Post'

const Feed = () => {
  return (
    <div className='feed'>
        <AskBox></AskBox>
        <Post></Post>


    </div>
  )
}

export default Feed