import React from 'react';
import PlayerApp from './PlayerApp';
import Carousel from './Carousel'
import PlayerListApp from './PlayerListApp';
import '../styles/index.css';
const HomePage = ({onChange, query, player, savedPlayers}) => (
  <div className='bucket'>
    <Carousel/>
    <div className='playerSearchHeading'>
      <h1>
        Create Your Player Top</h1>
      <h5>
        Just Search and add</h5>
    </div>
    <hr></hr>
    <div className='d-flex'>
      <PlayerListApp players={savedPlayers}/>
      <div className="col-sm-2.5">
        <input className='form-control' placeholder='Search' onChange={onChange}></input>
        <div>
          {player.id
            ? <PlayerApp {...player}/>
            : null}
        </div>
      </div>
    </div>

  </div>
)
export default HomePage;
