import React from 'react'
import Header from '../Header/Header'
import { useDataLayerValue } from '../../DataLayer'
import './Body.css'
import { Favorite, MoreHoriz, PlayCircleFilled } from '@mui/icons-material';
import SongRow from '../SongRow/SongRow';

function Body({spotify}) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Today's Top Hits</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className='body__shuffle' />
          <Favorite fontSize='large' />
          <MoreHoriz />
        </div>
        {/** List of songs */}
        {discover_weekly?.tracks.items.map(item =>(
          <SongRow track = {item.track} />
        ))}
      </div>
    </div>
  )
}

export default Body