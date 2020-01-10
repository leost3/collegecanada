import { createContext } from "react";

export const NavlinkContext = createContext({
  displayContent: "Provincial",
  updateDisplayContent: () => {}
});
