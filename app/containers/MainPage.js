import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';
import { setBrokerage, setEmail, setPass } from '../actions/mainAction';

function mapStateToProps(state) {
  return {
    brokerage: state.brokerage,
    email: state.email,
    pass: state.pass
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setBrokerage: (brokerage) => dispatch(setBrokerage(brokerage)),
    setEmail: (email) => dispatch(setEmail(email)),
    setPass: (pass) => dispatch(setPass(pass))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
