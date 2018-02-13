import * as constants from '../constants';

export function joinRoom(id, user) {
  return { type: constants.OUTGOING + "JOIN_ROOM", payload: {room: id, player: user} };
}