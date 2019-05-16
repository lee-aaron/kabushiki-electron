import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';
import { getAuth } from '../actions/mainAction';

function mapStateToProps(state) {
  return {
    auth_url: state.main.payload
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAuth: () => dispatch(getAuth())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
