import { connect } from 'react-redux';
import { search } from '../../Actions';
import { HomePage } from '../../Components/HomePage';
src/Components/Apps
export default connect(
  (state) => {
    return({
      query:state.query
    })
  },(dispatch) => ({
      onChange: event => dispatch(search(dispatch,event.target.value))
  })
)(HomePage)
