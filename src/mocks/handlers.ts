import { movieHandlers } from "./handlers/movieHandlers";
import { userHandlers } from "./handlers/userHandlers";

export const handlers = [...movieHandlers, ...userHandlers];
