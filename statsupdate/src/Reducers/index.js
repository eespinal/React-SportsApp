
import {
  SEARCH_FOR_PLAYER,
  SHOW_PLAYER_SEARCH_RESULT,
  SAVE_PLAYER,TOGGLE_VIEW,
  REMOVE_PLAYER,
  SHOW_TEAM_SEARCH_RESULT,
  SHOW_PLAYER_LIST,
  SHOW_PROFILE_PLAYER_DATA
    } from '../actions';

const initialState = {
  query: '',
  playerSearchResult: {},
  savedPlayers: [],
  isDislayingAsRows:false,
  teamstats:[],
  teamId:'',
  teamRoster:[],
  playerProfileInfo:{}
}

export default(state = initialState, action ) => {
  switch (action.type) {
    case SEARCH_FOR_PLAYER:
      return {
        ...state,
        query: action.query
      };
    case SHOW_PLAYER_SEARCH_RESULT:
      return {
        ...state,
        playerSearchResult: {
          id: action.id,
          info: action.info,
          stats: action.stats
        }
      };
    case SHOW_TEAM_SEARCH_RESULT:
        return {
          ...state,
          teamstats:action.teamstats
        }
    case SAVE_PLAYER:
      return {
        ...state,
        savedPlayers: [
          ...state.savedPlayers,
          action.player
        ]
      }
    case REMOVE_PLAYER:
      return {
        ...state,
        savedPlayers: state.savedPlayers.filter(player =>
           player.id != action.playerId
         )
      }
    case TOGGLE_VIEW:
      return{
        ...state,
        isDislayingAsRows: !state.isDislayingAsRows
      }
    case SHOW_PLAYER_LIST:
      return{
        ...state,
        teamRoster: action.data
      }
    case SHOW_PROFILE_PLAYER_DATA:
      return{
        ...state,
        playerProfileInfo: {
          info:action.info,
          stats:action.stats
        }
      };
    default:
      return state;
  }
}
