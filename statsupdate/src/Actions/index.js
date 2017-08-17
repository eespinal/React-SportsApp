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
      dispatch(showPlayerSearchResult(playerId, data.commonPlayerInfo[0], data.playerHeadlineStats[0]))
    })
  }
}

export const searchForTeam = (dispatch) => {
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
  const playerArr = (arrOfIds) => {
    let statsPromises = arrOfIds.map( item => NBA.stats.playerInfo({PlayerID: item}))
    return statsPromises;
  }
    let dataContainer = []
  const objArr = data => {
    data.forEach(item =>{ let obj = {id:item.commonPlayerInfo[0].personId,info:item.commonPlayerInfo[0],stats:item.playerHeadlineStats[0]}
      dataContainer.push(obj)
    })
  }
  NBA.stats.commonTeamRoster({TeamID: team}).then(function(roster){
      const playerIds = roster.commonTeamRoster.map(player => player.playerId);
      Promise.all(playerArr(playerIds)).then(data =>{
        objArr(data)
        dispatch(showPlayerList(dataContainer.slice(0,5)))})
  })
}

export const loadPlayerList  = (dispatch,teamId) => {
  nbaRosterList(dispatch,teamId)
  return({
    type:LOAD_PLAYER_LIST
  })
}
export const showPlayerList = (data) =>{
  return({
    type:SHOW_PLAYER_LIST,
    data
  })
}
