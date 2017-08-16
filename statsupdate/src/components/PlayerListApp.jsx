import { connect } from 'react-redux';
import { toggleView } from '../actions';
import  PlayerList  from './PlayerList';

export default connect(
  (state) => {
    return({
      teamId:state.teamId,
      teamRoster:state.teamRoster,
      isDislayingAsRows:state.isDislayingAsRows
    })
  },(dispatch) => ({
    onClick : event => dispatch(toggleView())
  })
)(PlayerList)
