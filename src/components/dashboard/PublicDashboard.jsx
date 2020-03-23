/**
 * @author Uvindu Sanjana
 */

import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

import clsx from "clsx";
import ClientsIcon from "@material-ui/icons/GroupRounded";

import ModelingIcon from "@material-ui/icons/TrendingUpRounded";
import LeadsIcon from "@material-ui/icons/AccountBoxRounded";
import TemplatesIcon from "@material-ui/icons/AssignmentRounded";
import TasksIcon from "@material-ui/icons/AlarmOnRounded";
import UploadsIcon from "@material-ui/icons/PublishRounded";
import SettingsIcon from "@material-ui/icons/SettingsApplicationsRounded";
import InsightsIcon from "@material-ui/icons/EmojiObjectsRounded";

export default function PublicDashboard({ classes: classes1 }) {
  const classes = classes1;

  const fixedHeightPaper = clsx(
    classes.paper,
    classes.fixedHeight,
    classes.tile
  );

  return (
    <React.Fragment>
      <Grid container spacing={6}>
        <Grid item xs={6} md={3} lg={3} className={classes.gridItem}>
          <Paper className={fixedHeightPaper} elevation={3}>
            <ClientsIcon className={classes.tileIcon} />
            <Typography variant="h5" component="h2">
              CLIENTS
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3} lg={3} className={classes.gridItem}>
          <Paper className={fixedHeightPaper} elevation={3}>
            <LeadsIcon className={classes.tileIcon} />
            <Typography variant="h5" component="h2">
              LEADS
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3} lg={3} className={classes.gridItem}>
          <Paper className={fixedHeightPaper} elevation={3}>
            <TasksIcon className={classes.tileIcon} />
            <Typography variant="h5" component="h2">
              TASKS
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3} lg={3} className={classes.gridItem}>
          <Paper className={fixedHeightPaper} elevation={3}>
            <InsightsIcon className={classes.tileIcon} />
            <Typography variant="h5" component="h2">
              INSIGHTS
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3} lg={3} className={classes.gridItem}>
          <Paper className={fixedHeightPaper} elevation={3}>
            <ModelingIcon className={classes.tileIcon} />
            <Typography variant="h5" component="h2">
              MODELING
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3} lg={3} className={classes.gridItem}>
          <Paper className={fixedHeightPaper} elevation={3}>
            <TemplatesIcon className={classes.tileIcon} />
            <Typography variant="h5" component="h2">
              TEMPLATES
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3} lg={3} className={classes.gridItem}>
          <Paper className={fixedHeightPaper} elevation={3}>
            <UploadsIcon className={classes.tileIcon} />
            <Typography variant="h5" component="h2">
              UPLOADS
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3} lg={3} className={classes.gridItem}>
          <Paper className={fixedHeightPaper} elevation={3}>
            <SettingsIcon className={classes.tileIcon} />
            <Typography variant="h5" component="h2">
              SETTINGS
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
