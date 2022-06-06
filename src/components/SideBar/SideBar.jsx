import React from 'react'
import SideBarOptions from '../SideBarOptions/SideBarOptions'
import './SideBar.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from '../../DataLayer';


function SideBar() {
  const [{playlists}, dispatch] = useDataLayerValue();
  return (
    <div className='sidebar'>
      <img className='sidebar__logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg " alt="spotify-logo" />
      <SideBarOptions Icon={HomeIcon} title="Home"/>
      <SideBarOptions Icon={SearchIcon}title="Search"/>
      <SideBarOptions Icon={LibraryMusicIcon} title="Your Library"/>
      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />
      
      <SideBarOptions title="Discover Weekly"/>
      <SideBarOptions title="Your Top Tracks"/>
      <SideBarOptions title="Your Top Artists"/>
      </div>
  )
}

export default SideBar