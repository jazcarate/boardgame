import React from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as roomActions from '../actions/roomActions';
import * as userActions from '../actions/userActions';
import RoomsList from './RoomsList';
import ChooseUserName from './ChooseUserName';


class HomePage extends React.Component {
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
        <ChooseUserName userName={this.props.userName} chooseUserName={this.chooseUserName.bind(this)}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);