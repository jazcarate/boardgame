import * as constants from '../constants';

export function getRooms() {
  const rooms = fetch(`${process.env.API_HOST}/api/rooms`)
               .then(res => res.json());
  return { type: "GET_ROOMS", payload: rooms };
}

export function createRoom(id, creator) {
  const room = { id: id, creator: creator, participants: [creator] };
  return { type: constants.OUTGOING + "CREATE_ROOM", payload: room };
}