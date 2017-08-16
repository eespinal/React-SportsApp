import { connect } from 'react-redux';
import { loadPlayerList } from '../actions';
import  TeamProfile  from './TeamProfile';

export default connect(
  (state) => {
    return({
      teamId:state.teamId,
      teamRoster:state.teamRoster
    })
  },(dispatch) => ({
    getRoster : id => dispatch(loadPlayerList(dispatch,id))
  })
)(TeamProfile)
