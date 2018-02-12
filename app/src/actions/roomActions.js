
export function getRooms() {
  const rooms = fetch(`${process.env.API_HOST}/api/rooms`)
               .then(res => res.json());
  return { type: "GET_ROOMS", payload: rooms };
}