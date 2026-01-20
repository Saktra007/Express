const user = [];

export const getAllUsers = () => {
  return user;
};

export const addUser = (data) => {
  const newUser = {
    id: Date.now(),
    ...data,
  };
  user.push(newUser);
  return newUser;
};
