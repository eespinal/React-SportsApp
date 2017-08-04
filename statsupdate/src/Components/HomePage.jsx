import React from 'react';
import PlayerApp from './PlayerApp';
import Carousel from './Carousel'
import SavedCardApp from './SavedCardApp';
import SavedRowApp from './SavedRowApp';
// import '../helpers/navHelper.js'
import '../styles/index.css';
const HomePage = ({onChange, query, player, savedPlayers, onClick,isDislayingAsRows}) =>(
    <div className='bucket'>
      <Carousel />
      <div className='playerSearchHeading'>
        <h1> Create Your Player Top</h1>
        <h5> Just Search and add</h5>
      </div>
      <div className='container playerToggler'>
        <button className='' onClick={onClick}> Row/Card</button>
      </div>
      <div className='d-flex align-items-start flex-row saveCompo'>

          {isDislayingAsRows ?
            <div className='container tabla'>
              <table className="table table-striped">
                <thead className='playerTableTitles'>
                  <tr>
                    <th className="numero">#</th>
                    <th className="nombre">Name</th>
                    <th>Ppg</th>
                    <th>Ast</th>
                    <th>Reb</th>
                    <th>Pie</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                {savedPlayers.length > 0 ?
                  savedPlayers.map((player,index) => <SavedRowApp key={player.id} {...player} index={index}/>)
                  : <tr><td colspan="8">No data</td></tr>
                }
              </table>
            </div>:savedPlayers.map(player => <SavedCardApp key={player.id} {...player} />)}
          <div className="ml-auto p-2">
              <input className='form-control' placeholder='Search' onChange={onChange}></input>
              <div>
                {player.id ? <PlayerApp {...player} /> : null}
              </div>
          </div>

      </div>
    </div>

)
export default HomePage;
