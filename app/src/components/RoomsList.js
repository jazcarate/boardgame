import React from 'react';
import {Link} from 'react-router';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

const list = function(rooms){
  return (
    <ListGroup style={{height: '60%'}}>
    {rooms.map((room, i) => {
      return <ListGroupItem key={i}><Link to={`/rooms/${room.id}`}>{room.id} - {room.creator}</Link></ListGroupItem>;
    })}
    </ListGroup>
  );
}

const empty = function(){
  return (
    <p>No rooms!</p>
  );
}

const RoomsList = (props) => {
  return (
    props.rooms.length > 0 ? list(props.rooms) : empty()
  );
};

export default RoomsList;