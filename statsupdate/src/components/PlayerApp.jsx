import { connect } from 'react-redux';
import { savePlayer } from '../actions';
import  Player  from './Player';

export default connect(
  null,
  (dispatch) => ({
      onClick: player => dispatch(savePlayer(player))
  })
)(Player)
