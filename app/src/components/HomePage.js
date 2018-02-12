import React from 'react';
import PropTypes from 'prop-types';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as roomActions from '../actions/roomActions';
import * as userActions from '../actions/userActions';
import RoomsList from './RoomsList';
import CreateRoom from './CreateRoom';
import ChooseUserName from './ChooseUserName';


class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.chooseUserName = this.chooseUserName.bind(this);
  }

  componentDidMount() {
    if (this.props.rooms.length == 0) {
      this.props.actions.getRooms();
    }
  }

  chooseUserName(userName) {
    this.props.actions.assignUserName(userName);
  }

  render() {
    return (
      <div>
        <ChooseUserName userName={this.props.userName} chooseUserName={this.chooseUserName}/>
        <CreateRoom />
        <RoomsList rooms={this.props.rooms} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {rooms: state.rooms, userName: state.currentUser};
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(Object.assign(userActions, roomActions), dispatch)};
}


HomePage.propTypes = {
  rooms: PropTypes.array.isRequired,
  actions: PropTypes.shape({
    getRooms: PropTypes.func.isRequired,
    assignUserName: PropTypes.func.isRequired
  }),
  userName: PropTypes.string.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);