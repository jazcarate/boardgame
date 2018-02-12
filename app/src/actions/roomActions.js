export function getRooms() {
  const rooms = fetch(`${process.env.API_HOST}/api/rooms`)
               .then(res => res.json());
  return { type: "GET_ROOMS", payload: rooms };
}

export function createRoom(id, creator) {
  const room = { id: id, creator: creator };
  const result = fetch(`${process.env.API_HOST}/api/rooms`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(room)
  });
  return { type: "CREATE_ROOM", payload: room };
}