import { gameManager } from "./store.js";


export function startLogger() {
  setInterval(() => {
    gameManager.log();
  }, 5000);
}
