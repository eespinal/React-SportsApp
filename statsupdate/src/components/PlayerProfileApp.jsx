import { connect } from 'react-redux';
import { getProfilePlayerData } from '../actions'
import  PlayerProfile from './PlayerProfile';

export default connect(
  (state) => {
    return {
      PlayerProfileInfo: state.playerProfileInfo
    };
  },(dispatch) => ({
    serveId: id => getProfilePlayerData(dispatch,id) // Removed outer `dispatch` as we should not wait for the return the value, but instead depend on the passed `dispatch` that is called in the inner promise
  })
)(PlayerProfile)
