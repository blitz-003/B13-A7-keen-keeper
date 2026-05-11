export const getFriends = async () => {
  const res = await fetch("/friends.json");
  return await res.json();
};
