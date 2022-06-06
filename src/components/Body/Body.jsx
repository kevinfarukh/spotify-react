import React from 'react'
import Header from '../Header/Header'
import './Body.css'

function Body({spotify}) {
  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className="body__info">
        <img src="" alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discovery Weekly</h2>
          <p>description...</p>
        </div>
      </div>
    </div>
  )
}

export default Body