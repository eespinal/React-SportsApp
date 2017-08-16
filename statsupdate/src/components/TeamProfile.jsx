import React,{Component} from 'react';
// import {loadPlayerList} from '../actions';
import PlayerListApp from './PlayerListApp';
import '../styles/index.css';

class TeamProfile extends Component {

// componentWillReceiveProps() {
  //this.props.match.params.id '1610612747'
componentDidMount(){
  let idOfteam =this.props.match.params.id
  console.log(idOfteam)
  this.props.getRoster(idOfteam)
}

render() {
  return(
      <div className = 'cubeta' >

        <div className= 'd-flex justify-content-lg-between innerBucket'>
          <div className='currTeam'>
            <PlayerListApp players={this.props.teamRoster} />
          </div>
          <div className='oppsTeam' display='none'>
            <PlayerListApp players={this.props.teamRoster} />
          </div>
        </div>
        <div className = 'container comparator'>
          <div className = 'd-flex justify-content-center '>
            <button className='btn btn-success compBtn'> Compare </button>
          <div className = 'compBtn'> select</div>
          </div>
        </div>

      </div>

    )
  }
}

export default TeamProfile;
