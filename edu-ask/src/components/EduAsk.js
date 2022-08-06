import React from 'react'
import './css/EduAsk.css'
import Feed from './Feed'
import Navbar from './Navbar'
import Post from './Post'
import Sidebar from './Sidebar'
const EduAsk = () => {
    return (
        <div className='eduAsk'>

           
            <Navbar></Navbar>
            <div className="content">
            <Sidebar></Sidebar>
            <Feed></Feed>
            
            </div>
        </div>
    )
}

export default EduAsk