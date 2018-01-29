
export function getChallenges() {
  const challenges = Promise.resolve([
    {
      id: 123,
      title: "Sarlanga 1",
      description: "Programing!"
    },
    {
      id: 5122,
      title: "Sarlang 2",
      description: "Moar Programing!"
    },
    {
      id: 34,
      title: "Sarlanga 3",
      description: "Do stuff!"
    }
  ]);
  return { type: "GET_CHALLENGES", payload: challenges };
}