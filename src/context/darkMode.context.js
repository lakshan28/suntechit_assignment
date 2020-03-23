/**
 * @author Uvindu Sanjana
 */

import React from "react";

const darkModeContext = React.createContext({
  dark: false,
  setDark: () => {}
});

export const DarkModeProvider = darkModeContext.Provider;

export default darkModeContext;
