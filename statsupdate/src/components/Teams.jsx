import React,{Component} from 'react';
import NBA from 'nba';
// import { searchForTeam } from '../actions';
import { Link } from 'react-router-dom'

console.log('NBA', NBA);

class Teams extends Component{
  componentDidMount(){
    this.props.loadData()
  }
  render(){
    return(
      <div className="d-flex justify-content-between">
          <div className="d-flex align-items-start flex-row underline">
            {
              (NBA.teams || []).map((team,index)=>{
                const teamstats = this.props.teamstats.find(teamstat => teamstat.teamId === team.teamId)
                return(
                    index >= 0 ?
                    <div key={index} className="p-2 teamIcons" >
                      <Link to="#" data-team-Id={team.teamId}>
                        <img src={`http://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/${team.abbreviation}.SVG`} alt={team.abbreviation}/>
                      </Link>
                      <ul className="dropdownStats" data-team-name={team.abbreviation} style={{backgroundImage: `url(http://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/${team.abbreviation}.SVG)`, backgroundSize: '258px 110px', backgroundPosition: 'center left',
                        backgroundRepeat: 'no-repeat'}}>
                        <li> W:{teamstats ? teamstats.w : '—'}</li>
                        <li> L:{teamstats ? teamstats.l : '—'}</li>
                        <li> %:{teamstats ? teamstats.wPct:'-'}</li>
                        <li> placeholder </li>
                        <li> placeholder </li>
                      </ul>
                    </div>:null
                )
              })
            }
          </div>
      </div>
    )
  }
}

export default Teams;
//                      <Link to={`/team/${team.teamId}`} data-team-Id={team.teamId}>
