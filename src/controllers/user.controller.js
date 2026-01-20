import { getAllUsers, addUser } from "../services/user.service.js";

export const getUsers = (req, res) => {
  const users = getAllUsers();
  res.json({
    success: true,
    data: users,
  });
};

export const createUser = (req, res) => {
  const newUsers = addUser(req.body);
  res.status(201).json({
    success: true,
    data: newUsers,
  });
};
