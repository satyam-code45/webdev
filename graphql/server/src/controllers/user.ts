import { User } from "../model/User.js";

export const getAllUser = async () => {
  const user = await User.find();
  console.log("getUserCalled: " + user);

  return user;
};
