import React,{Component} from 'react';
import NBA from 'nba';
// import { searchForTeam } from '../actions';
import { Link } from 'react-router-dom'

class Teams extends Component{
  componentDidMount(){
    this.props.loadData()
  }
  render(){
    return(
      <div className="d-flex justify-content-between">
          <div className="d-flex align-items-start flex-row underline">
            {
              NBA.teams.map((team,index)=>{
                const teamstats = this.props.teamstats.find(teamstat => teamstat.teamId === team.teamId)
                return(
                    index >= 0 ?
                    <div key={index} className="p-2 teamIcons" >
                      <Link to={`/team/${team.teamId}`} data-team-Id={team.teamId}>
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
// import React from 'react';
// import NBA from 'nba';
//
// const Teams=({onMouseEnter,teamstats}) =>
//       <div className="d-flex justify-content-between">
//           <div className="d-flex align-items-start flex-row underline">
//             {
//               NBA.teams.map((team,index)=>{
//                 return(
//                     index ?
//                     <div key={index} className="p-2 teamIcons" >
//                       <a href='#'><img src={`http://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/${team.abbreviation}.SVG`} alt={team.abbreviation} onMouseEnter={onMouseEnter} data-team-name={team.abbreviation}/></a>
//                       <ul className="dropdownStats">
//                         <li>Wins:{teamstats.w}</li>
//                         <li>Losses:{teamstats.l}</li>
//                         <li>Season</li>
//                         <li>Last 10 games</li>
//                       </ul>
//                     </div>:null
//                 )
//               })
//             }
//           </div>
//       </div>
// export default Teams;

// export default props =>
//       <div className="d-flex justify-content-between">
//           <div className="d-flex align-items-start flex-row underline">
//             {
//               NBA.teams.map((team,index,onMouseEnter)=>{
//                 return(
//                     index ?
//                     <div key={index} className="p-2 teamIcons" >
//                       <a href='#'><img src={`http://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/${team.abbreviation}.SVG`} alt={team.abbreviation} onmouserenter={ onMouseEnter} data-team-name={team.abbreviation}/></a>
//                       <ul className="dropdownStats">
//                         <li>Team Record</li>
//                         <li>Team Top Player</li>
//                         <li>Season</li>
//                         <li>Last 10 games</li>
//                       </ul>
//                     </div>:null
//                 )
//               })
//             }
//           </div>
//       </div>

















  // displlays the columns of the teams on left and right side
  // export default props =>
  //       <div className="d-flex justify-content-between">
  //           <div className="d-flex align-items-start flex-column">
  //             {
  //               NBA.teams.map((team,index)=>{
  //                 return(
  //                     index < 15 ? <div key={index} className="p-2 teamIcons" ><img src={`http://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/${team.abbreviation}.SVG`} alt={team.abbreviation}/></div>:null
  //                 )
  //               })
  //             }
  //           </div>
  //           <div className="d-flex align-items-end flex-column">
  //             {
  //               NBA.teams.map((team,index)=>{
  //                   return(
  //                       index > 14 ? <div key={index} className="p-2 teamIcons"><img src={`http://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/${team.abbreviation}.SVG`} alt={team.abbreviation}/></div>:null
  //                   )
  //               })
  //             }
  //           </div>
  //       </div>
