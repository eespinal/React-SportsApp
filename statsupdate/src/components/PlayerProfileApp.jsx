import { connect } from 'react-redux';
import { getProfilePlayerData } from '../actions'
import  PlayerProfile from './PlayerProfile';

export default connect(
  (state) => {
    return({
      PlayerProfileInfo: state.PlayerProfileInfo
    })
  },(dispatch) => ({
    serveId: id => dispatch(getProfilePlayerData(dispatch,id))
  })
)(PlayerProfile)
