import NBA from 'nba';
export const SEARCH_FOR_PLAYER = 'SEARCH_FOR_PLAYER';
export const SHOW_PLAYER_SEARCH_RESULT='SHOW_PLAYER_SEARCH_RESULT';
export const SHOW_TEAM_SEARCH_RESULT='SHOW_TEAM_SEARCH_RESULT';
export const SAVE_PLAYER = 'SAVE_PLAYER';
export const TOGGLE_VIEW = 'TOGGLE_VIEW';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const LOAD_PLAYER_LIST = 'LOAD_PLAYER_LIST';
export const SHOW_PLAYER_LIST = 'SHOW_PLAYER_LIST';

const nbaApi = (dispatch, searchString) =>{
  let player = NBA.findPlayer(searchString)
  if (player) {
    let playerId = player.playerId
    NBA.stats.playerInfo({PlayerID: playerId}).then(function(data){
      console.log(data)
      dispatch(showPlayerSearchResult(playerId, data.commonPlayerInfo[0], data.playerHeadlineStats[0]))
    })
  }
}

export const searchForTeam = (dispatch) => {
  // NBA.stats.commonTeamRoster({TeamID:'1610612738'}).then(function(res){console.log("RS",res)})
  NBA.stats.teamStats().then(function(resp){
    dispatch(showTeamSearchResult(resp))
  })
}

export const searchForPlayer = (dispatch, query) => {
  nbaApi(dispatch,query)
  return({
    type:SEARCH_FOR_PLAYER,
    query
  })
}

export const showPlayerSearchResult = (id, info, stats)=>({
  type:SHOW_PLAYER_SEARCH_RESULT,
  id,
  info,
  stats
})
export const showTeamSearchResult = (teamstats) => ({
  type:SHOW_TEAM_SEARCH_RESULT,
  teamstats
})

export const savePlayer = (player) => ({
  type:SAVE_PLAYER,
  player
})

export const toggleView = ()=> ({
  type:'TOGGLE_VIEW'
})
export const removePlayer= (playerId)=> ({
  type:REMOVE_PLAYER,
  playerId
})
const nbaRosterList = (dispatch,team) => {
  NBA.stats.commonTeamRoster({TeamID:team}).then(
    function(roster){
      console.log("RS",roster)
      dispatch(showPlayerList(roster))
  })
}
export const loadPlayerList  = (dispatch,teamId) => {
  nbaRosterList(teamId)
  return({
    type:LOAD_PLAYER_LIST,
    teamId
  })
}
export const showPlayerList = (teamRoster) => ({
  type:SHOW_PLAYER_LIST,
  teamRoster
})
