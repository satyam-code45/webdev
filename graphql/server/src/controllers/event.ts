import { Event } from "../model/Event.js";

export const getAllEvent = async () => {
  const events = await Event.find();
  return events;
};

export const getEventById = async (parent: any, arg: { id: string }) => {
  console.log("Parent:   " + parent);
  console.log("Id:  " + arg.id);

  const event = await Event.findById(arg.id);
  console.log(event);

  return event;
};
