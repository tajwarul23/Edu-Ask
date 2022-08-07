import React from 'react'
import './css/Widget.css'
import WidOption from './WidOption'

const Widget = () => {
  return (
    <div className="widget">
        <div className="widget-header">
            <h5>People You're Following</h5>
            
        </div>
        <hr />
        <WidOption></WidOption>
    </div>
  )
}

export default Widget