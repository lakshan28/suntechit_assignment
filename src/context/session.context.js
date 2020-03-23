/**
 * @author Uvindu Sanjana
 */

import React from "react";
import {PROXY} from "../components/config";

const sessionContext = React.createContext({
    session: {
        isAuthenticated: false,
        proxy: PROXY
    },
    setSession: () => {},
    logout: () => {},
    login: () => {},
});

export const SessionProvider = sessionContext.Provider;

export default sessionContext;