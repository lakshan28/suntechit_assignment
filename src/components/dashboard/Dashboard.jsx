/**
 * @author Uvindu Sanjana
 */

import React from 'react';
import PrivateDashboard from "./PrivateDashboard";
import PublicDashboard from "./PublicDashboard";

const Dashboard = ({classes, privateMode, listText}) =>

    privateMode
        ? <PrivateDashboard listText={listText} privateMode={privateMode} classes={classes}/>
        : <PublicDashboard privateMode={privateMode} classes={classes}/>;

export default Dashboard;