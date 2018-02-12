
export function getChallenges() {
  const challenges = fetch(`${process.env.API_HOST}/api/rooms`)
                      .then(res => {
                        return res.json();
                      });
  return { type: "GET_CHALLENGES", payload: challenges };
}