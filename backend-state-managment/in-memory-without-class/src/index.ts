import { startLogger } from "./logger.js";
import { games } from "./store.js";

startLogger();

setInterval(() => {
  games.push({
    id: Math.random().toString(),
    blackPlayerName: "Nitin",
    whitePlayerName: "Satyam",
    moves: [],
  });
},5000);
