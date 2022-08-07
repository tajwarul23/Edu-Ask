import { Avatar, Button } from '@mui/material'
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined"
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined"
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined"
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined"
import {Chat, MoreHorizOutlined, ShareOutlined} from "@material-ui/icons"
import React from 'react'
import './css/Post.css'

const Post = () => {
  return (
    <div className='post'>
        <div className="post-info">
            <Avatar></Avatar>
            <h5>UserName</h5>
            <small>TimeStamp</small>
        </div>
        <div className="post-body">
            <div className="post-question">
            <p>Question</p>
            <button className='post-btn-ans'>Answer</button>
            </div>
            <div className="postAns-btn">
            <p></p>
            </div>
            <img src="https://cdn3.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-coronavirus.png" alt="" />
        </div>
        <div className="post-footer">
          <div className="post-footer-action">
            <ArrowUpwardOutlinedIcon></ArrowUpwardOutlinedIcon>
            <ArrowDownwardOutlinedIcon></ArrowDownwardOutlinedIcon>
          </div>
          <RepeatOutlinedIcon></RepeatOutlinedIcon>
          <ChatBubbleOutlineOutlinedIcon></ChatBubbleOutlineOutlinedIcon>
          <div className="post-footer-left">
            <ShareOutlined></ShareOutlined>
            <MoreHorizOutlined></MoreHorizOutlined>
          </div>
        </div>
    </div>
  )
}

export default Post