import { connect } from 'react-redux';
import { removePlayer } from '../actions';
import  SavedRow  from './SavedRow';

export default connect(
  (state) => {
    return({
      query: state.query,
      player: state.playerSearchResult,
      savedPlayers: state.savedPlayers,
      isDislayingAsRows:state.isDislayingAsRows
    })
  },(dispatch) => ({

      removePlayer: event => dispatch(removePlayer(event.target.dataset.playerId))
  })
)(SavedRow)
