import React from 'react';
import {Link} from 'react-router';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

const RoomsList = (props) => {
  return (
    <ListGroup style={{height: '60%'}}>
      {props.rooms.map((room, i) => {
        return <ListGroupItem key={i}><Link to={`/rooms/${room.id}`}>{room.id} - {room.creator}</Link></ListGroupItem>;
      })}
    </ListGroup>
  );
};

export default RoomsList;