import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as roomActions from '../actions/roomActions';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class Room extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidMount(){
    const user = this.props.currentUser;
    const room = this.props.routeParams.id;
    this.props.actions.joinRoom(room, user);
  }

  participants(room){
    return(
      <ListGroup>
        {room.participants.map((participant, i) => {
          return <ListGroupItem key={i}>{participant}</ListGroupItem>;
        })}

      </ListGroup>
    );
  }

  render() {
      return (
        <div>
          {this.participants(this.props.room)}
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {room: state.room};
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(Object.assign(roomActions), dispatch)};
}

Room.propTypes = {
  room: PropTypes.shape({
    id: PropTypes.string.isRequired,
    participants: PropTypes.array.isRequired
  }),
  routeParams: PropTypes.shape({
    id: PropTypes.string.isRequired
  }),
  currentUser: PropTypes.string.isRequired,
  actions: PropTypes.shape({
      joinRoom: PropTypes.func.isRequired
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);