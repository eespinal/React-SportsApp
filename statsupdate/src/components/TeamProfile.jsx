import React,{Component} from 'react';
import {loadPlayerList} from '../actions'
import '../styles/index.css';

class TeamProfile extends Component {
componentDidMount(){
  console.log(this.props)
 }

render() {
  return(
      <div className = 'cubeta' >
        <h1> Its Working</h1>
        <div className= 'd-flex justify-content-lg-between'>
          <div className='currTeam'>

          </div>
          <div className='oppsTeam' display='none'>

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
