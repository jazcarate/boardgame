import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class RoomsList extends React.Component{
  list(rooms){
    return (
      <ListGroup style={{height: '60%'}}>
      {rooms.map((room, i) => {
        return <ListGroupItem key={i}><Link to={`/room/${room.id}`}>{room.id} - {room.creator}</Link> <em>[{room.participants.length}]</em></ListGroupItem>;
      })}
      </ListGroup>
    );
  }
  
  empty(){
    return (
      <p>No rooms!</p>
    );
  }
  
  render(){
    return (
      this.props.rooms.length > 0 ? this.list(this.props.rooms) : this.empty()
    );
  }
}

RoomsList.propTypes = {
  rooms: PropTypes.array.isRequired
};

export default RoomsList;