
import {
  SEARCH_FOR_PLAYER,
  SHOW_PLAYER_SEARCH_RESULT,
  SAVE_PLAYER,TOGGLE_VIEW,
  REMOVE_PLAYER,
  SHOW_TEAM_SEARCH_RESULT,
  SEARCH_TEAM_INFO,
  LOAD_PLAYER_LIST,
  SHOW_PLAYER_LIST} from '../actions';

const initialState = {
  query: '',
  playerSearchResult: {},
  savedPlayers: [],
  isDislayingAsRows:false,
  teamstats:[],
  teamId:'',
  teamRoster:[]
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
    case LOAD_PLAYER_LIST:
      return{
        ...state,
        teamId: action.teamId
      }
    case SHOW_PLAYER_LIST:
      return{
        ...state,
        teamRoster:action.teamRoster
      }
    default:
      return state;
  }
}
