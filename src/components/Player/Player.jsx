import React from 'react'
import SideBar from '../SideBar/SideBar'
import './Player.css'

function Player({ spotify }) {
  return (
    <div className='player'>
        <div className='player__body'>
            <SideBar />
        {/* SideBar */}
        {/** Body */}
        </div>
        {/* Footer */}
        <h1>Welcome</h1>
    </div>
  )
}

export default Player