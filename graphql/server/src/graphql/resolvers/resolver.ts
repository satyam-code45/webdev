import { getAllEvent, getEventById } from "../../controllers/event.js";
import { getAllUser } from "../../controllers/user.js";

export const graphqlResolver = {
  
  Mutation: {
    newUser: (_:any, { name, email, password }) => {
      console.log(name, email, password);
      return "User created";
    },
  },
  Query: {
    users: getAllUser,
    events: getAllEvent,
    event: getEventById,
  },
};
