// import NBA from 'nba';
export const SEARCH = 'SEARCH';
// export const SHOW_RESULTS='SHOW_RESULTS';



// const nbaApi = (dispatch, searchString) =>{
//   let player = NBA.findPlayer(searchString)
//   NBA.stats.PlayerInfo({PlayerId: player.playerId}).then(function(data){
//     dispatch(showResults(data))
//   }).catch(function(err){
//     console.log('err',err.Error)
//   })
// }
export const search = (dispatch, query) => {
  // nbaApi(dispatch,query)
  return({
    type:SEARCH,
    query
  })
}

// export const showResults = (results)=>({
//   type:SHOW_RESULTS,
//   results
// })
