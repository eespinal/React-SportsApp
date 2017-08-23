import React, { Component } from 'react';

class PlayerProfile extends Component{
  componentDidMount(){
    this.props.serveId(this.props.match.params.id)
    console.log(this.props)
  }
  render(){
    console.log('PlayerProfileInfo', this.props.PlayerProfileInfo);
    return(
        <div className=" container PlayerProfilecontainer">
            <h3> Player Stats</h3>
            <div className="card" >
              <img className="card-img-top" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${this.props.match.params.id}.png` } alt="Pulgares"/>
            </div>
          <table className="table table-striped" style={{"maxWidth":"700px"}}>
            <thead className='playerTableTitles'>
              <tr>
                <th className="numero">#</th>
                <th>Ppg</th>
                <th>Ast</th>
                <th>Reb</th>
                <th>Ppg</th>
                <th>Ast</th>
                <th>Reb</th>
                <th>Ppg</th>
                <th>Ast</th>
                <th>Reb</th>
              </tr>
            </thead>
          </table>
      </div>
    )
  }
}
export default PlayerProfile;
