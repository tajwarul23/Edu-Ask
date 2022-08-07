import React from 'react'
import './css/EduAsk.css'
import Feed from './Feed'
import Navbar from './Navbar'
import Post from './Post'
import Sidebar from './Sidebar'
import Widget from './Widget'
const EduAsk = () => {
    return (
        <div className='eduAsk'>

           
            <Navbar></Navbar>
            <div className="content">
            <Sidebar></Sidebar>
            <Feed></Feed>
            <Widget></Widget>
            </div>
        </div>
    )
}

export default EduAsk